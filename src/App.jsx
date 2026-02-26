import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

const copy = {
  en: {
    navTitle: "Citizenship Success",
    navToggle: "Español",
    navLogin: "Member login",
    heroTag: "For Mexican communities · $4.99/month",
    heroTitle: "U.S. Citizenship",
    heroTitleAccent: "Interview Prep",
    heroBody:
      "Focused, bilingual preparation for the U.S. citizenship interview—built to serve Mexican communities with clarity, confidence, and cultural context.",
    heroPrimary: "Start Interview Prep",
    heroSecondary: "View Study Guides",
    stat1: "100 Civics Questions",
    stat2: "Bilingual Lessons",
    stat3: "Audio Practice",
    sectionTitle: "What you get",
    sectionBody:
      "A complete, affordable toolkit for real interviews and real families.",
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
    priceTitle: "$4.99/month",
    priceBody: "No hidden fees. Cancel anytime. All resources included.",
    priceCta: "Join for $4.99",
    footerTitle: "Citizenship Success",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerContact: "Contact",
    footerNote: "© 2024 Citizenship Success. Helping families bridge borders.",
  },
  es: {
    navTitle: "Citizenship Success",
    navToggle: "English",
    navLogin: "Iniciar sesión",
    heroTag: "Para comunidades mexicanas · $4.99/mes",
    heroTitle: "Preparación",
    heroTitleAccent: "Ciudadanía EE. UU.",
    heroBody:
      "Preparación bilingüe y enfocada para la entrevista de ciudadanía de EE. UU., pensada para comunidades mexicanas.",
    heroPrimary: "Comenzar preparación",
    heroSecondary: "Ver guías de estudio",
    stat1: "100 Preguntas Cívicas",
    stat2: "Lecciones bilingües",
    stat3: "Práctica de audio",
    sectionTitle: "Lo que incluye",
    sectionBody: "Un kit completo y accesible para entrevistas reales.",
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
    priceTitle: "$4.99/mes",
    priceBody: "Sin cargos ocultos. Cancela cuando quieras.",
    priceCta: "Unirme por $4.99",
    footerTitle: "Citizenship Success",
    footerPrivacy: "Privacidad",
    footerTerms: "Términos",
    footerContact: "Contacto",
    footerNote: "© 2024 Citizenship Success. Apoyando a las familias.",
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
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const isEnglish = lang === "en";

  return (
    <div className="bg-[#f6f4f0] text-slate-900 font-display">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 hero-noise" />
        <div className="absolute -top-40 -right-24 h-72 w-72 rounded-full bg-[#c61f1f]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-[#1f7a3e]/10 blur-3xl" />

        <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f4f0]/80 backdrop-blur">
          <div className="mx-auto flex max-w-screen-2xl items-center gap-4 px-4 sm:px-6 lg:px-10 py-4">
            <img
              src={logo}
              alt="Citizenship Success"
              className="h-10 w-10"
            />
            <h2 className="text-lg font-bold tracking-tight flex-1">
              {t.navTitle}
            </h2>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <Link
                to="/login"
                className="text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                {t.navLogin}
              </Link>
              <button
                type="button"
                onClick={() => setLang(isEnglish ? "es" : "en")}
                className="flex items-center gap-2 text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                <span className="material-symbols-outlined text-xl text-slate-400">
                  translate
                </span>
                {t.navToggle}
              </button>
            </div>
          </div>
        </nav>

        <header className="hero-bg mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 pt-16 pb-12 rounded-[32px] mt-10">
          <div className="hero-overlay rounded-[32px] p-8 sm:p-12">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="h-2 w-2 rounded-full bg-[#c61f1f]" />
                {t.heroTag} <span className="text-base">🇺🇸 🇲🇽</span>
              </span>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                {t.heroTitle}{" "}
                <span className="text-[#0b50da]">{t.heroTitleAccent}</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.heroBody}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/login"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b50da] px-6 text-white text-base font-bold shadow-lg shadow-[#0b50da]/25 hover:translate-y-[-1px] transition"
                >
                  {t.heroPrimary}
                </Link>
                <Link
                  to="/login"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white px-6 text-base font-bold text-slate-800 hover:border-black/20 transition"
                >
                  {t.heroSecondary}
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
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

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-black">{t.sectionTitle}</h2>
              <p className="text-slate-600">{t.sectionBody}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[t.offer1, t.offer2, t.offer3, t.offer4, t.offer5, t.offer6, t.offer7, t.offer8].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 py-2"
                    >
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
            </div>
            <div className="rounded-3xl border border-black/10 bg-[#0b50da] p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-black">{t.priceTitle}</h3>
              <p className="mt-2 text-white/80 leading-relaxed">{t.priceBody}</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/login"
                  className="h-12 rounded-xl bg-white text-[#0b50da] font-bold flex items-center justify-center"
                >
                  {t.priceCta}
                </Link>
                <Link
                  to="/login"
                  className="h-12 rounded-xl border border-white/40 flex items-center justify-center text-white font-semibold"
                >
                  {t.navLogin}
                </Link>
              </div>
              <div className="mt-8 grid gap-3 rounded-2xl bg-white/10 p-4 text-sm">
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
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-16">
          <h2 className="text-2xl font-bold">{t.trustTitle}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-2">
              <span className="material-symbols-outlined text-[#0b50da] text-3xl">
                g_translate
              </span>
              <h4 className="mt-3 text-lg font-bold">{t.trust1Title}</h4>
              <p className="text-sm text-slate-600 mt-2">{t.trust1Body}</p>
            </div>
            <div className="p-2">
              <span className="material-symbols-outlined text-[#0b50da] text-3xl">
                verified_user
              </span>
              <h4 className="mt-3 text-lg font-bold">{t.trust2Title}</h4>
              <p className="text-sm text-slate-600 mt-2">{t.trust2Body}</p>
            </div>
            <div className="p-2">
              <span className="material-symbols-outlined text-[#0b50da] text-3xl">
                diversity_3
              </span>
              <h4 className="mt-3 text-lg font-bold">{t.trust3Title}</h4>
              <p className="text-sm text-slate-600 mt-2">{t.trust3Body}</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/5 bg-white">
          <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-10 py-10 text-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-[#0b50da]">
                notifications_active
              </span>
              <span className="text-xl font-black">{t.footerTitle}</span>
            </div>
            <div className="flex gap-6 text-sm font-semibold text-slate-500">
              <button className="hover:text-[#0b50da] transition-colors">
                {t.footerPrivacy}
              </button>
              <button className="hover:text-[#0b50da] transition-colors">
                {t.footerTerms}
              </button>
              <button className="hover:text-[#0b50da] transition-colors">
                {t.footerContact}
              </button>
            </div>
            <p className="text-xs text-slate-400">{t.footerNote}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
