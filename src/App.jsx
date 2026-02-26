import { useState } from "react";

const copy = {
  en: {
    badge: "$4.99 monthly",
    langToggle: "Español",
    eyebrow: "Civics + Interview Confidence",
    title: "Citizenship Interview Helper",
    subtitle:
      "Our goal is to help more people pass their citizenship interview with structured practice and calm guidance.",
    ctaPrimary: "Get started for $4.99",
    ctaSecondary: "Preview curriculum",
    previewTitle: "Practice Preview",
    previewQLabel: "Question",
    previewALabel: "Answer",
    previewQ: "What is the supreme law of the land?",
    previewA: "The Constitution is the supreme law.",
    missionTitle: "Our mission",
    missionBody:
      "Help more people pass their citizenship interview with structured practice, calm guidance, and bilingual support.",
    featuresTitle1: "Personalized practice plan",
    featuresBody1: "Focus on weak questions and get a clear daily training plan.",
    featuresTitle2: "Real interview flow",
    featuresBody2: "Practice in the same order and rhythm you will face on interview day.",
    featuresTitle3: "Answer tracking & feedback",
    featuresBody3: "Save recent answers and see improvement points at a glance.",
    featuresTitle4: "English + Spanish support",
    featuresBody4: "Every question is available in both languages to boost understanding.",
    offerTitle: "What you'll get",
    offer1: "100 Civics Questions (easy mode summary)",
    offer2: "Real interview simulation script",
    offer3: "Yes/No question explanations",
    offer4: "Officer curveball questions",
    offer5: "Interview day checklist",
    offer6: "Fail-safe guide to avoid rejection",
    offer7: "Audio files for pronunciation practice",
    stepsTitle: "How it works",
    step1Title: "Quick assessment",
    step1Body: "Check your current level and get a tailored path.",
    step2Title: "Mock interview",
    step2Body: "Practice with real questions and gentle time limits.",
    step3Title: "Review & reminders",
    step3Body: "Revisit weak questions and keep a steady rhythm.",
    ctaTitle: "Help everyone pass the citizenship interview",
    ctaBody:
      "Get bilingual guidance for interview success for just $4.99 per month.",
    ctaButton: "Join the waitlist",
    toggleLabel: "Toggle language",
  },
  es: {
    badge: "$4.99 al mes",
    langToggle: "English",
    eyebrow: "Cívica + confianza en la entrevista",
    title: "Asistente para la entrevista de ciudadanía",
    subtitle:
      "Nuestro objetivo es ayudar a más personas a aprobar su entrevista de ciudadanía con práctica estructurada y guía tranquila.",
    ctaPrimary: "Comienza por $4.99",
    ctaSecondary: "Ver el plan",
    previewTitle: "Vista previa",
    previewQLabel: "Pregunta",
    previewALabel: "Respuesta",
    previewQ: "¿Cuál es la ley suprema del país?",
    previewA: "La Constitución es la ley suprema.",
    missionTitle: "Nuestra misión",
    missionBody:
      "Ayudamos a más personas a aprobar su entrevista de ciudadanía con práctica guiada, calma y apoyo bilingüe.",
    featuresTitle1: "Plan de práctica personalizado",
    featuresBody1: "Enfócate en preguntas débiles con un plan diario claro.",
    featuresTitle2: "Flujo real de entrevista",
    featuresBody2: "Practica en el mismo orden y ritmo del día de la entrevista.",
    featuresTitle3: "Seguimiento y feedback",
    featuresBody3: "Guarda respuestas recientes y detecta mejoras rápidamente.",
    featuresTitle4: "Soporte inglés + español",
    featuresBody4: "Cada pregunta está disponible en ambos idiomas.",
    offerTitle: "Lo que incluye",
    offer1: "100 preguntas cívicas (modo fácil)",
    offer2: "Guion de simulación real",
    offer3: "Explicaciones de preguntas Sí/No",
    offer4: "Preguntas trampa frecuentes",
    offer5: "Lista de verificación del día",
    offer6: "Guía para evitar el rechazo",
    offer7: "Archivos de audio para pronunciación",
    stepsTitle: "Cómo funciona",
    step1Title: "Evaluación rápida",
    step1Body: "Comprueba tu nivel actual y define tu ruta.",
    step2Title: "Entrevista simulada",
    step2Body: "Practica con preguntas reales y tiempos suaves.",
    step3Title: "Repaso y recordatorios",
    step3Body: "Revisa preguntas débiles y mantén el ritmo.",
    ctaTitle: "Ayudemos a todos a aprobar la entrevista",
    ctaBody:
      "Recibe apoyo bilingüe para el éxito por solo $4.99 al mes.",
    ctaButton: "Unirme a la lista",
    toggleLabel: "Cambiar idioma",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const isEnglish = lang === "en";

  return (
    <main className="page">
      <header className="hero">
        <div className="hero-top">
          <span className="badge">{t.badge}</span>
          <div className="lang-stack">
            <button
              type="button"
              className="lang-toggle"
              aria-label={t.toggleLabel}
              onClick={() => setLang(isEnglish ? "es" : "en")}
            >
              {t.langToggle}
            </button>
          </div>
        </div>

        <div className="hero-content">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
            <div className="actions">
              <button className="primary">{t.ctaPrimary}</button>
              <button className="secondary">{t.ctaSecondary}</button>
            </div>
          </div>

          <div className="hero-card">
            <h2>{t.previewTitle}</h2>
            <div className="bilingual">
              <div>
                <p className="label">{t.previewQLabel}</p>
                <p className="line">{t.previewQ}</p>
              </div>
              <div>
                <p className="label">{t.previewALabel}</p>
                <p className="line">{t.previewA}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mission">
        <h2>{t.missionTitle}</h2>
        <p className="mission-body">{t.missionBody}</p>
      </section>

      <section className="features">
        <article>
          <h3>{t.featuresTitle1}</h3>
          <p>{t.featuresBody1}</p>
        </article>
        <article>
          <h3>{t.featuresTitle2}</h3>
          <p>{t.featuresBody2}</p>
        </article>
        <article>
          <h3>{t.featuresTitle3}</h3>
          <p>{t.featuresBody3}</p>
        </article>
        <article>
          <h3>{t.featuresTitle4}</h3>
          <p>{t.featuresBody4}</p>
        </article>
      </section>

      <section className="offer">
        <h2>{t.offerTitle}</h2>
        <div className="offer-grid">
          <div className="offer-card">{t.offer1}</div>
          <div className="offer-card">{t.offer2}</div>
          <div className="offer-card">{t.offer3}</div>
          <div className="offer-card">{t.offer4}</div>
          <div className="offer-card">{t.offer5}</div>
          <div className="offer-card">{t.offer6}</div>
          <div className="offer-card">{t.offer7}</div>
        </div>
      </section>

      <section className="steps">
        <h2>{t.stepsTitle}</h2>
        <div className="step-list">
          <div className="step">
            <span className="step-num">1</span>
            <div>
              <h4>{t.step1Title}</h4>
              <p>{t.step1Body}</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <div>
              <h4>{t.step2Title}</h4>
              <p>{t.step2Body}</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <h4>{t.step3Title}</h4>
              <p>{t.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaBody}</p>
        </div>
        <button className="primary">{t.ctaButton}</button>
      </section>
    </main>
  );
}
