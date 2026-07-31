import { Link } from "react-router-dom";

const copy = {
  en: {
    eyebrow: "Editorial trust",
    title: "Written from real preparation experience, checked against official sources",
    reviewed: "Last reviewed: July 30, 2026",
    body:
      "US Citizenship Prep is an independent educational resource. The guidance is shaped by first-hand naturalization interview preparation experience, then organized around practical study tasks: civics recall, N-400 review, English reading and writing, documents, and interview-day planning.",
    legal:
      "This site does not provide legal advice and is not affiliated with USCIS. Applicants with arrests, serious citations, immigration history issues, tax concerns, or uncertain eligibility should speak with a qualified immigration attorney.",
    about: "About the site",
    sources: "Sources and standards",
    experience: "Interview experience",
  },
  es: {
    eyebrow: "Confianza editorial",
    title: "Escrito desde experiencia real y revisado con fuentes oficiales",
    reviewed: "Última revisión: 30 de julio de 2026",
    body:
      "US Citizenship Prep es un recurso educativo independiente. La guía nace de experiencia real de preparación para naturalización y se organiza alrededor de tareas prácticas: civismo, revisión N-400, lectura y escritura, documentos y planificación para el día de entrevista.",
    legal:
      "Este sitio no ofrece asesoría legal y no está afiliado con USCIS. Solicitantes con arrestos, citaciones serias, problemas migratorios, impuestos o elegibilidad incierta deberían hablar con un abogado de inmigración calificado.",
    about: "Acerca del sitio",
    sources: "Fuentes y estándares",
    experience: "Experiencia de entrevista",
  },
};

export default function EditorialTrustBlock({ lang = "en" }) {
  const t = copy[lang] || copy.en;

  return (
    <section className="rounded-lg border border-[#d7e3d3] bg-[#f4f8ef] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#1f7a3e]">
        {t.eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-slate-950">
        {t.title}
      </h2>
      <p className="mt-3 text-sm font-black text-slate-500">{t.reviewed}</p>
      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">{t.body}</p>
      <p className="mt-4 max-w-4xl text-sm font-semibold leading-7 text-slate-600">
        {t.legal}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          to="/about"
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800"
        >
          {t.about}
        </Link>
        <Link
          to="/sources"
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800"
        >
          {t.sources}
        </Link>
        <Link
          to="/citizenship-interview-experience"
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800"
        >
          {t.experience}
        </Link>
      </div>
    </section>
  );
}
