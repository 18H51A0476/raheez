import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileQuickBar from "./components/MobileQuickBar";
import Toast from "./components/Toast";
import "./App.css";

function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#e2e8f0" }}>
      <Header onToast={showToast} />
      <Hero onToast={showToast} />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact onToast={showToast} />
      <Footer onToast={showToast} />
      <MobileQuickBar onCopyToast={showToast} />
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
