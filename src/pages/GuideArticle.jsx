import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import civicsImage from "../assets/civics-practice.jpg";
import readingImage from "../assets/reading-writing-practice.jpg";
import checklistImage from "../assets/interview-checklist.jpg";
import heroImage from "../assets/hero-citizenship-prep.jpg";

const articles = {
  "civics-test": {
    image: civicsImage,
    en: {
      eyebrow: "Civics Test",
      title: "How to Study for the Citizenship Civics Test Without Freezing",
      intro:
        "The civics test is short, but it can feel stressful because you must answer out loud in front of an officer. The best preparation is not only memorizing answers. It is learning the idea behind each question, practicing recall in small groups, and building enough confidence to answer even when you feel nervous.",
      sections: [
        {
          title: "Start with meaning, then memorize",
          body:
            "Many applicants begin by repeating answers over and over. Repetition helps, but it works better after you understand the meaning of the question. For example, if a question asks about the supreme law of the land, the answer is not just a sentence to repeat. It points to the Constitution as the foundation for government power and rights. When you connect a short answer to a simple idea, it becomes easier to remember under pressure.",
        },
        {
          title: "Study in small sets",
          body:
            "A long list of questions can feel overwhelming. Break the material into small sets of ten to fifteen questions. Practice one set until you can answer most of it without looking, then move on. At the end of the week, mix older questions with newer ones. This method prevents the common problem of knowing the first few questions very well while forgetting the rest.",
        },
        {
          title: "Practice out loud",
          body:
            "The interview is spoken, so silent reading is not enough. Say the answer out loud in a clear, steady voice. You do not need to sound perfect. You need to be understandable. If an answer feels long, practice a shorter version that is still correct. Clear and simple answers are usually easier to deliver than answers that sound memorized but uncertain.",
        },
        {
          title: "Use mistakes as a study map",
          body:
            "When you miss a question, mark it and return to it later. A missed answer is useful information. It shows you exactly where to spend more time. Do not spend the same amount of effort on every question. Give more attention to the questions you confuse, the words you misread, and the topics that feel similar.",
        },
        {
          title: "Build a weekly review rhythm",
          body:
            "A useful week might include three short flashcard sessions, one mixed review, and one timed practice. This rhythm gives you repetition without making study feel endless. On the final day of the week, review only the questions you marked as difficult and say each answer out loud twice.",
        },
      ],
      takeaway:
        "A strong civics routine is simple: understand the idea, repeat in small sets, answer out loud, and review mistakes calmly. This site's flashcards and test mode are built around that rhythm.",
    },
    es: {
      eyebrow: "Civismo",
      title: "Cómo estudiar para el examen de civismo sin bloquearte",
      intro:
        "El examen de civismo es corto, pero puede sentirse estresante porque debes responder en voz alta frente a un oficial. La mejor preparación no es solo memorizar respuestas. Es entender la idea de cada pregunta, practicar en grupos pequeños y ganar confianza para responder aun con nervios.",
      sections: [
        {
          title: "Empieza con el significado y luego memoriza",
          body:
            "Muchos solicitantes comienzan repitiendo respuestas. La repetición ayuda, pero funciona mejor cuando entiendes el significado. Si una pregunta habla de la ley suprema del país, la respuesta no es solo una frase. Señala a la Constitución como base del gobierno y de los derechos.",
        },
        {
          title: "Estudia en grupos pequeños",
          body:
            "Una lista larga puede abrumar. Divide el material en grupos de diez a quince preguntas. Practica un grupo hasta responder la mayoría sin mirar y luego continúa. Al final de la semana, mezcla preguntas antiguas con nuevas.",
        },
        {
          title: "Practica en voz alta",
          body:
            "La entrevista es hablada, así que leer en silencio no basta. Di la respuesta en voz clara y estable. No necesitas sonar perfecto. Necesitas ser entendible. Si una respuesta es larga, practica una versión más corta que siga siendo correcta.",
        },
        {
          title: "Usa los errores como mapa de estudio",
          body:
            "Cuando falles una pregunta, márcala y vuelve después. Un error muestra dónde dedicar más tiempo. No estudies todas las preguntas con la misma intensidad. Refuerza las que confundes y los temas que se parecen.",
        },
        {
          title: "Crea un ritmo semanal",
          body:
            "Una semana útil puede incluir tres sesiones cortas de tarjetas, un repaso mezclado y una práctica cronometrada. Así repites sin sentir que el estudio no termina. El último día, repasa solo las preguntas marcadas como difíciles y di cada respuesta en voz alta dos veces.",
        },
      ],
      takeaway:
        "Una buena rutina de civismo es simple: entender, repetir en grupos pequeños, responder en voz alta y repasar errores con calma.",
    },
  },
  "reading-writing": {
    image: readingImage,
    en: {
      eyebrow: "English Test",
      title: "What to Expect in the Reading and Writing Test",
      intro:
        "The reading and writing portion of the naturalization interview is usually simple in structure, but many applicants struggle because the moment feels formal. You may be asked to read one sentence in English and write one sentence in English. The goal is not advanced grammar. The goal is to show that you can read and write basic English related to civics and everyday citizenship topics.",
      sections: [
        {
          title: "The sentences are short, but pressure changes everything",
          body:
            "A sentence that looks easy at home can feel harder in an interview room. Your hand may shake, you may second-guess spelling, or you may read too quickly. Practice should include the emotional part of the task. Sit at a table, read one sentence out loud, then write one sentence carefully. This makes the test feel familiar instead of surprising.",
        },
        {
          title: "Focus on common civic words",
          body:
            "Many reading and writing sentences include words such as citizen, President, Congress, vote, flag, state, and government. Make a short word list and practice spelling these words slowly. Do not study random vocabulary first. Start with the words most likely to appear in naturalization topics.",
        },
        {
          title: "Write for clarity, not beauty",
          body:
            "Your handwriting does not need to be beautiful, but it should be readable. Leave space between words. Capitalize the first word when you can. Put a period at the end. If you make a small mistake, stay calm and listen to the officer's instructions. Panic often creates more mistakes than the sentence itself.",
        },
        {
          title: "Practice a repeatable routine",
          body:
            "Use the same routine each time: listen, repeat the sentence quietly in your head, write slowly, then check for missing words. This routine gives your brain something stable to follow when you feel nervous.",
        },
        {
          title: "Avoid over-practicing random sentences",
          body:
            "More practice is not always better if the practice is unfocused. Use sentences connected to citizenship, government, holidays, places, and simple civic ideas. This keeps your preparation close to the type of language you are likely to hear during the interview.",
        },
      ],
      takeaway:
        "The reading and writing test is manageable when you practice short civic sentences regularly and treat calmness as part of the skill.",
    },
    es: {
      eyebrow: "Examen de inglés",
      title: "Qué esperar en lectura y escritura",
      intro:
        "La parte de lectura y escritura suele ser simple, pero muchos solicitantes se sienten nerviosos por el ambiente formal. Es posible que debas leer una oración en inglés y escribir una oración en inglés. No se busca gramática avanzada, sino demostrar inglés básico relacionado con civismo y ciudadanía.",
      sections: [
        {
          title: "Las oraciones son cortas, pero la presión cambia todo",
          body:
            "Una oración fácil en casa puede sentirse más difícil en la entrevista. Puedes dudar de la ortografía o leer demasiado rápido. Practica también la parte emocional: siéntate, lee una oración en voz alta y escribe otra con calma.",
        },
        {
          title: "Enfócate en palabras cívicas comunes",
          body:
            "Muchas oraciones incluyen palabras como citizen, President, Congress, vote, flag, state y government. Haz una lista corta y practica la ortografía lentamente.",
        },
        {
          title: "Escribe con claridad",
          body:
            "Tu letra no necesita ser perfecta, pero debe leerse. Deja espacio entre palabras, usa mayúscula inicial cuando puedas y coloca punto al final.",
        },
        {
          title: "Practica una rutina repetible",
          body:
            "Escucha, repite la oración en tu mente, escribe despacio y revisa si falta alguna palabra. Esa rutina ayuda cuando aparecen los nervios.",
        },
        {
          title: "Evita practicar oraciones al azar",
          body:
            "Más práctica no siempre ayuda si no tiene enfoque. Usa oraciones conectadas con ciudadanía, gobierno, días festivos, lugares e ideas cívicas simples. Así tu preparación se parece más al lenguaje de la entrevista.",
        },
      ],
      takeaway:
        "La lectura y escritura se vuelven manejables cuando practicas oraciones cortas con regularidad y haces de la calma parte de la habilidad.",
    },
  },
  "n400-review": {
    image: heroImage,
    en: {
      eyebrow: "N-400 Review",
      title: "How to Prepare for the N-400 Questions in the Interview",
      intro:
        "A major part of the citizenship interview is the review of your N-400 application. The officer may ask about your address history, work, travel, family, taxes, memberships, and eligibility questions. This is not meant to trick you. The officer is confirming information and checking that you understand your own application.",
      sections: [
        {
          title: "Read your application before the interview",
          body:
            "Do not wait until the appointment to see your answers again. Read your N-400 slowly before interview day. Mark dates, addresses, trips, and names that are easy to forget. If something has changed since filing, make a note so you can explain the update clearly.",
        },
        {
          title: "Practice personal answers in plain English",
          body:
            "You do not need complicated sentences. You need accurate answers. Practice saying your full name, current address, job, marital status, and travel history. If you do not understand a question, it is better to ask the officer to repeat it than to guess.",
        },
        {
          title: "Give consistent information",
          body:
            "Consistency matters. If your application says one thing and your spoken answer sounds different, the officer may ask follow-up questions. Review your details so your answers match your records as much as possible.",
        },
        {
          title: "Prepare for yes/no eligibility questions",
          body:
            "Some N-400 questions use formal words that can feel uncomfortable. Practice understanding the meaning in your own language first, then practice a clear English answer. If your truthful answer needs explanation, keep it short and direct.",
        },
        {
          title: "Bring updates in an organized way",
          body:
            "If your address, job, travel, marital status, or family information changed after filing, prepare a simple explanation. Keep related documents together. Organized updates help the interview stay focused and reduce the chance that you forget an important detail.",
        },
      ],
      takeaway:
        "The N-400 review becomes less stressful when your own application feels familiar. Accuracy, calmness, and simple English matter more than memorized speeches.",
    },
    es: {
      eyebrow: "Revisión N-400",
      title: "Cómo prepararte para las preguntas del N-400",
      intro:
        "Una parte importante de la entrevista es la revisión de tu solicitud N-400. El oficial puede preguntar sobre direcciones, trabajo, viajes, familia, impuestos, membresías y elegibilidad. No es para engañarte; es para confirmar información y verificar que entiendes tu solicitud.",
      sections: [
        {
          title: "Lee tu solicitud antes de la entrevista",
          body:
            "No esperes al día de la cita para volver a ver tus respuestas. Lee tu N-400 con calma. Marca fechas, direcciones, viajes y nombres fáciles de olvidar.",
        },
        {
          title: "Practica respuestas personales en inglés simple",
          body:
            "No necesitas frases complicadas. Necesitas respuestas exactas. Practica tu nombre completo, dirección, trabajo, estado civil e historial de viajes.",
        },
        {
          title: "Da información consistente",
          body:
            "La consistencia importa. Si tu solicitud dice una cosa y tu respuesta suena diferente, el oficial puede hacer preguntas de seguimiento.",
        },
        {
          title: "Prepárate para preguntas Sí/No",
          body:
            "Algunas preguntas usan palabras formales. Entiende primero el significado en tu idioma y luego practica una respuesta clara en inglés.",
        },
        {
          title: "Organiza cambios recientes",
          body:
            "Si cambió tu dirección, trabajo, viajes, estado civil o información familiar después de enviar la solicitud, prepara una explicación simple. Mantén documentos relacionados juntos para no olvidar detalles importantes.",
        },
      ],
      takeaway:
        "La revisión del N-400 es menos estresante cuando tu propia solicitud te resulta familiar. Importan la exactitud, la calma y el inglés simple.",
    },
  },
  "interview-day": {
    image: checklistImage,
    en: {
      eyebrow: "Interview Day",
      title: "A Practical Checklist for Citizenship Interview Day",
      intro:
        "Interview day is easier when the small decisions are already handled. Your goal is to arrive prepared, organized, and calm enough to listen carefully. A checklist cannot replace legal advice, but it can help you avoid preventable stress.",
      sections: [
        {
          title: "Prepare documents the night before",
          body:
            "Place your appointment notice, green card, state ID or driver's license, passports, and any requested documents in one folder. If you have updates to your application, bring supporting records when appropriate. Do not rely on memory in the morning.",
        },
        {
          title: "Plan transportation and timing",
          body:
            "Check the address, parking, public transportation, and building entry rules before you leave. Aim to arrive early enough to pass security without rushing. Being early gives your body time to settle before the interview begins.",
        },
        {
          title: "Use a calm speaking rhythm",
          body:
            "Listen to the whole question before answering. Speak in short sentences. If you do not understand, ask politely for repetition. A calm pace is often more helpful than trying to answer quickly.",
        },
        {
          title: "Review lightly, not frantically",
          body:
            "On the day of the interview, do a light review of your marked civics questions and your N-400 details. Avoid cramming for hours. Heavy last-minute studying can increase anxiety and make familiar answers feel uncertain.",
        },
        {
          title: "Decide what not to bring",
          body:
            "Do not bring unnecessary stacks of unrelated papers if they make your folder confusing. Keep important documents easy to find. A clean folder helps you respond faster when the officer asks for something specific.",
        },
      ],
      takeaway:
        "A good interview day plan is practical: documents ready, route planned, answers reviewed, and enough calm to listen carefully.",
    },
    es: {
      eyebrow: "Día de entrevista",
      title: "Checklist práctico para el día de entrevista",
      intro:
        "El día de entrevista es más fácil cuando las decisiones pequeñas ya están resueltas. La meta es llegar preparado, organizado y con calma suficiente para escuchar bien.",
      sections: [
        {
          title: "Prepara documentos la noche anterior",
          body:
            "Pon tu aviso de cita, green card, identificación, pasaportes y documentos solicitados en una carpeta. Si hay cambios en tu solicitud, lleva registros de apoyo cuando corresponda.",
        },
        {
          title: "Planea transporte y tiempo",
          body:
            "Revisa dirección, estacionamiento, transporte público y reglas de entrada antes de salir. Llegar temprano ayuda a pasar seguridad sin prisa.",
        },
        {
          title: "Habla con ritmo tranquilo",
          body:
            "Escucha toda la pregunta antes de responder. Usa oraciones cortas. Si no entiendes, pide que repitan con respeto.",
        },
        {
          title: "Repasa ligero, no con desesperación",
          body:
            "Ese día repasa de forma ligera tus preguntas marcadas y detalles del N-400. Estudiar demasiado a último momento puede aumentar ansiedad.",
        },
        {
          title: "Decide qué no llevar",
          body:
            "No lleves montones de papeles no relacionados si hacen tu carpeta confusa. Mantén los documentos importantes fáciles de encontrar. Una carpeta clara ayuda a responder más rápido si el oficial pide algo específico.",
        },
      ],
      takeaway:
        "Un buen plan es práctico: documentos listos, ruta clara, respuestas repasadas y calma para escuchar cuidadosamente.",
    },
  },
};

