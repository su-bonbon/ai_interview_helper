import { Link, useOutletContext } from "react-router-dom";
import civicsImage from "../assets/civics-practice.jpg";
import checklistImage from "../assets/interview-checklist.jpg";
import heroImage from "../assets/hero-citizenship-prep.jpg";
import readingImage from "../assets/reading-writing-practice.jpg";
import EditorialTrustBlock from "../components/EditorialTrustBlock.jsx";

const pageContent = {
  "/n400-interview-questions": {
    image: heroImage,
    eyebrow: "N-400 Interview Questions",
    title: "N-400 Interview Questions to Practice Before Your Citizenship Interview",
    description:
      "Prepare for the personal history, eligibility, travel, tax, and yes/no questions a USCIS officer may review from your N-400 application.",
    primaryCta: "Open study plan",
    primaryHref: "/study-plan",
    secondaryCta: "Practice civics",
    secondaryHref: "/civics",
    sections: [
      {
        title: "What officers usually review",
        body:
          "The officer may confirm your address, travel history, employment, marital history, children, taxes, citations, and eligibility answers. The goal is consistency with your application, not memorized speeches.",
      },
      {
        title: "How to answer clearly",
        body:
          "Use short, direct answers. If something changed after filing, explain it calmly and bring proof when possible. If you do not understand a question, ask the officer to repeat or rephrase it.",
      },
      {
        title: "Questions worth practicing",
        body:
          "Practice your legal name, current address, travel outside the United States, work and school history, tax filing, arrests or citations, and yes/no moral character questions.",
      },
    ],
    faqs: [
      ["Are N-400 interview questions the same for everyone?", "No. Many questions come from your own N-400 form, so your travel, work, family, tax, and background history can affect what the officer asks."],
      ["Should I memorize long answers?", "No. Short, honest, consistent answers are usually better than rehearsed speeches."],
      ["What if I made a mistake on my N-400?", "Tell the officer during the interview and bring any documents that explain the correction."],
    ],
  },
  "/mock-interview": {
    image: heroImage,
    eyebrow: "US Citizenship Mock Interview",
    title: "US Citizenship Mock Interview Practice",
    description:
      "Practice the flow of a naturalization interview, from check-in and oath to civics questions, English reading and writing, and N-400 review.",
    primaryCta: "Review interview flow",
    primaryHref: "/study-plan",
    secondaryCta: "Open checklist",
    secondaryHref: "/interview-day",
    sections: [
      {
        title: "A realistic interview sequence",
        body:
          "A typical interview may include security check-in, identity confirmation, an oath to tell the truth, reading and writing tests, civics questions, and review of your N-400 application.",
      },
      {
        title: "What to practice out loud",
        body:
          "Practice saying your answers in simple English. Focus on name, address, travel, work history, family details, and any updates since filing your application.",
      },
      {
        title: "How mock practice helps",
        body:
          "Mock interview practice helps you get used to speaking under pressure, listening carefully, and correcting yourself calmly when a question feels confusing.",
      },
    ],
    faqs: [
      ["How long is a citizenship interview?", "Many interviews are short, but the exact time depends on your case, documents, and officer questions."],
      ["Does the mock interview replace legal advice?", "No. It is study practice only. If your case has legal concerns, speak with an immigration attorney."],
      ["Should I practice with another person?", "Yes. Practicing out loud with another person can make the real interview feel less surprising."],
    ],
  },
  "/civics-test-practice": {
    image: civicsImage,
    eyebrow: "Citizenship Test Practice",
    title: "Citizenship Test Practice for the USCIS Civics Questions",
    description:
      "Study official-style civics questions with flashcards, filters, marked hard questions, and practice modes built for interview recall.",
    primaryCta: "Start civics practice",
    primaryHref: "/civics",
    secondaryCta: "Read study guide",
    secondaryHref: "/guides/civics-test",
    sections: [
      {
        title: "What the civics test includes",
        body:
          "During the naturalization interview, the officer asks civics questions about U.S. history and government. You need to answer enough questions correctly to pass.",
      },
      {
        title: "Practice for recall, not just recognition",
        body:
          "Reading answers silently is not enough. Practice answering out loud, mark hard questions, and repeat small groups until the answers feel natural.",
      },
      {
        title: "Use mistakes as your study list",
        body:
          "The questions you miss are the most useful part of practice. Review them more often instead of restarting from the beginning every time.",
      },
    ],
    faqs: [
      ["Are these civics questions free?", "Yes. The core civics practice tools are free and do not require an account."],
      ["Can I mark hard questions?", "Yes. Hard questions are saved in your browser so you can review them again."],
      ["Should I study all questions?", "Yes, but study in smaller groups so recall becomes easier under pressure."],
    ],
  },
  "/citizenship-test-spanish": {
    image: readingImage,
    eyebrow: "Citizenship Test in Spanish",
    title: "Citizenship Test Practice in Spanish and English",
    description:
      "Use bilingual citizenship interview resources to understand civics questions, interview flow, and study expectations in Spanish and English.",
    primaryCta: "Open bilingual study plan",
    primaryHref: "/study-plan",
    secondaryCta: "Practice civics",
    secondaryHref: "/civics",
    sections: [
      {
        title: "Why bilingual prep helps",
        body:
          "Many applicants understand the topic better in Spanish first, then practice the final answer in English. This can reduce pressure and improve confidence.",
      },
      {
        title: "What may still be in English",
        body:
          "Most applicants must complete parts of the interview in English, including speaking, reading, and writing. Some applicants may qualify for language accommodations based on age and residency rules.",
      },
      {
        title: "How to use both languages",
        body:
          "Use Spanish to understand the meaning, then practice short English answers out loud. This keeps studying clear while preparing for the real interview.",
      },
    ],
    faqs: [
      ["Can I take the citizenship test in Spanish?", "Some applicants may qualify based on age and length of permanent residency. Others must test in English."],
      ["Does bilingual practice hurt English preparation?", "No. Understanding the meaning first can make English practice calmer and more accurate."],
      ["Is this legal advice?", "No. This is study support only, not legal advice or a USCIS decision tool."],
    ],
  },
  "/citizenship-interview-checklist": {
    image: checklistImage,
    eyebrow: "Citizenship Interview Checklist",
    title: "Citizenship Interview Checklist for Interview Day",
    description:
      "Prepare documents, timing, travel plans, final review, and interview-day basics before your USCIS naturalization interview.",
    primaryCta: "Open checklist",
    primaryHref: "/interview-day",
    secondaryCta: "Study plan",
    secondaryHref: "/study-plan",
    sections: [
      {
        title: "Documents to organize",
        body:
          "Bring your appointment notice, green card, photo ID, passports, and any case-specific documents related to travel, taxes, citations, marriage, children, or updates.",
      },
      {
        title: "Timing and arrival",
        body:
          "Plan transportation, parking, security screening, and arrival time. Avoid a rushed morning so you can listen carefully during the interview.",
      },
      {
        title: "Final review",
        body:
          "Do a light review of marked civics questions, your N-400 answers, and any changes since filing. Heavy last-minute cramming can increase anxiety.",
      },
    ],
    faqs: [
      ["Should I bring original documents?", "Bring original documents when required and copies when useful. Check your appointment notice and case needs."],
      ["What if I owe taxes?", "Filing and having a payment plan can matter. Bring proof of filings, payment plans, and payments if relevant."],
      ["Should I bring documents for traffic tickets?", "If you have citations or arrests, bring available records and consider legal advice for anything more serious than a basic ticket."],
    ],
  },
};

