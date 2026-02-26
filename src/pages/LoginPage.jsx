import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Log in or create an account",
    subtitle: "Enter your email to sign up or log in.",
    email: "Email",
    button: "Continue",
    helper: "By continuing, you agree to our Terms and Privacy Policy.",
    or: "Or",
    google: "Continue with Google",
    apple: "Continue with Apple",
  },
  es: {
    title: "Inicia sesión o crea una cuenta",
    subtitle: "Ingresa tu correo para registrarte o iniciar sesión.",
    email: "Correo electrónico",
    button: "Continuar",
    helper: "Al continuar, aceptas nuestros Términos y Política de privacidad.",
    or: "O",
    google: "Continuar con Google",
    apple: "Continuar con Apple",
  },
};

export default function LoginPage() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-panel">
          <div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
          <form className="login-form">
            <label>
              {t.email}
              <input type="email" name="email" placeholder="you@email.com" />
            </label>
            <button type="button">{t.button}</button>
          </form>
          <div className="login-divider">{t.or}</div>
          <div className="login-socials">
            <button type="button">{t.google}</button>
            <button type="button">{t.apple}</button>
          </div>
          <p className="login-meta">{t.helper}</p>
        </div>
      </section>
    </main>
  );
}
