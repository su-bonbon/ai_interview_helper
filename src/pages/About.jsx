import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "About Citizenship Success",
    subtitle:
      "A free bilingual study resource for people preparing for the U.S. citizenship interview.",
    sections: [
      {
        title: "Our purpose",
        body:
          "Citizenship Success helps applicants practice civics questions, understand the interview flow, and prepare with a steady study routine. The site focuses on clear explanations, realistic prompts, and bilingual support for families who want a calmer preparation process.",
      },
      {
        title: "What we publish",
        body:
          "We provide civics flashcards, interview preparation guidance, reading and writing expectations, checklists, and frequently asked questions. Our content is educational and designed to help users study more confidently.",
      },
      {
        title: "Important note",
        body:
          "We are not a law firm, government agency, or USCIS representative. The information on this site is for study support only and should not be treated as legal advice.",
      },
    ],
  },
  es: {
    title: "Acerca de Citizenship Success",
    subtitle:
      "Un recurso bilingüe y gratuito para personas que se preparan para la entrevista de ciudadanía de EE. UU.",
    sections: [
      {
        title: "Nuestro propósito",
        body:
          "Citizenship Success ayuda a los solicitantes a practicar preguntas cívicas, entender el flujo de la entrevista y prepararse con una rutina constante. El sitio ofrece explicaciones claras, prompts realistas y apoyo bilingüe para familias que desean estudiar con más calma.",
      },
      {
        title: "Qué publicamos",
        body:
          "Ofrecemos tarjetas de civismo, orientación para la entrevista, expectativas de lectura y escritura, listas de verificación y preguntas frecuentes. Nuestro contenido es educativo y está diseñado para estudiar con más confianza.",
      },
      {
        title: "Nota importante",
        body:
          "No somos un bufete de abogados, una agencia gubernamental ni representantes de USCIS. La información de este sitio es solo apoyo educativo y no debe considerarse asesoría legal.",
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
        <div className="mt-10 grid gap-5">
          {t.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
