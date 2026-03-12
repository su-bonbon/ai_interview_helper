import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase.js";

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
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        const data = snap.exists() ? snap.data() : null;
        setIsSubscribed(Boolean(data?.isSubscribed));
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-16">
      <h1 className="text-3xl font-black">{t.title}</h1>
      <p className="text-slate-600 mt-2">{t.subtitle}</p>

      <div className="mt-10 rounded-3xl border border-black/5 bg-white p-8 relative overflow-hidden">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t.unlockedTitle}</h2>
          <p className="text-slate-600">{t.unlockedBody}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#ffefe8] to-[#fff7f0] p-4 border border-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#ff6b3d] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{t.card1Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card1Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#e7f0ff] to-[#f5f9ff] p-4 border border-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#0b50da] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">assignment_turned_in</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{t.card2Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card2Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#e9fff3] to-[#f4fff9] p-4 border border-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#00a86b] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">help</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{t.card3Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card3Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#fff3e6] to-[#fff8f2] p-4 border border-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#ff9f1c] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{t.card4Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card4Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#f1f0ff] to-[#faf8ff] p-4 border border-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#6a5cff] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">checklist</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{t.card5Title}</p>
              <p className="text-xs text-slate-600 mt-2">{t.card5Body}</p>
            </button>
            <button className="group text-left rounded-2xl bg-gradient-to-br from-[#e9f7ff] to-[#f4fbff] p-4 border border-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#1b9aaa] text-white flex items-center justify-center">
                <span className="material-symbols-outlined">graphic_eq</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{t.card6Title}</p>
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
              <button className="mt-5 h-11 rounded-xl bg-[#0b50da] px-6 text-white font-bold shadow-lg shadow-[#0b50da]/25">
                {t.lockedCta}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
