import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { SiGo, SiKubernetes, SiAmazonwebservices } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const floatingTechs = [
  { icon: <SiGo size={26} color="#00ACD7" />, label: "Go (Golang)", x: "6%", y: "22%", delay: 0 },
  { icon: <FaJava size={26} color="#f89820" />, label: "Java Microservices", x: "85%", y: "18%", delay: 1 },
  { icon: <SiKubernetes size={26} color="#326ce5" />, label: "Kubernetes & K8s", x: "4%", y: "68%", delay: 2 },
  { icon: <SiAmazonwebservices size={28} color="#FF9900" />, label: "AWS Architecture", x: "86%", y: "68%", delay: 1.5 },
];

const Hero = ({ onToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammedraheez3@gmail.com");
    setCopiedEmail(true);
    if (onToast) onToast("Email copied: mohammedraheez3@gmail.com");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        padding: "130px 24px 80px",
      }}
    >
      {/* Background Orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Tech Icons (Desktop Only) */}
      {floatingTechs.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + tech.delay * 0.2, duration: 0.5 }}
          style={{
            position: "absolute",
            left: tech.x,
            top: tech.y,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            zIndex: 3,
          }}
          className="float-animation hidden-on-mobile"
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "14px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            }}
          >
            {tech.icon}
          </div>
          <span
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              background: "rgba(10,10,15,0.7)",
              padding: "2px 8px",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {tech.label}
          </span>
        </motion.div>
      ))}

      {/* Main Content Container */}
      <div style={{ position: "relative", zIndex: 4, maxWidth: "880px", width: "100%" }}>
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "100px",
            padding: "8px 18px",
            marginBottom: "28px",
            boxShadow: "0 0 20px rgba(99,102,241,0.15)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "#22c55e",
              borderRadius: "50%",
              boxShadow: "0 0 10px #22c55e",
            }}
            className="pulse-dot"
          />
          <span
            style={{
              fontSize: "12px",
              color: "#cbd5e1",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.04em",
              fontWeight: 600,
            }}
          >
            Available for Senior / Staff Backend & Systems Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontSize: "clamp(42px, 7.5vw, 84px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "18px",
            background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Mohammed{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Raheez
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            fontSize: "clamp(15px, 2.2vw, 20px)",
            color: "#38bdf8",
            fontWeight: 600,
            letterSpacing: "0.04em",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: "20px",
          }}
        >
          Software Engineer II · Distributed Systems & Cloud Infrastructure
        </motion.p>

        {/* Core Impact Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "#94a3b8",
            maxWidth: "680px",
            margin: "0 auto 36px",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          4+ years engineering production-grade control planes & microservices in{" "}
          <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Go, Java & AWS</span>. Currently at{" "}
          <span style={{ color: "#818cf8", fontWeight: 700 }}>F5 Distributed Cloud</span> — reduced route failure convergence from{" "}
          <span style={{ color: "#38bdf8", fontWeight: 700 }}>180s → 3s</span> across enterprise topologies.
        </motion.p>

        {/* Mobile Tech Badge Strip (Mobile Only) */}
        <div
          className="show-mobile-only"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {["Go (Golang)", "Java", "Kubernetes", "AWS", "BGP/BFD", "gRPC"].map((t) => (
            <span
              key={t}
              style={{
                padding: "5px 12px",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: "100px",
                fontSize: "12px",
                color: "#a5b4fc",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 700,
              boxShadow: "0 0 25px rgba(99,102,241,0.35)",
              letterSpacing: "0.02em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Explore Systems Built</span>
            <span style={{ fontSize: "16px" }}>→</span>
          </motion.a>

          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "14px 28px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e2e8f0",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              letterSpacing: "0.02em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy className="text-indigo-400" />}
            <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
          </motion.button>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: "16px", alignItems: "center" }}
        >
          {[
            { icon: <FaGithub size={20} />, href: "https://github.com/18H51A0476", label: "GitHub" },
            { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/raheez", label: "LinkedIn" },
            { icon: <FaEnvelope size={20} />, href: "mailto:mohammedraheez3@gmail.com", label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -4, borderColor: "#6366f1", color: "#6366f1" }}
              title={s.label}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#94a3b8",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "#475569",
          fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span>SCROLL DOWN</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ fontSize: "16px" }}>
          ↓
        </motion.div>
      </motion.div>

      <style>{`
        .pulse-dot {
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }
        @media (max-width: 768px) {
          .hidden-on-mobile { display: none !important; }
          .show-mobile-only { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile-only { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;