import { Link, useOutletContext } from "react-router-dom";

const copy = {
  en: {
    eyebrow: "First-person experience",
    title: "My Citizenship Interview Experience and What I Prepared Differently",
    intro:
      "I created US Citizenship Prep after going through the immigration and naturalization process myself. This page explains what my interview taught me, why I built the site around more than civics memorization, and how applicants can use that experience as a study framework.",
    note:
      "This is educational preparation content based on personal experience. It is not legal advice and it is not affiliated with USCIS.",
    sections: [
      {
        title: "The biggest surprise was not the civics test",
        body:
          "Before the interview, it is easy to focus almost entirely on civics questions because they feel concrete. You can count how many answers you know. You can mark hard questions. You can repeat the list. My interview reminded me that the civics and English portion matters, but the deeper preparation is often your N-400 review: your history, your updates, your documents, and whether your answers are consistent.",
      },
      {
        title: "I prepared around three pillars",
        body:
          "The three areas I took most seriously were legal status and compliance, tax filing and payment history, and criminal record or moral character questions. Those topics can feel uncomfortable, but ignoring them does not make them easier. I wanted to understand my own facts, prepare documents where needed, and answer truthfully without turning every answer into a long story.",
      },
      {
        title: "Documentation changed my confidence",
        body:
          "For anything that could create a follow-up question, I wanted proof ready. In my case, tax documentation mattered because I had payment terms to show. Having documents organized did not mean the officer needed every page, but it changed how prepared I felt. I was not relying only on memory or hoping a topic would not come up.",
      },
      {
        title: "Honesty helped more than perfect memory",
        body:
          "One practical lesson was that small omissions should be corrected calmly. I had forgotten to list a couple of speeding tickets because I did not think of them the same way as more serious citations. During the interview, I explained that and the officer updated the form. That moment shaped one of the core messages of this site: do not practice sounding perfect; practice being accurate and honest.",
      },
      {
        title: "Why I made this site free",
        body:
          "After the process, I wanted to make a study resource for people in a similar situation. Many applicants are already paying filing fees, collecting documents, translating ideas between languages, and managing family stress. The core preparation tools here are free because basic interview practice should not be another barrier.",
      },
    ],
    checklistTitle: "What I would tell another applicant to review",
    checklist: [
      "Read your submitted N-400 before interview day, not only the week you filed it.",
      "Write down anything that changed after filing: address, work, travel, family, citations, or taxes.",
      "Bring proof for topics that may need support, especially taxes, court records, travel, or corrections.",
      "Practice civics answers out loud, but also practice personal answers in short English sentences.",
      "If you do not understand a question, ask the officer to repeat or rephrase it instead of guessing.",
      "If a truthful answer involves criminal history, immigration problems, serious tax issues, or something you do not understand, speak with a qualified immigration attorney.",
    ],
    timelineTitle: "How this experience shaped the site",
    timeline: [
      {
        title: "Civics practice",
        body: "The flashcards are built for recall because the interview is spoken, not multiple choice.",
      },
      {
        title: "N-400 review",
        body: "The study plan includes personal-history questions because the form review can be more important than applicants expect.",
      },
      {
        title: "Officer follow-ups",
        body: "Follow-up prompts help applicants practice staying calm when a question is asked in a different way.",
      },
      {
        title: "Interview checklist",
        body: "The checklist connects documents to interview topics so applicants are not searching through papers under pressure.",
      },
    ],
    ctaTitle: "Use the experience as a preparation framework",
    ctaBody:
      "Start with civics, then review your N-400, practice English reading and writing, prepare documents, and rehearse calm answers for follow-up questions.",
    primaryCta: "Open study plan",
    secondaryCta: "Practice N-400 questions",
  },
  es: {
    eyebrow: "Experiencia en primera persona",
    title: "Mi experiencia en la entrevista de ciudadanía y lo que preparé diferente",
    intro:
      "Creé US Citizenship Prep después de pasar por el proceso migratorio y de naturalización. Esta página explica qué aprendí en la entrevista, por qué el sitio no se enfoca solo en memorizar civismo y cómo usar esa experiencia como marco de estudio.",
    note:
      "Este contenido es educativo y se basa en experiencia personal. No es asesoría legal y no está afiliado con USCIS.",
    sections: [
      {
        title: "La mayor sorpresa no fue el examen de civismo",
        body:
          "Antes de la entrevista, es fácil enfocarse casi totalmente en las preguntas de civismo porque son concretas. Puedes contar cuántas sabes y repetir la lista. Mi entrevista me recordó que civismo e inglés importan, pero la preparación más profunda suele ser la revisión del N-400: tu historial, tus cambios, tus documentos y la consistencia de tus respuestas.",
      },
      {
        title: "Preparé tres áreas principales",
        body:
          "Las tres áreas que tomé más en serio fueron estatus legal y cumplimiento, historial de impuestos, y preguntas sobre antecedentes o buen carácter moral. Pueden sentirse incómodas, pero ignorarlas no ayuda. Quería entender mis propios datos, preparar documentos cuando fuera necesario y responder con honestidad sin convertir cada respuesta en una historia larga.",
      },
      {
        title: "La documentación cambió mi confianza",
        body:
          "Para cualquier tema que pudiera generar una pregunta de seguimiento, quería tener pruebas listas. En mi caso, la documentación de impuestos importaba porque tenía términos de pago que mostrar. Tener documentos organizados no significa que el oficial necesite cada página, pero cambia cómo te sientes al responder.",
      },
      {
        title: "La honestidad ayudó más que la memoria perfecta",
        body:
          "Una lección práctica fue corregir omisiones pequeñas con calma. Había olvidado listar un par de multas por exceso de velocidad porque no las pensé igual que citaciones más serias. Durante la entrevista lo expliqué y el oficial actualizó el formulario. Eso dio forma a una idea central del sitio: no practiques para sonar perfecto; practica para ser exacto y honesto.",
      },
      {
        title: "Por qué hice este sitio gratis",
        body:
          "Después del proceso quise crear un recurso para personas en una situación parecida. Muchos solicitantes ya están pagando tarifas, juntando documentos, traduciendo ideas entre idiomas y manejando estrés familiar. Las herramientas principales aquí son gratis porque la práctica básica no debería ser otra barrera.",
      },
    ],
    checklistTitle: "Lo que le diría a otro solicitante que revise",
    checklist: [
      "Lee tu N-400 enviado antes del día de entrevista, no solo cuando lo presentaste.",
      "Anota cualquier cambio después de aplicar: dirección, trabajo, viajes, familia, citaciones o impuestos.",
      "Lleva pruebas para temas que puedan necesitar apoyo, especialmente impuestos, corte, viajes o correcciones.",
      "Practica civismo en voz alta, pero también respuestas personales en inglés simple.",
      "Si no entiendes una pregunta, pide que la repitan o expliquen en vez de adivinar.",
      "Si una respuesta verdadera incluye historial criminal, problemas migratorios, impuestos serios o algo que no entiendes, habla con un abogado de inmigración calificado.",
    ],
    timelineTitle: "Cómo esta experiencia dio forma al sitio",
    timeline: [
      {
        title: "Práctica de civismo",
        body: "Las tarjetas están hechas para recordar en voz alta porque la entrevista es hablada, no de opción múltiple.",
      },
      {
        title: "Revisión N-400",
        body: "El plan incluye preguntas de historial personal porque la revisión del formulario puede ser más importante de lo esperado.",
      },
      {
        title: "Preguntas de seguimiento",
        body: "Los prompts ayudan a practicar calma cuando una pregunta se hace de otra forma.",
      },
      {
        title: "Checklist de entrevista",
        body: "El checklist conecta documentos con temas de entrevista para no buscar papeles bajo presión.",
      },
    ],
    ctaTitle: "Usa la experiencia como marco de preparación",
    ctaBody:
      "Empieza con civismo, revisa tu N-400, practica lectura y escritura, prepara documentos y ensaya respuestas calmadas para preguntas de seguimiento.",
    primaryCta: "Abrir plan de estudio",
    secondaryCta: "Practicar preguntas N-400",
  },
};

