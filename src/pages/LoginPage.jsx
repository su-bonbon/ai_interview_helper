import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase.js";

const copy = {
  en: {
    title: "Log in or create an account",
    subtitle: "Enter your email to sign up or log in.",
    email: "Email",
    password: "Password",
    button: "Continue",
    helper: "By continuing, you agree to our Terms and Privacy Policy.",
    or: "Or",
    google: "Continue with Google",
    apple: "Continue with Apple",
    error: "Login failed. Please check your email and password.",
    loading: "Signing in...",
  },
  es: {
    title: "Inicia sesión o crea una cuenta",
    subtitle: "Ingresa tu correo para registrarte o iniciar sesión.",
    email: "Correo electrónico",
    password: "Contraseña",
    button: "Continuar",
    helper: "Al continuar, aceptas nuestros Términos y Política de privacidad.",
    or: "O",
    google: "Continuar con Google",
    apple: "Continuar con Apple",
    error: "Error al iniciar sesión. Revisa tu correo y contraseña.",
    loading: "Ingresando...",
  },
};

export default function LoginPage() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          isSubscribed: false,
        });
      }
    } catch (err) {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-panel">
          <div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <label>
              {t.email}
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              {t.password}
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <button type="submit" disabled={loading}>
              {loading ? t.loading : t.button}
            </button>
          </form>
          {error ? <p className="login-meta">{error}</p> : null}
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
