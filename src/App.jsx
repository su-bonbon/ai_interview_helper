import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
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
    stripTitle: "Built for families preparing for USCIS",
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
    offer6: "Risk-aware preparation guide",
    offer7: "Answer practice prompts",
    offer8: "Progress tracking & reminders",
    heroFeatures: [
      "Civics practice",
      "Interview simulation",
      "Yes/No explanations",
      "Curveball questions",
      "Interview checklist",
      "Reduce surprises",
      "Answer prompts",
    ],
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
    pathStep3Title: "Interview with confidence",
    pathStep3Body: "Review checklists, follow-up questions, and day-of tips.",
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
    stripTitle: "Creado para familias ante USCIS",
    stripBody: "Pasos claros, práctica constante y flujo real de entrevista.",
    sectionTitle: "Lo que incluye",
    sectionBody: "Un kit gratis para entrevistas reales, sostenido por anuncios.",
    sectionFoot: "Todas las herramientas principales son gratis.",
    offer1: "Práctica de civismo estilo oficial",
    offer2: "Guion de simulación real",
    offer3: "Explicaciones de preguntas Sí/No",
    offer4: "Preguntas trampa frecuentes",
    offer5: "Lista de verificación del día",
    offer6: "Guía para reducir sorpresas",
    offer7: "Prompts para practicar respuestas",
    offer8: "Seguimiento y recordatorios",
    heroFeatures: [
      "Práctica de civismo",
      "Simulación de entrevista",
      "Explicaciones Sí/No",
      "Preguntas trampa",
      "Checklist de entrevista",
      "Reducir sorpresas",
      "Prompts de respuesta",
    ],
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
    pathStep3Title: "Entrevista con confianza",
    pathStep3Body: "Revisa checklist, preguntas de seguimiento y tips del día.",
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

