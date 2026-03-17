import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase.js";
import { createPolarCheckout } from "../lib/polarCheckout.js";

const copy = {
  en: {
    title: "Welcome back",
    subtitle: "Your interview prep dashboard is ready.",
    loading: "Loading your dashboard...",
    lockedTitle: "Unlock the interview dashboard",
    lockedBody:
      "Activate your subscription to access interview questions, answers, and audio practice.",
    lockedCta: "Activate subscription",
    unlockedTitle: "Interview dashboard",
    unlockedBody:
      "You have full access to questions, answers, and guided practice.",
    confidenceLabel: "Confidence",
    practiceLabel: "Practice sessions",
    daysLabel: "Days to interview",
    hardLabel: "Hard questions marked",
    interviewPromptTitle: "Add your interview date",
    interviewPromptBody:
      "This helps us calculate your D‑day and tailor your practice plan.",
    interviewPromptLabel: "Interview date",
    interviewPromptCta: "Save date",
    interviewPromptSkip: "I'll add it later",
    calendarTitle: "Interview calendar",
    calendarSubtitle: "Your interview date is highlighted.",
    calendarEmpty: "Set your interview date to highlight it.",
    card1Title: "Civics (Easy Mode)",
    card1Body: "100 questions with simplified explanations.",
    card2Title: "Real Interview Script",
    card2Body: "Practice the flow from start to finish.",
    card3Title: "Yes/No Explanations",
    card3Body: "Understand tricky yes/no questions.",
    card4Title: "Officer Curveballs",
    card4Body: "Common follow‑ups that catch people off guard.",
    card5Title: "Day‑of Checklist",
    card5Body: "What to bring and how to prepare.",
    card6Title: "Pronunciation Audio",
    card6Body: "Audio drills for clear answers.",
  },
  es: {
    title: "Bienvenido de nuevo",
    subtitle: "Tu panel de preparación está listo.",
    loading: "Cargando tu panel...",
    lockedTitle: "Activa el panel de entrevista",
    lockedBody:
      "Activa tu suscripción para acceder a preguntas, respuestas y audio.",
    lockedCta: "Activar suscripción",
    unlockedTitle: "Panel de entrevista",
    unlockedBody:
      "Tienes acceso completo a preguntas, respuestas y práctica guiada.",
    confidenceLabel: "Confianza",
    practiceLabel: "Sesiones de práctica",
    daysLabel: "Días para la entrevista",
    hardLabel: "Preguntas difíciles marcadas",
    interviewPromptTitle: "Agrega tu fecha de entrevista",
    interviewPromptBody:
      "Esto nos ayuda a calcular tu D‑day y ajustar tu plan.",
    interviewPromptLabel: "Fecha de entrevista",
    interviewPromptCta: "Guardar fecha",
    interviewPromptSkip: "Lo agregaré después",
    calendarTitle: "Calendario de entrevista",
    calendarSubtitle: "Tu fecha de entrevista está resaltada.",
    calendarEmpty: "Agrega tu fecha para resaltarla.",
    card1Title: "Cívica (modo fácil)",
    card1Body: "100 preguntas con explicación simple.",
    card2Title: "Guion de entrevista real",
    card2Body: "Practica el flujo completo.",
    card3Title: "Explicaciones Sí/No",
    card3Body: "Entiende preguntas difíciles.",
    card4Title: "Preguntas trampa",
    card4Body: "Seguimientos comunes del oficial.",
    card5Title: "Checklist del día",
    card5Body: "Qué llevar y cómo prepararte.",
    card6Title: "Audio de pronunciación",
    card6Body: "Ejercicios para responder claro.",
  },
};

