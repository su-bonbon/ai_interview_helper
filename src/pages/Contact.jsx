import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Contact",
    subtitle: "We usually respond within 1–2 business days.",
    emailLabel: "Email",
    email: "support@citizenshipsuccess.com",
    note:
      "For account or billing questions, include the email you used to sign up.",
  },
  es: {
    title: "Contacto",
    subtitle: "Respondemos en 1–2 días hábiles.",
    emailLabel: "Correo",
    email: "support@citizenshipsuccess.com",
    note:
      "Para consultas de cuenta o pagos, incluye el email con el que te registraste.",
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
      </div>
    </section>
  );
}
