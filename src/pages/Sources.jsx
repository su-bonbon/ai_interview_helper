import { useOutletContext } from "react-router-dom";

const copy = {
  en: {
    title: "Sources and Editorial Standards",
    subtitle:
      "How we create, review, and present citizenship interview preparation content.",
    updated: "Last updated: June 22, 2026",
    sections: [
      {
        title: "Our editorial approach",
        body:
          "US Citizenship Prep publishes original study guidance for applicants preparing for the naturalization interview. We focus on practical preparation: understanding the interview flow, practicing civics recall, reviewing N-400 answers, organizing documents, and reducing interview-day confusion.",
      },
      {
        title: "Official sources",
        body:
          "When a topic depends on official rules, forms, or test policy, users should verify details with USCIS. We link to official USCIS resources whenever a page discusses forms, civics study materials, reading and writing test expectations, or naturalization interview preparation.",
      },
      {
        title: "What this site is not",
        body:
          "This site is not a law firm, government agency, USCIS representative, or substitute for legal advice. Applicants with arrests, serious citations, immigration history issues, tax concerns, or complicated eligibility questions should consider speaking with a qualified immigration attorney.",
      },
      {
        title: "Updates and corrections",
        body:
          "We review content for clarity and usefulness as the site grows. If a page is unclear or a resource link changes, users can contact us so we can review and improve the material.",
      },
    ],
    linksTitle: "Official resources",
    links: [
      ["USCIS Citizenship Resource Center", "https://www.uscis.gov/citizenship"],
      [
        "USCIS study materials and test resources",
        "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test",
      ],
      ["Form N-400 page", "https://www.uscis.gov/n-400"],
      [
        "Naturalization interview and test information",
        "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test",
      ],
    ],
  },
  es: {
    title: "Fuentes y estándares editoriales",
    subtitle:
      "Cómo creamos, revisamos y presentamos contenido para la preparación de la entrevista de ciudadanía.",
    updated: "Última actualización: 22 de junio de 2026",
    sections: [
      {
        title: "Nuestro enfoque editorial",
        body:
          "US Citizenship Prep publica orientación original para solicitantes que se preparan para la entrevista de naturalización. Nos enfocamos en preparación práctica: entender el flujo de la entrevista, practicar civismo, revisar respuestas del N-400, organizar documentos y reducir confusión.",
      },
      {
        title: "Fuentes oficiales",
        body:
          "Cuando un tema depende de reglas oficiales, formularios o políticas del examen, los usuarios deben verificar los detalles con USCIS. Enlazamos recursos oficiales cuando una página habla de formularios, materiales de estudio, lectura, escritura o entrevista.",
      },
      {
        title: "Qué no es este sitio",
        body:
          "Este sitio no es un bufete de abogados, agencia gubernamental, representante de USCIS ni sustituto de asesoría legal. Personas con arrestos, citaciones serias, problemas migratorios, impuestos o elegibilidad complicada deberían considerar hablar con un abogado de inmigración.",
      },
      {
        title: "Actualizaciones y correcciones",
        body:
          "Revisamos el contenido para mejorar claridad y utilidad. Si una página no es clara o un enlace cambia, los usuarios pueden contactarnos para revisarlo.",
      },
    ],
    linksTitle: "Recursos oficiales",
    links: [
      ["Centro de recursos de ciudadanía de USCIS", "https://www.uscis.gov/citizenship"],
      [
        "Materiales de estudio y recursos del examen",
        "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test",
      ],
      ["Página del Formulario N-400", "https://www.uscis.gov/n-400"],
      [
        "Información sobre entrevista y examen",
        "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test",
      ],
    ],
  },
};

export default function Sources() {
  const { lang } = useOutletContext();
  const t = copy[lang];

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0b50da]">
          Editorial
        </p>
        <h1 className="mt-3 text-4xl font-black">{t.title}</h1>
        <p className="mt-3 text-lg leading-8 text-slate-600">{t.subtitle}</p>
        <p className="mt-3 text-sm text-slate-400">{t.updated}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {t.sections.map((section) => (
          <article key={section.title} className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black">{section.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-black/10 bg-white p-6">
        <h2 className="text-2xl font-black">{t.linksTitle}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {t.links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-black/10 p-4 text-sm font-bold text-[#0b50da]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
