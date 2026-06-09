import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import checklistImage from "../assets/interview-checklist.jpg";

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
    planLabel: "Plan",
    cardsEyebrow: "Toolkit",
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
    commonQuestionsTitle: "Common N-400 interview questions",
    commonQuestionsBody:
      "Use these examples to practice clear answers before interview day. Some questions are simple personal review questions, and some are eligibility or oath questions that may require extra care.",
    followupsTitle: "Officer follow-up practice",
    followupsSubtitle:
      "Practice short, steady answers when the officer asks for one more detail.",
    followupsIntro:
      "Follow-up questions are not always a bad sign. Officers may be checking dates, consistency, documents, or whether you understood the first question. The goal is to stay calm, answer directly, and avoid guessing.",
    followupsFormulaTitle: "Calm answer formula",
    sampleAnswerLabel: "Sample calm answer",
    followupsFormula: [
      "Pause for one breath",
      "Answer the question directly",
      "Add one short detail",
      "Offer a document if it matters",
    ],
    followupsWarning:
      "If a follow-up is about arrests, immigration violations, false claims to citizenship, serious tax issues, or anything you do not understand, prepare with qualified legal help.",
    followupCategories: [
      {
        icon: "flight_takeoff",
        title: "Travel",
        question: "Why were you outside the U.S. for that long?",
        answer:
          "I visited family. I returned before six months and kept my home and ties in the United States.",
      },
      {
        icon: "home_pin",
        title: "Address changes",
        question: "When exactly did you move?",
        answer:
          "I moved in March 2023. My current address is the one listed on my application update.",
      },
      {
        icon: "work",
        title: "Work history",
        question: "Why did you leave that job?",
        answer:
          "I left for a better schedule. My next job started shortly after, and I can explain the dates.",
      },
      {
        icon: "receipt_long",
        title: "Taxes",
        question: "Do you have a payment plan?",
        answer:
          "Yes. I filed my taxes and have an installment agreement. I brought proof of the plan and payments.",
      },
      {
        icon: "confirmation_number",
        title: "Citations",
        question: "What happened with that ticket?",
        answer:
          "It was a speeding ticket. I paid it, and I brought the record in case you need to see it.",
      },
      {
        icon: "edit_document",
        title: "N-400 corrections",
        question: "Why was this not listed before?",
        answer:
          "I misunderstood the question when I filed. I want to correct it now and answer accurately.",
      },
    ],
    fieldOfficeEyebrow: "Anonymous interview story",
    fieldOfficeTitle: "What a real N-400 interview can feel like",
    fieldOfficeBody:
      "This practical map is based on an anonymous recent interview experience. Every case is different, but the sequence helps you picture what interview day can feel like from the door to oath scheduling.",
    fieldOfficeStats: [
      { value: "10 min", label: "early entry window" },
      { value: "20 min", label: "interview length" },
      { value: "6", label: "civics questions asked" },
    ],
    fieldOfficeFlow: [
      {
        icon: "schedule",
        title: "Arrive close to appointment time",
        body: "In this example, entry was allowed about 10 minutes before the appointment.",
      },
      {
        icon: "badge",
        title: "Letter, ID, and security",
        body: "Interview letter and driver's license were checked before airport-style screening.",
      },
      {
        icon: "how_to_reg",
        title: "Reception check-in",
        body: "Reception checked documents again, took a photo, then directed the applicant to wait.",
      },
      {
        icon: "meeting_room",
        title: "Officer call and oath",
        body: "The officer brought the applicant into the room, swore them in, and checked GC and passport.",
      },
      {
        icon: "school",
        title: "English and civics tests",
        body: "Reading, writing, and six civics questions came before the deeper N-400 review.",
      },
      {
        icon: "task_alt",
        title: "Approval recommendation",
        body: "The officer said the tests were passed and gave a printed result notice.",
      },
    ],
    oathStatusTitle: "After the interview",
    oathStatusBody:
      "A same-day oath was offered, then declined because of travel. The case later moved through online status updates until the oath ceremony was scheduled.",
    oathStatuses: [
      "Recommended for approval",
      "Oath ceremony in line to be scheduled",
      "Oath ceremony canceled",
      "Oath ceremony to be scheduled",
      "Oath Ceremony Scheduled",
    ],
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
    questionCategories: [
      {
        category: "Personal Information",
        questions: [
          "What is your full legal name?",
          "Have you ever used any other names?",
          "What is your date of birth?",
          "Where were you born?",
        ],
      },
      {
        category: "Residency and Travel",
        questions: [
          "What is your current home address?",
          "Have you moved since filing your N-400?",
          "Have you travelled outside the United States in the past five years?",
          "How many total days did you spend outside the U.S.?",
        ],
      },
      {
        category: "Family and Marital History",
        questions: [
          "Are you currently married?",
          "How many times have you been married?",
          "Do you have any children?",
          "Where do your children live?",
        ],
      },
      {
        category: "Employment and School",
        questions: [
          "Are you currently employed?",
          "What is your occupation?",
          "Where have you worked or studied in the last five years?",
        ],
      },
      {
        category: "Criminal History and Moral Character",
        questions: [
          "Have you ever been arrested or convicted of a crime?",
          "Have you ever committed a crime for which you were not arrested?",
          "Have you ever lied to gain immigration benefits?",
        ],
      },
      {
        category: "Military Service",
        questions: [
          "Have you ever served in the U.S. military?",
          "Have you ever deserted from military service?",
          "Have you ever been involved in paramilitary or vigilante groups?",
        ],
      },
      {
        category: "Affiliations and Allegiances",
        questions: [
          "Have you ever been a member of any organisation, club, or group?",
          "Have you ever been part of a communist or totalitarian party?",
          "Do you support the U.S. Constitution and the form of government of the United States?",
        ],
      },
      {
        category: "Oath and Final Questions",
        questions: [
          "Are you willing to take the full Oath of Allegiance?",
          "If the law requires it, are you willing to bear arms or perform non-combatant services in the U.S. armed forces?",
        ],
      },
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
        href: "/study-plan#real-interview-flow",
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
        href: "/study-plan#officer-followups",
      },
      {
        title: "Interview Day Checklist",
        body: "Use a practical list for documents, timing, and final review.",
        icon: "checklist",
        href: "/interview-day",
      },
      {
        title: "Answer Practice",
        body: "Use short prompts to answer more clearly and confidently.",
        icon: "quiz",
        href: "/study-plan#answer-practice",
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
    planLabel: "Plan",
    cardsEyebrow: "Herramientas",
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
    commonQuestionsTitle: "Preguntas comunes de entrevista N-400",
    commonQuestionsBody:
      "Usa estos ejemplos para practicar respuestas claras antes del día de entrevista. Algunas preguntas revisan información personal, y otras son de elegibilidad o juramento y pueden requerir más cuidado.",
    followupsTitle: "Práctica de seguimientos del oficial",
    followupsSubtitle:
      "Practica respuestas cortas y tranquilas cuando el oficial pide un detalle más.",
    followupsIntro:
      "Las preguntas de seguimiento no siempre son una mala señal. El oficial puede estar revisando fechas, consistencia, documentos o si entendiste la primera pregunta. La meta es mantener la calma, responder directo y no adivinar.",
    followupsFormulaTitle: "Fórmula para responder con calma",
    sampleAnswerLabel: "Ejemplo de respuesta tranquila",
    followupsFormula: [
      "Pausa y respira una vez",
      "Responde la pregunta directamente",
      "Agrega un detalle corto",
      "Ofrece un documento si importa",
    ],
    followupsWarning:
      "Si el seguimiento trata de arrestos, violaciones migratorias, reclamos falsos de ciudadanía, impuestos serios o algo que no entiendes, prepárate con ayuda legal calificada.",
    followupCategories: [
      {
        icon: "flight_takeoff",
        title: "Viajes",
        question: "¿Por qué estuviste fuera de EE. UU. tanto tiempo?",
        answer:
          "Visité a mi familia. Regresé antes de seis meses y mantuve mi casa y vínculos en Estados Unidos.",
      },
      {
        icon: "home_pin",
        title: "Cambios de dirección",
        question: "¿Cuándo exactamente te mudaste?",
        answer:
          "Me mudé en marzo de 2023. Mi dirección actual es la que aparece en mi actualización.",
      },
      {
        icon: "work",
        title: "Historial de trabajo",
        question: "¿Por qué dejaste ese trabajo?",
        answer:
          "Lo dejé por un mejor horario. Mi siguiente trabajo empezó poco después y puedo explicar las fechas.",
      },
      {
        icon: "receipt_long",
        title: "Impuestos",
        question: "¿Tienes un plan de pagos?",
        answer:
          "Sí. Presenté mis impuestos y tengo un acuerdo de pagos. Traje prueba del plan y de los pagos.",
      },
      {
        icon: "confirmation_number",
        title: "Citaciones",
        question: "¿Qué pasó con esa multa?",
        answer:
          "Fue una multa de velocidad. La pagué y traje el registro por si necesita verlo.",
      },
      {
        icon: "edit_document",
        title: "Correcciones del N-400",
        question: "¿Por qué esto no estaba listado antes?",
        answer:
          "No entendí bien la pregunta cuando envié la solicitud. Quiero corregirlo ahora y responder con precisión.",
      },
    ],
    fieldOfficeEyebrow: "Historia anónima de entrevista",
    fieldOfficeTitle: "Cómo puede sentirse una entrevista N-400 real",
    fieldOfficeBody:
      "Este mapa práctico se basa en una experiencia reciente y anónima de entrevista. Cada caso es diferente, pero la secuencia ayuda a imaginar el día desde la entrada hasta la programación del juramento.",
    fieldOfficeStats: [
      { value: "10 min", label: "entrada anticipada" },
      { value: "20 min", label: "duración de entrevista" },
      { value: "6", label: "preguntas de civismo" },
    ],
    fieldOfficeFlow: [
      {
        icon: "schedule",
        title: "Llegar cerca de la cita",
        body: "En este ejemplo, permitían entrar aproximadamente 10 minutos antes de la cita.",
      },
      {
        icon: "badge",
        title: "Carta, ID y seguridad",
        body: "Revisaron la carta de entrevista y licencia antes del control tipo aeropuerto.",
      },
      {
        icon: "how_to_reg",
        title: "Registro en recepción",
        body: "Recepción revisó documentos otra vez, tomó una foto y pidió esperar el llamado.",
      },
      {
        icon: "meeting_room",
        title: "Llamada del oficial y juramento",
        body: "La oficial llevó al solicitante a la sala, tomó juramento y revisó green card y pasaporte.",
      },
      {
        icon: "school",
        title: "Inglés y civismo",
        body: "Lectura, escritura y seis preguntas de civismo llegaron antes de revisar el N-400.",
      },
      {
        icon: "task_alt",
        title: "Recomendación de aprobación",
        body: "La oficial dijo que las pruebas estaban aprobadas y entregó un aviso impreso.",
      },
    ],
    oathStatusTitle: "Después de la entrevista",
    oathStatusBody:
      "Ofrecieron juramento el mismo día, pero fue rechazado por un viaje. Luego el caso avanzó por estados en línea hasta que se programó la ceremonia.",
    oathStatuses: [
      "Recomendado para aprobación",
      "Ceremonia en línea para programarse",
      "Ceremonia cancelada",
      "Ceremonia por programarse",
      "Ceremonia programada",
    ],
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
    questionCategories: [
      {
        category: "Información personal",
        questions: [
          "¿Cuál es tu nombre legal completo?",
          "¿Alguna vez has usado otros nombres?",
          "¿Cuál es tu fecha de nacimiento?",
          "¿Dónde naciste?",
        ],
      },
      {
        category: "Residencia y viajes",
        questions: [
          "¿Cuál es tu dirección actual?",
          "¿Te mudaste desde que presentaste tu N-400?",
          "¿Has viajado fuera de Estados Unidos en los últimos cinco años?",
          "¿Cuántos días en total pasaste fuera de Estados Unidos?",
        ],
      },
      {
        category: "Familia y matrimonio",
        questions: [
          "¿Estás casado actualmente?",
          "¿Cuántas veces te has casado?",
          "¿Tienes hijos?",
          "¿Dónde viven tus hijos?",
        ],
      },
      {
        category: "Trabajo y estudios",
        questions: [
          "¿Trabajas actualmente?",
          "¿Cuál es tu ocupación?",
          "¿Dónde has trabajado o estudiado en los últimos cinco años?",
        ],
      },
      {
        category: "Historial criminal y buen carácter moral",
        questions: [
          "¿Alguna vez fuiste arrestado o condenado por un delito?",
          "¿Alguna vez cometiste un delito por el que no fuiste arrestado?",
          "¿Alguna vez mentiste para obtener beneficios migratorios?",
        ],
      },
      {
        category: "Servicio militar",
        questions: [
          "¿Alguna vez serviste en las fuerzas armadas de Estados Unidos?",
          "¿Alguna vez desertaste del servicio militar?",
          "¿Alguna vez participaste en grupos paramilitares o vigilantes?",
        ],
      },
      {
        category: "Afiliaciones y lealtades",
        questions: [
          "¿Alguna vez fuiste miembro de una organización, club o grupo?",
          "¿Alguna vez formaste parte de un partido comunista o totalitario?",
          "¿Apoyas la Constitución de Estados Unidos y su forma de gobierno?",
        ],
      },
      {
        category: "Juramento y preguntas finales",
        questions: [
          "¿Estás dispuesto a tomar el Juramento de Lealtad completo?",
          "Si la ley lo requiere, ¿estás dispuesto a portar armas o realizar servicios no combatientes en las fuerzas armadas de Estados Unidos?",
        ],
      },
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
        href: "/study-plan#real-interview-flow",
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
        href: "/study-plan#officer-followups",
      },
      {
        title: "Checklist del día",
        body: "Usa una lista práctica de documentos, tiempo y repaso final.",
        icon: "checklist",
        href: "/interview-day",
      },
      {
        title: "Práctica de respuestas",
        body: "Usa prompts cortos para responder con más claridad y confianza.",
        icon: "quiz",
        href: "/study-plan#answer-practice",
      },
    ],
  },
};