export default function GuideArticle({ slugOverride }) {
  const { slug } = useParams();
  const { lang } = useOutletContext();
  const activeSlug = slugOverride || slug;
  const article = articles[activeSlug];

  if (!article) return <Navigate to="/guides" replace />;

  const t = article[lang];
  const isInterviewDay = activeSlug === "interview-day";
  const studyPlanLabel = lang === "en" ? "Back to study plan" : "Volver al plan";
  const guidesLabel = lang === "en" ? "Back to guides" : "Volver a guías";
  const checklistCtaTitle =
    lang === "en" ? "Keep this checklist with your plan" : "Guarda este checklist con tu plan";
  const takeawayLabel = lang === "en" ? "Key takeaway" : "Idea clave";
  const checklistCtaBody =
    lang === "en"
      ? "Use the Study Plan page to connect interview-day tasks with civics, answer practice, and the real interview flow."
      : "Usa la página del plan para conectar las tareas del día con civismo, práctica de respuestas y el flujo real de entrevista.";

  return (
    <article className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{t.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight">{t.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{t.intro}</p>
          <Link
            to={isInterviewDay ? "/study-plan" : "/guides"}
            className="mt-6 inline-flex text-sm font-black text-[#0b50da]"
          >
            {isInterviewDay ? studyPlanLabel : guidesLabel}
          </Link>
        </div>
        <div>
          <div className="overflow-hidden rounded-lg border border-black/10">
            <img src={article.image} alt="" className="h-80 w-full object-cover" />
          </div>
          <div className="mt-8 space-y-7">
            {t.sections.map((section) => (
              <section key={section.title} className="border-t border-black/10 pt-6">
                <h2 className="text-2xl font-black">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
            <div className="rounded-lg bg-slate-950 p-6 text-white">
              <h2 className="text-xl font-black">{takeawayLabel}</h2>
              <p className="mt-3 leading-7 text-white/80">{t.takeaway}</p>
            </div>
            {isInterviewDay && (
              <div className="rounded-lg border border-[#d7e3d3] bg-[#f4f8ef] p-6">
                <h2 className="text-xl font-black text-slate-950">
                  {checklistCtaTitle}
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  {checklistCtaBody}
                </p>
                <Link
                  to="/study-plan"
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-[#0b50da] px-5 text-sm font-black text-white"
                >
                  {studyPlanLabel}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
