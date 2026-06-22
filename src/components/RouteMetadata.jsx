import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://usinterviewprep.com";
const defaultTitle = "Free U.S. Citizenship Interview Prep";
const defaultDescription =
  "Free bilingual U.S. citizenship interview prep with civics questions, mock interviews, checklists, and practice prompts.";

const metadataByPath = {
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
