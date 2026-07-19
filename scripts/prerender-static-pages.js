import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://usinterviewprep.com";
const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

const pages = [
  {
    route: "/",
    title: "Free U.S. Citizenship Interview Prep | US Citizenship Prep",
    description:
      "Free bilingual U.S. citizenship interview preparation with civics practice, N-400 review, reading and writing guidance, mock interview prompts, and checklists.",
    h1: "Free U.S. Citizenship Interview Prep",
    intro:
      "US Citizenship Prep is a free bilingual study resource for people preparing for the naturalization interview.",
    sections: [
      [
        "What applicants can study here",
        "Practice civics questions, N-400 interview questions, reading and writing expectations, mock interview prompts, and interview-day checklists.",
      ],
      [
        "Original preparation guidance",
        "Our guides are written around real preparation tasks and include official-resource reminders, educational limits, and practical study routines.",
      ],
    ],
  },
  {
    route: "/civics",
    title: "Civics Questions Flashcards | US Citizenship Prep",
    description:
      "Practice citizenship civics questions with free flashcards, hard question review, and interview-ready recall tools.",
    h1: "Civics Questions Flashcards",
    intro:
      "Practice official-style civics questions for the U.S. citizenship interview with flashcards and hard question review.",
    sections: [
      ["How to practice", "Answer out loud, mark hard questions, and review missed topics in smaller groups."],
      ["Why it matters", "The civics test is spoken during the interview, so recall practice is more useful than silent reading alone."],
    ],
  },
  {
    route: "/study-plan",
    title: "Citizenship Interview Study Plan | US Citizenship Prep",
    description:
      "Organize your citizenship interview preparation with civics practice, N-400 review, yes/no questions, writing words, and interview-day tasks.",
    h1: "Citizenship Interview Study Plan",
    intro:
      "Use a simple study plan to connect civics practice, N-400 review, English reading and writing, and interview-day preparation.",
    sections: [
      ["Practice areas", "Move through civics, interview flow, yes/no questions, writing words, officer follow-ups, and checklist tasks."],
      ["Local progress", "Study preferences are saved in the browser when available. No account is required."],
    ],
  },
  {
    route: "/guides",
    title: "Citizenship Interview Guides | US Citizenship Prep",
    description:
      "Read original guides for the civics test, reading and writing test, N-400 review, mock interview practice, and interview-day preparation.",
    h1: "Citizenship Interview Guides",
    intro:
      "Original guides explain the parts of the naturalization interview that applicants most often worry about.",
    sections: [
      ["Guide topics", "Read about the civics test, reading and writing test, N-400 review, mock interviews, and interview-day documents."],
      ["Editorial approach", "Each guide focuses on a real preparation task rather than generic keyword summaries."],
    ],
  },
  {
    route: "/n400-interview-questions",
    title: "N-400 Interview Questions | US Citizenship Prep",
    description:
      "Practice N-400 interview questions for travel, work, taxes, eligibility, yes/no answers, and personal history before your citizenship interview.",
    h1: "N-400 Interview Questions to Practice Before Your Citizenship Interview",
    intro:
      "Prepare for personal history, travel, work, taxes, citations, family, and yes/no eligibility questions from your N-400.",
    sections: [
      ["Questions to review", "Practice your legal name, address, travel history, employment, taxes, citations, and oath-related questions."],
      ["How to answer", "Use short, honest, consistent answers and bring documents for updates or issues when relevant."],
    ],
  },
  {
    route: "/mock-interview",
    title: "US Citizenship Mock Interview Practice | US Citizenship Prep",
    description:
      "Practice a realistic U.S. citizenship mock interview with check-in, oath, civics questions, English reading and writing, and N-400 review.",
    h1: "US Citizenship Mock Interview Practice",
    intro:
      "Practice the interview sequence from check-in and oath to English, civics, N-400 review, and decision.",
    sections: [
      ["Interview flow", "A typical interview may include identity confirmation, oath, reading, writing, civics questions, and application review."],
      ["Speaking practice", "Practice answering out loud so the real interview feels less surprising."],
    ],
  },
  {
    route: "/civics-test-practice",
    title: "Citizenship Test Practice | 100 Civics Questions",
    description:
      "Free citizenship test practice for USCIS civics questions with flashcards, hard question review, and interview-ready recall practice.",
    h1: "Citizenship Test Practice for the USCIS Civics Questions",
    intro:
      "Study official-style civics questions and practice spoken recall before the naturalization interview.",
    sections: [
      ["Study routine", "Study 10 to 15 questions at a time, answer out loud, and review hard questions repeatedly."],
      ["Test topics", "Review American government, history, rights, responsibilities, geography, symbols, and holidays."],
    ],
  },
  {
    route: "/citizenship-test-spanish",
    title: "Citizenship Test Practice in Spanish and English",
    description:
      "Bilingual citizenship test practice for applicants studying civics questions, interview flow, and English reading and writing in Spanish and English.",
    h1: "Citizenship Test Practice in Spanish and English",
    intro:
      "Use bilingual preparation to understand citizenship interview topics clearly and practice the English answers that may be required.",
    sections: [
      ["Bilingual study", "Use Spanish to understand the meaning, then practice short English answers out loud."],
      ["Language note", "Some applicants may qualify for language accommodations, but many applicants still complete parts of the interview in English."],
    ],
  },
  {
    route: "/citizenship-interview-checklist",
    title: "Citizenship Interview Checklist | Documents and Interview Day Prep",
    description:
      "Use this citizenship interview checklist to organize documents, timing, final review, and interview-day preparation before your USCIS appointment.",
    h1: "Citizenship Interview Checklist for Interview Day",
    intro:
      "Prepare documents, timing, travel plans, final review, and interview-day basics before your naturalization interview.",
    sections: [
      ["Documents", "Review your appointment notice, green card, photo ID, passports, and case-specific documents."],
      ["Final review", "Lightly review marked civics questions, N-400 updates, and interview-day logistics."],
    ],
  },
  {
    route: "/interview-day",
    title: "Citizenship Interview Day Checklist | US Citizenship Prep",
    description:
      "Use a practical citizenship interview day checklist for documents, timing, ID, passports, N-400 updates, and final review.",
    h1: "A Practical Checklist for Citizenship Interview Day",
    intro:
      "Interview day is easier when documents, transportation, timing, and final review are already organized.",
    sections: [
      ["Before leaving", "Check appointment notice, ID, green card, passports, and relevant records."],
      ["During the interview", "Listen carefully, answer directly, and ask for repetition if needed."],
    ],
  },
  {
    route: "/faq",
    title: "Citizenship Interview FAQ | US Citizenship Prep",
    description:
      "Clear answers to common citizenship interview questions about civics, English, N-400 review, documents, and practice.",
    h1: "Citizenship Interview FAQ",
    intro:
      "Read answers to common questions about the citizenship interview, civics test, English test, N-400 review, and documents.",
    sections: [
      ["Common concerns", "Learn when to start, what the officer may ask, and how to handle mistakes calmly."],
      ["Independent resource", "This site is educational and is not affiliated with USCIS or any government agency."],
    ],
  },
  {
    route: "/about",
    title: "About US Citizenship Prep",
    description:
      "Learn why US Citizenship Prep provides free bilingual citizenship interview study tools and educational preparation guides.",
    h1: "About US Citizenship Prep",
    intro:
      "US Citizenship Prep is a free bilingual study resource for people preparing for the U.S. citizenship interview.",
    sections: [
      ["Purpose", "We help applicants practice civics questions, understand interview flow, and prepare with a steady study routine."],
      ["Important note", "We are not a law firm, government agency, or USCIS representative."],
    ],
  },
  {
    route: "/sources",
    title: "Sources and Editorial Standards | US Citizenship Prep",
    description:
      "Review the sources, editorial standards, official USCIS references, and educational limits behind US Citizenship Prep content.",
    h1: "Sources and Editorial Standards",
    intro:
      "Learn how US Citizenship Prep creates, reviews, and presents educational citizenship interview preparation content.",
    sections: [
      ["Official sources", "Users should verify forms, rules, and eligibility requirements with USCIS."],
      ["Editorial limits", "This site is educational only and does not provide legal advice."],
    ],
  },
  {
    route: "/privacy",
    title: "Privacy Policy | US Citizenship Prep",
    description:
      "Review how US Citizenship Prep handles local study data, analytics, advertising cookies, and privacy choices.",
    h1: "Privacy Policy",
    intro:
      "This policy explains what we collect, how we use it, and the choices available to users.",
    sections: [
      ["Local study data", "Marked questions and study preferences may be stored locally in your browser."],
      ["Advertising and cookies", "Google products may use cookies and similar technologies for analytics and advertising."],
    ],
  },
  {
    route: "/terms",
    title: "Terms of Service | US Citizenship Prep",
    description:
      "Read the terms for using US Citizenship Prep as a free educational citizenship interview preparation resource.",
    h1: "Terms of Service",
    intro:
      "These terms outline the use of US Citizenship Prep as an educational citizenship interview preparation resource.",
    sections: [
      ["Educational use", "Content is for study support and should not be treated as legal advice."],
      ["Free access", "Core study tools are currently provided for free and may be supported by advertising."],
    ],
  },
  {
    route: "/contact",
    title: "Contact US Citizenship Prep",
    description:
      "Contact US Citizenship Prep about study content, accessibility, privacy, corrections, or educational resource questions.",
    h1: "Contact US Citizenship Prep",
    intro:
      "Contact us about study content, accessibility issues, privacy requests, or corrections to educational material.",
    sections: [
      ["Email", "support@usinterviewprep.com"],
      ["Important note", "Do not send sensitive immigration documents by email. We do not provide legal advice."],
    ],
  },
];

