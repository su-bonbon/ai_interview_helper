import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: May 26, 2026",
    intro:
      "We respect your privacy. This policy explains what we collect, how we use it, and the choices you have.",
    sections: [
      {
        title: "Information we collect",
        body:
          "We collect account information like email and usage data to provide and improve the product.",
      },
      {
        title: "How we use information",
        body:
          "We use data to provide the service, personalize your experience, and keep the platform secure.",
      },
      {
        title: "Sharing",
        body:
          "We do not sell your personal data. We may share data with trusted providers for hosting, advertising, and analytics.",
      },
      {
        title: "Your choices",
        body:
          "You can update your account information or request deletion by contacting support.",
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    updated: "Última actualización: 26 de mayo de 2026",
    intro:
      "Respetamos tu privacidad. Esta política explica qué recopilamos, cómo lo usamos y tus opciones.",
    sections: [
      {
        title: "Información que recopilamos",
        body:
          "Recopilamos información de cuenta como email y datos de uso para ofrecer y mejorar el producto.",
      },
      {
        title: "Cómo usamos la información",
        body:
          "Usamos los datos para ofrecer el servicio, personalizar tu experiencia y mantener la seguridad.",
      },
      {
        title: "Compartir información",
        body:
          "No vendemos datos personales. Podemos compartir datos con proveedores de hosting, anuncios y analítica.",
      },
      {
        title: "Tus opciones",
        body:
          "Puedes actualizar tu información o solicitar eliminación contactando a soporte.",
      },
    ],
  },
};

export default function Privacy() {
  const { lang } = useOutletContext();
  const t = copy[lang];
  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-black">{t.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{t.updated}</p>
        <p className="mt-6 text-slate-700">{t.intro}</p>
        <div className="mt-8 space-y-6">
          {t.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold">{section.title}</h2>
              <p className="mt-2 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
