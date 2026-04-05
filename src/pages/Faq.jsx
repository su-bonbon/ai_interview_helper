import { useOutletContext } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import faqData from "../assets/faq.json";
import qna1 from "../assets/qna1.jpg";
import qna2 from "../assets/qna2.jpg";
import qna3 from "../assets/qna3.jpg";
import qna4 from "../assets/qna4.jpg";
import qna5 from "../assets/qna5.jpg";
import qna7 from "../assets/qna7.jpg";
import qna8 from "../assets/qna8.jpg";
import qna9 from "../assets/qna9.jpg";
import qna10 from "../assets/qna10.jpg";
import qna11 from "../assets/qna11.jpg";
import qna12 from "../assets/qna12.jpg";

const copy = {
  en: {
    title: "FAQ",
    subtitle: "Clear, detailed answers to help you prepare with confidence.",
  },
  es: {
    title: "Preguntas frecuentes",
    subtitle: "Respuestas claras y detalladas para prepararte con confianza.",
  },
};

export default function Faq() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const imageMap = useMemo(
    () => ({
      "qna1.jpg": qna1,
      "qna2.jpg": qna2,
      "qna3.jpg": qna3,
      "qna4.jpg": qna4,
      "qna5.jpg": qna5,
      "qna7.jpg": qna7,
      "qna8.jpg": qna8,
      "qna9.jpg": qna9,
      "qna10.jpg": qna10,
      "qna11.jpg": qna11,
      "qna12.jpg": qna12,
    }),
    []
  );

  const items = faqData?.[lang] || [];

  const filtered = items.filter((item) => {
    const q = item.q.toLowerCase();
    const a = item.a.toLowerCase();
    const term = query.toLowerCase().trim();
    if (!term) return true;
    return q.includes(term) || a.includes(term);
  });

  const activeItem = filtered[activeIndex] || filtered[0];
  const activeImage = activeItem?.image ? imageMap[activeItem.image] : undefined;

  useEffect(() => {
    if (activeIndex >= filtered.length && filtered.length > 0) {
      setActiveIndex(0);
    }
  }, [activeIndex, filtered.length]);

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
        <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm min-h-[560px] h-full flex flex-col">
          <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm">
            <span className="material-symbols-outlined text-base text-slate-400">
              search
            </span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              placeholder="Search questions"
              className="w-full bg-transparent outline-none text-slate-700"
            />
          </div>
          <div className="mt-4 space-y-3 overflow-y-auto pr-2 flex-1">
            {filtered.map((item, idx) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left rounded-2xl border px-4 py-4 transition ${
                  idx === activeIndex
                    ? "border-[#0b50da] bg-[#0b50da]/5 text-slate-900"
                    : "border-black/5 bg-white text-slate-600 hover:border-[#0b50da]/40"
                }`}
              >
                <p className="text-sm font-semibold">{item.q}</p>
                <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                  {item.a}
                </p>
              </button>
            ))}
            {!filtered.length ? (
              <p className="text-sm text-slate-500 px-2 py-6">
                No matching questions.
              </p>
            ) : null}
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm min-h-[560px] h-full flex flex-col">
          {activeItem ? (
            <div className="flex flex-col gap-4 h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Answer
              </p>
              <div className="overflow-hidden rounded-2xl">
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt=""
                    className="h-40 w-full object-cover sm:h-48"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className="flex-1 overflow-y-auto pr-2">
                <h2 className="text-2xl font-black text-slate-900">
                  {activeItem.q}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {activeItem.a}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-slate-500">Select a question to view the answer.</p>
          )}
        </div>
      </div>
    </section>
  );
}