const homeContent = {
  en: {
    founderEyebrow: "Why this site exists",
    founderTitle: "Built from a real immigration journey",
    founderBody: [
      "I created US Citizenship Prep because I have been through the immigration process myself. After earning permanent residency and preparing for citizenship, I realized how scattered and stressful the available resources can feel, especially for applicants who are studying in a second language.",
      "This site is built from the resources, routines, and interview preparation habits that helped me. The goal is simple: help other immigrants and families prepare with more clarity, less fear, and a stronger understanding of what the interview is really testing.",
    ],
    readFounder: "Read why I built this free resource",
    experienceEyebrow: "Recent interview experience",
    experienceTitle: "My citizenship interview takeaways",
    experienceShort:
      "I recently completed my citizenship interview and am waiting for the Oath Ceremony. The biggest lesson: the civics test matters, but the N-400 review and your documentation deserve just as much preparation.",
    experienceBody:
      "I recently completed my citizenship interview and am waiting for the Oath Ceremony. I applied under the general application criteria as a lawful permanent resident for more than five years. From my experience, the civics and English test matters, but the deeper review is often your N-400 application, your history, and whether your answers are consistent and honest.",
    readExperience: "Read the full interview context",
    pillarsTitle: "The three areas I prepared around",
    pillars: [
      {
        title: "Legal status and compliance",
        body:
          "The officer wants to confirm that you entered the United States legally and maintained your status. Any past issue, even something that feels small, should be understood before the interview so you can answer clearly.",
      },
      {
        title: "Tax filing and payment history",
        body:
          "If you owe taxes, that does not automatically mean you fail. What matters is that you filed, understand your situation, and can show a formal payment plan or proof of payments if needed.",
      },
      {
        title: "Criminal record and moral character",
        body:
          "Traffic tickets, citations, misdemeanors, and other issues should be handled honestly. If something is more serious than a basic ticket, it is wise to speak with an immigration attorney before the interview.",
      },
    ],
    lessonsTitle: "What I learned",
    lessons: [
      "Documentation changes the tone of the interview. If you mention taxes, travel, citations, or any correction, bring proof.",
      "Honesty is stronger than trying to hide a mistake. I forgot to list a couple of speeding tickets at first, then told the officer during the interview. He updated the form and moved on.",
      "The civics and English test is often the easier part. Many applicants worry most about history questions, but the N-400 review and background questions deserve serious preparation.",
      "Media noise can make applicants anxious. In my view, if you are compliant, truthful, and prepared with documents, you can walk in with a much calmer mindset.",
    ],
    note:
      "This site is educational and based on personal preparation experience. It is not legal advice. For criminal history, complicated tax issues, or immigration problems, speak with a qualified immigration attorney.",
    libraryEyebrow: "Preparation library",
    libraryTitle: "Everything you need to practice, organized by interview moment",
    libraryBody:
      "Instead of sending you through scattered resources, the homepage gives you a quick map of the interview: civics recall, English reading and writing, N-400 review, documents, and interview-day confidence.",
    prepTags: [
      "Civics",
      "Reading",
      "Writing",
      "N-400",
      "Taxes",
      "Citations",
      "Documents",
      "Oath",
    ],
    libraryCards: [
      {
        icon: "school",
        title: "260 civics questions",
        body: "Practice official-style questions with bilingual support.",
      },
      {
        icon: "contract_edit",
        title: "N-400 readiness",
        body: "Know where background questions usually matter most.",
      },
      {
        icon: "folder_open",
        title: "Document mindset",
        body: "Prepare proof for taxes, citations, travel, and corrections.",
      },
    ],
    pillarsEyebrow: "Interview preparation",
    lessonsEyebrow: "Personal takeaways",
    toolsEyebrow: "How to use the free tools",
    toolsTitle: "Practice in the same order the interview usually unfolds",
    toolsBody:
      "Start with civics recall, then practice reading and writing, then review your N-400 answers and interview-day documents. The free tools are organized to support that routine without requiring an account.",
    checklistCardEyebrow: "Interview day",
    checklistCardTitle: "Checklist before you leave",
    checklistCardBody:
      "Review documents, timing, ID, and final prep so interview morning feels calmer.",
    checklistCardCta: "Open checklist",
  },
  es: {
    founderEyebrow: "Por qué existe este sitio",
    founderTitle: "Creado desde una experiencia real de inmigración",
    founderBody: [
      "Creé US Citizenship Prep porque yo también he pasado por el proceso migratorio. Después de obtener la residencia permanente y prepararme para la ciudadanía, entendí lo dispersos y estresantes que pueden sentirse los recursos, especialmente para quienes estudian en un segundo idioma.",
      "Este sitio nace de los recursos, rutinas y hábitos de preparación que me ayudaron. La meta es ayudar a otros inmigrantes y familias a prepararse con más claridad, menos miedo y una mejor idea de lo que realmente evalúa la entrevista.",
    ],
    readFounder: "Leer por qué creé este recurso gratis",
    experienceEyebrow: "Experiencia reciente",
    experienceTitle: "Lo que aprendí de mi entrevista de ciudadanía",
    experienceShort:
      "Completé recientemente mi entrevista de ciudadanía y estoy esperando la ceremonia de juramento. La lección principal: el examen de civismo importa, pero la revisión del N-400 y la documentación también merecen mucha preparación.",
    experienceBody:
      "Completé recientemente mi entrevista de ciudadanía y estoy esperando la ceremonia de juramento. Apliqué bajo los criterios generales como residente permanente legal por más de cinco años. Según mi experiencia, el examen de civismo e inglés importa, pero la revisión más profunda suele ser el formulario N-400, tu historial y la consistencia de tus respuestas.",
    readExperience: "Leer el contexto completo de la entrevista",
    pillarsTitle: "Las tres áreas que preparé",
    pillars: [
      {
        title: "Estatus legal y cumplimiento",
        body:
          "El oficial quiere confirmar que entraste legalmente a Estados Unidos y mantuviste tu estatus. Cualquier problema pasado, aunque parezca pequeño, debe entenderse antes de la entrevista para responder con claridad.",
      },
      {
        title: "Historial de impuestos",
        body:
          "Deber impuestos no significa automáticamente fallar. Lo importante es haber declarado, entender tu situación y poder mostrar un plan formal de pagos o comprobantes si es necesario.",
      },
      {
        title: "Historial criminal y buen carácter moral",
        body:
          "Multas, citaciones, delitos menores y otros asuntos deben manejarse con honestidad. Si algo es más serio que una multa básica, conviene hablar con un abogado de inmigración antes de la entrevista.",
      },
    ],
    lessonsTitle: "Lo que aprendí",
    lessons: [
      "La documentación cambia el tono de la entrevista. Si mencionas impuestos, viajes, citaciones o correcciones, lleva pruebas.",
      "La honestidad es mejor que esconder un error. Yo olvidé incluir un par de multas por exceso de velocidad y se lo dije al oficial durante la entrevista. Él actualizó el formulario y seguimos adelante.",
      "El examen de civismo e inglés suele ser la parte más sencilla. Muchos se preocupan por las preguntas de historia, pero la revisión del N-400 y del historial merece preparación seria.",
      "Las noticias pueden causar ansiedad. En mi opinión, si eres cumplido, honesto y llevas documentos, puedes entrar con mucha más calma.",
    ],
    note:
      "Este sitio es educativo y está basado en experiencia personal de preparación. No es asesoría legal. Para historial criminal, impuestos complicados o problemas migratorios, consulta con un abogado de inmigración calificado.",
    libraryEyebrow: "Biblioteca de preparación",
    libraryTitle: "Todo lo necesario para practicar, organizado por momento de entrevista",
    libraryBody:
      "En lugar de enviarte a recursos dispersos, la página principal te da un mapa rápido de la entrevista: civismo, lectura y escritura, revisión del N-400, documentos y confianza para el día.",
    prepTags: [
      "Civismo",
      "Lectura",
      "Escritura",
      "N-400",
      "Impuestos",
      "Citaciones",
      "Documentos",
      "Juramento",
    ],
    libraryCards: [
      {
        icon: "school",
        title: "260 preguntas cívicas",
        body: "Practica preguntas estilo oficial con apoyo bilingüe.",
      },
      {
        icon: "contract_edit",
        title: "Preparación N-400",
        body: "Entiende dónde suelen importar más las preguntas de historial.",
      },
      {
        icon: "folder_open",
        title: "Mentalidad documental",
        body: "Prepara pruebas para impuestos, citaciones, viajes y correcciones.",
      },
    ],
    pillarsEyebrow: "Preparación para la entrevista",
    lessonsEyebrow: "Aprendizajes personales",
    toolsEyebrow: "Cómo usar las herramientas gratis",
    toolsTitle: "Practica en el mismo orden en que suele avanzar la entrevista",
    toolsBody:
      "Empieza con civismo, luego practica lectura y escritura, después revisa tus respuestas del N-400 y documentos para el día de la entrevista. Las herramientas gratis están organizadas para apoyar esa rutina sin crear una cuenta.",
    checklistCardEyebrow: "Día de entrevista",
    checklistCardTitle: "Checklist antes de salir",
    checklistCardBody:
      "Revisa documentos, horario, identificación y preparación final para llegar con más calma.",
    checklistCardCta: "Abrir checklist",
  },
};

