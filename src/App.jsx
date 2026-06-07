import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "./assets/hero-citizenship-prep.jpg";
import civicsImage from "./assets/civics-practice.jpg";
import readingWritingImage from "./assets/reading-writing-practice.jpg";
import checklistImage from "./assets/interview-checklist.jpg";

const copy = {
  en: {
    heroTag: "Free bilingual U.S. citizenship prep",
    heroTitle: "U.S. Citizenship",
    heroTitleAccent: "Interview Prep",
    heroBody:
      "Focused, bilingual preparation for the U.S. citizenship interview—built for immigrant communities with clarity, confidence, and cultural context.",
    heroPrimary: "Practice Civics Questions",
    heroSecondary: "View Study Guides",
    stat1: "Civics Question Practice",
    stat2: "Bilingual Lessons",
    stat3: "Practice Planner",
    stripTitle: "Trusted by families preparing for USCIS",
    stripBody: "Clear steps, consistent practice, and real interview flow.",
    sectionTitle: "What you get",
    sectionBody:
      "A free toolkit for real interviews and real families, supported by ads.",
    sectionFoot: "All core study tools are free to use.",
    offer1: "Official-style civics question practice",
    offer2: "Real interview simulation script",
    offer3: "Yes/No question explanations",
    offer4: "Officer curveball questions",
    offer5: "Interview day checklist",
    offer6: "Fail-safe guide to avoid rejection",
    offer7: "Answer practice prompts",
    offer8: "Progress tracking & reminders",
    trustTitle: "Why people trust us",
    trust1Title: "Bilingual Friendly",
    trust1Body: "Every lesson is offered in English and Spanish.",
    trust2Title: "Plain-language guidance",
    trust2Body: "Built around the interview topics applicants are expected to understand.",
    trust3Title: "Community-first",
    trust3Body: "Designed for families navigating USCIS.",
    priceTitle: "Free access",
    priceBody:
      "Study civics questions, interview scripts, checklists, and answer prompts without creating an account.",
    priceCta: "Start studying",
    planCta: "Open study plan",
    guidesCta: "Read preparation guides",
    finalTitle: "Ready for interview day?",
    finalBody: "Start with the civics basics, then practice the real flow.",
    finalCta: "Start now",
    pathTitle: "Success path",
    pathBody: "A clear, focused sequence that builds confidence fast.",
    pathStep1Title: "Learn the civics",
    pathStep1Body: "Build recall with bilingual civics question practice.",
    pathStep2Title: "Practice the real flow",
    pathStep2Body: "Simulate the interview with scripted prompts.",
    pathStep3Title: "Pass with confidence",
    pathStep3Body: "Review checklists, curveballs, and day‑of tips.",
    guideTitle: "What the citizenship interview usually includes",
    guideIntro:
      "The naturalization interview can feel intimidating because it combines conversation, application review, English reading and writing, and civics questions. A steady routine helps applicants know what to expect before interview day.",
    guide1Title: "Civics questions",
    guide1Body:
      "Practice should go beyond memorizing short answers. The goal is to recognize the topic, understand the meaning, and answer clearly even when you feel nervous.",
    guide2Title: "Reading and writing",
    guide2Body:
      "The English test usually uses simple sentences, but pressure can make easy tasks feel harder. Repeated practice with short prompts helps reduce hesitation.",
    guide3Title: "N-400 review",
    guide3Body:
      "Officers may review personal history, travel, work, family, and eligibility questions from the application. Preparing these answers in advance can make the interview feel more predictable.",
    spotlightTitle: "Practice that feels closer to the real interview",
    spotlightBody:
      "Move through civics recall, reading and writing expectations, and interview-day planning in one focused path.",
    scrollHint: "Scroll to explore",
  },
  es: {
    heroTag: "Preparación bilingüe gratis",
    heroTitle: "Preparación",
    heroTitleAccent: "Ciudadanía EE. UU.",
    heroBody:
      "Preparación bilingüe y enfocada para la entrevista de ciudadanía de EE. UU., pensada para comunidades inmigrantes.",
    heroPrimary: "Practicar civismo",
    heroSecondary: "Ver guías de estudio",
    stat1: "Práctica de preguntas cívicas",
    stat2: "Lecciones bilingües",
    stat3: "Plan de práctica",
    stripTitle: "Con la confianza de familias ante USCIS",
    stripBody: "Pasos claros, práctica constante y flujo real de entrevista.",
    sectionTitle: "Lo que incluye",
    sectionBody: "Un kit gratis para entrevistas reales, sostenido por anuncios.",
    sectionFoot: "Todas las herramientas principales son gratis.",
    offer1: "Práctica de civismo estilo oficial",
    offer2: "Guion de simulación real",
    offer3: "Explicaciones de preguntas Sí/No",
    offer4: "Preguntas trampa frecuentes",
    offer5: "Lista de verificación del día",
    offer6: "Guía para evitar el rechazo",
    offer7: "Prompts para practicar respuestas",
    offer8: "Seguimiento y recordatorios",
    trustTitle: "Por qué confían en nosotros",
    trust1Title: "Bilingüe",
    trust1Body: "Todo el contenido en inglés y español.",
    trust2Title: "Guía en lenguaje claro",
    trust2Body: "Basado en los temas de entrevista que los solicitantes deben entender.",
    trust3Title: "Primero la comunidad",
    trust3Body: "Diseñado para familias ante USCIS.",
    priceTitle: "Acceso gratis",
    priceBody:
      "Estudia preguntas cívicas, guiones, listas y prompts de respuesta sin crear una cuenta.",
    priceCta: "Comenzar a estudiar",
    planCta: "Abrir plan de estudio",
    guidesCta: "Leer guías",
    finalTitle: "¿Listo para el día de entrevista?",
    finalBody: "Empieza con civismo y practica el flujo real.",
    finalCta: "Comenzar ahora",
    pathTitle: "Ruta al éxito",
    pathBody: "Una secuencia clara para ganar confianza rápido.",
    pathStep1Title: "Aprende civismo",
    pathStep1Body: "Refuerza memoria con práctica bilingüe de civismo.",
    pathStep2Title: "Practica el flujo real",
    pathStep2Body: "Simula la entrevista con guiones reales.",
    pathStep3Title: "Aprueba con confianza",
    pathStep3Body: "Revisa checklist, trampas y tips del día.",
    guideTitle: "Qué suele incluir la entrevista de ciudadanía",
    guideIntro:
      "La entrevista de naturalización puede sentirse intimidante porque combina conversación, revisión de la solicitud, lectura y escritura en inglés, y preguntas de civismo. Una rutina constante ayuda a saber qué esperar antes del día de la entrevista.",
    guide1Title: "Preguntas de civismo",
    guide1Body:
      "La práctica debe ir más allá de memorizar respuestas cortas. La meta es reconocer el tema, entender el significado y responder con claridad aun con nervios.",
    guide2Title: "Lectura y escritura",
    guide2Body:
      "El examen de inglés suele usar oraciones simples, pero la presión puede hacerlo sentir más difícil. Practicar prompts cortos reduce la duda.",
    guide3Title: "Revisión del N-400",
    guide3Body:
      "El oficial puede revisar historial personal, viajes, trabajo, familia y preguntas de elegibilidad de la solicitud. Preparar estas respuestas hace que la entrevista sea más predecible.",
    spotlightTitle: "Práctica más cercana a la entrevista real",
    spotlightBody:
      "Avanza por civismo, lectura y escritura, y planificación del día de entrevista en una ruta enfocada.",
    scrollHint: "Desplázate",
  },
};

