import { useState } from "react";

const formspreeEndpoint = "https://formspree.io/f/xpqvyvke";

const copy = {
  en: {
    open: "Open contact form",
    close: "Close contact form",
    bubbleLabel: "Question?",
    eyebrow: "Got A Question?",
    title: "Send us a question or comment",
    body: "We'll respond within 2 business days when a reply is needed.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    topic: "Topic",
    topicPlaceholder: "Choose a topic",
    topics: [
      "Study content question",
      "Correction or broken link",
      "Accessibility issue",
      "Privacy request",
      "General comment",
    ],
    message: "Question or comment",
    messagePlaceholder: "Tell us what page you were using and what you noticed.",
    submit: "Send message",
    submitting: "Sending...",
    success: "Thanks. Your message was sent.",
    error: "Something went wrong. Please try again or email us directly.",
    privacy:
      "Please do not send sensitive immigration documents, A-numbers, tax records, court records, or passport images.",
  },
  es: {
    open: "Abrir formulario de contacto",
    close: "Cerrar formulario de contacto",
    bubbleLabel: "¿Pregunta?",
    eyebrow: "¿Tienes una pregunta?",
    title: "Envíanos una pregunta o comentario",
    body: "Respondemos en 2 días hábiles cuando sea necesario.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo",
    emailPlaceholder: "tu@ejemplo.com",
    topic: "Tema",
    topicPlaceholder: "Elige un tema",
    topics: [
      "Pregunta sobre contenido",
      "Corrección o enlace roto",
      "Problema de accesibilidad",
      "Solicitud de privacidad",
      "Comentario general",
    ],
    message: "Pregunta o comentario",
    messagePlaceholder: "Dinos qué página estabas usando y qué notaste.",
    submit: "Enviar mensaje",
    submitting: "Enviando...",
    success: "Gracias. Tu mensaje fue enviado.",
    error: "Algo salió mal. Inténtalo de nuevo o escríbenos por correo.",
    privacy:
      "No envíes documentos migratorios sensibles, números A, impuestos, récords de corte ni imágenes de pasaporte.",
  },
};

export default function ContactWidget({ lang }) {
  const t = copy[lang] || copy.en;
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "US Citizenship Prep contact form");
    formData.append("language", lang);
    formData.append("source", window.location.href);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || t.error);
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error.message || t.error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {isOpen && (
        <section className="w-[calc(100vw-2.5rem)] max-w-sm rounded-lg border border-black/10 bg-white p-5 text-left shadow-2xl shadow-slate-950/20">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0b50da]">
                {t.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-black text-slate-950">{t.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{t.body}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50"
              aria-label={t.close}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder={t.namePlaceholder}
              aria-label={t.name}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#0b50da] focus:ring-4 focus:ring-[#0b50da]/10"
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t.emailPlaceholder}
              aria-label={t.email}
              required
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#0b50da] focus:ring-4 focus:ring-[#0b50da]/10"
            />
            <select
              name="topic"
              required
              defaultValue=""
              aria-label={t.topic}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#0b50da] focus:ring-4 focus:ring-[#0b50da]/10"
            >
              <option value="" disabled>
                {t.topicPlaceholder}
              </option>
              {t.topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              aria-label={t.message}
              required
              rows={4}
              className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm leading-6 outline-none transition focus:border-[#0b50da] focus:ring-4 focus:ring-[#0b50da]/10"
            />
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="h-11 w-full rounded-lg bg-[#0b50da] text-sm font-black text-white transition hover:bg-[#0946bf] disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {formStatus === "submitting" ? t.submitting : t.submit}
            </button>
          </form>

          {formStatus === "success" && (
            <p className="mt-3 rounded-lg border border-[#d7e3d3] bg-[#f4f8ef] p-3 text-sm font-semibold text-[#1f7a3e]">
              {t.success}
            </p>
          )}
          {formStatus === "error" && (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
              {errorMessage || t.error}
            </p>
          )}
          <p className="mt-3 text-xs leading-5 text-slate-500">{t.privacy}</p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group relative flex h-14 items-center gap-3 rounded-full bg-slate-950 px-4 pr-5 text-white shadow-2xl shadow-slate-950/25 ring-1 ring-slate-950/10 transition hover:-translate-y-0.5 hover:bg-[#0b50da]"
        aria-label={isOpen ? t.close : t.open}
        aria-expanded={isOpen}
      >
        {!isOpen && (
          <span
            className="contact-widget-pulse absolute inset-0 rounded-full border border-[#9fc5ff]/50 opacity-70"
            aria-hidden="true"
          />
        )}
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white text-slate-950 transition group-hover:text-[#0b50da]">
          <span className="material-symbols-outlined text-[1.35rem]">
            {isOpen ? "close" : "chat_bubble"}
          </span>
        </span>
        <span className="relative hidden text-sm font-black sm:inline">
          {isOpen ? t.close : t.bubbleLabel}
        </span>
      </button>
    </div>
  );
}
