import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { createPolarCheckout } from "./lib/polarCheckout.js";
import { auth } from "./lib/firebase.js";
import { copy as layoutCopy } from "./components/Layout.jsx";
import checkoutImage from "./assets/checkout.jpeg";

const copy = {
  en: {
    heroTag: "Bilingual U.S. citizenship prep · lifetime access",
    heroTitle: "U.S. Citizenship",
    heroTitleAccent: "Interview Prep",
    heroBody:
      "Focused, bilingual preparation for the U.S. citizenship interview—built to serve Mexican communities with clarity, confidence, and cultural context.",
    heroPrimary: "Start Interview Prep",
    heroSecondary: "View Study Guides",
    stat1: "100 Civics Questions",
    stat2: "Bilingual Lessons",
    stat3: "Audio Practice",
    stripTitle: "Trusted by families preparing for USCIS",
    stripBody: "Clear steps, consistent practice, and real interview flow.",
    sectionTitle: "What you get",
    sectionBody:
      "A complete, affordable toolkit for real interviews and real families.",
    sectionFoot: "Everything above is included in the $4.99 plan.",
    offer1: "100 Civics Questions (easy mode)",
    offer2: "Real interview simulation script",
    offer3: "Yes/No question explanations",
    offer4: "Officer curveball questions",
    offer5: "Interview day checklist",
    offer6: "Fail-safe guide to avoid rejection",
    offer7: "Audio files for pronunciation",
    offer8: "Progress tracking & reminders",
    trustTitle: "Why people trust us",
    trust1Title: "Bilingual Friendly",
    trust1Body: "Every lesson is offered in English and Spanish.",
    trust2Title: "Expert Verified",
    trust2Body: "Reviewed by certified immigration consultants.",
    trust3Title: "Community-first",
    trust3Body: "Designed for Mexican families navigating USCIS.",
    priceTitle: "$4.99 lifetime access",
    priceBody:
      "One payment gives you lifetime access to every study module, interview script, checklist, and pronunciation drill—everything is included.",
    priceCta: "Get full access",
    finalTitle: "Ready for interview day?",
    finalBody: "Start with the civics basics, then practice the real flow.",
    finalCta: "Start now",
    pathTitle: "Success path",
    pathBody: "A clear, focused sequence that builds confidence fast.",
    pathStep1Title: "Learn the civics",
    pathStep1Body: "Master the 100 questions with bilingual explanations.",
    pathStep2Title: "Practice the real flow",
    pathStep2Body: "Simulate the interview with scripted prompts.",
    pathStep3Title: "Pass with confidence",
    pathStep3Body: "Review checklists, curveballs, and day‑of tips.",
  },
  es: {
    heroTag: "Preparación bilingüe · acceso de por vida",
    heroTitle: "Preparación",
    heroTitleAccent: "Ciudadanía EE. UU.",
    heroBody:
      "Preparación bilingüe y enfocada para la entrevista de ciudadanía de EE. UU., pensada para comunidades mexicanas.",
    heroPrimary: "Comenzar preparación",
    heroSecondary: "Ver guías de estudio",
    stat1: "100 Preguntas Cívicas",
    stat2: "Lecciones bilingües",
    stat3: "Práctica de audio",
    stripTitle: "Con la confianza de familias ante USCIS",
    stripBody: "Pasos claros, práctica constante y flujo real de entrevista.",
    sectionTitle: "Lo que incluye",
    sectionBody: "Un kit completo y accesible para entrevistas reales.",
    sectionFoot: "Todo lo anterior está incluido en el plan de $4.99.",
    offer1: "100 preguntas cívicas (modo fácil)",
    offer2: "Guion de simulación real",
    offer3: "Explicaciones de preguntas Sí/No",
    offer4: "Preguntas trampa frecuentes",
    offer5: "Lista de verificación del día",
    offer6: "Guía para evitar el rechazo",
    offer7: "Audios para pronunciación",
    offer8: "Seguimiento y recordatorios",
    trustTitle: "Por qué confían en nosotros",
    trust1Title: "Bilingüe",
    trust1Body: "Todo el contenido en inglés y español.",
    trust2Title: "Verificado",
    trust2Body: "Revisado por consultores certificados.",
    trust3Title: "Primero la comunidad",
    trust3Body: "Diseñado para familias mexicanas ante USCIS.",
    priceTitle: "$4.99 acceso de por vida",
    priceBody:
      "Un pago te da acceso de por vida a todos los módulos, guiones, listas y audios—todo está incluido.",
    priceCta: "Acceso completo",
    finalTitle: "¿Listo para el día de entrevista?",
    finalBody: "Empieza con civismo y practica el flujo real.",
    finalCta: "Comenzar ahora",
    pathTitle: "Ruta al éxito",
    pathBody: "Una secuencia clara para ganar confianza rápido.",
    pathStep1Title: "Aprende civismo",
    pathStep1Body: "Domina las 100 preguntas con explicación bilingüe.",
    pathStep2Title: "Practica el flujo real",
    pathStep2Body: "Simula la entrevista con guiones reales.",
    pathStep3Title: "Aprueba con confianza",
    pathStep3Body: "Revisa checklist, trampas y tips del día.",
  },
};

