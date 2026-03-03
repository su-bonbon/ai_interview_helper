import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase.js";

const copy = {
  en: {
    loginTitle: "Log in to your account",
    signupTitle: "Create your account",
    subtitle: "Enter your email and password to continue.",
    email: "Email",
    password: "Password",
    loginButton: "Sign in",
    signupButton: "Create account",
    helper: "By continuing, you agree to our Terms and Privacy Policy.",
    or: "Or",
    google: "Continue with Google",
    switchToSignup: "Create account",
    switchToLogin: "Sign in",
    forgot: "Forgot password?",
    resetSent: "Password reset email sent. Check your inbox.",
    resetNeedEmail: "Enter your email first.",
    resetError: "Could not send reset email. Try again.",
    error: "Login failed. Please check your email and password.",
    signupError: "Signup failed. Please try again.",
    loading: "Signing in...",
    signingUp: "Creating account...",
    errorInvalidCredential: "Email or password is incorrect.",
    errorUserNotFound: "No account found. Please create one.",
    errorEmailInUse: "This email is already in use.",
    errorWeakPassword: "Password must be at least 6 characters.",
    errorInvalidEmail: "Please enter a valid email address.",
    errorTooMany: "Too many attempts. Try again later.",
    errorPopupClosed: "Google sign-in was closed before finishing.",
    errorPopupCancelled: "Google sign-in was cancelled. Please retry.",
    errorPopupBlocked: "Pop-up blocked. Allow pop-ups and try again.",
    errorUnauthorizedDomain: "Google sign-in is not allowed on this domain.",
  },
  es: {
    loginTitle: "Inicia sesión",
    signupTitle: "Crea tu cuenta",
    subtitle: "Ingresa tu correo y contraseña para continuar.",
    email: "Correo electrónico",
    password: "Contraseña",
    loginButton: "Iniciar sesión",
    signupButton: "Crear cuenta",
    helper: "Al continuar, aceptas nuestros Términos y Política de privacidad.",
    or: "O",
    google: "Continuar con Google",
    switchToSignup: "Crear cuenta",
    switchToLogin: "Iniciar sesión",
    forgot: "¿Olvidaste tu contraseña?",
    resetSent: "Enviamos el correo de recuperación. Revisa tu bandeja.",
    resetNeedEmail: "Primero ingresa tu correo.",
    resetError: "No pudimos enviar el correo. Intenta de nuevo.",
    error: "Error al iniciar sesión. Revisa tu correo y contraseña.",
    signupError: "Error al crear la cuenta. Intenta de nuevo.",
    loading: "Ingresando...",
    signingUp: "Creando cuenta...",
    errorInvalidCredential: "Correo o contraseña incorrectos.",
    errorUserNotFound: "No existe la cuenta. Crea una nueva.",
    errorEmailInUse: "Este correo ya está en uso.",
    errorWeakPassword: "La contraseña debe tener al menos 6 caracteres.",
    errorInvalidEmail: "Ingresa un correo válido.",
    errorTooMany: "Demasiados intentos. Intenta más tarde.",
    errorPopupClosed: "Se cerró el inicio con Google antes de terminar.",
    errorPopupCancelled: "Se canceló el inicio con Google. Intenta de nuevo.",
    errorPopupBlocked: "El navegador bloqueó el pop-up. Permítelo e intenta otra vez.",
    errorUnauthorizedDomain: "Google no está autorizado en este dominio.",
  },
};

async function ensureUserDoc(user) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      isSubscribed: false,
    });
  }
}