const offerIcons = [
  "menu_book",
  "assignment_turned_in",
  "task_alt",
  "psychology",
  "checklist",
  "verified",
  "quiz",
  "history_edu",
];

export default function App() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const pageWidth = "mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6";

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
      <header className="landing-hero full-bleed relative min-h-[82svh] overflow-hidden px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[calc(82svh-4rem)] max-w-screen-2xl flex-col justify-between gap-10 px-3 sm:px-6 lg:px-10">
          <div className="max-w-4xl space-y-6 pt-8 sm:pt-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur reveal reveal-1 float-soft">
              <span className="h-2 w-2 rounded-full bg-[#c61f1f]" />
              {t.heroTag}
            </span>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white reveal reveal-2 sm:text-7xl lg:text-8xl">
              {t.heroTitle}{" "}
              <span className="text-[#8fb5ff]">
                {t.heroTitleAccent}
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-medium text-white/82 leading-relaxed reveal reveal-3 sm:text-xl">
              {t.heroBody}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row reveal reveal-4">
              <Link
                to="/civics"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-black text-slate-950 shadow-lg shadow-black/20 transition hover:translate-y-[-1px]"
              >
                {t.heroPrimary}
              </Link>
              <Link
                to="/guides"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                {t.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="grid gap-3 reveal reveal-5 sm:grid-cols-3 lg:max-w-3xl">
            {[
              { icon: "verified", label: t.stat1, color: "text-[#1f7a3e]" },
              { icon: "translate", label: t.stat2, color: "text-[#c61f1f]" },
              { icon: "event_note", label: t.stat3, color: "text-[#0b50da]" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/20 bg-slate-950/45 px-4 py-3 shadow-sm backdrop-blur"
              >
                <span className={`material-symbols-outlined text-xl ${item.color}`}>
                  {item.icon}
                </span>
                <p className="mt-2 text-sm font-bold text-white">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 right-6 hidden items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur lg:flex">
            <span>{t.scrollHint}</span>
            <span className="material-symbols-outlined text-base">south</span>
          </div>
        </div>
      </header>

      <section className="w-full py-12">
        <div className="marquee-strip overflow-hidden rounded-lg border border-black/10 bg-white py-4 shadow-sm">
          <div className="marquee-track flex w-max gap-8 px-4 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
            {[t.stat1, t.stat2, t.stat3, t.pathStep1Title, t.pathStep2Title, t.pathStep3Title].map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#0b50da]" />
                {item}
              </span>
            ))}
            {[t.stat1, t.stat2, t.stat3, t.pathStep1Title, t.pathStep2Title, t.pathStep3Title].map((item) => (
              <span key={`${item}-repeat`} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#c61f1f]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="reveal-on-scroll" data-reveal>
          <div className="mb-5 grid gap-4 border-t border-black/10 pt-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Interview Flow
              </p>
              <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl">
                {t.spotlightTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 lg:ml-auto">
              {t.spotlightBody}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: t.pathStep1Title,
                body: t.pathStep1Body,
                icon: "menu_book",
                image: civicsImage,
              },
              {
                title: t.guide2Title,
                body: t.guide2Body,
                icon: "edit_note",
                image: readingWritingImage,
              },
              {
                title: t.pathStep3Title,
                body: t.pathStep3Body,
                icon: "verified",
                image: checklistImage,
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="scroll-feature group relative min-h-[330px] overflow-hidden rounded-lg border border-black/10 bg-slate-900 p-6 text-white reveal-on-scroll"
                data-reveal
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
                <div className="relative z-10 max-w-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#0b50da]">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                    Step {idx + 1}
                  </p>
                  <h3 className="mt-2 text-3xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pt-12 sm:pt-14 pb-12">
        <div className="p-0 reveal-on-scroll" data-reveal>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black">{t.pathTitle}</h2>
            <p className="text-slate-600">{t.pathBody}</p>
          </div>
          <div className="mt-8 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                icon: "assignment_turned_in",
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
              <div key={step.title} className="relative flex gap-4 items-start w-full">
                <div className="absolute right-0 top-6 hidden h-px w-[calc(100%-60px)] bg-slate-200 lg:block" />
                <div
                  className={`h-12 w-12 min-w-[48px] rounded-2xl ${step.bg} ${step.color} flex items-center justify-center`}
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
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 items-stretch">
          <div className="editorial-panel rounded-lg p-8 h-full flex flex-col hover-lift reveal">
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
          <div className="editorial-dark rounded-lg border border-black/10 p-8 text-white shadow-2xl h-full flex flex-col hover-lift reveal">
            <div className="space-y-3">
              <h3 className="text-3xl font-black">{t.priceTitle}</h3>
              <p className="text-white/80 leading-relaxed">{t.priceBody}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 pb-4 sm:pb-0">
              <Link
                to="/civics"
                className="h-12 rounded-lg bg-white text-slate-950 font-black flex items-center justify-center"
              >
                {t.priceCta}
              </Link>
              <Link
                to="/study-plan"
                className="h-12 rounded-lg border border-white/30 flex items-center justify-center text-white font-semibold"
              >
                {t.planCta}
              </Link>
            </div>
            <div className="mt-auto grid gap-3 rounded-lg bg-white/10 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Answer prompts</span>
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
          <div className="relative overflow-hidden rounded-lg border border-black/10 bg-white/80 shadow-sm hover-lift reveal min-h-[260px] sm:min-h-[320px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${checklistImage})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Free practice
              </p>
              <h3 className="mt-2 text-2xl font-black">No account needed</h3>
              <p className="mt-2 text-sm text-white/80">
                Open access to the core interview resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="rounded-lg border border-black/10 bg-white p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Original Guides
              </p>
              <h2 className="mt-2 text-3xl font-black">{t.guideTitle}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{t.guideIntro}</p>
            </div>
            <Link
              to="/guides"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-black text-white"
            >
              {t.guidesCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <h2 className="text-2xl font-bold reveal">{t.trustTitle}</h2>
        <div className="mt-6 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="editorial-panel rounded-lg p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between reveal hover-lift">
          <div>
            <h3 className="text-2xl font-black">{t.finalTitle}</h3>
            <p className="text-slate-600 mt-2">{t.finalBody}</p>
          </div>
          <Link
            to="/civics"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-950 px-8 text-white text-base font-black shadow-lg shadow-black/20 hover-lift"
          >
            {t.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
