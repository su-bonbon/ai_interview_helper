import { useState } from "react";
import { Link } from "react-router-dom";

const copy = {
  en: {
    navTitle: "Citizenship Success",
    navToggle: "Español",
    heroBadge: "Bilingual Prep · $4.99/mo",
    heroTitle: "U.S. Citizenship",
    heroTitleAccent: "Interview Prep",
    heroTitleSuffix: "for Mexican Communities",
    heroBody:
      "Focused preparation for the U.S. citizenship interview, built for Mexican communities with bilingual guidance and cultural context.",
    heroPrimary: "Start Interview Prep",
    heroSecondary: "View Study Guides",
    heroLogin: "Member login",
    sectionTitle: "Comprehensive Prep",
    sectionBody:
      "Everything you need to pass your U.S. citizenship interview with confidence and pride.",
    card1Title: "Interview Tips",
    card1Body:
      "Expert advice on N-400 questions and civics etiquette tailored for the community's cultural context.",
    card1Link: "Learn more",
    card2Title: "Mock Tests",
    card2Body:
      "Timed practice sessions that simulate the real USCIS interview environment in both English and Spanish.",
    card2Link: "Practice now",
    card3Title: "Resource Library",
    card3Body:
      "Access bilingual study guides, civics lessons, and practical explanations tailored for Mexican applicants.",
    card3Link: "Explore library",
    offerTitle: "What you'll get",
    offerBody:
      "A focused, affordable toolkit built for real interviews and real families.",
    offer1: "100 Civics Questions (easy mode)",
    offer2: "Real interview simulation script",
    offer3: "Yes/No question explanations",
    offer4: "Officer curveball questions",
    offer5: "Interview day checklist",
    offer6: "Fail-safe guide to avoid rejection",
    offer7: "Audio files for pronunciation",
    offer8: "Progress tracking and reminders",
    trustTitle: "Why Trust Our Program?",
    trust1Title: "Bilingual Friendly",
    trust1Body: "All content is available in both English and Spanish.",
    trust2Title: "Expert Verified",
    trust2Body: "Content reviewed by certified immigration consultants.",
    trust3Title: "Cultural Pride",
    trust3Body: "Designed with respect for both American and Mexican traditions.",
    priceTitle: "$4.99 a month",
    priceBody:
      "No hidden fees. Cancel anytime. All lessons, scripts, and audio included.",
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
    heroBadge: "Preparación bilingüe · $4.99/mes",
    heroTitle: "Preparación para la",
    heroTitleAccent: "ciudadanía de EE. UU.",
    heroTitleSuffix: "para comunidades mexicanas",
    heroBody:
      "Preparación enfocada para la entrevista de ciudadanía de EE. UU., pensada para comunidades mexicanas con apoyo bilingüe.",
    heroPrimary: "Comenzar preparación",
    heroSecondary: "Ver guías de estudio",
    heroLogin: "Iniciar sesión",
    sectionTitle: "Preparación completa",
    sectionBody:
      "Todo lo que necesitas para aprobar la entrevista de ciudadanía con confianza.",
    card1Title: "Consejos de entrevista",
    card1Body: "Consejos expertos sobre preguntas N-400 y etiqueta cívica.",
    card1Link: "Aprender más",
    card2Title: "Simulacros",
    card2Body:
      "Prácticas cronometradas que simulan el entorno real de USCIS en inglés y español.",
    card2Link: "Practicar ahora",
    card3Title: "Biblioteca de recursos",
    card3Body:
      "Guías bilingües, lecciones cívicas y explicaciones prácticas para solicitantes mexicanos.",
    card3Link: "Explorar biblioteca",
    offerTitle: "Lo que incluye",
    offerBody:
      "Un kit accesible y directo para entrevistas reales y familias reales.",
    offer1: "100 preguntas cívicas (modo fácil)",
    offer2: "Guion de simulación real",
    offer3: "Explicaciones de preguntas Sí/No",
    offer4: "Preguntas trampa frecuentes",
    offer5: "Lista de verificación del día",
    offer6: "Guía para evitar el rechazo",
    offer7: "Audios para pronunciación",
    offer8: "Seguimiento y recordatorios",
    trustTitle: "¿Por qué confiar en nosotros?",
    trust1Title: "Bilingüe",
    trust1Body: "Todo el contenido está en inglés y español.",
    trust2Title: "Verificado",
    trust2Body: "Revisado por consultores de inmigración certificados.",
    trust3Title: "Orgullo cultural",
    trust3Body: "Diseñado con respeto a la cultura mexicana y el proceso estadounidense.",
    priceTitle: "$4.99 al mes",
    priceBody:
      "Sin cargos ocultos. Cancela cuando quieras. Todo incluido.",
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
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <nav className="flex items-center bg-white/95 dark:bg-slate-900/90 backdrop-blur p-4 border-b border-slate-200 dark:border-slate-800 justify-between sticky top-0 z-50">
          <div className="text-primary flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-3xl">public</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 ml-3">
            {t.navTitle}
          </h2>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              {t.heroLogin}
            </Link>
            <button
              type="button"
              onClick={() => setLang(isEnglish ? "es" : "en")}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-slate-400 text-xl">
                translate
              </span>
              {t.navToggle}
            </button>
          </div>
        </nav>

        <div className="relative @container">
          <div className="absolute inset-0 mexican-pattern pointer-events-none"></div>
          <div className="flex flex-col gap-8 px-6 py-14 @[864px]:flex-row @[864px]:items-center max-w-7xl mx-auto relative z-10">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-xl border-4 border-white/90 dark:border-slate-800"
              aria-label="American and Mexican flags side by side with a golden eagle"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2jPJWGoof3NRmj1J_FODJolUGEmwk3T3QGXIGdnbJaFVFwUVII5bSDji6T_-j9BAzZQITEaoPSY9nbzhNRfJKiuTt5jULB7BmguRfLW_jmvV7L6jnRP4zpYZ5QzaqaiWyuhkQNJMJjDaCGaRtsYxdh9VTQrsiiQCtGZ9EpF37EGi-01V-M7nUXIMHWBe6xbrI3XqrfgpAEeOWNBwYdsnsN90kTSI42sUiiRJbVfTO-AJU5AHczrdru7V38_fAB6ZDV8PsotO1j64")',
              }}
            />
            <div className="flex flex-col gap-7 @[864px]:w-1/2">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  {t.heroBadge}
                </span>
                <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl">
                  {t.heroTitle}{" "}
                  <span className="text-primary">{t.heroTitleAccent}</span>{" "}
                  {t.heroTitleSuffix}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  {t.heroBody}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.heroPrimary}
                </Link>
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-xl h-12 px-8 border-2 border-primary text-primary text-base font-bold bg-transparent"
                >
                  {t.heroSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-10 px-6 py-16 bg-white dark:bg-slate-900/50">
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black tracking-tight">
              {t.sectionTitle}
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
              {t.sectionBody}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                  {t.card1Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">
                  {t.card1Body}
                </p>
              </div>
              <Link
                to="/login"
                className="text-primary text-sm font-bold flex items-center gap-1 mt-2"
              >
                {t.card1Link}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  assignment_turned_in
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                  {t.card2Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">
                  {t.card2Body}
                </p>
              </div>
              <Link
                to="/login"
                className="text-primary text-sm font-bold flex items-center gap-1 mt-2"
              >
                {t.card2Link}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                  {t.card3Title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">
                  {t.card3Body}
                </p>
              </div>
              <Link
                to="/login"
                className="text-primary text-sm font-bold flex items-center gap-1 mt-2"
              >
                {t.card3Link}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 max-w-7xl mx-auto w-full">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
            <div>
              <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black tracking-tight">
                {t.offerTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl">
                {t.offerBody}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[t.offer1, t.offer2, t.offer3, t.offer4, t.offer5, t.offer6, t.offer7, t.offer8].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"
                    >
                      <span className="material-symbols-outlined text-primary">
                        {offerIcons[index]}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white p-8 shadow-xl">
              <h3 className="text-3xl font-black">{t.priceTitle}</h3>
              <p className="text-white/80 mt-2 leading-relaxed">{t.priceBody}</p>
              <div className="mt-6 flex flex-col gap-3">
                <button className="h-12 rounded-xl bg-white text-primary font-bold">
                  {t.priceCta}
                </button>
                <Link
                  to="/login"
                  className="h-12 rounded-xl border border-white/40 flex items-center justify-center text-white font-semibold"
                >
                  {t.heroLogin}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 max-w-7xl mx-auto w-full">
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold mb-8">
            {t.trustTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">g_translate</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold">
                  {t.trust1Title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t.trust1Body}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold">
                  {t.trust2Title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t.trust2Body}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold">
                  {t.trust3Title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t.trust3Body}
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-auto px-6 py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl text-primary">
                notifications_active
              </span>
              <span className="text-2xl font-black">{t.footerTitle}</span>
            </div>
            <div className="flex gap-6 text-slate-400">
              <button className="hover:text-primary transition-colors">
                {t.footerPrivacy}
              </button>
              <button className="hover:text-primary transition-colors">
                {t.footerTerms}
              </button>
              <button className="hover:text-primary transition-colors">
                {t.footerContact}
              </button>
            </div>
            <div className="text-center text-slate-500 text-sm">
              <p>{t.footerNote}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
