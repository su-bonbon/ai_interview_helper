import { useEffect, useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where, limit, doc, getDoc } from "firebase/firestore";
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
    filterMedium: "Medium",
    filterHard: "Hard",
    cardLabel: "Question",
    showAnswer: "Show answer",
    hideAnswer: "Hide answer",
    tapHint: "Tap the card to reveal the answer.",
    markHard: "Mark as hard",
    unmarkHard: "Unmark hard",
    progressLabel: "Progress",
    listTitle: "Question list",
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
    filterMedium: "Medio",
    filterHard: "Difícil",
    cardLabel: "Pregunta",
    showAnswer: "Mostrar respuesta",
    hideAnswer: "Ocultar respuesta",
    tapHint: "Toca la tarjeta para ver la respuesta.",
    markHard: "Marcar difícil",
    unmarkHard: "Quitar difícil",
    progressLabel: "Progreso",
    listTitle: "Lista de preguntas",
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        setIsSubscribed(Boolean(snap.data()?.isSubscribed));
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
  }, [filteredQuestions.length]);

  const currentQuestion = filteredQuestions[currentIndex];

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

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [search, difficulty]);

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Study</p>
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {t.tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              idx === 0
                ? "bg-[#0b50da] text-white shadow-lg shadow-[#0b50da]/20"
                : "bg-white text-slate-600 border border-black/5"
            }`}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
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
                { key: "medium", label: t.filterMedium },
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

          <div
            className={`rounded-3xl border border-black/5 bg-white p-8 shadow-sm min-h-[320px] relative overflow-hidden flip-card ${
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
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-slate-600 shadow-sm border border-black/5 flex items-center justify-center hover:bg-white"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-base">
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
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-slate-900 text-white shadow-sm border border-black/5 flex items-center justify-center hover:bg-slate-800"
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-base">
                arrow_forward_ios
              </span>
            </button>
            {loading ? (
              <p className="text-slate-500">{t.loading}</p>
            ) : currentQuestion ? (
              <div className="flip-card-inner">
                <div className="flip-card-face relative">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleToggleHard();
                    }}
                    className={`absolute right-3 top-3 flex items-center justify-center transition ${
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
                    <span className="material-symbols-outlined text-2xl">
                      {currentQuestion?.id && hardSet.has(currentQuestion.id)
                        ? "star"
                        : "star_outline"}
                    </span>
                  </button>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>{t.cardLabel}</span>
                    <span>
                      {currentIndex + 1} / {filteredQuestions.length || 0}
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {currentQuestion.question || currentQuestion.prompt}
                    </h2>
                    <p className="text-sm text-slate-400">{t.tapHint}</p>
                  </div>
                </div>
                <div className="flip-card-face flip-card-back relative">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleToggleHard();
                    }}
                    className={`absolute right-3 top-3 flex items-center justify-center transition ${
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
                    <span className="material-symbols-outlined text-2xl">
                      {currentQuestion?.id && hardSet.has(currentQuestion.id)
                        ? "star"
                        : "star_outline"}
                    </span>
                  </button>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>{t.hideAnswer}</span>
                    <span>
                      {currentIndex + 1} / {filteredQuestions.length || 0}
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {currentQuestion.answer || currentQuestion.response}
                    </h2>
                    <p className="text-sm text-slate-400">{t.tapHint}</p>
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

          <div className="mt-6 rounded-2xl border border-black/5 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
              <span>{t.progressLabel}</span>
              <span>
                {Math.min(currentIndex + 1, filteredQuestions.length)} /{" "}
                {filteredQuestions.length}
              </span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-[#0b50da]"
                style={{
                  width: `${
                    filteredQuestions.length
                      ? Math.round(
                          ((currentIndex + 1) / filteredQuestions.length) * 100
                        )
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm h-full">
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
