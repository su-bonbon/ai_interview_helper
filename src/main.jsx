import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import CivicsQuestions from "./pages/CivicsQuestions.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import About from "./pages/About.jsx";
import StudyPlan from "./pages/StudyPlan.jsx";
import Guides from "./pages/Guides.jsx";
import GuideArticle from "./pages/GuideArticle.jsx";
import SeoLandingPage from "./pages/SeoLandingPage.jsx";
import Sources from "./pages/Sources.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import RouteMetadata from "./components/RouteMetadata.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { initAnalytics } from "./lib/firebase.js";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RouteMetadata />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/civics" element={<CivicsQuestions />} />
          <Route path="/study-plan" element={<StudyPlan />} />
          <Route
            path="/interview-day"
            element={<GuideArticle slugOverride="interview-day" />}
          />
          <Route path="/guides" element={<Guides />} />
          <Route
            path="/guides/interview-day"
            element={<Navigate to="/interview-day" replace />}
          />
          <Route
            path="/guides/n400-review"
            element={<Navigate to="/n400-interview-questions" replace />}
          />
          <Route path="/guides/:slug" element={<GuideArticle />} />
          <Route
            path="/n400-interview-questions"
            element={<SeoLandingPage slug="n400-interview-questions" />}
          />
          <Route
            path="/mock-interview"
            element={<SeoLandingPage slug="mock-interview" />}
          />
          <Route
            path="/civics-test-practice"
            element={<SeoLandingPage slug="civics-test-practice" />}
          />
          <Route
            path="/citizenship-test-spanish"
            element={<SeoLandingPage slug="citizenship-test-spanish" />}
          />
          <Route
            path="/citizenship-interview-checklist"
            element={<SeoLandingPage slug="citizenship-interview-checklist" />}
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

initAnalytics();
