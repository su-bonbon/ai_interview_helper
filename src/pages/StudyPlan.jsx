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
    dateSaved: "Interview date saved.",
    dateCleared: "Interview date cleared.",
    chooseDate: "Choose a date first.",
    yesNoTitle: "Yes/No interview prep",
    yesNoSubtitle:
      "Practice the N-400 eligibility questions with calm, truthful answers.",
    yesNoIntro:
      "These questions can feel stressful because some use formal words and some may need a short explanation. The goal is not to memorize a speech. The goal is to understand your own application, answer honestly, and know what documents or details you may need.",
    yesNoRuleTitle: "Simple answer rule",
    yesNoRule:
      "Answer yes or no first. If the truthful answer needs context, add one short sentence and offer documentation when relevant.",
    yesNoWarning:
      "This is educational practice, not legal advice. If your truthful answer involves criminal history, immigration problems, unpaid taxes, or anything you are unsure about, speak with a qualified immigration attorney before the interview.",
    yesNoFocusTitle: "Focus areas",
    yesNoPromptsTitle: "Practice prompts",
    openSection: "Open section",
    hideSection: "Hide section",
    yesNoFocus: [
      {
        title: "Understand the wording",
        body: "Slow down when words sound formal. Ask the officer to repeat or explain if you do not understand.",
        icon: "record_voice_over",
      },
      {
        title: "Prepare short explanations",
        body: "If your answer is yes, practice a clear one-sentence explanation instead of a long story.",
        icon: "short_text",
      },
      {
        title: "Bring proof when needed",
        body: "Taxes, citations, travel, or court-related answers are easier when your documents are organized.",
        icon: "folder_open",
      },
    ],
    yesNoPrompts: [
      "Have you ever claimed to be a U.S. citizen?",
      "Have you ever voted in a U.S. election?",
      "Have you ever failed to file required taxes?",
      "Have you ever been cited, arrested, charged, or convicted?",
      "Have you ever given false information to a government official?",
      "Are you willing to take the Oath of Allegiance?",
    ],
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
        href: "/study-plan#yes-no-practice",
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
    dateSaved: "Fecha de entrevista guardada.",
    dateCleared: "Fecha de entrevista borrada.",
    chooseDate: "Elige una fecha primero.",
    yesNoTitle: "Preparación de preguntas Sí/No",
    yesNoSubtitle:
      "Practica las preguntas de elegibilidad del N-400 con respuestas calmadas y honestas.",
    yesNoIntro:
      "Estas preguntas pueden sentirse estresantes porque algunas usan palabras formales y otras pueden necesitar una explicación breve. La meta no es memorizar un discurso. La meta es entender tu propia solicitud, responder con honestidad y saber qué documentos o detalles podrías necesitar.",
    yesNoRuleTitle: "Regla simple para responder",
    yesNoRule:
      "Responde sí o no primero. Si tu respuesta verdadera necesita contexto, agrega una frase corta y ofrece documentos cuando sea relevante.",
    yesNoWarning:
      "Esta es práctica educativa, no asesoría legal. Si tu respuesta verdadera incluye historial criminal, problemas migratorios, impuestos pendientes o algo que no entiendes bien, habla con un abogado de inmigración calificado antes de la entrevista.",
    yesNoFocusTitle: "Áreas de enfoque",
    yesNoPromptsTitle: "Prompts de práctica",
    openSection: "Abrir sección",
    hideSection: "Ocultar sección",
    yesNoFocus: [
      {
        title: "Entiende las palabras",
        body: "Ve despacio cuando una palabra suene formal. Pide al oficial que repita o explique si no entiendes.",
        icon: "record_voice_over",
      },
      {
        title: "Prepara explicaciones cortas",
        body: "Si tu respuesta es sí, practica una explicación clara de una frase en vez de una historia larga.",
        icon: "short_text",
      },
      {
        title: "Lleva pruebas si hace falta",
        body: "Impuestos, citaciones, viajes o asuntos de corte son más fáciles cuando tus documentos están organizados.",
        icon: "folder_open",
      },
    ],
    yesNoPrompts: [
      "¿Alguna vez dijiste ser ciudadano estadounidense?",
      "¿Alguna vez votaste en una elección de Estados Unidos?",
      "¿Alguna vez no presentaste impuestos requeridos?",
      "¿Alguna vez recibiste una citación, arresto, cargo o condena?",
      "¿Alguna vez diste información falsa a un oficial del gobierno?",
      "¿Estás dispuesto a tomar el Juramento de Lealtad?",
    ],
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
        href: "/study-plan#yes-no-practice",
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
  const [savedDate, setSavedDate] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isYesNoOpen, setIsYesNoOpen] = useState(false);

  useEffect(() => {
    const storedDate = window.localStorage.getItem(storageKey) || "";
    setInterviewDate(storedDate);
    setSavedDate(storedDate);
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
    if (!interviewDate) {
      setStatusMessage(t.chooseDate);
      return;
    }
    window.localStorage.setItem(storageKey, interviewDate);
    setSavedDate(interviewDate);
    setStatusMessage(t.dateSaved);
  };

  const clearDate = () => {
    window.localStorage.removeItem(storageKey);
    setInterviewDate("");
    setSavedDate("");
    setStatusMessage(t.dateCleared);
  };

  const toggleYesNoSection = () => {
    setIsYesNoOpen((current) => {
      const next = !current;

      if (next) {
        window.setTimeout(() => {
          document
            .getElementById("yes-no-practice")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }

      return next;
    });
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
              onChange={(event) => {
                setInterviewDate(event.target.value);
                setStatusMessage("");
              }}
            />
            <button
              type="button"
              onClick={saveDate}
              disabled={!interviewDate}
              className="h-11 rounded-xl bg-[#0b50da] px-5 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:bg-slate-300"
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
          {statusMessage && (
            <p className="mt-4 text-sm font-semibold text-[#1f7a3e]">
              {statusMessage}
            </p>
          )}
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
          {t.cards.map((card) => {
            const isYesNoCard = card.href === "/study-plan#yes-no-practice";
            const cardContent = (
              <>
                <div className="h-11 w-11 rounded-xl bg-[#0b50da]/10 text-[#0b50da] flex items-center justify-center">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
                {isYesNoCard && (
                  <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#0b50da]">
                    <span>{isYesNoOpen ? t.hideSection : t.openSection}</span>
                    <span className="material-symbols-outlined text-lg">
                      {isYesNoOpen ? "expand_less" : "expand_more"}
                    </span>
                  </div>
                )}
              </>
            );

            if (isYesNoCard) {
              return (
                <button
                  key={card.title}
                  type="button"
                  onClick={toggleYesNoSection}
                  className="group rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  aria-expanded={isYesNoOpen}
                  aria-controls="yes-no-practice"
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <Link
                key={card.title}
                to={card.href}
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>

      {isYesNoOpen && (
        <section
          id="yes-no-practice"
          className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#0f2f2a] p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#9fc5ff]">
                N-400
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                {t.yesNoTitle}
              </h2>
              <p className="mt-3 text-base font-semibold leading-relaxed text-white/85">
                {t.yesNoSubtitle}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/75">
                {t.yesNoIntro}
              </p>
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-black text-white">{t.yesNoRuleTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {t.yesNoRule}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">
                {t.yesNoFocusTitle}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {t.yesNoFocus.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b50da]/10 text-[#0b50da]">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <h4 className="mt-4 text-base font-black text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-[#f4f8ef] p-5">
                <h3 className="text-xl font-black text-slate-950">
                  {t.yesNoPromptsTitle}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {t.yesNoPrompts.map((prompt, index) => (
                    <div
                      key={prompt}
                      className="flex gap-3 rounded-xl bg-white p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f7a3e] text-xs font-black text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold leading-relaxed text-slate-700">
                        {prompt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-500">
                {t.yesNoWarning}
              </p>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
