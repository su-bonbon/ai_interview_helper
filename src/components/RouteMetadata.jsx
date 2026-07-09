import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://usinterviewprep.com";
const defaultTitle = "Free U.S. Citizenship Interview Prep";
const defaultDescription =
  "Free bilingual U.S. citizenship interview prep with civics questions, mock interviews, checklists, and practice prompts.";

const metadataByPath = {
  "/": {
    title: "Free U.S. Citizenship Interview Prep | US Citizenship Prep",
    description:
      "Free bilingual U.S. citizenship interview preparation with civics practice, N-400 review, reading and writing guidance, mock interview prompts, and checklists.",
  },
  "/civics": {
    title: "Civics Questions Flashcards | US Citizenship Prep",
    description:
      "Practice citizenship civics questions with free flashcards, hard question review, and interview-ready recall tools.",
  },
  "/study-plan": {
    title: "Citizenship Interview Study Plan | US Citizenship Prep",
    description:
      "Organize your citizenship interview preparation with civics practice, N-400 review, yes/no questions, writing words, and interview-day tasks.",
  },
  "/guides": {
    title: "Citizenship Interview Guides | US Citizenship Prep",
    description:
      "Read original guides for the civics test, reading and writing test, N-400 review, mock interview practice, and interview-day preparation.",
  },
  "/guides/civics-test": {
    title: "How to Study for the Citizenship Civics Test",
    description:
      "Learn a practical study routine for USCIS civics questions, including small sets, spoken recall, mistake review, and weekly practice.",
  },
  "/guides/reading-writing": {
    title: "Citizenship Reading and Writing Test Expectations",
    description:
      "Understand what to expect in the citizenship reading and writing test and how to practice simple English sentences calmly.",
  },
  "/guides/n400-review": {
    title: "How to Prepare for N-400 Review Questions",
    description:
      "Prepare for N-400 interview questions about address history, work, travel, taxes, family, eligibility, and updates since filing.",
  },
  "/guides/interview-day": {
    title: "Citizenship Interview Day Checklist Guide",
    description:
      "Prepare documents, timing, transportation, final review, and calm speaking habits for citizenship interview day.",
  },
  "/interview-day": {
    title: "Citizenship Interview Day Checklist | US Citizenship Prep",
    description:
      "Use a practical citizenship interview day checklist for documents, timing, ID, passports, N-400 updates, and final review.",
  },
  "/n400-interview-questions": {
    title: "N-400 Interview Questions | US Citizenship Prep",
    description:
      "Practice N-400 interview questions for travel, work, taxes, eligibility, yes/no answers, and personal history before your citizenship interview.",
  },
  "/mock-interview": {
    title: "US Citizenship Mock Interview Practice | US Citizenship Prep",
    description:
      "Practice a realistic U.S. citizenship mock interview with check-in, oath, civics questions, English reading and writing, and N-400 review.",
  },
  "/civics-test-practice": {
    title: "Citizenship Test Practice | 100 Civics Questions",
    description:
      "Free citizenship test practice for USCIS civics questions with flashcards, hard question review, and interview-ready recall practice.",
  },
  "/citizenship-test-spanish": {
    title: "Citizenship Test Practice in Spanish and English",
    description:
      "Bilingual citizenship test practice for applicants studying civics questions, interview flow, and English reading and writing in Spanish and English.",
  },
  "/citizenship-interview-checklist": {
    title: "Citizenship Interview Checklist | Documents and Interview Day Prep",
    description:
      "Use this citizenship interview checklist to organize documents, timing, final review, and interview-day preparation before your USCIS appointment.",
  },
  "/sources": {
    title: "Sources and Editorial Standards | US Citizenship Prep",
    description:
      "Review the sources, editorial standards, official USCIS references, and educational limits behind US Citizenship Prep content.",
  },
  "/faq": {
    title: "Citizenship Interview FAQ | US Citizenship Prep",
    description:
      "Clear answers to common citizenship interview questions about civics, English, N-400 review, documents, and practice.",
  },
  "/about": {
    title: "About US Citizenship Prep",
    description:
      "Learn why US Citizenship Prep provides free bilingual citizenship interview study tools and educational preparation guides.",
  },
  "/privacy": {
    title: "Privacy Policy | US Citizenship Prep",
    description:
      "Review how US Citizenship Prep handles local study data, analytics, advertising cookies, and privacy choices.",
  },
  "/terms": {
    title: "Terms of Service | US Citizenship Prep",
    description:
      "Read the terms for using US Citizenship Prep as a free educational citizenship interview preparation resource.",
  },
  "/contact": {
    title: "Contact US Citizenship Prep",
    description:
      "Contact US Citizenship Prep about study content, accessibility, privacy, corrections, or educational resource questions.",
  },
};

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = `${siteUrl}${cleanPath}`;
    const metadata = metadataByPath[cleanPath] || {
      title: defaultTitle,
      description: defaultDescription,
    };
    let canonical = document.querySelector('link[rel="canonical"]');
    let description = document.querySelector('meta[name="description"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    document.title = metadata.title;
    description.setAttribute("content", metadata.description);
    canonical.setAttribute("href", canonicalUrl);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", canonicalUrl);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", metadata.description);
  }, [pathname]);

  return null;
}
