import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo1.png";

export const copy = {
  en: {
    navTitle: "Citizenship Success",
    navToggle: "Español",
    navCivics: "Civics",
    navStudyPlan: "Study Plan",
    navFaq: "FAQ",
    navAbout: "About",
    footerTitle: "Citizenship Success",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerContact: "Contact",
    footerFaq: "FAQ",
    footerAbout: "About",
    footerNote: "© 2024 Citizenship Success. Helping families bridge borders.",
  },
  es: {
    navTitle: "Citizenship Success",
    navToggle: "English",
    navCivics: "Civismo",
    navStudyPlan: "Plan",
    navFaq: "FAQ",
    navAbout: "Acerca de",
    footerTitle: "Citizenship Success",
    footerPrivacy: "Privacidad",
    footerTerms: "Términos",
    footerContact: "Contacto",
    footerFaq: "Preguntas",
    footerAbout: "Acerca de",
    footerNote: "© 2024 Citizenship Success. Apoyando a las familias.",
  },
};

export default function Layout() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const isEnglish = lang === "en";

  return (
    <div className="bg-[#f6f4f0] text-slate-900 font-display">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 hero-noise pointer-events-none" />
        <div className="absolute -top-40 -right-24 h-72 w-72 rounded-full bg-[#c61f1f]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-[#1f7a3e]/10 blur-3xl pointer-events-none" />

        <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f4f0]/80 backdrop-blur">
          <div className="mx-auto flex max-w-screen-2xl items-center gap-4 px-3 sm:px-6 lg:px-10 py-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Citizenship Success" className="h-10 w-10 sm:h-12 sm:w-12" />
              <h2 className="text-base sm:text-lg font-bold tracking-tight">{t.navTitle}</h2>
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

        <footer className="border-t border-black/5 bg-white">
          <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 px-3 sm:px-6 lg:px-10 py-10 text-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-[#0b50da]">
                notifications_active
              </span>
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
              <Link to="/about" className="hover:text-[#0b50da] transition-colors">
                {t.footerAbout}
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
