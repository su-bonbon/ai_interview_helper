import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://usinterviewprep.com";
const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const questionDataPath = path.resolve("src/assets/citizenship_questions_260.json");
const questionData = JSON.parse(await readFile(questionDataPath, "utf8"));
const englishCivicsQuestions = questionData
  .filter((item) => item.lang === "en")
  .slice(0, 60)
  .map((item) => `${item.question} Answer: ${item.answer}`);

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
    route: "/guides/civics-test",
    title: "How to Study for the Citizenship Civics Test",
    description:
      "Learn a practical study routine for USCIS civics questions, including small sets, spoken recall, mistake review, and weekly practice.",
    h1: "How to Study for the Citizenship Civics Test Without Freezing",
    intro:
      "The civics test is short, but it can feel stressful because you must answer out loud in front of an officer. Strong preparation means understanding the idea behind each question, practicing recall in small groups, and building confidence before interview day.",
    sections: [
      [
        "Start with meaning, then memorize",
        "Repetition helps, but it works better after you understand the meaning of the question. When you connect a short answer to a simple idea, it becomes easier to remember under pressure.",
      ],
      [
        "Study in small sets",
        "Break the material into groups of ten to fifteen questions. Practice one set until you can answer most of it without looking, then mix older questions with newer ones at the end of the week.",
      ],
      [
        "Practice out loud",
        "The interview is spoken, so silent reading is not enough. Say the answer out loud in a clear, steady voice. You do not need to sound perfect. You need to be understandable.",
      ],
      [
        "Use mistakes as a study map",
        "When you miss a question, mark it and return to it later. A missed answer shows exactly where to spend more time.",
      ],
      [
        "Build a weekly review rhythm",
        "A useful week might include three short flashcard sessions, one mixed review, and one timed practice. On the final day, review only the questions you marked as difficult.",
      ],
    ],
  },
  {
    route: "/guides/reading-writing",
    title: "Citizenship Reading and Writing Test Expectations",
    description:
      "Understand what to expect in the citizenship reading and writing test and how to practice simple English sentences calmly.",
    h1: "What to Expect in the Reading and Writing Test",
    intro:
      "The reading and writing portion of the naturalization interview is usually simple in structure, but many applicants struggle because the moment feels formal. You may be asked to read one sentence in English and write one sentence in English.",
    sections: [
      [
        "The sentences are short, but pressure changes everything",
        "A sentence that looks easy at home can feel harder in an interview room. Practice should include the emotional part of the task: sit at a table, read one sentence out loud, then write one sentence carefully.",
      ],
      [
        "Focus on common civic words",
        "Many reading and writing sentences include words such as citizen, President, Congress, vote, flag, state, and government. Start with words likely to appear in naturalization topics.",
      ],
      [
        "Write for clarity, not beauty",
        "Your handwriting does not need to be beautiful, but it should be readable. Leave space between words, capitalize the first word when you can, and put a period at the end.",
      ],
      [
        "Practice a repeatable routine",
        "Use the same routine each time: listen, repeat the sentence quietly in your head, write slowly, then check for missing words. This gives your brain something stable to follow when nervous.",
      ],
      [
        "Avoid over-practicing random sentences",
        "Use sentences connected to citizenship, government, holidays, places, and simple civic ideas. This keeps preparation close to the type of language applicants are likely to hear during the interview.",
      ],
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
      [
        "Why this page is different",
        "This guide treats the N-400 review as a preparation task, not a keyword list. Applicants are encouraged to compare answers with the submitted form, note changes since filing, organize proof by topic, and practice short truthful explanations for travel, tax, citation, family, or employment updates.",
      ],
      [
        "Common pressure points",
        "Many applicants overprepare for civics and underprepare for the conversation about their own history. This page helps users identify details that may need calm clarification during the interview.",
      ],
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
      [
        "Realistic practice",
        "Mock practice should include the formal moments applicants often forget: showing identification, being sworn in, asking for repetition, reading and writing one sentence, and moving from civics questions into N-400 review.",
      ],
      [
        "Why it helps",
        "The goal is not to memorize a script. The goal is to make the interview sequence familiar enough that applicants can listen carefully and answer clearly under pressure.",
      ],
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
      [
        "Recall over recognition",
        "The civics test is spoken during the interview, so applicants should practice producing answers without multiple-choice cues. Hard questions should become a review list instead of a reason to restart from the beginning.",
      ],
      [
        "How to use mistakes",
        "Missed questions show exactly where study time should go. This page encourages smaller sets, repeated spoken recall, and review of the meaning behind each answer.",
      ],
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
      [
        "Practical bilingual method",
        "Spanish can support comprehension without replacing required English practice. Applicants can use Spanish explanations to understand civics concepts and then practice final answers in the language required for their interview situation.",
      ],
      [
        "Vocabulary to watch",
        "Words like oath, allegiance, citation, taxes, travel, and bear arms can create confusion. This page helps applicants notice those terms before interview day.",
      ],
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
      [
        "More than packing",
        "A useful checklist connects documents to interview topics. Applicants should know which papers support travel updates, tax payment plans, citations, marital changes, or other corrections since filing.",
      ],
      [
        "Interview morning",
        "Planning transportation, parking, security, and arrival time reduces preventable stress so applicants can focus on listening and answering clearly.",
      ],
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
      [
        "Purpose",
        "The site was built from the founder's own immigrant and naturalization preparation experience. It turns scattered resources and interview preparation habits into a free study toolkit for other applicants and families.",
      ],
      [
        "Personal perspective",
        "The guidance emphasizes that citizenship preparation is not only memorizing civics answers. Applicants also need to review the N-400, prepare updates, organize documents, and practice answering honestly under pressure.",
      ],
      ["Important note", "We are not a law firm, government agency, or USCIS representative."],
    ],
  },
  {
    route: "/citizenship-interview-experience",
    title: "My Citizenship Interview Experience | US Citizenship Prep",
    description:
      "Read a first-person citizenship interview experience with N-400 preparation lessons, document tips, and interview-day takeaways.",
    h1: "My Citizenship Interview Experience and What I Prepared Differently",
    intro:
      "This first-person guide explains what my naturalization interview taught me, why I built US Citizenship Prep around more than civics memorization, and how applicants can use that experience as a study framework.",
    sections: [
      [
        "The biggest surprise was not the civics test",
        "Before the interview, it is easy to focus almost entirely on civics questions because they feel concrete. My interview reminded me that the civics and English portion matters, but the deeper preparation is often your N-400 review: your history, your updates, your documents, and whether your answers are consistent.",
      ],
      [
        "I prepared around three pillars",
        "The three areas I took most seriously were legal status and compliance, tax filing and payment history, and criminal record or moral character questions. Those topics can feel uncomfortable, but ignoring them does not make them easier.",
      ],
      [
        "Documentation changed my confidence",
        "For anything that could create a follow-up question, I wanted proof ready. In my case, tax documentation mattered because I had payment terms to show. Having documents organized changed how prepared I felt, even when the officer did not need every page.",
      ],
      [
        "Honesty helped more than perfect memory",
        "One practical lesson was that small omissions should be corrected calmly. I had forgotten to list a couple of speeding tickets because I did not think of them the same way as more serious citations. During the interview, I explained that and the officer updated the form.",
      ],
      [
        "Why I made this site free",
        "After the process, I wanted to make a study resource for people in a similar situation. Many applicants are already paying filing fees, collecting documents, translating ideas between languages, and managing family stress. Basic interview practice should not be another barrier.",
      ],
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
      [
        "Editorial process",
        "We separate official facts from study advice. When a topic depends on USCIS policy, we point users back to official resources. Our original role is explaining how to turn that information into practical preparation.",
      ],
      [
        "Corrections",
        "We review pages for clarity and usefulness as the site grows, especially when resource links change or applicants need more context around a preparation topic.",
      ],
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
  ["/citizenship-interview-experience/", "Interview experience"],
  ["/faq/", "FAQ"],
  ["/sources/", "Sources"],
  ["/privacy/", "Privacy"],
  ["/contact/", "Contact"],
];

const extraContentByRoute = {
  "/": {
    sections: [
      [
        "Why this site exists",
        "This site was created from a real immigrant preparation experience. The founder went through the permanent resident path, prepared for naturalization, completed the citizenship interview, and saw how easy it is for applicants to focus only on memorizing civics answers while missing the broader interview preparation. The goal is to organize the scattered parts of preparation into one free, practical resource.",
      ],
      [
        "What makes the content useful",
        "The homepage connects the main interview moments: civics recall, English reading and writing, N-400 review, officer follow-up questions, document preparation, and interview-day planning. Each topic is written as a study task with context, not as a short directory of links.",
      ],
    ],
    lists: [
      {
        title: "Core preparation areas",
        items: [
          "Civics recall with spoken practice instead of silent recognition.",
          "N-400 review for travel, work, family, taxes, citations, and updates since filing.",
          "Reading and writing practice with common citizenship words.",
          "Mock interview flow from check-in to decision and oath scheduling.",
          "Interview-day checklist for documents, timing, transportation, and final review.",
        ],
      },
    ],
  },
  "/civics": {
    sections: [
      [
        "How to use the civics question list",
        "The civics section is built for spoken recall. Applicants should read a question, answer out loud, check the answer, then mark anything that feels uncertain. The goal is not to scroll through every answer once. The goal is to make the answers available under interview pressure.",
      ],
      [
        "Why marked questions matter",
        "Hard questions are the most valuable part of practice because they show where memory is weak. A strong routine is to review a small group, mark missed items, and return to those marked questions the next day before adding new material.",
      ],
    ],
    lists: [
      {
        title: "Sample civics questions included in practice",
        items: englishCivicsQuestions,
      },
    ],
  },
  "/study-plan": {
    sections: [
      [
        "A practical study rhythm",
        "A useful citizenship study session does not need to be long. A focused session can include ten civics questions, one reading or writing prompt, one N-400 topic, and one document or interview-day task. Repeating that rhythm several times a week is usually more useful than cramming everything at the end.",
      ],
      [
        "How the study plan reduces pressure",
        "The study plan separates preparation into specific areas so applicants know what to do next. Instead of wondering whether to study history, English, documents, or personal history, users can move through the interview in the same order it often unfolds.",
      ],
      [
        "When to get legal help",
        "This site is educational. If an applicant has arrests, serious citations, immigration violations, possible false claims to citizenship, tax problems, or any answer they do not understand, preparation should include a qualified immigration attorney.",
      ],
    ],
    lists: [
      {
        title: "Study plan practice areas",
        items: [
          "Civics questions: answer aloud, mark hard questions, and review missed topics.",
          "Real interview flow: picture check-in, oath, English tests, civics, N-400 review, and decision.",
          "Yes/No questions: answer directly and prepare short truthful explanations when needed.",
          "Writing test words: practice common people, civics, places, months, holidays, verbs, and function words.",
          "Officer follow-ups: practice calm answers when a question is rephrased or narrowed.",
          "Answer practice: use common personal questions to prepare clear, short responses.",
          "Interview checklist: organize documents, timing, transportation, and final review.",
        ],
      },
      {
        title: "Common N-400 questions to rehearse",
        items: [
          "What is your full legal name?",
          "What is your current home address?",
          "Have you moved since filing your N-400?",
          "Have you traveled outside the United States in the past five years?",
          "Where have you worked or studied in the last five years?",
          "Have you ever been arrested or convicted of a crime?",
          "Have you ever lied to gain immigration benefits?",
          "Do you support the U.S. Constitution and the form of government of the United States?",
          "Are you willing to take the full Oath of Allegiance?",
        ],
      },
    ],
  },
  "/guides": {
    sections: [
      [
        "How the guide library is organized",
        "The guide library is intentionally organized around the parts of the interview that cause the most confusion: civics, English reading and writing, mock interview flow, bilingual preparation, N-400 questions, and interview-day documents. Each guide is meant to answer what to practice, why it matters, and how to use the information during a real appointment.",
      ],
      [
        "Why duplicate guide pages were removed",
        "The site now avoids keeping multiple pages with nearly identical checklist or N-400 content. When a broader topic already has a stronger dedicated page, old guide-format duplicates are redirected to the more complete resource so users and crawlers see one clear primary page.",
      ],
    ],
  },
  "/n400-interview-questions": {
    sections: [
      [
        "Why the N-400 review is not just paperwork",
        "The N-400 review is often where the interview becomes personal. The officer may ask about dates, addresses, work history, travel, family, taxes, citations, organizations, and oath-related answers. The best preparation is to understand your own form well enough to answer directly without guessing.",
      ],
      [
        "How to prepare updates since filing",
        "Many applicants have updates after filing: a new address, a new job, a trip, a child, a marital change, a ticket, or a tax payment plan. These updates should be written down before the appointment and supported with documents when possible.",
      ],
      [
        "What a clear answer sounds like",
        "A clear answer is short, truthful, and specific. If the officer asks whether you traveled recently, start with yes or no, then give the dates or reason if needed. If the topic involves a document, offer the document instead of giving a long speech.",
      ],
    ],
    lists: [
      {
        title: "N-400 review checklist",
        items: [
          "Read the submitted N-400 from beginning to end before interview day.",
          "Mark any answer that changed after filing.",
          "Prepare short explanations for travel, work, address, tax, family, and citation updates.",
          "Put supporting documents in topic order.",
          "Practice asking the officer to repeat or rephrase a question if needed.",
          "Do not hide omissions. Correct them calmly when the topic comes up.",
        ],
      },
    ],
  },
  "/mock-interview": {
    sections: [
      [
        "What a realistic mock interview includes",
        "A realistic mock interview should include identity confirmation, oath language, one reading sentence, one writing sentence, civics questions, N-400 review, and officer follow-up questions. Practicing only civics can leave applicants surprised by the rest of the appointment.",
      ],
      [
        "Why formality matters",
        "The room can make easy answers feel harder. Mock practice should feel a little formal so applicants can practice listening carefully, pausing before answering, and correcting themselves without panic.",
      ],
    ],
    lists: [
      {
        title: "Mock interview prompts",
        items: [
          "Please raise your right hand. Do you promise to tell the truth?",
          "Can I see your green card and appointment notice?",
          "Have you moved since you filed your application?",
          "Have you traveled outside the United States recently?",
          "What does the Constitution do?",
          "Do you support the Constitution and the form of government of the United States?",
        ],
      },
    ],
  },
  "/civics-test-practice": {
    sections: [
      [
        "Practice for spoken recall",
        "The civics test is spoken, so the practice method matters. Applicants should hear or read the question, answer before looking at the answer, and repeat hard questions until the answer comes naturally.",
      ],
      [
        "Avoid shallow practice",
        "Clicking through cards quickly can create a false sense of confidence. A better method is to explain the meaning of a question in simple words, then say the official-style answer out loud.",
      ],
    ],
    lists: [
      {
        title: "Civics topics to review",
        items: [
          "Principles of American democracy",
          "System of government",
          "Rights and responsibilities",
          "Colonial period and independence",
          "Recent American history",
          "Geography, symbols, and holidays",
        ],
      },
      {
        title: "Sample civics practice questions",
        items: englishCivicsQuestions.slice(0, 30),
      },
    ],
  },
  "/citizenship-test-spanish": {
    sections: [
      [
        "Use Spanish for understanding, then practice the required answer",
        "Bilingual preparation can help applicants understand the meaning of a civics concept or N-400 term before practicing the answer they may need to give in English. The important step is not to stop at translation. Users should still practice listening and speaking in the language required for their situation.",
      ],
      [
        "Words that often need extra attention",
        "Applicants studying in Spanish often benefit from reviewing words such as oath, allegiance, citation, taxes, travel, arrest, conviction, support, Constitution, government, and bear arms. These words can sound formal even when the expected answer is short.",
      ],
    ],
    lists: [
      {
        title: "Bilingual study routine",
        items: [
          "Read the topic explanation in Spanish if it helps comprehension.",
          "Practice the final interview answer in English when English is required.",
          "Keep a small vocabulary list of formal N-400 and oath words.",
          "Ask someone to read questions aloud so listening practice feels more realistic.",
          "Review official USCIS language accommodation rules if you think an exception may apply.",
        ],
      },
    ],
  },
  "/citizenship-interview-checklist": {
    sections: [
      [
        "Connect documents to interview topics",
        "A checklist is strongest when documents are organized by topic. Travel records, tax payment plans, court records, citation documents, marriage records, and updated address or employment information should be easy to find if the officer asks.",
      ],
      [
        "Prepare the morning before it happens",
        "Interview-day planning includes transportation, parking, security, timing, and a light final review. The purpose is to remove avoidable stress so the applicant can listen carefully and answer calmly.",
      ],
    ],
    lists: [
      {
        title: "Documents and details to consider",
        items: [
          "Interview appointment notice",
          "Green card and photo ID",
          "Current and expired passports",
          "Tax records or IRS payment plan proof when relevant",
          "Court or citation records when relevant",
          "Marriage, divorce, or child-related documents when relevant",
          "Notes about changes since filing the N-400",
        ],
      },
    ],
  },
  "/interview-day": {
    sections: [
      [
        "What to do before leaving",
        "Before leaving, applicants should confirm the field office address, appointment time, transportation, parking, building entry rules, and document folder. The goal is to avoid arriving rushed or searching for documents at the last moment.",
      ],
      [
        "How to answer during the appointment",
        "During the appointment, listen to the full question, answer directly, and ask for repetition if needed. A calm pace is better than rushing. If an answer changed since filing, explain the update and offer documents when appropriate.",
      ],
    ],
  },
  "/faq": {
    sections: [
      [
        "How the FAQ supports applicants",
        "The FAQ answers practical questions that come up during preparation, including when to start, what happens during the interview, how the civics test works, what to expect in reading and writing, what documents to review, and when legal advice may be needed.",
      ],
      [
        "Why answers are written in plain language",
        "Applicants often search for direct answers while nervous. The FAQ uses plain language and reminds users that the site is educational, independent from USCIS, and not a substitute for official rules or legal advice.",
      ],
    ],
  },
  "/citizenship-interview-experience": {
    sections: [
      [
        "How to use this experience",
        "This page is not meant to predict every interview. It gives applicants a practical lens: memorize civics, but also read the submitted N-400, prepare updates since filing, organize documents by topic, and practice direct truthful answers.",
      ],
      [
        "When preparation should include legal advice",
        "Educational preparation is not enough for every case. If an applicant has arrests, serious citations, immigration violations, unresolved tax problems, possible false claims, or anything they do not understand, a qualified immigration attorney should be part of preparation.",
      ],
    ],
    lists: [
      {
        title: "What I would tell another applicant to review",
        items: [
          "Read your submitted N-400 before interview day, not only the week you filed it.",
          "Write down anything that changed after filing: address, work, travel, family, citations, or taxes.",
          "Bring proof for topics that may need support, especially taxes, court records, travel, or corrections.",
          "Practice civics answers out loud, but also practice personal answers in short English sentences.",
          "If you do not understand a question, ask the officer to repeat or rephrase it instead of guessing.",
          "If a truthful answer involves criminal history, immigration problems, serious tax issues, or something you do not understand, speak with a qualified immigration attorney.",
        ],
      },
      {
        title: "How this experience shaped the site",
        items: [
          "Civics practice is built for spoken recall because the interview is spoken, not multiple choice.",
          "The study plan includes personal-history questions because the N-400 review can matter more than applicants expect.",
          "Officer follow-up prompts help applicants stay calm when a question is asked in a different way.",
          "The interview checklist connects documents to topics so applicants are not searching through papers under pressure.",
        ],
      },
    ],
  },
};

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const renderBlocks = (page) => {
  const extra = extraContentByRoute[page.route] || {};
  const editorialSections = [
    [
      "Editorial trust and independence",
      "US Citizenship Prep is an independent educational resource. The guidance is shaped by first-hand naturalization interview preparation experience and checked against official USCIS resources when a topic depends on forms, test policy, or eligibility rules. This site is not affiliated with USCIS and does not provide legal advice.",
    ],
    [
      "When to use official or legal help",
      "Applicants should verify official requirements with USCIS. If a case includes arrests, serious citations, immigration history issues, tax concerns, or uncertain eligibility, preparation should include a qualified immigration attorney.",
    ],
  ];
  const sections = [...page.sections, ...(extra.sections || []), ...editorialSections];
  const lists = extra.lists || [];

  return `
        ${sections
          .map(
            ([title, body]) => `
        <section>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(body)}</p>
        </section>`
          )
          .join("")}
        ${lists
          .map(
            (list) => `
        <section>
          <h2>${escapeHtml(list.title)}</h2>
          <ul>
            ${list.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>`
          )
          .join("")}`;
};

const renderStaticRoot = (page) => `
    <div id="root">
      <main style="font-family: Arial, sans-serif; max-width: 1040px; margin: 48px auto; padding: 0 20px; line-height: 1.65; color: #0f172a;">
        <header>
          <p style="font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #0b50da;">US Citizenship Prep</p>
          <h1 style="font-size: 42px; line-height: 1.08; margin: 12px 0;">${escapeHtml(page.h1)}</h1>
          <p style="font-size: 18px; color: #475569; max-width: 760px;">${escapeHtml(page.intro)}</p>
        </header>
        ${renderBlocks(page)}
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
        ${renderBlocks(page)}
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
