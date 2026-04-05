import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CivicsQuestions from "./pages/CivicsQuestions.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import Layout from "./components/Layout.jsx";
import { initAnalytics } from "./lib/firebase.js";
import "./index.css";
import "./login.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/civics" element={<CivicsQuestions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

initAnalytics();
