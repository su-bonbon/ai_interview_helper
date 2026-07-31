import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const copy = {
  en: {
    eyebrow: "404",
    title: "Page not found",
    body:
      "The page you are looking for may have moved. You can continue with the main study tools below.",
    home: "Go home",
    civics: "Practice civics",
    studyPlan: "Open study plan",
    guides: "Read guides",
    topics: "Browse topics",
    n400: "N-400 questions",
    checklist: "Interview checklist",
  },
  es: {
    eyebrow: "404",
    title: "Página no encontrada",
    body:
      "La página que buscas puede haberse movido. Puedes continuar con las herramientas principales abajo.",
    home: "Inicio",
    civics: "Practicar civismo",
    studyPlan: "Abrir plan",
    guides: "Leer guías",
    topics: "Ver temas",
    n400: "Preguntas N-400",
    checklist: "Checklist",
  },
};

export default function NotFound() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    robots.setAttribute("content", "noindex,follow");

    return () => {
      robots?.remove();
    };
  }, []);

  return (
    <section className="mx-auto max-w-screen-lg px-4 py-16 text-center sm:px-6 lg:px-10">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0b50da]">
        {t.eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
        {t.title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
        {t.body}
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: t.home, href: "/", icon: "home" },
          { label: t.civics, href: "/civics", icon: "menu_book" },
          { label: t.studyPlan, href: "/study-plan", icon: "calendar_month" },
          { label: t.guides, href: "/guides", icon: "article" },
          { label: t.topics, href: "/topics", icon: "hub" },
          { label: t.n400, href: "/n400-interview-questions", icon: "assignment" },
          {
            label: t.checklist,
            href: "/citizenship-interview-checklist",
            icon: "checklist",
          },
        ].map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="material-symbols-outlined text-2xl text-[#0b50da]">
              {item.icon}
            </span>
            <span className="mt-4 block text-sm font-black text-slate-950">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
