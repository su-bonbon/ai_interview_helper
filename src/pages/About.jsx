import { useOutletContext } from "react-router-dom";

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
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About</p>
        <h1 className="mt-3 text-3xl font-black">{t.title}</h1>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed">{t.subtitle}</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black">{t.founderTitle}</h2>
            <p className="mt-3 leading-8 text-slate-700">{t.founderBody}</p>
          </article>
          <article className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black">{t.experienceTitle}</h2>
            <p className="mt-3 leading-8 text-slate-700">{t.experienceBody}</p>
          </article>
        </div>
        <div className="mt-10 grid gap-5">
          {t.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-lg border border-black/10 bg-white p-6"
            >
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
