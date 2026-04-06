import { useEffect, useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where, limit, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase.js";
import { createPolarCheckout } from "../lib/polarCheckout.js";

const copy = {
  en: {
    title: "Civics Questions",
    subtitle: "Flashcards built for your interview.",
    tabs: ["Flashcards", "Learn", "Test"],
    searchPlaceholder: "Search questions",
    filterAll: "All",
    filterEasy: "Easy",
    filterHard: "Hard",
    cardLabel: "Question",
    showAnswer: "Show answer",
    hideAnswer: "Hide answer",
    tapHint: "Tap the card to reveal the answer.",
    markHard: "Mark as hard",
    unmarkHard: "Unmark hard",
    progressLabel: "Progress",
    listTitle: "Question list",
    learnTitle: "Learn mode",
    learnBody: "Try answering, reveal, and self‑grade.",
    testTitle: "Timed test",
    testBody: "30 random questions including all marked hard ones.",
    revealAnswer: "Reveal answer",
    correct: "Correct",
    incorrect: "Incorrect",
    score: "Score",
    timeLabel: "Time",
    loading: "Loading questions...",
    lockedTitle: "Unlock civics questions",
    lockedBody: "Activate your subscription to access all civics questions.",
    lockedCta: "Activate subscription",
    emptyTitle: "No questions found",
    emptyBody: "Upload questions to Firestore to see them here.",
  },
  es: {
    title: "Preguntas de cívica",
    subtitle: "Tarjetas tipo Quizlet para tu entrevista.",
    tabs: ["Tarjetas", "Aprender", "Examen"],
    searchPlaceholder: "Buscar preguntas",
    filterAll: "Todas",
    filterEasy: "Fácil",
    filterHard: "Difícil",
    cardLabel: "Pregunta",
    showAnswer: "Mostrar respuesta",
    hideAnswer: "Ocultar respuesta",
    tapHint: "Toca la tarjeta para ver la respuesta.",
    markHard: "Marcar difícil",
    unmarkHard: "Quitar difícil",
    progressLabel: "Progreso",
    listTitle: "Lista de preguntas",
    learnTitle: "Modo aprender",
    learnBody: "Responde, revela y auto‑evalúa.",
    testTitle: "Examen cronometrado",
    testBody: "30 preguntas aleatorias con todas las difíciles.",
    revealAnswer: "Mostrar respuesta",
    correct: "Correcto",
    incorrect: "Incorrecto",
    score: "Puntaje",
    timeLabel: "Tiempo",
    loading: "Cargando preguntas...",
    lockedTitle: "Activa las preguntas",
    lockedBody: "Activa tu suscripción para acceder a todas las preguntas.",
    lockedCta: "Activar suscripción",
    emptyTitle: "No hay preguntas",
    emptyBody: "Sube preguntas a Firestore para verlas aquí.",
  },
};

const normalizeDifficulty = (value) => {
  if (!value) return "easy";
  const v = String(value).toLowerCase();
  if (v.includes("hard")) return "hard";
  if (v.includes("med")) return "medium";
  return "easy";
};

export default function CivicsQuestions() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [hardSet, setHardSet] = useState(() => new Set());
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [activeTab, setActiveTab] = useState("Flashcards");
  const [testAnswerVisible, setTestAnswerVisible] = useState(false);
  const [testScore, setTestScore] = useState({ correct: 0, incorrect: 0 });
  const [practiceCount, setPracticeCount] = useState(0);
  const [testQuestions, setTestQuestions] = useState([]);
  const [testIndex, setTestIndex] = useState(0);
  const [testShowAnswer, setTestShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        setIsSubscribed(Boolean(snap.data()?.isSubscribed));
        if (typeof snap.data()?.practiceCount === "number") {
          setPracticeCount(snap.data().practiceCount);
        }
      } catch (err) {
        console.error("User load error:", err);
      }

      try {
        const base = collection(db, "questions");
        const langQuery = query(base, where("lang", "==", lang), limit(200));
        const langSnap = await getDocs(langQuery);
        let items = langSnap.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));

        if (!items.length) {
          const fallbackSnap = await getDocs(query(base, limit(200)));
          items = fallbackSnap.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
          }));
        }

        setQuestions(items);
      } catch (err) {
        console.error("Question load error:", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [lang, navigate]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((item) => {
      const questionText = String(item.question || item.prompt || "");
      const answerText = String(item.answer || item.response || "");
      const matchesSearch =
        !search ||
        questionText.toLowerCase().includes(search.toLowerCase()) ||
        answerText.toLowerCase().includes(search.toLowerCase());
      const itemDifficulty = normalizeDifficulty(item.difficulty);
      const matchesDifficulty =
        difficulty === "all" || itemDifficulty === difficulty;
      return matchesSearch && matchesDifficulty;
    });
  }, [questions, search, difficulty]);

  useEffect(() => {
    if (activeTab !== "Flashcards") return;
    const handleKeyDown = (event) => {
      const target = event.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea") return;
      }

      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          Math.min(prev + 1, filteredQuestions.length - 1)
        );
        setShowAnswer(false);
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        setShowAnswer(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, filteredQuestions.length]);

  const currentQuestion = filteredQuestions[currentIndex];
  const currentTestQuestion = testQuestions[testIndex];

  const handleToggleHard = () => {
    if (!currentQuestion?.id) return;
    const next = new Set(hardSet);
    if (next.has(currentQuestion.id)) {
      next.delete(currentQuestion.id);
    } else {
      next.add(currentQuestion.id);
    }
    setHardSet(next);
  };

  const handleCheckout = async () => {
    setCheckoutError("");
    setCheckoutLoading(true);
    try {
      const user = auth.currentUser;
      const { url } = await createPolarCheckout({
        customerEmail: user?.email || undefined,
        externalCustomerId: user?.uid || undefined,
      });
      if (url) window.location.href = url;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Checkout failed. Please try again.";
      setCheckoutError(message);
    } finally {
      setCheckoutLoading(false);
    }
  };

  const updateConfidence = async ({ correctDelta, incorrectDelta }) => {
    const user = auth.currentUser;
    if (!user) return;
    const nextCorrect = testScore.correct + correctDelta;
    const nextIncorrect = testScore.incorrect + incorrectDelta;
    const total = nextCorrect + nextIncorrect;
    const correctRate = total > 0 ? nextCorrect / total : 0;
    const nextPracticeCount = practiceCount + 1;
    const practiceConsistency = Math.min(nextPracticeCount / 10, 1);
    const confidence = (correctRate * 0.7) + (practiceConsistency * 0.3);

    setPracticeCount(nextPracticeCount);

    try {
      await updateDoc(doc(db, "users", user.uid), {
        practiceCount: nextPracticeCount,
        confidence,
      });
    } catch (err) {
      console.error("Confidence update error:", err);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setTestAnswerVisible(false);
    setTestShowAnswer(false);
  }, [search, difficulty]);

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setTestAnswerVisible(false);
    setTestShowAnswer(false);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== "Test") return;
    if (!filteredQuestions.length) {
      setTestQuestions([]);
      setTestIndex(0);
      setTimeLeft(10);
      return;
    }

    const hardIds = new Set(hardSet);
    const hardItems = filteredQuestions.filter((item) => hardIds.has(item.id));
    const remaining = filteredQuestions.filter((item) => !hardIds.has(item.id));
    const shuffled = [...remaining].sort(() => Math.random() - 0.5);
    const combined = [...hardItems, ...shuffled].slice(0, 30);

    setTestQuestions(combined);
    setTestIndex(0);
    setTimeLeft(10);
    setTestShowAnswer(false);
  }, [activeTab, filteredQuestions, hardSet]);

  useEffect(() => {
    if (activeTab !== "Test" || !testQuestions.length) return;
    if (testIndex >= testQuestions.length) return;

    setTimeLeft(10);
    const interval = window.setInterval(() => {
      setTimeLeft((prev) => {
        const next = Math.max(prev - 0.1, 0);
        if (next === 0) {
          setTestIndex((idx) =>
            Math.min(idx + 1, testQuestions.length - 1)
          );
          setTestShowAnswer(false);
          return 10;
        }
        return Number(next.toFixed(1));
      });
    }, 100);

    return () => window.clearInterval(interval);
  }, [activeTab, testIndex, testQuestions.length]);

  const progressTotal =
    activeTab === "Test" ? testQuestions.length : filteredQuestions.length;
  const progressIndex = activeTab === "Test" ? testIndex : currentIndex;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Study</p>
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {t.tabs.map((tab, idx) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                isActive
                  ? "bg-[#0b50da] text-white shadow-lg shadow-[#0b50da]/20"
                  : "bg-white text-slate-600 border border-black/5 hover:border-[#0b50da]/40"
              }`}
              type="button"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
        <div className="space-y-6">
          <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[220px]">
              <input
                type="search"
                placeholder={t.searchPlaceholder}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0b50da]/20"
              />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-2 py-1 text-xs font-semibold text-slate-600">
              {[
                { key: "all", label: t.filterAll },
                { key: "easy", label: t.filterEasy },
                { key: "hard", label: t.filterHard },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setDifficulty(item.key)}
                  className={`rounded-full px-3 py-2 ${
                    difficulty === item.key
                      ? "bg-[#0b50da]/10 text-[#0b50da]"
                      : "text-slate-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "Flashcards" ? (
            <>
              <div
                className={`rounded-3xl border border-black/5 bg-white p-8 shadow-sm min-h-[420px] relative overflow-hidden flip-card ${
                  showAnswer ? "is-flipped" : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() => setShowAnswer((prev) => !prev)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setShowAnswer((prev) => !prev);
                  }
                }}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setCurrentIndex((prev) => Math.max(prev - 1, 0));
                    setShowAnswer(false);
                  }}
                  className="group absolute left-5 top-1/2 z-10 -translate-y-1/2 h-11 w-11 text-slate-500 flex items-center justify-center transition hover:-translate-y-[52%] hover:text-slate-900"
                  aria-label="Previous"
                >
                  <span className="material-symbols-outlined text-lg transition group-hover:-translate-x-0.5">
                    arrow_back_ios
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setCurrentIndex((prev) =>
                      Math.min(prev + 1, filteredQuestions.length - 1)
                    );
                    setShowAnswer(false);
                  }}
                  className="group absolute right-5 top-1/2 z-10 -translate-y-1/2 h-11 w-11 text-slate-500 flex items-center justify-center transition hover:-translate-y-[52%] hover:text-slate-900"
                  aria-label="Next"
                >
                  <span className="material-symbols-outlined text-lg transition group-hover:translate-x-0.5">
                    arrow_forward_ios
                  </span>
                </button>
                {loading ? (
                  <p className="text-slate-500">{t.loading}</p>
                ) : currentQuestion ? (
                  <div className="flip-card-inner">
                    <div className="flip-card-face relative">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-400">
                        <span>{t.cardLabel}</span>
                        <div className="flex items-center gap-3">
                          <span>
                            {currentIndex + 1} / {filteredQuestions.length || 0}
                          </span>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleToggleHard();
                            }}
                            className={`flex items-center justify-center transition ${
                              currentQuestion?.id && hardSet.has(currentQuestion.id)
                                ? "text-[#f5b301] drop-shadow-[0_4px_10px_rgba(245,179,1,0.45)]"
                                : "text-slate-300"
                            }`}
                            aria-label={
                              currentQuestion?.id && hardSet.has(currentQuestion.id)
                                ? t.unmarkHard
                                : t.markHard
                            }
                          >
                            <span className="material-symbols-outlined text-xl">
                              {currentQuestion?.id && hardSet.has(currentQuestion.id)
                                ? "star"
                                : "star_outline"}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex h-[260px] items-center justify-center px-10 text-center">
                        <h2 className="text-3xl font-black text-slate-900 leading-tight">
                          {currentQuestion.question || currentQuestion.prompt}
                        </h2>
                      </div>
                      <div className="mt-auto flex items-center justify-center text-xs text-slate-400">
                        <span>{t.tapHint}</span>
                      </div>
                    </div>
                    <div className="flip-card-face flip-card-back relative">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-400">
                        <span>{t.hideAnswer}</span>
                        <div className="flex items-center gap-3">
                          <span>
                            {currentIndex + 1} / {filteredQuestions.length || 0}
                          </span>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleToggleHard();
                            }}
                            className={`flex items-center justify-center transition ${
                              currentQuestion?.id && hardSet.has(currentQuestion.id)
                                ? "text-[#f5b301] drop-shadow-[0_4px_10px_rgba(245,179,1,0.45)]"
                                : "text-slate-300"
                            }`}
                            aria-label={
                              currentQuestion?.id && hardSet.has(currentQuestion.id)
                                ? t.unmarkHard
                                : t.markHard
                            }
                          >
                            <span className="material-symbols-outlined text-xl">
                              {currentQuestion?.id && hardSet.has(currentQuestion.id)
                                ? "star"
                                : "star_outline"}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex h-[260px] items-center justify-center px-10 text-center">
                        <h2 className="text-3xl font-black text-slate-900 leading-tight">
                          {currentQuestion.answer || currentQuestion.response}
                        </h2>
                      </div>
                      <div className="mt-auto flex items-center justify-center text-xs text-slate-400">
                        <span>{t.tapHint}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{t.emptyTitle}</h3>
                    <p className="text-sm text-slate-500">{t.emptyBody}</p>
                  </div>
                )}
              </div>
            </>
          ) : activeTab === "Learn" ? (
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {t.learnTitle}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">{t.learnBody}</p>
                </div>
                <span className="text-xs text-slate-400">
                  {t.score}: {testScore.correct} /{" "}
                  {testScore.correct + testScore.incorrect}
                </span>
              </div>
              <div className="mt-8 rounded-2xl border border-black/5 bg-slate-50 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {t.cardLabel}
                </p>
                <p className="mt-3 text-2xl font-bold text-slate-900">
                  {currentQuestion?.question ||
                    currentQuestion?.prompt ||
                    t.emptyTitle}
                </p>
                {testAnswerVisible ? (
                  <p className="mt-4 text-base text-slate-600">
                    {currentQuestion?.answer || currentQuestion?.response}
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => setTestAnswerVisible(true)}
                    className="mt-6 h-11 rounded-xl bg-[#0b50da] px-6 text-white font-semibold shadow-lg shadow-[#0b50da]/20"
                  >
                    {t.revealAnswer}
                  </button>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setTestScore((prev) => ({
                        ...prev,
                        correct: prev.correct + 1,
                      }));
                      updateConfidence({ correctDelta: 1, incorrectDelta: 0 });
                      setTestAnswerVisible(false);
                      setCurrentIndex((prev) =>
                        Math.min(prev + 1, filteredQuestions.length - 1)
                      );
                    }}
                    className="h-10 rounded-xl border border-green-200 bg-green-50 px-5 text-green-700 font-semibold"
                  >
                    {t.correct}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTestScore((prev) => ({
                        ...prev,
                        incorrect: prev.incorrect + 1,
                      }));
                      updateConfidence({ correctDelta: 0, incorrectDelta: 1 });
                      setTestAnswerVisible(false);
                      setCurrentIndex((prev) =>
                        Math.min(prev + 1, filteredQuestions.length - 1)
                      );
                    }}
                    className="h-10 rounded-xl border border-red-200 bg-red-50 px-5 text-red-600 font-semibold"
                  >
                    {t.incorrect}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {t.testTitle}
                  </p>
                  <p className="text-sm text-slate-500 mt-2">{t.testBody}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{t.timeLabel}</span>
                  <div
                    className="h-10 w-10 rounded-full grid place-items-center text-[11px] font-semibold text-slate-700"
                    style={{
                      background: `conic-gradient(#0b50da ${
                        (timeLeft / 10) * 360
                      }deg, #e2e8f0 0deg)`,
                    }}
                  >
                    <div className="h-7 w-7 rounded-full bg-white grid place-items-center">
                      {Math.ceil(timeLeft)}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`mt-8 rounded-2xl border border-black/5 bg-slate-50 p-6 min-h-[300px] relative overflow-hidden flip-card ${
                  testShowAnswer ? "is-flipped" : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() => setTestShowAnswer((prev) => !prev)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setTestShowAnswer((prev) => !prev);
                  }
                }}
              >
                {currentTestQuestion ? (
                  <div className="flip-card-inner">
                    <div className="flip-card-face">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-400">
                        <span>{t.cardLabel}</span>
                        <span>
                          {testIndex + 1} / {testQuestions.length || 0}
                        </span>
                      </div>
                      <div className="mt-8 flex h-[180px] items-center">
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                          {currentTestQuestion.question ||
                            currentTestQuestion.prompt}
                        </h2>
                      </div>
                      <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
                        <span>{t.tapHint}</span>
                        <span className="uppercase tracking-[0.3em]">tap</span>
                      </div>
                    </div>
                    <div className="flip-card-face flip-card-back">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-400">
                        <span>{t.hideAnswer}</span>
                        <span>
                          {testIndex + 1} / {testQuestions.length || 0}
                        </span>
                      </div>
                      <div className="mt-8 flex h-[180px] items-center">
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                          {currentTestQuestion.answer ||
                            currentTestQuestion.response}
                        </h2>
                      </div>
                      <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
                        <span>{t.tapHint}</span>
                        <span className="uppercase tracking-[0.3em]">tap</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{t.emptyTitle}</h3>
                    <p className="text-sm text-slate-500">{t.emptyBody}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          </div>

          <div className="rounded-2xl border border-black/5 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
              <span>{t.progressLabel}</span>
              <span>
                {Math.min(progressIndex + 1, progressTotal)} / {progressTotal}
              </span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-[#0b50da]"
                style={{
                  width: `${
                    progressTotal
                      ? Math.round(((progressIndex + 1) / progressTotal) * 100)
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm h-full flex flex-col self-stretch">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{t.listTitle}</h3>
            <span className="text-xs text-slate-400">
              {filteredQuestions.length}
            </span>
          </div>
          <div className="mt-4 space-y-2 max-h-[480px] overflow-y-auto pr-2">
            {filteredQuestions.map((item, idx) => (
              <button
                key={item.id ?? idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowAnswer(false);
                }}
                className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  idx === currentIndex
                    ? "border-[#0b50da] bg-[#0b50da]/5 text-slate-900"
                    : "border-black/5 bg-white text-slate-600 hover:border-[#0b50da]/40"
                }`}
              >
                <p className="font-semibold text-slate-800">
                  {item.question || item.prompt || "Untitled"}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {normalizeDifficulty(item.difficulty)}
                  {item.id && hardSet.has(item.id) ? " · marked hard" : ""}
                </p>
              </button>
            ))}
          </div>
        </aside>
      </div>

      {!loading && !isSubscribed ? (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center max-w-sm px-6">
            <h3 className="text-xl font-bold">{t.lockedTitle}</h3>
            <p className="text-slate-600 mt-2">{t.lockedBody}</p>
            <button
              className="mt-5 h-11 rounded-xl bg-[#0b50da] px-6 text-white font-bold shadow-lg shadow-[#0b50da]/25"
              onClick={handleCheckout}
              disabled={checkoutLoading}
            >
              {checkoutLoading ? "Starting checkout..." : t.lockedCta}
            </button>
            {checkoutError ? (
              <p className="mt-3 text-xs text-red-600">{checkoutError}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