const depthContent = {
  "/n400-interview-questions": {
    insightTitle: "Why this part deserves more attention than applicants expect",
    insight:
      "Many applicants spend most of their time on civics questions because those questions feel measurable. In the actual interview, the N-400 review can be the part that reveals whether you understand your own application. A good answer is not long or dramatic. It is truthful, consistent with the form, and supported by documents when the topic needs proof.",
    checkpoints: [
      "Review every address, job, school, trip, marriage, child, and citation before the appointment.",
      "Prepare a short explanation for anything that changed after filing.",
      "Bring proof for tax payment plans, court records, travel updates, or corrections when relevant.",
    ],
    routineTitle: "A practical N-400 review routine",
    routine: [
      "Print or open a copy of your submitted N-400 and read one section at a time.",
      "Write down any answer that changed after filing, such as a new address, trip, job, child, marital update, citation, or tax payment plan.",
      "Practice answering each update in one or two plain English sentences.",
      "Place supporting documents in the same order as the topics you expect to discuss.",
    ],
    sampleTitle: "Sample N-400 questions to practice",
    samples: [
      "What is your current home address?",
      "Have you traveled outside the United States since filing your N-400?",
      "Where have you worked or studied during the last five years?",
      "Have you ever been cited, arrested, or convicted?",
      "Do you owe any taxes, and do you have a payment plan?",
      "Are you willing to take the full Oath of Allegiance?",
    ],
    mistakesTitle: "Common mistakes that make this part harder",
    mistakes: [
      "Trying to memorize long speeches instead of practicing clear short answers.",
      "Ignoring small updates because they seem unimportant.",
      "Forgetting that traffic citations, tax issues, and travel dates may come up during the review.",
      "Bringing documents but not organizing them by topic.",
    ],
  },
  "/mock-interview": {
    insightTitle: "Why mock practice should include the uncomfortable parts",
    insight:
      "A mock interview is most useful when it feels slightly formal. Practice being sworn in, showing identification, answering basic personal questions, reading and writing one sentence, and then moving into civics and N-400 review. This helps your body recognize the sequence before the real appointment, so the room feels less unfamiliar.",
    checkpoints: [
      "Practice with another person reading questions aloud instead of only studying silently.",
      "Include identity checks, oath language, English reading and writing, civics, and N-400 review.",
      "Pause when confused and practice asking, 'Can you repeat the question?' calmly.",
    ],
    routineTitle: "How to run a simple mock interview at home",
    routine: [
      "Start with identity questions: name, address, date of birth, and green card details.",
      "Read one English sentence and write one English sentence before the civics section.",
      "Ask six to ten civics questions out loud and answer without looking first.",
      "Review several N-400 questions, especially travel, work, taxes, citations, and yes/no eligibility answers.",
    ],
    sampleTitle: "Mock interview prompts",
    samples: [
      "Please raise your right hand. Do you promise to tell the truth?",
      "Can I see your green card and appointment notice?",
      "Have you moved since you filed your application?",
      "Have you traveled outside the United States recently?",
      "What does the Constitution do?",
      "Do you support the Constitution and the form of government of the United States?",
    ],
    mistakesTitle: "What to avoid during mock practice",
    mistakes: [
      "Only practicing civics and ignoring the N-400 conversation.",
      "Practicing silently instead of speaking out loud.",
      "Answering too quickly before fully understanding the question.",
      "Treating every follow-up question as a bad sign instead of a normal clarification.",
    ],
  },
  "/civics-test-practice": {
    insightTitle: "Why spoken recall matters more than clicking the right answer",
    insight:
      "The civics test is spoken during the naturalization interview. That means recognition on a screen is not enough. You need to hear the question, understand what is being asked, and produce a clear answer without scrolling through choices. This is why the best study routine uses short sets, spoken answers, and repeated review of hard questions.",
    checkpoints: [
      "Answer out loud before checking the answer.",
      "Separate hard questions instead of restarting the entire list every time.",
      "Review meaning, not only wording, so a question still makes sense when asked differently.",
    ],
    routineTitle: "A study routine for the civics test",
    routine: [
      "Study 10 to 15 civics questions at a time instead of trying to review every question in one sitting.",
      "Answer out loud before checking the answer.",
      "Mark questions that feel hard and review them again the next day.",
      "Mix easy and hard questions so you can recall answers even when the order changes.",
    ],
    sampleTitle: "Civics topics to review",
    samples: [
      "Principles of American democracy",
      "System of government",
      "Rights and responsibilities",
      "Colonial period and independence",
      "Recent American history",
      "Geography, symbols, and holidays",
    ],
    mistakesTitle: "Common civics study mistakes",
    mistakes: [
      "Only recognizing answers on a screen instead of practicing spoken recall.",
      "Skipping questions that seem easy and then freezing during the interview.",
      "Studying too many questions at once without review.",
      "Ignoring the meaning behind the answer.",
    ],
  },
  "/citizenship-test-spanish": {
    insightTitle: "How bilingual study can help without weakening English practice",
    insight:
      "Spanish can be a bridge for understanding, especially when a civics concept or eligibility word feels abstract. The key is to separate comprehension from final delivery. Use Spanish to understand the idea, then practice the answer in the language required for your situation. This keeps preparation honest and practical.",
    checkpoints: [
      "Use Spanish explanations to understand the topic clearly.",
      "Practice the final answer in English when English is required for your interview.",
      "Make a small vocabulary list for words like oath, allegiance, citation, taxes, and travel.",
    ],
    routineTitle: "How to use Spanish and English together",
    routine: [
      "Read the meaning of each topic in Spanish first if that helps you understand it clearly.",
      "Practice the final interview answer in English when English is required for your situation.",
      "Keep a short list of words that are confusing in English, such as oath, bear arms, citation, and allegiance.",
      "Ask someone to read questions in English so you can practice listening under pressure.",
    ],
    sampleTitle: "Bilingual topics applicants often review",
    samples: [
      "Civics question meaning",
      "English reading and writing words",
      "Yes/no eligibility vocabulary",
      "Travel and address history",
      "Oath of Allegiance wording",
      "Interview-day instructions",
    ],
    mistakesTitle: "Common bilingual study mistakes",
    mistakes: [
      "Understanding the topic in Spanish but never practicing the English answer out loud.",
      "Translating word for word instead of practicing short natural answers.",
      "Waiting until the last week to practice English listening.",
      "Assuming every applicant qualifies to take the interview in Spanish.",
    ],
  },
  "/citizenship-interview-checklist": {
    insightTitle: "Why a checklist is more than a packing list",
    insight:
      "A strong interview-day checklist reduces preventable stress. It is not only about bringing documents. It is also about knowing where you are going, which updates you need to mention, what proof supports those updates, and how you will keep your answers clear when the appointment feels formal.",
    checkpoints: [
      "Put documents in topic order so you can find them quickly.",
      "Review changes since filing, including address, work, travel, family, citations, and taxes.",
      "Plan transportation and arrival time early enough to avoid rushing through security.",
    ],
    routineTitle: "A week-before interview checklist",
    routine: [
      "Confirm the date, time, address, parking, and travel plan for your field office.",
      "Gather your appointment notice, green card, photo ID, passports, and case-specific documents.",
      "Review your N-400 for changes since filing and prepare short explanations.",
      "Do a light civics and English review the day before instead of cramming late at night.",
    ],
    sampleTitle: "Documents and details to consider",
    samples: [
      "Appointment notice",
      "Green card and photo ID",
      "Current and expired passports",
      "Tax records or payment plan proof if relevant",
      "Court or citation records if relevant",
      "Marriage, divorce, or child-related documents if relevant",
    ],
    mistakesTitle: "Checklist mistakes to avoid",
    mistakes: [
      "Putting every document in one folder with no order.",
      "Forgetting to review changes that happened after filing.",
      "Arriving rushed and then having trouble listening carefully.",
      "Doing heavy last-minute study that increases anxiety.",
    ],
  },
};