const offerIcons = [
  "menu_book",
  "record_voice_over",
  "task_alt",
  "psychology",
  "checklist",
  "verified",
  "graphic_eq",
  "history_edu",
];

export default function App() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const navCopy = layoutCopy[lang];
  const pageWidth = "mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6";
  const handleCheckout = async () => {
    const user = auth.currentUser;
    try {
      const { url } = await createPolarCheckout({
        customerEmail: user?.email || undefined,
        externalCustomerId: user?.uid || undefined,
      });
      if (url) window.location.href = url;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={pageWidth}>
      <header className="hero-bg w-full pt-14 pb-12 rounded-[28px] mt-10 mb-12 flex items-center justify-center">
        <div className="hero-overlay rounded-[28px] p-8 sm:p-12 w-[90%]">
          <div className="space-y-6 max-w-xl">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] reveal reveal-1 float-soft">
              <span className="h-2 w-2 rounded-full bg-[#c61f1f]" />
              {t.heroTag}
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl reveal reveal-2 whitespace-nowrap">
              {t.heroTitle}{" "}
              <span className="text-[#0b50da] sm:whitespace-nowrap">
                {t.heroTitleAccent}
              </span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed reveal reveal-3">
              {t.heroBody}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row reveal reveal-4">
              <Link
                to="/login"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b50da] px-6 text-white text-base font-bold shadow-lg shadow-[#0b50da]/25 hover:translate-y-[-1px] transition hover-lift"
              >
                {t.heroPrimary}
              </Link>
              <Link
                to="/login"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white px-6 text-base font-bold text-slate-800 hover:border-black/20 transition hover-lift"
              >
                {t.heroSecondary}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 reveal reveal-5">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-[#1f7a3e]">
                  verified
                </span>
                {t.stat1}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-[#c61f1f]">
                  translate
                </span>
                {t.stat2}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-[#0b50da]">
                  graphic_eq
                </span>
                {t.stat3}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full pt-14 pb-12">
        <div className="p-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black">{t.pathTitle}</h2>
            <p className="text-slate-600">{t.pathBody}</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: t.pathStep1Title,
                body: t.pathStep1Body,
                icon: "menu_book",
                color: "text-[#0b50da]",
                bg: "bg-[#0b50da]/10",
              },
              {
                title: t.pathStep2Title,
                body: t.pathStep2Body,
                icon: "record_voice_over",
                color: "text-[#00a86b]",
                bg: "bg-[#00a86b]/10",
              },
              {
                title: t.pathStep3Title,
                body: t.pathStep3Body,
                icon: "verified",
                color: "text-[#ff6b3d]",
                bg: "bg-[#ff6b3d]/10",
              },
            ].map((step, idx) => (
              <div key={step.title} className="relative flex gap-4">
                {idx < 2 ? (
                  <div className="absolute right-0 top-6 hidden h-px w-[calc(100%-60px)] bg-slate-200 md:block" />
                ) : null}
                <div
                  className={`h-12 w-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {step.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Step {idx + 1}
                  </p>
                  <h3 className="text-lg font-bold mt-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.85fr] items-stretch">
          <div className="rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm h-full flex flex-col hover-lift reveal">
            <div className="space-y-4 flex-1 flex flex-col">
              <h2 className="text-3xl font-black">{t.sectionTitle}</h2>
              <p className="text-slate-700">{t.sectionBody}</p>
              <div className="grid gap-3 sm:grid-cols-2 flex-1">
                {[t.offer1, t.offer2, t.offer3, t.offer4, t.offer5, t.offer6, t.offer7, t.offer8].map(
                  (item, index) => (
                    <div key={item} className="flex items-start gap-3 py-2">
                      <span className="material-symbols-outlined text-[#0b50da]">
                        {offerIcons[index]}
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-auto pt-4 border-t border-black/5 text-sm font-semibold text-slate-600">
                {t.sectionFoot}
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-black/10 bg-[#0b50da] p-8 text-white shadow-2xl h-full flex flex-col hover-lift reveal">
            <div className="space-y-3">
              <h3 className="text-3xl font-black">{t.priceTitle}</h3>
              <p className="text-white/80 leading-relaxed">{t.priceBody}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCheckout}
                className="h-12 rounded-xl bg-white text-[#0b50da] font-bold flex items-center justify-center"
              >
                {t.priceCta}
              </button>
              <Link
                to="/login"
                className="h-12 rounded-xl border border-white/40 flex items-center justify-center text-white font-semibold"
              >
                {navCopy.navLogin}
              </Link>
            </div>
            <div className="mt-auto grid gap-3 rounded-2xl bg-white/10 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Audio drills</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mock interview scripts</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Checklist & reminders</span>
                <span className="font-semibold">Included</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-sm hover-lift reveal min-h-[320px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${checkoutImage})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Secure checkout
              </p>
              <h3 className="mt-2 text-2xl font-black">One payment</h3>
              <p className="mt-2 text-sm text-white/80">
                Lifetime access to every interview resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <h2 className="text-2xl font-bold reveal">{t.trustTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="p-2 reveal reveal-2">
            <span className="material-symbols-outlined text-[#0b50da] text-3xl">
              g_translate
            </span>
            <h4 className="mt-3 text-lg font-bold">{t.trust1Title}</h4>
            <p className="text-sm text-slate-600 mt-2">{t.trust1Body}</p>
          </div>
          <div className="p-2 reveal reveal-3">
            <span className="material-symbols-outlined text-[#0b50da] text-3xl">
              verified_user
            </span>
            <h4 className="mt-3 text-lg font-bold">{t.trust2Title}</h4>
            <p className="text-sm text-slate-600 mt-2">{t.trust2Body}</p>
          </div>
          <div className="p-2 reveal reveal-4">
            <span className="material-symbols-outlined text-[#0b50da] text-3xl">
              diversity_3
            </span>
            <h4 className="mt-3 text-lg font-bold">{t.trust3Title}</h4>
            <p className="text-sm text-slate-600 mt-2">{t.trust3Body}</p>
          </div>
        </div>
      </section>

      <section className="w-full pb-14">
        <div className="rounded-[28px] border border-black/5 bg-white p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between reveal hover-lift">
          <div>
            <h3 className="text-2xl font-black">{t.finalTitle}</h3>
            <p className="text-slate-600 mt-2">{t.finalBody}</p>
          </div>
          <Link
            to="/login"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b50da] px-8 text-white text-base font-bold shadow-lg shadow-[#0b50da]/25 hover-lift"
          >
            {t.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