export default function InterviewExperience() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <article className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0b50da]">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{t.intro}</p>
          <p className="mt-5 max-w-3xl rounded-lg border border-[#d7e3d3] bg-[#f4f8ef] p-4 text-sm font-semibold leading-7 text-slate-700">
            {t.note}
          </p>

          <div className="mt-10 space-y-6">
            {t.sections.map((section) => (
              <section key={section.title} className="rounded-lg border border-black/10 bg-white p-6 sm:p-8">
                <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-lg border border-black/10 bg-slate-950 p-6 text-white">
            <h2 className="text-2xl font-black">{t.checklistTitle}</h2>
            <ul className="mt-5 space-y-4">
              {t.checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-[#9fc5ff]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="mt-12 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-black text-slate-950">{t.timelineTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.timeline.map((item, index) => (
            <article key={item.title} className="rounded-lg bg-[#f5f7fb] p-5">
              <span className="text-xs font-black text-[#0b50da]">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg bg-slate-950 p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
        <div>
          <h2 className="text-2xl font-black">{t.ctaTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">{t.ctaBody}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:mt-0 sm:shrink-0">
          <Link
            to="/study-plan"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-black text-slate-950"
          >
            {t.primaryCta}
          </Link>
          <Link
            to="/n400-interview-questions"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-white/25 px-5 text-sm font-black text-white"
          >
            {t.secondaryCta}
          </Link>
        </div>
      </section>
    </article>
  );
}
