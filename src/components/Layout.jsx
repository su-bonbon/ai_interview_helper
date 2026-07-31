import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo1.png";
import ContactWidget from "./ContactWidget.jsx";

export const copy = {
  en: {
    navTitle: "US Citizenship Prep",
    navToggle: "Español",
    navCivics: "Civics",
    navStudyPlan: "Study Plan",
    navGuides: "Guides",
    navFaq: "FAQ",
    navAbout: "About",
    footerTitle: "US Citizenship Prep",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerContact: "Contact",
    footerFaq: "FAQ",
    footerAbout: "About",
    footerGuides: "Guides",
    footerTopics: "Topics",
    footerSources: "Sources",
    footerNote: "© 2024 US Citizenship Prep. Free interview practice for immigrant families.",
  },
  es: {
    navTitle: "US Citizenship Prep",
    navToggle: "English",
    navCivics: "Civismo",
    navStudyPlan: "Plan",
    navGuides: "Guías",
    navFaq: "FAQ",
    navAbout: "Acerca de",
    footerTitle: "US Citizenship Prep",
    footerPrivacy: "Privacidad",
    footerTerms: "Términos",
    footerContact: "Contacto",
    footerFaq: "Preguntas",
    footerAbout: "Acerca de",
    footerGuides: "Guías",
    footerTopics: "Temas",
    footerSources: "Fuentes",
    footerNote: "© 2024 US Citizenship Prep. Práctica gratuita para la entrevista de ciudadanía.",
  },
};

export default function Layout() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const isEnglish = lang === "en";

  return (
    <div className="bg-[#f3f6f8] text-slate-950 font-display">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 hero-noise pointer-events-none" />

        <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-screen-2xl items-center gap-4 px-3 sm:px-6 lg:px-10 py-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="US Citizenship Prep" className="h-10 w-10 sm:h-12 sm:w-12" />
              <h2 className="text-base sm:text-lg font-black tracking-tight">{t.navTitle}</h2>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold ml-auto">
              <Link
                to="/civics"
                className="text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                {t.navCivics}
              </Link>
              <Link
                to="/study-plan"
                className="text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                {t.navStudyPlan}
              </Link>
              <Link
                to="/guides"
                className="text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                {t.navGuides}
              </Link>
              <Link
                to="/faq"
                className="text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                {t.navFaq}
              </Link>
              <Link
                to="/about"
                className="hidden sm:inline text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                {t.navAbout}
              </Link>
              <button
                type="button"
                onClick={() => setLang(isEnglish ? "es" : "en")}
                className="flex items-center gap-2 text-slate-600 hover:text-[#0b50da] transition-colors"
              >
                <span className="material-symbols-outlined text-xl text-slate-400">
                  translate
                </span>
                {t.navToggle}
              </button>
            </div>
          </div>
        </nav>

        <Outlet context={{ lang }} />
        <ContactWidget lang={lang} />

        <footer className="border-t border-black/5 bg-white">
          <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 px-3 sm:px-6 lg:px-10 py-10 text-center">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-9 w-9" aria-hidden="true" />
              <span className="text-xl font-black">{t.footerTitle}</span>
            </div>
            <div className="flex gap-6 text-sm font-semibold text-slate-500">
              <Link to="/privacy" className="hover:text-[#0b50da] transition-colors">
                {t.footerPrivacy}
              </Link>
              <Link to="/terms" className="hover:text-[#0b50da] transition-colors">
                {t.footerTerms}
              </Link>
              <Link to="/faq" className="hover:text-[#0b50da] transition-colors">
                {t.footerFaq}
              </Link>
              <Link to="/guides" className="hover:text-[#0b50da] transition-colors">
                {t.footerGuides}
              </Link>
              <Link to="/topics" className="hover:text-[#0b50da] transition-colors">
                {t.footerTopics}
              </Link>
              <Link to="/about" className="hover:text-[#0b50da] transition-colors">
                {t.footerAbout}
              </Link>
              <Link to="/sources" className="hover:text-[#0b50da] transition-colors">
                {t.footerSources}
              </Link>
              <Link to="/contact" className="hover:text-[#0b50da] transition-colors">
                {t.footerContact}
              </Link>
            </div>
            <p className="text-xs text-slate-400">{t.footerNote}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
