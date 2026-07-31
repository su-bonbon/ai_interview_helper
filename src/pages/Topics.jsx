import { Link, useOutletContext } from "react-router-dom";
import EditorialTrustBlock from "../components/EditorialTrustBlock.jsx";

const topicGroups = {
  en: {
    eyebrow: "Topic hub",
    title: "U.S. Citizenship Interview Prep Topics",
    intro:
      "Use this page as a crawlable study map for the main citizenship interview topics on US Citizenship Prep. Each link points to a focused resource with practical guidance, examples, and free practice tools.",
    groups: [
      {
        title: "Civics Questions and Answers",
        body:
          "Practice and understand the civics portion of the naturalization interview, including questions, answers, flashcards, and spoken recall.",
        links: [
          ["Citizenship civics questions and answers", "/citizenship-civics-questions-and-answers"],
          ["Citizenship test practice", "/civics-test-practice"],
          ["Civics flashcards", "/civics"],
          ["How to study for the civics test", "/guides/civics-test"],
        ],
      },
      {
        title: "N-400 and Mock Interview Practice",
        body:
          "Prepare for the personal interview conversation: N-400 review, travel, work, taxes, citations, yes/no questions, and interview sequence.",
        links: [
          ["N-400 interview questions", "/n400-interview-questions"],
          ["US citizenship mock interview", "/mock-interview"],
          ["Citizenship interview study plan", "/study-plan"],
          ["My citizenship interview experience", "/citizenship-interview-experience"],
        ],
      },
      {
        title: "English, Documents, and Interview Day",
        body:
          "Review the English reading and writing test, document planning, interview-day checklist, and practical preparation notes.",
        links: [
          ["Reading and writing test expectations", "/guides/reading-writing"],
          ["Citizenship interview checklist", "/citizenship-interview-checklist"],
          ["Interview day checklist", "/interview-day"],
          ["Citizenship interview FAQ", "/faq"],
        ],
      },
      {
        title: "Bilingual and Trust Resources",
        body:
          "Find Spanish-supported study guidance, editorial standards, privacy information, and contact paths for corrections or accessibility issues.",
        links: [
          ["Citizenship test practice in Spanish", "/citizenship-test-spanish"],
          ["Sources and editorial standards", "/sources"],
          ["About US Citizenship Prep", "/about"],
          ["Contact US Citizenship Prep", "/contact"],
        ],
      },
    ],
  },
  es: {
    eyebrow: "Mapa de temas",
    title: "Temas para preparar la entrevista de ciudadanía",
    intro:
      "Usa esta página como un mapa de estudio para los temas principales de US Citizenship Prep. Cada enlace lleva a un recurso enfocado con guía práctica, ejemplos y herramientas gratis.",
    groups: [
      {
        title: "Preguntas y respuestas de civismo",
        body:
          "Practica y entiende la parte de civismo de la entrevista de naturalización: preguntas, respuestas, tarjetas y práctica hablada.",
        links: [
          ["Preguntas y respuestas de civismo", "/citizenship-civics-questions-and-answers"],
          ["Práctica del examen de ciudadanía", "/civics-test-practice"],
          ["Tarjetas de civismo", "/civics"],
          ["Cómo estudiar civismo", "/guides/civics-test"],
        ],
      },
      {
        title: "N-400 y mock interview",
        body:
          "Prepara la conversación personal: revisión N-400, viajes, trabajo, impuestos, citaciones, preguntas sí/no y flujo de entrevista.",
        links: [
          ["Preguntas de entrevista N-400", "/n400-interview-questions"],
          ["Mock interview de ciudadanía", "/mock-interview"],
          ["Plan de estudio", "/study-plan"],
          ["Mi experiencia de entrevista", "/citizenship-interview-experience"],
        ],
      },
      {
        title: "Inglés, documentos y día de entrevista",
        body:
          "Revisa lectura y escritura en inglés, documentos, checklist del día de entrevista y preparación práctica.",
        links: [
          ["Lectura y escritura", "/guides/reading-writing"],
          ["Checklist de entrevista", "/citizenship-interview-checklist"],
          ["Día de entrevista", "/interview-day"],
          ["Preguntas frecuentes", "/faq"],
        ],
      },
      {
        title: "Recursos bilingües y confianza",
        body:
          "Encuentra guía en español, estándares editoriales, privacidad y contacto para correcciones o accesibilidad.",
        links: [
          ["Examen de ciudadanía en español", "/citizenship-test-spanish"],
          ["Fuentes y estándares", "/sources"],
          ["Acerca de US Citizenship Prep", "/about"],
          ["Contacto", "/contact"],
        ],
      },
    ],
  },
};

export default function Topics() {
  const { lang } = useOutletContext();
  const t = topicGroups[lang] || topicGroups.en;

  return (
    <article className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0b50da]">
          {t.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{t.intro}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {t.groups.map((group) => (
          <section key={group.title} className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-2xl font-black text-slate-950">{group.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{group.body}</p>
            <div className="mt-5 grid gap-3">
              {group.links.map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="flex items-center justify-between gap-4 rounded-lg border border-black/10 bg-slate-50 p-4 text-sm font-black text-[#0b50da] transition hover:bg-[#eef4ff]"
                >
                  <span>{label}</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <EditorialTrustBlock lang={lang} />
      </div>
    </article>
  );
}
