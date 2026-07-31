import { Link, useOutletContext } from "react-router-dom";
import civicsImage from "../assets/civics-practice.jpg";
import flashcardsImage from "../assets/flashcards-1.jpg";
import interviewPrepImage from "../assets/interview-prep-1.jpg";
import mockInterviewImage from "../assets/interview-prep-3.jpg";
import spanishStudyImage from "../assets/interview-prep-4.jpg";
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
    sourcesCta: "Review our sources and editorial standards",
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
        title: "N-400 Interview Questions",
        body:
          "Practice common N-400 interview questions about travel, work, taxes, eligibility, and personal history.",
        href: "/n400-interview-questions",
        image: interviewPrepImage,
      },
      {
        title: "US Citizenship Mock Interview",
        body:
          "Walk through a realistic interview flow from check-in to civics, English, N-400 review, and decision.",
        href: "/mock-interview",
        image: mockInterviewImage,
      },
      {
        title: "Citizenship Test Practice",
        body:
          "Free civics test practice for official-style citizenship questions and interview recall.",
        href: "/civics-test-practice",
        image: flashcardsImage,
      },
      {
        title: "Citizenship Civics Questions and Answers",
        body:
          "A plain-English guide for applicants searching for civics questions, answers, and spoken recall practice.",
        href: "/citizenship-civics-questions-and-answers",
        image: civicsImage,
      },
      {
        title: "Citizenship Test in Spanish",
        body:
          "Bilingual study support for understanding citizenship test topics in Spanish and English.",
        href: "/citizenship-test-spanish",
        image: spanishStudyImage,
      },
      {
        title: "Citizenship Interview Checklist",
        body:
          "A focused checklist for documents, timing, final review, and interview-day confidence.",
        href: "/citizenship-interview-checklist",
        image: checklistImage,
      },
      {
        title: "My Citizenship Interview Experience",
        body:
          "A first-person reflection on what mattered most: N-400 review, documents, honesty, and calm answers.",
        href: "/citizenship-interview-experience",
        image: heroImage,
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
    sourcesCta: "Ver fuentes y estándares editoriales",
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
        title: "Preguntas de entrevista N-400",
        body:
          "Practica preguntas comunes sobre viajes, trabajo, impuestos, elegibilidad e historial personal.",
        href: "/n400-interview-questions",
        image: interviewPrepImage,
      },
      {
        title: "Mock interview de ciudadanía",
        body:
          "Repasa un flujo realista desde el registro hasta civismo, inglés, revisión N-400 y decisión.",
        href: "/mock-interview",
        image: mockInterviewImage,
      },
      {
        title: "Práctica del examen de ciudadanía",
        body:
          "Práctica gratuita de preguntas de civismo para recordar respuestas durante la entrevista.",
        href: "/civics-test-practice",
        image: flashcardsImage,
      },
      {
        title: "Preguntas y respuestas de civismo",
        body:
          "Una guía clara para encontrar preguntas, respuestas y práctica hablada para ciudadanía.",
        href: "/citizenship-civics-questions-and-answers",
        image: civicsImage,
      },
      {
        title: "Examen de ciudadanía en español",
        body:
          "Apoyo bilingüe para entender temas de ciudadanía en español e inglés.",
        href: "/citizenship-test-spanish",
        image: spanishStudyImage,
      },
      {
        title: "Checklist para la entrevista de ciudadanía",
        body:
          "Una lista enfocada en documentos, tiempo, repaso final y confianza para la entrevista.",
        href: "/citizenship-interview-checklist",
        image: checklistImage,
      },
      {
        title: "Mi experiencia en la entrevista de ciudadanía",
        body:
          "Una reflexión en primera persona sobre N-400, documentos, honestidad y respuestas calmadas.",
        href: "/citizenship-interview-experience",
        image: heroImage,
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
                alt={guide.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
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
        <Link
          to="/sources"
          className="mt-5 inline-flex text-sm font-black text-[#0b50da] underline"
        >
          {t.sourcesCta}
        </Link>
      </div>
    </section>
  );
}