export default function Dashboard() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [confidence, setConfidence] = useState(0.72);
  const [practiceCount, setPracticeCount] = useState(12);
  const [daysToInterview, setDaysToInterview] = useState(18);
  const [hardChecked, setHardChecked] = useState(18);
  const [hardTotal, setHardTotal] = useState(60);
  const [interviewDate, setInterviewDate] = useState("");
  const [showInterviewPrompt, setShowInterviewPrompt] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const today = new Date();
  const parseLocalDate = (value) => {
    if (!value) return null;
    if (typeof value?.toDate === "function") return value.toDate();
    if (value instanceof Date) return value;
    if (typeof value === "string") {
      const [y, m, d] = value.split("-").map(Number);
      if (!y || !m || !d) return null;
      return new Date(y, m - 1, d);
    }
    return null;
  };

  const interviewDateObj = parseLocalDate(interviewDate);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const startDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();
  const calendarCells = Array.from({ length: startDay + daysInMonth }, (_, i) =>
    i < startDay ? null : i - startDay + 1
  );

  const loadUserData = async (user) => {
    try {
      const snap = await getDoc(doc(db, "users", user.uid));
      const data = snap.exists() ? snap.data() : null;
      setIsSubscribed(Boolean(data?.isSubscribed));
      if (data?.interviewDate) {
        const dateValue = parseLocalDate(data.interviewDate);
        if (dateValue) {
          const iso = new Date(
            dateValue.getFullYear(),
            dateValue.getMonth(),
            dateValue.getDate()
          )
            .toISOString()
            .slice(0, 10);
          setInterviewDate(iso);
          const todayLocal = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
          );
          const interviewLocal = new Date(
            dateValue.getFullYear(),
            dateValue.getMonth(),
            dateValue.getDate()
          );
          const diff = Math.ceil(
            (interviewLocal.getTime() - todayLocal.getTime()) /
              (1000 * 60 * 60 * 24)
          );
          setDaysToInterview(Math.max(diff, 0));
        }
      } else if (data?.isSubscribed) {
        setShowInterviewPrompt(true);
      }
    } catch (err) {
      console.error("Dashboard load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      await loadUserData(user);
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const status = searchParams.get("checkout");
    if (status === "success") {
      const user = auth.currentUser;
      if (user) {
        setLoading(true);
        loadUserData(user).then(() => {
          setSearchParams({}, { replace: true });
        });
      }
    }
  }, [searchParams, setSearchParams]);

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
      setCheckoutError("Checkout failed. Please try again.");
      console.error(err);
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-16">
      <h1 className="text-3xl font-black">{t.title}</h1>
      <p className="text-slate-600 mt-2">{t.subtitle}</p>

      <div className="mt-10 rounded-3xl border border-black/5 bg-white p-8 relative overflow-hidden">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t.unlockedTitle}</h2>
          <p className="text-slate-600">{t.unlockedBody}</p>

          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr_1fr]">
            <div className="rounded-2xl border border-black/5 bg-white/90 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">{t.confidenceLabel}</p>
                <p className="text-sm font-bold text-slate-800">
                  {Math.round(confidence * 100)}%
                </p>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0b50da] via-[#00a86b] to-[#ff6b3d]"
                  style={{ width: `${Math.round(confidence * 100)}%` }}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-[#f3f6ff] p-3">
                  <p className="text-xs text-slate-500">{t.practiceLabel}</p>
                  <p className="text-lg font-bold text-slate-800">{practiceCount}</p>
                </div>
                <div className="rounded-xl bg-[#f0fff6] p-3">
                  <p className="text-xs text-slate-500">{t.daysLabel}</p>
                  <p className="text-lg font-bold text-slate-800">{daysToInterview}</p>
                </div>
                <div className="rounded-xl bg-[#fff4ec] p-3">
                  <p className="text-xs text-slate-500">{t.hardLabel}</p>
                  <p className="text-lg font-bold text-slate-800">
                    {Math.round((hardChecked / hardTotal) * 100)}%
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {hardChecked} / {hardTotal} marked as hard
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/90 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    {t.calendarTitle}
                  </p>
                  <p className="text-xs text-slate-500">{t.calendarSubtitle}</p>
                </div>
                <div className="h-9 w-9 rounded-xl bg-[#0b50da]/10 text-[#0b50da] flex items-center justify-center">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-2 text-center text-xs">
                {calendarCells.map((day, idx) => {
                  const isToday =
                    day &&
                    day === today.getDate() &&
                    today.getMonth() === monthStart.getMonth();
                  const isInterview =
                    day &&
                    interviewDateObj &&
                    day === interviewDateObj.getDate() &&
                    interviewDateObj.getMonth() === monthStart.getMonth() &&
                    interviewDateObj.getFullYear() === monthStart.getFullYear();
                  return (
                    <span
                      key={`${day ?? "x"}-${idx}`}
                      className={`relative h-7 w-7 flex items-center justify-center ${
                        isInterview
                          ? "text-slate-900 font-bold"
                          : isToday
                            ? "bg-[#0b50da]/10 text-[#0b50da] font-semibold rounded-full"
                            : "text-slate-600"
                      }`}
                    >
                      {isInterview ? (
                        <span
                          className="absolute inset-0"
                          style={{
                            background: "#f5e200",
                            clipPath:
                              "polygon(50% 0%, 62% 35%, 98% 35%, 68% 57%, 79% 92%, 50% 72%, 21% 92%, 32% 57%, 2% 35%, 38% 35%)",
                          }}
                        />
                      ) : null}
                      <span className="relative z-10">{day ?? ""}</span>
                    </span>
                  );
                })}
              </div>
              {interviewDate ? (
                <p className="mt-3 text-xs text-slate-500">
                  {interviewDate}
                </p>
              ) : (
                <p className="mt-3 text-xs text-slate-500">
                  {t.calendarEmpty}
                </p>
              )}
            </div>
            <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-[#0b50da] to-[#0a2f6b] p-5 text-white">
              <p className="text-sm font-semibold text-white/80">Next milestone</p>
              <p className="mt-2 text-2xl font-black">Mock Interview #3</p>
              <p className="mt-2 text-sm text-white/80">Keep a steady rhythm to raise confidence.</p>
              <button className="mt-5 h-10 rounded-xl bg-white text-[#0b50da] font-bold px-4">
                Start practice
              </button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#ffefe8] to-[#fff7f0] p-5 border border-black/5 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-[#ff6b3d] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-800">{t.card1Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card1Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#e7f0ff] to-[#f5f9ff] p-5 border border-black/5 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-[#0b50da] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">assignment_turned_in</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-800">{t.card2Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card2Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#e9fff3] to-[#f4fff9] p-5 border border-black/5 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-[#00a86b] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">help</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-800">{t.card3Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card3Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#fff3e6] to-[#fff8f2] p-5 border border-black/5 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-[#ff9f1c] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-800">{t.card4Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card4Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#f1f0ff] to-[#faf8ff] p-5 border border-black/5 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-[#6a5cff] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">checklist</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-800">{t.card5Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card5Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#e9f7ff] to-[#f4fbff] p-5 border border-black/5 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-[#1b9aaa] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">graphic_eq</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-800">{t.card6Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card6Body}</p>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <p className="text-slate-600">{t.loading}</p>
          </div>
        ) : !isSubscribed ? (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
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
        ) : showInterviewPrompt ? (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center max-w-sm px-6">
              <h3 className="text-xl font-bold">{t.interviewPromptTitle}</h3>
              <p className="text-slate-600 mt-2">{t.interviewPromptBody}</p>
              <div className="mt-4 text-left">
                <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {t.interviewPromptLabel}
                </label>
                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  value={interviewDate}
                  onChange={(e) => setInterviewDate(e.target.value)}
                />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <button
                  className="h-11 rounded-xl bg-[#0b50da] px-6 text-white font-bold shadow-lg shadow-[#0b50da]/25"
                  onClick={async () => {
                    if (!interviewDate) return;
                    const user = auth.currentUser;
                    if (!user) return;
                    await updateDoc(doc(db, "users", user.uid), {
                      interviewDate,
                    });
                    setShowInterviewPrompt(false);
                  }}
                >
                  {t.interviewPromptCta}
                </button>
                <button
                  className="h-11 rounded-xl border border-slate-200 bg-white px-6 text-slate-700 font-semibold"
                  onClick={() => setShowInterviewPrompt(false)}
                >
                  {t.interviewPromptSkip}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