export default function LoginPage() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [mode, setMode] = useState("login");

  useEffect(() => {
    const consumeRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          await ensureUserDoc(result.user);
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("Google redirect error:", err);
        const code = err?.code || "";
        if (code === "auth/credential-already-in-use") {
          setError(t.errorEmailInUse);
        } else {
          setError(t.error);
        }
      }
    };
    consumeRedirect();
  }, [t.error, t.errorEmailInUse]);

  const handleEmailAuth = async (event) => {
    event.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);

    try {
      if (mode === "login") {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        await ensureUserDoc(userCredential.user);
        navigate("/dashboard");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await ensureUserDoc(userCredential.user);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Firebase auth error:", err);
      const code = err?.code || "";
      if (code === "auth/invalid-credential" || code === "auth/wrong-password") {
        setError(t.errorInvalidCredential);
      } else if (code === "auth/user-not-found") {
        setError(t.errorUserNotFound);
      } else if (code === "auth/email-already-in-use") {
        setError(t.errorEmailInUse);
      } else if (code === "auth/weak-password") {
        setError(t.errorWeakPassword);
      } else if (code === "auth/invalid-email") {
        setError(t.errorInvalidEmail);
      } else if (code === "auth/too-many-requests") {
        setError(t.errorTooMany);
      } else {
        setError(mode === "login" ? t.error : t.signupError);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setInfo("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.error("Google auth error:", err);
      const code = err?.code || "";
      if (code === "auth/unauthorized-domain") {
        setError(t.errorUnauthorizedDomain);
      } else {
        setError(t.error);
      }
    } finally {
      setLoading(false);
    }
  };

  const isLogin = mode === "login";

  const handleResetPassword = async () => {
    setError("");
    setInfo("");
    if (!email) {
      setInfo(t.resetNeedEmail);
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setInfo(t.resetSent);
    } catch (err) {
      console.error("Password reset error:", err);
      setError(t.resetError);
    }
  };

  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "signup" || modeParam === "login") {
      setMode(modeParam);
    }
  }, [searchParams]);

  const goToSignup = () => {
    window.location.href = "/login?mode=signup";
  };

  const goToLogin = () => {
    setSearchParams({ mode: "login" });
    setMode("login");
  };

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-panel">
          <div>
            <div className="login-tabs">
              <button
                type="button"
                className={`login-tab ${isLogin ? "is-active" : ""}`}
                onClick={goToLogin}
              >
                {t.switchToLogin}
              </button>
              <button
                type="button"
                className={`login-tab ${!isLogin ? "is-active" : ""}`}
                onClick={goToSignup}
              >
                {t.switchToSignup}
              </button>
            </div>
            <h1>{isLogin ? t.loginTitle : t.signupTitle}</h1>
            <p>{t.subtitle}</p>
          </div>
          <form className="login-form" onSubmit={handleEmailAuth}>
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
              {isLogin
                ? loading
                  ? t.loading
                  : t.loginButton
                : loading
                  ? t.signingUp
                  : t.signupButton}
            </button>
          </form>
          {isLogin ? (
            <button type="button" className="login-forgot" onClick={handleResetPassword}>
              {t.forgot}
            </button>
          ) : null}
          {error ? <p className="login-meta error">{error}</p> : null}
          {info ? <p className="login-meta info">{info}</p> : null}
          <div className="login-divider">{t.or}</div>
          <div className="login-socials">
            <button
              type="button"
              className="login-google"
              onClick={handleGoogle}
              disabled={loading}
            >
              <span className="google-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" focusable="false">
                  <path
                    d="M44.5 20H24v8.5h11.8C34.6 33.9 29.9 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.5 0 6.7 1.4 9.1 3.6l6-6C35.1 5 29.8 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20.5-7.6 20.5-21 0-1.4-.2-2.7-.5-4z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.3 14.7l7 5.1C15 16.2 19.2 13 24 13c3.5 0 6.7 1.4 9.1 3.6l6-6C35.1 5 29.8 3 24 3 16 3 9.1 7.5 6.3 14.7z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M24 45c5.7 0 11-1.9 15-5.2l-7-5.8C29.8 36 27 37 24 37c-5.9 0-10.8-4-12.5-9.5l-7 5.4C7.2 40.7 14.9 45 24 45z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M44.5 20H24v8.5h11.8c-1.1 3.1-3.3 5.6-5.8 7.3l7 5.8c4.1-3.8 7.5-9.4 7.5-17.6 0-1.4-.2-2.7-.5-4z"
                    fill="#1976D2"
                  />
                </svg>
              </span>
              {t.google}
            </button>
          </div>
          <p className="login-meta">{t.helper}</p>
        </div>
      </section>
    </main>
  );
}
