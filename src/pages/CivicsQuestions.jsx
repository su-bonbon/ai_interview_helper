import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../lib/firebase.js";
import localQuestionData from "../assets/citizenship_questions_260.json";

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

const getLocalQuestions = (lang) =>
  localQuestionData
    .filter((item) => item.lang === lang)
    .map(({ id, ...item }) => ({ id, ...item }));

const hardKey = "citizenship-success-hard-questions";
const practiceKey = "citizenship-success-practice-count";

export default function CivicsQuestions() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [hardSet, setHardSet] = useState(() => {
    try {
      return new Set(JSON.parse(window.localStorage.getItem(hardKey) || "[]"));
    } catch {
      return new Set();
    }
  });
  const [activeTab, setActiveTab] = useState("Flashcards");
  const [testAnswerVisible, setTestAnswerVisible] = useState(false);
  const [testScore, setTestScore] = useState({ correct: 0, incorrect: 0 });
  const [practiceCount, setPracticeCount] = useState(() =>
    Number(window.localStorage.getItem(practiceKey) || 0)
  );
  const [testQuestions, setTestQuestions] = useState([]);
  const [testIndex, setTestIndex] = useState(0);
  const [testShowAnswer, setTestShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const localQuestions = getLocalQuestions(lang);
    setQuestions(localQuestions);
    setLoading(true);

    const loadQuestions = async () => {
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

        setQuestions(items.length ? items : localQuestions);
      } catch (err) {
        console.error("Question load error:", err);
        setQuestions(localQuestions);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [lang]);

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

  const handleToggleHard = async () => {
    if (!currentQuestion?.id) return;
    const next = new Set(hardSet);
    if (next.has(currentQuestion.id)) {
      next.delete(currentQuestion.id);
    } else {
      next.add(currentQuestion.id);
    }
    setHardSet(next);
    window.localStorage.setItem(hardKey, JSON.stringify([...next]));
  };

  const updateConfidence = async ({ correctDelta, incorrectDelta }) => {
    const nextCorrect = testScore.correct + correctDelta;
    const nextIncorrect = testScore.incorrect + incorrectDelta;
    const total = nextCorrect + nextIncorrect;
    const correctRate = total > 0 ? nextCorrect / total : 0;
    const nextPracticeCount = practiceCount + 1;
    const practiceConsistency = Math.min(nextPracticeCount / 10, 1);
    const confidence = (correctRate * 0.7) + (practiceConsistency * 0.3);

    setPracticeCount(nextPracticeCount);
    window.localStorage.setItem(practiceKey, String(nextPracticeCount));
    window.localStorage.setItem(
      "citizenship-success-confidence",
      String(confidence)
    );
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

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
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
                className={`h-[420px] rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 relative overflow-hidden flip-card ${
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
                  <div className="flip-card-inner h-full">
                    <div className="flip-card-face flex h-full flex-col">
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
                      <div className="flex min-h-0 flex-1 items-center justify-center px-8 text-center sm:px-10">
                        <h2 className="text-2xl font-black text-slate-900 leading-tight sm:text-3xl">
                          {currentQuestion.question || currentQuestion.prompt}
                        </h2>
                      </div>
                      <div className="mt-auto flex items-center justify-center text-xs text-slate-400">
                        <span>{t.tapHint}</span>
                      </div>
                    </div>
                    <div className="flip-card-face flip-card-back flex h-full flex-col">
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
                      <div className="flex min-h-0 flex-1 items-center justify-center px-8 text-center sm:px-10">
                        <h2 className="text-2xl font-black text-slate-900 leading-tight sm:text-3xl">
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
                className={`mt-8 h-[320px] rounded-2xl border border-black/5 bg-slate-50 p-6 relative overflow-hidden flip-card ${
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
                  <div className="flip-card-inner h-full">
                    <div className="flip-card-face flex h-full flex-col">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-400">
                        <span>{t.cardLabel}</span>
                        <span>
                          {testIndex + 1} / {testQuestions.length || 0}
                        </span>
                      </div>
                      <div className="mt-6 flex min-h-0 flex-1 items-center">
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
                    <div className="flip-card-face flip-card-back flex h-full flex-col">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-400">
                        <span>{t.hideAnswer}</span>
                        <span>
                          {testIndex + 1} / {testQuestions.length || 0}
                        </span>
                      </div>
                      <div className="mt-6 flex min-h-0 flex-1 items-center">
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

        </div>

        <aside className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm flex max-h-[420px] flex-col self-start lg:sticky lg:top-28 lg:mt-[70px] lg:h-[420px]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{t.listTitle}</h3>
            <span className="text-xs text-slate-400">
              {filteredQuestions.length}
            </span>
          </div>
          <div className="mt-4 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
              <span>{t.progressLabel}</span>
              <span>
                {Math.min(progressIndex + 1, progressTotal)} / {progressTotal}
              </span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
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
          <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pr-2">
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
                <p className="civics-question-title font-semibold text-slate-800">
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

    </section>
  );
}
