import { Link, useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "About US Citizenship Prep",
    subtitle:
      "A free bilingual study resource built from real naturalization preparation experience.",
    founderTitle: "Why I built this",
    founderBody:
      "I built US Citizenship Prep because I went through the immigrant path myself. After becoming a lawful permanent resident, preparing for naturalization, and sitting for the citizenship interview, I realized how scattered the preparation process can feel. The civics questions are easy to find, but the harder part is often understanding the whole interview: your N-400 answers, documents, travel history, taxes, citations, English reading and writing, and the pressure of answering clearly in front of an officer. This site turns the resources and habits that helped me into a free toolkit for other applicants and families.",
    experienceTitle: "What my interview taught me",
    experienceBody:
      "My own interview reinforced a simple lesson: preparation is not only memorizing civics answers. The officer may review your application carefully, ask about updates since filing, and expect honest, consistent answers. I brought documentation for topics that could have raised questions, including tax payment information, and I corrected small omissions instead of trying to hide them. That experience shaped the way this site is organized: study the test, but also prepare your story, your documents, and your calm answer habits.",
    experienceCta: "Read the full interview experience",
    principlesTitle: "The site is built around three preparation habits",
    principles: [
      "Practice the test, but also review your own application.",
      "Use official resources, then turn them into a realistic study routine.",
      "Prepare honest short answers instead of memorized speeches.",
    ],
    detailsEyebrow: "What this means in practice",
    sections: [
      {
        title: "Our purpose",
        body:
          "US Citizenship Prep helps applicants practice civics questions, understand the interview flow, and prepare with a steady study routine. The site focuses on clear explanations, realistic prompts, and bilingual support for families who want a calmer preparation process without paying for a basic study tool.",
      },
      {
        title: "What we publish",
        body:
          "We publish civics flashcards, N-400 question practice, reading and writing expectations, yes/no question explanations, officer follow-up prompts, checklists, and frequently asked questions. Each page is designed around a practical interview task instead of a generic summary.",
      },
      {
        title: "How we use official information",
        body:
          "USCIS remains the official source for forms, eligibility rules, and test policy. Our role is to help applicants understand how to study, how to organize preparation, and when a topic may require official review or legal advice.",
      },
      {
        title: "Important note",
        body:
          "We are not a law firm, government agency, or USCIS representative. The information on this site is for study support only and should not be treated as legal advice. Applicants with arrests, complicated immigration history, serious citations, or uncertain eligibility should speak with a qualified immigration attorney.",
      },
    ],
  },
  es: {
    title: "Acerca de US Citizenship Prep",
    subtitle:
      "Un recurso bilingüe y gratuito creado a partir de experiencia real de preparación para naturalización.",
    founderTitle: "Por qué creé este sitio",
    founderBody:
      "Creé US Citizenship Prep porque yo también pasé por el camino migratorio. Después de ser residente permanente, prepararme para la naturalización y asistir a la entrevista de ciudadanía, entendí lo disperso que puede sentirse el proceso. Las preguntas de civismo son fáciles de encontrar, pero lo difícil muchas veces es entender toda la entrevista: respuestas del N-400, documentos, viajes, impuestos, citaciones, lectura y escritura en inglés, y la presión de responder claramente frente a un oficial.",
    experienceTitle: "Lo que aprendí de mi entrevista",
    experienceBody:
      "Mi entrevista me enseñó algo simple: prepararse no es solo memorizar respuestas de civismo. El oficial puede revisar la solicitud con cuidado, preguntar por cambios desde que aplicaste y esperar respuestas honestas y consistentes. Por eso este sitio organiza la preparación alrededor del examen, pero también de tu historia, tus documentos y la práctica de responder con calma.",
    experienceCta: "Leer la experiencia completa",
    principlesTitle: "El sitio se basa en tres hábitos de preparación",
    principles: [
      "Practica el examen, pero también revisa tu propia solicitud.",
      "Usa recursos oficiales y conviértelos en una rutina realista.",
      "Prepara respuestas honestas y breves en vez de discursos memorizados.",
    ],
    detailsEyebrow: "Qué significa en la práctica",
    sections: [
      {
        title: "Nuestro propósito",
        body:
          "US Citizenship Prep ayuda a los solicitantes a practicar preguntas cívicas, entender el flujo de la entrevista y prepararse con una rutina constante. El sitio ofrece explicaciones claras, prompts realistas y apoyo bilingüe para familias que desean estudiar con más calma sin pagar por una herramienta básica.",
      },
      {
        title: "Qué publicamos",
        body:
          "Publicamos tarjetas de civismo, práctica de preguntas N-400, lectura y escritura, explicaciones de preguntas sí/no, preguntas de seguimiento del oficial, checklists y preguntas frecuentes. Cada página se organiza alrededor de una tarea real de la entrevista.",
      },
      {
        title: "Cómo usamos información oficial",
        body:
          "USCIS sigue siendo la fuente oficial para formularios, reglas de elegibilidad y política del examen. Nuestro papel es ayudar a estudiar, organizar la preparación y reconocer cuándo un tema necesita revisión oficial o asesoría legal.",
      },
      {
        title: "Nota importante",
        body:
          "No somos un bufete de abogados, una agencia gubernamental ni representantes de USCIS. La información de este sitio es solo apoyo educativo y no debe considerarse asesoría legal. Personas con arrestos, historial migratorio complicado, citaciones serias o elegibilidad incierta deberían hablar con un abogado de inmigración.",
      },
    ],
  },
};

export default function About() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{t.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div>
          <article className="rounded-lg border border-black/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0b50da]">
              Founder Note
            </p>
            <h2 className="mt-3 text-3xl font-black">{t.founderTitle}</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">{t.founderBody}</p>
          </article>

          <article className="mt-6 rounded-lg border border-black/10 bg-[#f5f7fb] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              Interview Lesson
            </p>
            <h2 className="mt-3 text-3xl font-black">{t.experienceTitle}</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{t.experienceBody}</p>
            <Link
              to="/citizenship-interview-experience"
              className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0b50da] underline"
            >
              {t.experienceCta}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </article>

          <div className="mt-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              {t.detailsEyebrow}
            </p>
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
              {t.sections.map((section) => (
                <div
                  key={section.title}
                  className="h-full rounded-lg border border-black/10 bg-white p-6"
                >
                  <h2 className="text-xl font-black">{section.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-lg border border-black/10 bg-slate-950 p-6 text-white">
            <h2 className="text-2xl font-black">{t.principlesTitle}</h2>
            <ul className="mt-6 space-y-4">
              {t.principles.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-[#7cc6ff]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 rounded-lg border border-black/10 bg-white p-6">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Independent Resource
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              US Citizenship Prep is educational, free to use, and independent from USCIS.
              Official forms, rules, and eligibility questions should always be verified with
              USCIS or a qualified immigration attorney when legal risk is involved.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
