import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Contact",
    subtitle: "We usually respond within 1–2 business days.",
    emailLabel: "Email",
    email: "support@citizenshipsuccess.com",
    note:
      "For privacy, accessibility, or content questions, include enough detail for us to understand the issue.",
    extraTitle: "What we can help with",
    extra:
      "You can contact us about study content, accessibility issues, privacy requests, or corrections to educational material. We do not provide legal advice, but we welcome feedback that makes the study experience clearer and more useful.",
  },
  es: {
    title: "Contacto",
    subtitle: "Respondemos en 1–2 días hábiles.",
    emailLabel: "Correo",
    email: "support@citizenshipsuccess.com",
    note:
      "Para consultas de privacidad, accesibilidad o contenido, incluye suficiente detalle para entender el problema.",
    extraTitle: "Cómo podemos ayudar",
    extra:
      "Puedes contactarnos sobre contenido de estudio, problemas de accesibilidad, solicitudes de privacidad o correcciones al material educativo. No ofrecemos asesoría legal, pero agradecemos comentarios que hagan la experiencia de estudio más clara y útil.",
  },
};

export default function Contact() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="mt-2 text-slate-600">{t.subtitle}</p>
        <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {t.emailLabel}
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {t.email}
          </p>
          <p className="mt-4 text-sm text-slate-500">{t.note}</p>
        </div>
        <div className="mt-5 rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="text-lg font-bold">{t.extraTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.extra}</p>
        </div>
      </div>
    </section>
  );
}
