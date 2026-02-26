import { useState } from "react";
import { Link } from "react-router-dom";

const copy = {
  en: {
    toggle: "Español",
    title: "Member login",
    subtitle: "Access your $4.99 plan and keep your progress in one place.",
    email: "Email",
    password: "Password",
    button: "Log in",
    helper: "No account yet? Join for $4.99 per month.",
    back: "Back to landing",
  },
  es: {
    toggle: "English",
    title: "Inicio de sesión",
    subtitle: "Accede a tu plan de $4.99 y guarda tu progreso.",
    email: "Correo electrónico",
    password: "Contraseña",
    button: "Iniciar sesión",
    helper: "¿No tienes cuenta? Únete por $4.99 al mes.",
    back: "Volver al inicio",
  },
};

export default function LoginPage() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const isEnglish = lang === "en";

  return (
    <main className="login-page">
      <header className="login-header">
        <Link className="back-link" to="/">
          {t.back}
        </Link>
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(isEnglish ? "es" : "en")}
        >
          {t.toggle}
        </button>
      </header>

      <section className="login-shell">
        <div className="login-copy">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
        <form className="login-form">
          <label>
            {t.email}
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            {t.password}
            <input type="password" name="password" placeholder="••••••••" />
          </label>
          <button className="primary" type="button">
            {t.button}
          </button>
          <p className="helper">{t.helper}</p>
        </form>
      </section>
    </main>
  );
}
