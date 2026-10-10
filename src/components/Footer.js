import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";

const Footer = ({ onToast }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammedraheez3@gmail.com");
    if (onToast) onToast("Email copied to clipboard!");
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 100px",
        textAlign: "center",
        position: "relative",
        background: "rgba(5,5,10,0.4)",
      }}
    >
      {/* Top accent glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(99,102,241,0.6), transparent)",
        }}
      />

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#6366f1",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            marginBottom: "28px",
            boxShadow: "0 0 15px rgba(99,102,241,0.2)",
          }}
          aria-label="Back to top"
        >
          <FaChevronUp size={16} />
        </motion.button>

        {/* Logo Branding */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: "13px",
              color: "#fff",
            }}
          >
            MR
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "15px",
              color: "#f8fafc",
              fontWeight: 700,
            }}
          >
            Mohammed Raheez
          </span>
        </div>

        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px" }}>
          Software Engineer II · Distributed Systems & Multi-Cloud Networking
        </p>

        {/* Social Icons Row */}
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "28px" }}>
          {[
            { icon: <FaGithub size={18} />, href: "https://github.com/18H51A0476", label: "GitHub" },
            { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/raheez", label: "LinkedIn" },
            { icon: <FaEnvelope size={18} />, action: handleCopyEmail, label: "Copy Email" },
          ].map((s, idx) => (
            <motion.div key={idx}>
              {s.href ? (
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  whileHover={{ y: -3, borderColor: "#6366f1", color: "#6366f1" }}
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                >
                  {s.icon}
                </motion.a>
              ) : (
                <motion.button
                  onClick={s.action}
                  title={s.label}
                  whileHover={{ y: -3, borderColor: "#6366f1", color: "#6366f1" }}
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  {s.icon}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#475569",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.03em",
          }}
        >
          © {new Date().getFullYear()} Mohammed Raheez · Engineered with React & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;