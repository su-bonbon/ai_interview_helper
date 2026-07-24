import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Contact",
    subtitle: "We usually respond within 2 business days.",
    emailLabel: "Email",
    email: "support@usinterviewprep.com",
    note:
      "For privacy, accessibility, or content questions, include enough detail for us to understand the issue.",
    extraTitle: "What we can help with",
    extra:
      "You can contact us about study content, accessibility issues, privacy requests, or corrections to educational material. We do not provide legal advice, but we welcome feedback that makes the study experience clearer and more useful.",
    responseTitle: "Before you contact us",
    response:
      "Please do not send sensitive immigration documents, A-numbers, Social Security numbers, tax documents, court records, or passport images through email. If you have a legal question about eligibility, arrests, citations, tax problems, or immigration history, contact a qualified immigration attorney. We can review site errors, broken links, unclear study explanations, accessibility problems, and privacy requests.",
    correctionsTitle: "Content corrections",
    corrections:
      "If you believe a study explanation is unclear or an official resource link has changed, include the page URL and a short explanation of the issue. We review corrections as educational content updates and compare official-rule questions against USCIS resources before changing the page.",
  },
  es: {
    title: "Contacto",
    subtitle: "Respondemos en 2 días hábiles.",
    emailLabel: "Correo",
    email: "support@usinterviewprep.com",
    note:
      "Para consultas de privacidad, accesibilidad o contenido, incluye suficiente detalle para entender el problema.",
    extraTitle: "Cómo podemos ayudar",
    extra:
      "Puedes contactarnos sobre contenido de estudio, problemas de accesibilidad, solicitudes de privacidad o correcciones al material educativo. No ofrecemos asesoría legal, pero agradecemos comentarios que hagan la experiencia de estudio más clara y útil.",
    responseTitle: "Antes de contactarnos",
    response:
      "No envíes documentos migratorios sensibles, números A, números de Seguro Social, documentos de impuestos, récords de corte ni imágenes de pasaporte por correo. Si tienes una pregunta legal sobre elegibilidad, arrestos, citaciones, impuestos o historial migratorio, consulta con un abogado de inmigración calificado. Podemos revisar errores del sitio, enlaces rotos, explicaciones confusas, accesibilidad y solicitudes de privacidad.",
    correctionsTitle: "Correcciones de contenido",
    corrections:
      "Si crees que una explicación no es clara o que un enlace oficial cambió, incluye la URL de la página y una explicación corta. Revisamos las correcciones como actualizaciones educativas y comparamos preguntas sobre reglas oficiales con recursos de USCIS antes de cambiar la página.",
  },
};

export default function Contact() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="mt-2 text-slate-600">{t.subtitle}</p>
        <div className="mt-8 rounded-lg border border-black/10 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {t.emailLabel}
          </p>
          <a
            href={`mailto:${t.email}`}
            className="mt-2 inline-flex text-lg font-semibold text-[#0b50da]"
          >
            {t.email}
          </a>
          <p className="mt-4 text-sm text-slate-500">{t.note}</p>
        </div>
        <div className="mt-5 rounded-lg border border-black/10 bg-white p-6">
          <h2 className="text-lg font-bold">{t.extraTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.extra}</p>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-lg font-bold">{t.responseTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t.response}
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-lg font-bold">{t.correctionsTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t.corrections}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
