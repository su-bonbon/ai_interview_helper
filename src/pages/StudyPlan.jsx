import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const copy = {
  en: {
    title: "Study Plan",
    subtitle: "A simple, account-free way to organize your interview prep.",
    dateTitle: "Interview calendar",
    dateBody: "Add your interview date to keep your study timeline visible.",
    dateLabel: "Interview date",
    saveDate: "Save date",
    clearDate: "Clear",
    daysLabel: "Days to interview",
    noDate: "Set a date when you receive your interview notice.",
    milestoneTitle: "Next milestone",
    milestoneBody: "Complete one focused practice session today.",
    startPractice: "Start civics practice",
    cardsTitle: "Practice areas",
    localNote:
      "Your date is saved only in this browser. No account is required.",
    cards: [
      {
        title: "Civics Questions",
        body: "Practice flashcards, learn mode, and a timed test.",
        icon: "menu_book",
        href: "/civics",
      },
      {
        title: "Real Interview Flow",
        body: "Review the common sequence of the interview from check-in to decision.",
        icon: "assignment_turned_in",
        href: "/faq",
      },
      {
        title: "Yes/No Questions",
        body: "Prepare for eligibility questions that can feel confusing under pressure.",
        icon: "help",
        href: "/faq",
      },
      {
        title: "Officer Follow-ups",
        body: "Practice staying calm when an officer asks a question in a new way.",
        icon: "psychology",
        href: "/faq",
      },
      {
        title: "Interview Day Checklist",
        body: "Use a practical list for documents, timing, and final review.",
        icon: "checklist",
        href: "/faq",
      },
      {
        title: "Answer Practice",
        body: "Use short prompts to answer more clearly and confidently.",
        icon: "quiz",
        href: "/civics",
      },
    ],
  },
  es: {
    title: "Plan de estudio",
    subtitle: "Una forma simple, sin cuenta, para organizar tu preparación.",
    dateTitle: "Calendario de entrevista",
    dateBody: "Agrega tu fecha de entrevista para ver tu línea de estudio.",
    dateLabel: "Fecha de entrevista",
    saveDate: "Guardar fecha",
    clearDate: "Borrar",
    daysLabel: "Días para la entrevista",
    noDate: "Agrega una fecha cuando recibas tu aviso de entrevista.",
    milestoneTitle: "Siguiente meta",
    milestoneBody: "Completa hoy una sesión de práctica enfocada.",
    startPractice: "Practicar civismo",
    cardsTitle: "Áreas de práctica",
    localNote:
      "Tu fecha se guarda solo en este navegador. No necesitas una cuenta.",
    cards: [
      {
        title: "Preguntas de civismo",
        body: "Practica tarjetas, modo aprender y examen cronometrado.",
        icon: "menu_book",
        href: "/civics",
      },
      {
        title: "Flujo de entrevista real",
        body: "Revisa la secuencia común desde el registro hasta la decisión.",
        icon: "assignment_turned_in",
        href: "/faq",
      },
      {
        title: "Preguntas Sí/No",
        body: "Prepárate para preguntas de elegibilidad que pueden confundir bajo presión.",
        icon: "help",
        href: "/faq",
      },
      {
        title: "Seguimientos del oficial",
        body: "Practica mantener la calma cuando la pregunta cambia de forma.",
        icon: "psychology",
        href: "/faq",
      },
      {
        title: "Checklist del día",
        body: "Usa una lista práctica de documentos, tiempo y repaso final.",
        icon: "checklist",
        href: "/faq",
      },
      {
        title: "Práctica de respuestas",
        body: "Usa prompts cortos para responder con más claridad y confianza.",
        icon: "quiz",
        href: "/civics",
      },
    ],
  },
};

const storageKey = "citizenship-success-interview-date";

export default function StudyPlan() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const [interviewDate, setInterviewDate] = useState("");

  useEffect(() => {
    setInterviewDate(window.localStorage.getItem(storageKey) || "");
  }, []);

  const daysToInterview = useMemo(() => {
    if (!interviewDate) return null;
    const [year, month, day] = interviewDate.split("-").map(Number);
    if (!year || !month || !day) return null;
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const target = new Date(year, month - 1, day);
    return Math.max(Math.ceil((target.getTime() - start.getTime()) / 86400000), 0);
  }, [interviewDate]);

  const saveDate = () => {
    if (!interviewDate) return;
    window.localStorage.setItem(storageKey, interviewDate);
  };

  const clearDate = () => {
    window.localStorage.removeItem(storageKey);
    setInterviewDate("");
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Plan</p>
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">{t.dateTitle}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.dateBody}</p>
            </div>
            <span className="material-symbols-outlined text-3xl text-[#0b50da]">
              calendar_month
            </span>
          </div>
          <label className="mt-6 block text-xs uppercase tracking-[0.2em] text-slate-500">
            {t.dateLabel}
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              type="date"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm"
              value={interviewDate}
              onChange={(event) => setInterviewDate(event.target.value)}
            />
            <button
              type="button"
              onClick={saveDate}
              className="h-11 rounded-xl bg-[#0b50da] px-5 text-sm font-bold text-white"
            >
              {t.saveDate}
            </button>
            <button
              type="button"
              onClick={clearDate}
              className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600"
            >
              {t.clearDate}
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">{t.localNote}</p>
        </div>

        <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-[#0b50da] to-[#0a2f6b] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold text-white/75">{t.milestoneTitle}</p>
          <p className="mt-3 text-3xl font-black">
            {daysToInterview === null ? t.noDate : `${daysToInterview} ${t.daysLabel}`}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{t.milestoneBody}</p>
          <Link
            to="/civics"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-bold text-[#0b50da]"
          >
            {t.startPractice}
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-black">{t.cardsTitle}</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-11 w-11 rounded-xl bg-[#0b50da]/10 text-[#0b50da] flex items-center justify-center">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
