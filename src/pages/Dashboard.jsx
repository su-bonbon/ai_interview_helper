import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Welcome back",
    subtitle: "Your interview prep dashboard is ready.",
  },
  es: {
    title: "Bienvenido de nuevo",
    subtitle: "Tu panel de preparación está listo.",
  },
};

export default function Dashboard() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-16">
      <h1 className="text-3xl font-black">{t.title}</h1>
      <p className="text-slate-600 mt-2">{t.subtitle}</p>
    </section>
  );
}