const officialResources = [
  {
    label: "USCIS Citizenship Resource Center",
    href: "https://www.uscis.gov/citizenship",
  },
  {
    label: "USCIS naturalization test information",
    href: "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test",
  },
  {
    label: "USCIS N-400 application page",
    href: "https://www.uscis.gov/n-400",
  },
];

export default function SeoLandingPage({ slug }) {
  const { lang } = useOutletContext();
  const path = `/${slug}`;
  const page = pageContent[path] || pageContent["/civics-test-practice"];
  const depth = depthContent[path] || depthContent["/civics-test-practice"];

  return (
    <article className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0b50da]">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {page.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={page.primaryHref}
              className="rounded-full bg-[#0b50da] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#0b50da]/20"
            >
              {page.primaryCta}
            </Link>
            <Link
              to={page.secondaryHref}
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-black text-slate-700"
            >
              {page.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
          <img
            src={page.image}
            alt={page.title}
            className="h-full min-h-[320px] w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              Practical Context
            </p>
            <h2 className="mt-3 text-3xl font-black">{depth.insightTitle}</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{depth.insight}</p>
          </div>
          <div className="rounded-lg bg-[#f5f7fb] p-5">
            <h3 className="text-lg font-black">What to check before you move on</h3>
            <ul className="mt-4 space-y-3">
              {depth.checkpoints.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-base text-[#0b50da]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {page.sections.map((section) => (
          <div key={section.title} className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              Study Method
            </p>
            <h2 className="mt-3 text-3xl font-black">{depth.routineTitle}</h2>
            <ol className="mt-6 space-y-4">
              {depth.routine.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0b50da]/10 text-sm font-black text-[#0b50da]">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-slate-700">{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <h3 className="text-lg font-black">{depth.sampleTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {depth.samples.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="rounded-lg border border-black/10 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">{depth.mistakesTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {depth.mistakes.map((item) => (
              <div key={item} className="rounded-lg border border-black/10 bg-slate-50 p-4">
                <span className="material-symbols-outlined text-lg text-[#0b50da]">
                  task_alt
                </span>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-lg border border-black/10 bg-white p-6">
          <h2 className="text-xl font-black">Official resources we recommend checking</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            This page is original study guidance, but USCIS is the official source for forms, eligibility rules, and test policy.
          </p>
          <div className="mt-5 space-y-3">
            {officialResources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-black/10 p-3 text-sm font-bold text-[#0b50da]"
              >
                {resource.label}
              </a>
            ))}
          </div>
          <Link
            to="/sources"
            className="mt-5 inline-flex text-sm font-black text-slate-700 underline"
          >
            Read our sources and editorial standards
          </Link>
        </aside>
      </section>

      <div className="mt-10">
        <EditorialTrustBlock lang={lang} />
      </div>

      <section className="mt-12 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Common Questions
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Questions applicants often ask before interview day
          </h2>
        </div>
        <div className="mt-8 grid gap-4">
          {page.faqs.map(([question, answer]) => (
            <div key={question} className="border-t border-black/10 pt-5">
              <h3 className="text-lg font-black">{question}</h3>
              <p className="mt-2 leading-7 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-4 rounded-lg bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black">Keep practicing with the full toolkit</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {lang === "es"
              ? "Usa las guías, tarjetas y checklist para preparar tu entrevista paso a paso."
              : "Use the guides, flashcards, and checklist to prepare for your interview step by step."}
          </p>
        </div>
        <Link
          to="/study-plan"
          className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950"
        >
          Study Plan
        </Link>
      </section>
    </article>
  );
}

export { pageContent };