export default function App() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const content = homeContent[lang];
  const pageWidth = "mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6";
  const heroOffers = t.heroFeatures.map((label, index) => ({
    label,
    icon: offerIcons[index],
  }));
  const [activeHeroFeature, setActiveHeroFeature] = useState(
    heroOffers.length + 1
  );
  const [isHeroLoopResetting, setIsHeroLoopResetting] = useState(false);
  const loopedHeroOffers = [...heroOffers, ...heroOffers, ...heroOffers];

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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroFeature((current) => current + 1);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [heroOffers.length]);

  useEffect(() => {
    if (activeHeroFeature < heroOffers.length * 2) return undefined;

    const timeout = window.setTimeout(() => {
      setIsHeroLoopResetting(true);
      setActiveHeroFeature((current) => current - heroOffers.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsHeroLoopResetting(false);
        });
      });
    }, 720);

    return () => window.clearTimeout(timeout);
  }, [activeHeroFeature, heroOffers.length]);

  return (
    <div className={pageWidth}>
      <header className="landing-hero full-bleed relative min-h-[82svh] overflow-hidden px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[calc(82svh-4rem)] max-w-screen-2xl gap-8 px-3 sm:px-6 lg:grid-cols-[0.95fr_0.85fr] lg:items-center lg:px-10">
          <div className="hero-copy max-w-4xl space-y-6 pt-8 sm:pt-12 lg:pt-0">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#c61f1f]" />
              {t.heroTag}
            </span>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-6xl xl:text-7xl">
              {t.heroTitle}{" "}
              <span className="text-[#9fc5ff]">
                {t.heroTitleAccent}
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-semibold text-white/90 leading-relaxed sm:text-xl">
              {t.heroBody}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/civics"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-black text-slate-950 transition hover:bg-[#f1f5f9]"
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

          <div className="hero-offer-showcase hero-feature-menu reveal reveal-5 overflow-hidden rounded-2xl bg-transparent p-3 lg:ml-auto lg:max-w-sm">
            <div className="relative z-10">
              <div className="hero-feature-window relative h-[330px] overflow-hidden">
                <div
                  className={`hero-feature-list ${
                    isHeroLoopResetting ? "is-resetting" : ""
                  }`}
                  style={{
                    transform: `translateY(calc(165px - ${
                      activeHeroFeature * 64 + 32
                    }px))`,
                  }}
                >
                {loopedHeroOffers.map((item, index) => {
                  const isActive = index === activeHeroFeature;

                  return (
                    <div
                      key={`${item.label}-${index}`}
                      className={`hero-feature-row flex h-16 items-center justify-center gap-4 ${
                        isActive ? "is-active" : ""
                      }`}
                    >
                      <span
                        className={`hero-feature-pointer ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-xl font-black leading-tight transition sm:text-2xl ${
                          isActive ? "text-white" : "text-white/30"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur lg:flex">
            <span>{t.scrollHint}</span>
            <span className="material-symbols-outlined text-base">south</span>
          </div>
        </div>
      </header>

      <section className="w-full py-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#101827] p-5 text-white sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(246,196,83,0.22),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(11,80,218,0.28),transparent_30%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c453]">
                {content.libraryEyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                {content.libraryTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/80">
                {content.libraryBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {content.prepTags.map((tag, index) => (
                <span
                  key={tag}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-black",
                    index % 3 === 0 && "border-[#7fb0ff]/40 bg-[#0b50da]/20 text-[#cfe0ff]",
                    index % 3 === 1 && "border-[#f6c453]/40 bg-[#f6c453]/20 text-[#ffe3a0]",
                    index % 3 === 2 && "border-[#8bd6a3]/40 bg-[#1f7a3e]/20 text-[#d7f7df]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-7 grid gap-3 md:grid-cols-3">
            {content.libraryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur"
              >
                <span className="material-symbols-outlined text-2xl text-[#f6c453]">
                  {card.icon}
                </span>
                <h3 className="mt-4 text-xl font-black leading-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/75">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="reveal-on-scroll" data-reveal>
          <div className="mb-6 grid gap-4 border-t border-slate-300 pt-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
                Interview Flow
              </p>
              <h2 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                {t.spotlightTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-700 lg:ml-auto">
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
                className="scroll-feature group relative min-h-[330px] overflow-hidden rounded-lg bg-slate-950 p-6 text-white reveal-on-scroll"
                data-reveal
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(2, 6, 23, 0.98) 0%, rgba(2, 6, 23, 0.86) 34%, rgba(2, 6, 23, 0.32) 72%, rgba(2, 6, 23, 0.1) 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex min-h-[282px] max-w-lg flex-col justify-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#0b50da]">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-white/75">
                    Step {idx + 1}
                  </p>
                  <h3 className="mt-2 text-3xl font-black leading-tight">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-base font-medium leading-relaxed text-white/90">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7 reveal">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-lg bg-[#f4f8ef] p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
              {content.founderEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
              {content.founderTitle}
            </h2>
            <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-slate-700">
              <p>{content.founderBody[0]}</p>
              <details className="group rounded-lg border border-[#d7e3d3] bg-white/70 p-4">
                <summary className="cursor-pointer text-sm font-black text-[#1f7a3e]">
                  {content.readFounder}
                </summary>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                  {content.founderBody[1]}
                </p>
              </details>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[#0f2f2a] p-5 text-white sm:p-6">
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: 0.18 }}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15, 47, 42, 0.98) 0%, rgba(18, 62, 55, 0.94) 52%, rgba(24, 52, 77, 0.88) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c453]">
                {content.experienceEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                {content.experienceTitle}
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-white/90">
                {content.experienceShort}
              </p>
              <details className="mt-5 rounded-lg border border-white/15 bg-white/10 p-4">
                <summary className="cursor-pointer text-sm font-black text-white">
                  {content.readExperience}
                </summary>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/80">
                  {content.experienceBody}
                </p>
                <p className="mt-3 border-t border-white/10 pt-3 text-xs font-semibold leading-relaxed text-white/70">
                  {content.note}
                </p>
              </details>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
            {content.pillarsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            {content.pillarsTitle}
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={[
                "rounded-xl border bg-white p-6",
                index === 0 && "border-l-4 border-l-[#0b50da]",
                index === 1 && "border-l-4 border-l-[#b26b00]",
                index === 2 && "border-l-4 border-l-[#6d3bbd]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-lg text-sm font-black",
                  index === 0 && "bg-[#0b50da] text-white",
                  index === 1 && "bg-[#b26b00] text-white",
                  index === 2 && "bg-[#6d3bbd] text-white",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="text-sm font-black">{index + 1}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-slate-700">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full py-12">
        <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="relative overflow-hidden rounded-xl bg-[#123e37] p-6 text-white sm:p-8">
            <img
              src={checklistImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-24"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#123e37]/95 via-[#123e37]/85 to-[#0b50da]/60" />
            <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c453]">
              {content.lessonsEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              {content.lessonsTitle}
            </h2>
            <Link
              to="/guides"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-black text-slate-950"
            >
              {t.guidesCta}
            </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.lessons.map((lesson, index) => (
              <div
                key={lesson}
                className={[
                  "flex gap-3 rounded-xl border bg-white p-4",
                  index % 2 === 0 ? "border-[#d7e3d3]" : "border-[#d6e0f7]",
                ].join(" ")}
              >
                <span className="material-symbols-outlined mt-0.5 text-xl text-[#1f7a3e]">
                  check_circle
                </span>
                <p className="text-sm font-semibold leading-relaxed text-slate-700">
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="rounded-xl bg-[#fff7df] px-5 py-7 sm:px-8 sm:py-9">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
            {content.toolsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            {content.toolsTitle}
          </h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-slate-700">
            {content.toolsBody}
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 items-stretch">
          <div className="editorial-panel rounded-xl p-6 sm:p-8 h-full flex flex-col reveal">
            <div className="space-y-4 flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-950">{t.sectionTitle}</h2>
              <p className="text-base font-medium leading-relaxed text-slate-700">{t.sectionBody}</p>
              <div className="grid gap-3 sm:grid-cols-2 flex-1">
                {[t.offer1, t.offer2, t.offer3, t.offer4, t.offer5, t.offer6, t.offer7, t.offer8].map(
                  (item, index) => (
                    <div key={item} className="flex items-start gap-3 py-2">
                      <span className="material-symbols-outlined text-[#0b50da]">
                        {offerIcons[index]}
                      </span>
                      <span className="text-base font-semibold leading-snug text-slate-800">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-auto pt-4 border-t border-slate-200 text-sm font-bold text-slate-700">
                {t.sectionFoot}
              </div>
            </div>
          </div>
          <div className="editorial-dark rounded-xl p-6 sm:p-8 text-white h-full flex flex-col reveal">
            <div className="space-y-3">
              <h3 className="text-3xl font-black">{t.priceTitle}</h3>
              <p className="text-base font-medium text-white/90 leading-relaxed">{t.priceBody}</p>
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
          <Link
            to="/interview-day"
            className="group relative overflow-hidden rounded-xl bg-white reveal min-h-[260px] sm:min-h-[320px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${checklistImage})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                {content.checklistCardEyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-black">
                {content.checklistCardTitle}
              </h3>
              <p className="mt-2 text-base font-medium text-white/90">
                {content.checklistCardBody}
              </p>
              <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-black text-slate-950">
                <span>{content.checklistCardCta}</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
        </div>
      </section>

      <section className="w-full pb-14">
        <div className="rounded-xl border border-[#bed5ff] bg-[#eef4ff] p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between reveal">
          <div>
            <h3 className="text-2xl font-black text-slate-950">{t.finalTitle}</h3>
            <p className="text-base font-medium text-slate-700 mt-2">{t.finalBody}</p>
          </div>
          <Link
            to="/civics"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-950 px-8 text-white text-base font-black transition hover:bg-slate-800"
          >
            {t.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
