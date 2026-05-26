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
          "We collect basic usage data to provide and improve the product. Study preferences such as interview dates or marked questions may be stored locally in your browser.",
      },
      {
        title: "How we use information",
        body:
          "We use data to provide the service, personalize your experience, and keep the platform secure.",
      },
      {
        title: "Advertising and cookies",
        body:
          "We use Google products, including analytics and advertising services, which may use cookies, web beacons, IP addresses, device identifiers, and similar technologies to measure performance and show relevant ads.",
      },
      {
        title: "Sharing",
        body:
          "We do not sell your personal data. We may share limited data with trusted providers for hosting, analytics, advertising, and security.",
      },
      {
        title: "Your choices",
        body:
          "You can clear locally saved study data from your browser settings. You can also contact support with privacy questions or deletion requests.",
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
          "Recopilamos datos básicos de uso para ofrecer y mejorar el producto. Preferencias como fechas de entrevista o preguntas marcadas pueden guardarse localmente en tu navegador.",
      },
      {
        title: "Cómo usamos la información",
        body:
          "Usamos los datos para ofrecer el servicio, personalizar tu experiencia y mantener la seguridad.",
      },
      {
        title: "Anuncios y cookies",
        body:
          "Usamos productos de Google, incluidos servicios de analítica y publicidad, que pueden utilizar cookies, balizas web, direcciones IP, identificadores de dispositivo y tecnologías similares para medir rendimiento y mostrar anuncios relevantes.",
      },
      {
        title: "Compartir información",
        body:
          "No vendemos datos personales. Podemos compartir datos limitados con proveedores confiables de hosting, autenticación, analítica, anuncios y seguridad.",
      },
      {
        title: "Tus opciones",
        body:
          "Puedes borrar los datos de estudio guardados localmente desde la configuración de tu navegador. También puedes contactar a soporte con preguntas de privacidad o solicitudes de eliminación.",
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
