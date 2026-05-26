import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Terms of Service",
    updated: "Last updated: May 26, 2026",
    intro:
      "By using this service, you agree to the terms below. These terms outline your rights and responsibilities.",
    sections: [
      {
        title: "Use of the service",
        body:
          "You may use the platform for personal interview preparation. Do not misuse the service or attempt unauthorized access.",
      },
      {
        title: "Free access",
        body:
          "The core study tools are currently provided for free. We may support the service with advertising.",
      },
      {
        title: "Content",
        body:
          "All content is provided for educational purposes and should not be considered legal advice. We are not affiliated with USCIS or any government agency.",
      },
      {
        title: "Account",
        body:
          "Some study preferences may be saved in your browser. You are responsible for clearing local browser data if you use a shared device.",
      },
    ],
  },
  es: {
    title: "Términos del servicio",
    updated: "Última actualización: 26 de mayo de 2026",
    intro:
      "Al usar este servicio, aceptas los términos a continuación. Estos términos describen tus derechos y responsabilidades.",
    sections: [
      {
        title: "Uso del servicio",
        body:
          "Puedes usar la plataforma para preparación personal. No uses el servicio de forma indebida.",
      },
      {
        title: "Acceso gratis",
        body:
          "Las herramientas principales de estudio se ofrecen gratis actualmente. Podemos sostener el servicio con anuncios.",
      },
      {
        title: "Contenido",
        body:
          "El contenido es educativo y no constituye asesoría legal. No estamos afiliados con USCIS ni con ninguna agencia gubernamental.",
      },
      {
        title: "Datos locales",
        body:
          "Algunas preferencias de estudio pueden guardarse en tu navegador. Eres responsable de borrar los datos locales si usas un dispositivo compartido.",
      },
    ],
  },
};

export default function Terms() {
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