const pageLinks = [
  ["/civics/", "Civics questions"],
  ["/study-plan/", "Study plan"],
  ["/guides/", "Guides"],
  ["/faq/", "FAQ"],
  ["/sources/", "Sources"],
  ["/privacy/", "Privacy"],
  ["/contact/", "Contact"],
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const renderStaticRoot = (page) => `
    <div id="root">
      <main style="font-family: Arial, sans-serif; max-width: 1040px; margin: 48px auto; padding: 0 20px; line-height: 1.65; color: #0f172a;">
        <header>
          <p style="font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #0b50da;">US Citizenship Prep</p>
          <h1 style="font-size: 42px; line-height: 1.08; margin: 12px 0;">${escapeHtml(page.h1)}</h1>
          <p style="font-size: 18px; color: #475569; max-width: 760px;">${escapeHtml(page.intro)}</p>
        </header>
        ${page.sections
          .map(
            ([title, body]) => `
        <section>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(body)}</p>
        </section>`
          )
          .join("")}
        <section>
          <h2>Important pages</h2>
          <ul>
            ${pageLinks
              .map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`)
              .join("")}
          </ul>
        </section>
      </main>
    </div>`;

const renderNoScript = (page) => `
    <noscript>
      <main style="font-family: Arial, sans-serif; max-width: 760px; margin: 48px auto; padding: 0 20px; line-height: 1.6;">
        <h1>${escapeHtml(page.h1)}</h1>
        <p>${escapeHtml(page.intro)}</p>
        ${page.sections
          .map(
            ([title, body]) => `
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(body)}</p>`
          )
          .join("")}
        <h2>Study Tools</h2>
        <ul>
          ${pageLinks
            .map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`)
            .join("")}
        </ul>
      </main>
    </noscript>`;

const replaceMeta = (html, page) => {
  const canonical = `${siteUrl}${page.route === "/" ? "/" : `${page.route}/`}`;
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`);
};

const replaceRoot = (html, page) => {
  const start = html.indexOf("    <div id=\"root\">");
  const end = html.indexOf("    <noscript>");
  if (start === -1 || end === -1) {
    throw new Error("Could not locate root fallback block in dist/index.html");
  }

  return `${html.slice(0, start)}${renderStaticRoot(page)}\n${html.slice(end)}`;
};

const replaceNoScript = (html, page) => {
  const start = html.indexOf("    <noscript>");
  const closingTag = "</noscript>";
  const end = html.indexOf(closingTag, start);
  if (start === -1 || end === -1) {
    throw new Error("Could not locate noscript block in dist/index.html");
  }

  return `${html.slice(0, start)}${renderNoScript(page)}\n${html.slice(end + closingTag.length)}`;
};

const writePage = async (page, template) => {
  const html = replaceNoScript(replaceRoot(replaceMeta(template, page), page), page);
  if (page.route === "/") {
    await writeFile(templatePath, html);
    return;
  }

  const outputDir = path.join(distDir, page.route.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html);
};

const template = await readFile(templatePath, "utf8");
await Promise.all(pages.map((page) => writePage(page, template)));
console.log(`Prerendered ${pages.length} static HTML entry points.`);
