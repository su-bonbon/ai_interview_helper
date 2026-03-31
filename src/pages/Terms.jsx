import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Terms of Service",
    updated: "Last updated: March 1, 2025",
    intro:
      "By using this service, you agree to the terms below. These terms outline your rights and responsibilities.",
    sections: [
      {
        title: "Use of the service",
        body:
          "You may use the platform for personal interview preparation. Do not misuse the service or attempt unauthorized access.",
      },
      {
        title: "Payments",
        body:
          "Lifetime access is granted after successful payment. All sales are final unless required by law.",
      },
      {
        title: "Content",
        body:
          "All content is provided for educational purposes and should not be considered legal advice.",
      },
      {
        title: "Account",
        body:
          "You are responsible for maintaining the confidentiality of your account credentials.",
      },
    ],
  },
  es: {
    title: "Términos del servicio",
    updated: "Última actualización: 1 de marzo de 2025",
    intro:
      "Al usar este servicio, aceptas los términos a continuación. Estos términos describen tus derechos y responsabilidades.",
    sections: [
      {
        title: "Uso del servicio",
        body:
          "Puedes usar la plataforma para preparación personal. No uses el servicio de forma indebida.",
      },
      {
        title: "Pagos",
        body:
          "El acceso de por vida se otorga tras el pago. Todas las ventas son finales salvo que la ley lo requiera.",
      },
      {
        title: "Contenido",
        body:
          "El contenido es educativo y no constituye asesoría legal.",
      },
      {
        title: "Cuenta",
        body:
          "Eres responsable de mantener la confidencialidad de tus credenciales.",
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
