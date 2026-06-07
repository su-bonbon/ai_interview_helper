import { Link, useOutletContext } from "react-router-dom";
import civicsImage from "../assets/civics-practice.jpg";
import readingImage from "../assets/reading-writing-practice.jpg";
import checklistImage from "../assets/interview-checklist.jpg";
import heroImage from "../assets/hero-citizenship-prep.jpg";

const copy = {
  en: {
    title: "Citizenship Interview Guides",
    subtitle:
      "Original study guides for the parts of the naturalization interview that applicants most often worry about.",
    methodTitle: "How these guides are different",
    method:
      "Each guide is written around a real preparation task: what to understand, what to practice, what commonly causes stress, and how to build a routine before interview day. The goal is not to collect random tips, but to give applicants a clear way to study and make decisions about their daily practice.",
    read: "Read guide",
    guides: [
      {
        title: "How to Study for the Civics Test",
        body:
          "A practical method for learning civics answers without relying only on memorization.",
        href: "/guides/civics-test",
        image: civicsImage,
      },
      {
        title: "Reading and Writing Test Expectations",
        body:
          "What the English sentence portion is testing and how to practice calmly.",
        href: "/guides/reading-writing",
        image: readingImage,
      },
      {
        title: "Preparing for the N-400 Review",
        body:
          "How to review personal history, travel, work, and eligibility answers before the interview.",
        href: "/guides/n400-review",
        image: heroImage,
      },
      {
        title: "Interview Day Checklist",
        body:
          "A clear preparation list for documents, timing, mindset, and final review.",
        href: "/guides/interview-day",
        image: checklistImage,
      },
    ],
  },
  es: {
    title: "Guías para la entrevista de ciudadanía",
    subtitle:
      "Guías originales para las partes de la entrevista de naturalización que más preocupan a los solicitantes.",
    methodTitle: "Qué hace diferentes a estas guías",
    method:
      "Cada guía se organiza alrededor de una tarea real de preparación: qué entender, qué practicar, qué suele causar estrés y cómo crear una rutina antes de la entrevista. La meta no es juntar consejos sueltos, sino dar una forma clara de estudiar y tomar decisiones cada día.",
    read: "Leer guía",
    guides: [
      {
        title: "Cómo estudiar para el examen de civismo",
        body:
          "Un método práctico para aprender respuestas de civismo sin depender solo de la memorización.",
        href: "/guides/civics-test",
        image: civicsImage,
      },
      {
        title: "Qué esperar en lectura y escritura",
        body:
          "Qué evalúa la parte de oraciones en inglés y cómo practicar con calma.",
        href: "/guides/reading-writing",
        image: readingImage,
      },
      {
        title: "Preparación para la revisión del N-400",
        body:
          "Cómo repasar historial personal, viajes, trabajo y elegibilidad antes de la entrevista.",
        href: "/guides/n400-review",
        image: heroImage,
      },
      {
        title: "Checklist del día de entrevista",
        body:
          "Una lista clara para documentos, horarios, mentalidad y repaso final.",
        href: "/guides/interview-day",
        image: checklistImage,
      },
    ],
  },
};

export default function Guides() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Guides</p>
        <h1 className="mt-3 text-4xl font-black">{t.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{t.subtitle}</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {t.guides.map((guide) => (
          <Link
            key={guide.href}
            to={guide.href}
            className="group overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={guide.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-black">{guide.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{guide.body}</p>
              <p className="mt-5 text-sm font-black text-[#0b50da]">{t.read}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-black/10 bg-white p-6">
        <h2 className="text-2xl font-black">{t.methodTitle}</h2>
        <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
          {t.method}
        </p>
      </div>
    </section>
  );
}
