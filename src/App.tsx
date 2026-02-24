import { useState } from 'react'
import './App.css'

const copy = {
  en: {
    eyebrow: 'Personal Stylist',
    title: 'Style That Fits You Perfectly',
    subcopy:
      'Upload your photo and body details to receive tailored fit and item recommendations.',
    sectionTitle: 'Body Profile',
    sectionHint: 'Enter the basics to start your personalized styling.',
    photoLabel: 'Your Photo',
    uploadTitle: 'Upload Photo',
    uploadHint: 'Front-facing photos work best',
    genderLabel: 'Gender',
    woman: 'Woman',
    man: 'Man',
    nonbinary: 'Non-binary',
    height: 'Height (cm)',
    heightPlaceholder: 'e.g., 170',
    weight: 'Weight (kg)',
    weightPlaceholder: 'e.g., 58',
    cta: 'Start Style Matching',
    languageLabel: 'Language',
    languageToggle: 'Switch to Spanish'
  },
  es: {
    eyebrow: 'Personal Stylist',
    title: 'Estilo que se ajusta perfectamente a ti',
    subcopy:
      'Sube tu foto y tus datos corporales para recibir recomendaciones de ajuste e ítems a medida.',
    sectionTitle: 'Perfil corporal',
    sectionHint: 'Ingresa lo básico para iniciar tu estilismo personalizado.',
    photoLabel: 'Tu foto',
    uploadTitle: 'Subir foto',
    uploadHint: 'Las fotos de frente funcionan mejor',
    genderLabel: 'Género',
    woman: 'Mujer',
    man: 'Hombre',
    nonbinary: 'No binario',
    height: 'Altura (cm)',
    heightPlaceholder: 'p. ej., 170',
    weight: 'Peso (kg)',
    weightPlaceholder: 'p. ej., 58',
    cta: 'Iniciar matching de estilo',
    languageLabel: 'Idioma',
    languageToggle: 'Cambiar a inglés'
  }
} as const

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en')
  const t = copy[language]

  return (
    <div className="page">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />

      <main className="shell">
        <div className="toolbar">
          <span className="toolbar-label">{t.languageLabel}</span>
          <button
            className="toggle"
            type="button"
            aria-pressed={language === 'es'}
            onClick={() => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))}
          >
            <span className="toggle-dot" />
            <span className="toggle-text">{t.languageToggle}</span>
          </button>
        </div>

        <header className="hero">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="subcopy">{t.subcopy}</p>
        </header>

        <section className="panel">
          <h2>{t.sectionTitle}</h2>
          <p className="hint">{t.sectionHint}</p>

          <form className="form">
            <label className="field">
              <span>{t.photoLabel}</span>
              <div className="upload">
                <input type="file" accept="image/*" />
                <div className="upload-ui">
                  <div className="upload-icon">+</div>
                  <div className="upload-text">
                    <strong>{t.uploadTitle}</strong>
                    <span>{t.uploadHint}</span>
                  </div>
                </div>
              </div>
            </label>

            <div className="row">
              <label className="field">
                <span>{t.genderLabel}</span>
                <div className="segmented">
                  <label className="segment">
                    <input type="radio" name="gender" defaultChecked />
                    <span>{t.woman}</span>
                  </label>
                  <label className="segment">
                    <input type="radio" name="gender" />
                    <span>{t.man}</span>
                  </label>
                  <label className="segment">
                    <input type="radio" name="gender" />
                    <span>{t.nonbinary}</span>
                  </label>
                </div>
              </label>
              <label className="field">
                <span>{t.height}</span>
                <input type="number" placeholder={t.heightPlaceholder} min={90} max={230} />
              </label>
              <label className="field">
                <span>{t.weight}</span>
                <input type="number" placeholder={t.weightPlaceholder} min={25} max={200} />
              </label>
            </div>

            <button className="cta" type="button">
              {t.cta}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
