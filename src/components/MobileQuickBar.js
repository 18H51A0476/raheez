import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaFileAlt, FaCheck, FaPhone } from "react-icons/fa";

const MobileQuickBar = ({ onCopyToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammedraheez3@gmail.com");
    setCopied(true);
    if (onCopyToast) onCopyToast("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="show-mobile-only"
      style={{
        position: "fixed",
        bottom: "16px",
        left: "16px",
        right: "16px",
        zIndex: 90,
        background: "rgba(10, 10, 17, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(99, 102, 241, 0.3)",
        borderRadius: "100px",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(99,102,241,0.2)",
      }}
    >
      <button
        onClick={handleCopyEmail}
        style={{
          background: "none",
          border: "none",
          color: copied ? "#4ade80" : "#a5b4fc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {copied ? <FaCheck size={18} /> : <FaEnvelope size={18} />}
        <span>{copied ? "Copied!" : "Email"}</span>
      </button>

      <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />

      <a
        href="tel:+918919752306"
        style={{
          color: "#cbd5e1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        <FaPhone size={17} />
        <span>Call</span>
      </a>

      <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />

      <a
        href="https://linkedin.com/in/raheez"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#38bdf8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        <FaLinkedin size={18} />
        <span>LinkedIn</span>
      </a>

      <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />

      <a
        href="/RaheezResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "6px 14px",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 0 15px rgba(99,102,241,0.4)",
        }}
      >
        <FaFileAlt size={13} />
        <span>Resume</span>
      </a>

      <style>{`
        @media (min-width: 769px) {
          .show-mobile-only { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default MobileQuickBar;