const storageKey = "citizenship-success-interview-date";

const practiceCardStyles = [
  {
    panel: "border-[#b9d2ff] bg-[#f4f8ff]",
    icon: "bg-[#0b50da] text-white",
    marker: "bg-[#0b50da]",
  },
  {
    panel: "border-[#c8d9c2] bg-[#f4f8ef]",
    icon: "bg-[#1f7a3e] text-white",
    marker: "bg-[#1f7a3e]",
  },
  {
    panel: "border-[#f0dca8] bg-[#fff8e1]",
    icon: "bg-[#b26b00] text-white",
    marker: "bg-[#f6c453]",
  },
  {
    panel: "border-[#d6c6ef] bg-[#f7f2ff]",
    icon: "bg-[#6d3bbd] text-white",
    marker: "bg-[#6d3bbd]",
  },
  {
    panel: "border-[#bfd8d1] bg-[#eef8f5]",
    icon: "bg-[#0f766e] text-white",
    marker: "bg-[#0f766e]",
  },
  {
    panel: "border-[#d7dce6] bg-white",
    icon: "bg-slate-950 text-white",
    marker: "bg-slate-950",
  },
];

export default function StudyPlan() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const [interviewDate, setInterviewDate] = useState("");
  const [savedDate, setSavedDate] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isInterviewFlowOpen, setIsInterviewFlowOpen] = useState(false);
  const [isYesNoOpen, setIsYesNoOpen] = useState(false);
  const [isFollowupsOpen, setIsFollowupsOpen] = useState(false);
  const [isAnswerPracticeOpen, setIsAnswerPracticeOpen] = useState(false);

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

  const scrollToSection = (id) => {
    window.setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const toggleYesNoSection = () => {
    setIsYesNoOpen((current) => {
      const next = !current;
      if (next) scrollToSection("yes-no-practice");
      return next;
    });
  };

  const toggleInterviewFlowSection = () => {
    setIsInterviewFlowOpen((current) => {
      const next = !current;
      if (next) scrollToSection("real-interview-flow");
      return next;
    });
  };

  const toggleFollowupsSection = () => {
    setIsFollowupsOpen((current) => {
      const next = !current;
      if (next) scrollToSection("officer-followups");
      return next;
    });
  };

  const toggleAnswerPracticeSection = () => {
    setIsAnswerPracticeOpen((current) => {
      const next = !current;
      if (next) scrollToSection("answer-practice");
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10">
      <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] p-6 sm:p-8 lg:p-10">
            <img
              src={checklistImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-25"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(2, 6, 23, 0.96), rgba(15, 47, 42, 0.9) 54%, rgba(11, 80, 218, 0.62))",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex min-h-[300px] flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#9fc5ff]">
                  {t.planLabel}
                </p>
                <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                  {t.title}
                </h1>
                <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-white/80 sm:text-lg">
                  {t.subtitle}
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.cards.slice(0, 3).map((card, index) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur"
                  >
                    <span className="text-xs font-black text-[#f6c453]">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm font-black leading-tight text-white">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 text-slate-950 sm:p-7 lg:p-8">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-black">{t.dateTitle}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t.dateBody}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-[#0b50da]">
                    calendar_month
                  </span>
                </div>
                <label className="mt-5 block text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  {t.dateLabel}
                </label>
                <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
                  <input
                    type="date"
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm"
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

              <div className="rounded-2xl bg-[#0b50da] p-5 text-white">
                <p className="text-sm font-semibold text-white/75">
                  {t.milestoneTitle}
                </p>
                <p className="mt-3 text-3xl font-black">
                  {daysToInterview === null
                    ? t.noDate
                    : `${daysToInterview} ${t.daysLabel}`}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {t.milestoneBody}
                </p>
                <Link
                  to="/civics"
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-bold text-[#0b50da]"
                >
                  {t.startPractice}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
              {t.cardsEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-black">{t.cardsTitle}</h2>
          </div>
          <div className="hidden h-px flex-1 bg-slate-300 sm:block" />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, index) => {
            const style = practiceCardStyles[index % practiceCardStyles.length];
            const isInterviewFlowCard =
              card.href === "/study-plan#real-interview-flow";
            const isYesNoCard = card.href === "/study-plan#yes-no-practice";
            const isFollowupsCard =
              card.href === "/study-plan#officer-followups";
            const isAnswerPracticeCard = card.href === "/study-plan#answer-practice";
            const isExpandableCard =
              isInterviewFlowCard ||
              isYesNoCard ||
              isFollowupsCard ||
              isAnswerPracticeCard;
            const isOpen = isInterviewFlowCard
              ? isInterviewFlowOpen
              : isYesNoCard
                ? isYesNoOpen
                : isFollowupsCard
                  ? isFollowupsOpen
                  : isAnswerPracticeOpen;
            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.icon}`}
                  >
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <span
                    className={`mt-1 h-2.5 w-2.5 rounded-full ${style.marker}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
                {isExpandableCard && (
                  <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#0b50da]">
                    <span>
                      {isOpen ? t.hideSection : t.openSection}
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      {isOpen ? "expand_less" : "expand_more"}
                    </span>
                  </div>
                )}
              </>
            );

            if (isExpandableCard) {
              return (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => {
                    if (isInterviewFlowCard) {
                      toggleInterviewFlowSection();
                      return;
                    }
                    if (isYesNoCard) {
                      toggleYesNoSection();
                      return;
                    }
                    if (isFollowupsCard) {
                      toggleFollowupsSection();
                      return;
                    }
                    toggleAnswerPracticeSection();
                  }}
                  className={`group rounded-2xl border p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${style.panel}`}
                  aria-expanded={isOpen}
                  aria-controls={
                    isInterviewFlowCard
                      ? "real-interview-flow"
                      : isYesNoCard
                        ? "yes-no-practice"
                        : isFollowupsCard
                          ? "officer-followups"
                          : "answer-practice"
                  }
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <Link
                key={card.title}
                to={card.href}
                className={`group rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${style.panel}`}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>

      {isInterviewFlowOpen && (
        <section
          id="real-interview-flow"
          className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
        >
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-[#112f2b] p-6 text-white sm:p-8">
              <img
                src={checklistImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-20"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(17, 47, 43, 0.98), rgba(16, 33, 56, 0.93))",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c453]">
                  {t.fieldOfficeEyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  {t.fieldOfficeTitle}
                </h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-white/80">
                  {t.fieldOfficeBody}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {t.fieldOfficeStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/12 bg-white/10 p-3 backdrop-blur"
                    >
                      <p className="text-2xl font-black leading-none text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[0.68rem] font-bold uppercase leading-tight tracking-[0.14em] text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-white/12 bg-white/10 p-4">
                  <p className="text-sm font-black text-[#f6c453]">
                    {t.oathStatusTitle}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white/80">
                    {t.oathStatusBody}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6">
              <div className="interview-map grid gap-3 sm:grid-cols-2">
                {t.fieldOfficeFlow.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e9f2ff] text-[#0b50da]">
                        <span className="material-symbols-outlined text-[1.35rem]">
                          {step.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                          0{index + 1}
                        </p>
                        <h3 className="mt-1 text-lg font-black leading-tight text-slate-950">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[#d7e3d3] bg-[#f4f8ef] p-4">
                <div className="flex flex-wrap gap-2">
                  {t.oathStatuses.map((status, index) => (
                    <span
                      key={status}
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-black",
                        index === t.oathStatuses.length - 1
                          ? "border-[#1f7a3e] bg-[#1f7a3e] text-white"
                          : "border-[#c8d9c2] bg-white text-slate-700",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-2 w-2 rounded-full",
                          index === t.oathStatuses.length - 1
                            ? "bg-white"
                            : "bg-[#0b50da]",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                      {status}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isYesNoOpen && (
        <section
          id="yes-no-practice"
          className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
        >
          <div className="bg-[#0f2f2a] p-6 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
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
              </div>
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-black text-white">{t.yesNoRuleTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {t.yesNoRule}
                </p>
              </div>
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
        </section>
      )}

      {isFollowupsOpen && (
        <section
          id="officer-followups"
          className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
        >
          <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-[#151b2d] p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#9fc5ff]">
                N-400
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                {t.followupsTitle}
              </h2>
              <p className="mt-3 text-base font-semibold leading-relaxed text-white/85">
                {t.followupsSubtitle}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                {t.followupsIntro}
              </p>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9fc5ff] text-[#101827]">
                    <span className="material-symbols-outlined text-xl">
                      psychology
                    </span>
                  </div>
                  <h3 className="text-lg font-black">
                    {t.followupsFormulaTitle}
                  </h3>
                </div>
                <div className="mt-4 grid gap-2">
                  {t.followupsFormula.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl bg-white/10 p-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#151b2d]">
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold leading-relaxed text-white/85">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 md:grid-cols-2">
                {t.followupCategories.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b50da]/10 text-[#0b50da]">
                        <span className="material-symbols-outlined text-xl">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                          {item.title}
                        </p>
                        <h3 className="mt-2 text-base font-black leading-tight text-slate-950">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl bg-white p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1f7a3e]">
                        {t.sampleAnswerLabel}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                        {item.answer}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-4 rounded-2xl border border-[#f6c453]/40 bg-[#fff8e1] p-4 text-xs font-semibold leading-relaxed text-slate-700">
                {t.followupsWarning}
              </p>
            </div>
          </div>
        </section>
      )}

      {isAnswerPracticeOpen && (
        <section
          id="answer-practice"
          className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="rounded-2xl bg-[#eef4ff] p-5">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
                N-400
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                {t.commonQuestionsTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {t.commonQuestionsBody}
              </p>
            </div>

            <div className="grid gap-3">
              {t.questionCategories.map((group) => (
                <details
                  key={group.category}
                  className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4"
                >
                  <summary className="cursor-pointer text-base font-black text-slate-950">
                    {group.category}
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {group.questions.map((question) => (
                      <li
                        key={question}
                        className="flex gap-2 text-sm font-medium leading-relaxed text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b50da]" />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
