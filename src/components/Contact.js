import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

const Contact = ({ onToast }) => {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type, label) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onToast) onToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const contactItems = [
    {
      type: "email",
      icon: <FaEnvelope size={18} />,
      label: "Email",
      value: "mohammedraheez3@gmail.com",
      action: () => handleCopy("mohammedraheez3@gmail.com", "email", "Email"),
      actionText: "Copy",
      color: "#6366f1",
    },
    {
      type: "phone",
      icon: <FaPhone size={17} />,
      label: "Phone",
      value: "+91-8919752306",
      action: () => handleCopy("+918919752306", "phone", "Phone number"),
      actionText: "Call / Copy",
      color: "#8b5cf6",
    },
    {
      type: "linkedin",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/raheez",
      href: "https://linkedin.com/in/raheez",
      color: "#0a66c2",
    },
    {
      type: "github",
      icon: <FaGithub size={18} />,
      label: "GitHub",
      value: "github.com/18H51A0476",
      href: "https://github.com/18H51A0476",
      color: "#e2e8f0",
    },
    {
      type: "location",
      icon: <FaMapMarkerAlt size={17} />,
      label: "Location",
      value: "Hyderabad, India (Open to Remote / Relocation)",
      color: "#06b6d4",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        width: "100%",
      }}
      className="mobile-section-padding"
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "48px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#6366f1",
              letterSpacing: "0.1em",
            }}
          >
            05. GET IN TOUCH
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)",
              maxWidth: "200px",
            }}
          />
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#e2e8f0",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Let's Build Something Exceptional
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#64748b",
            maxWidth: "550px",
            lineHeight: 1.7,
          }}
        >
          I'm open to discussing senior software engineering opportunities in Distributed Systems, Cloud Infrastructure, Backend Systems, and architectural advisory roles.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
          width: "100%",
        }}
        className="contact-grid"
      >
        {/* Left: Contact Details Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ width: "100%" }}
            >
              {item.href ? (
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, borderColor: `${item.color}60` }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#64748b",
                        fontFamily: "'JetBrains Mono', monospace",
                        marginBottom: "2px",
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 600, wordBreak: "break-word" }}>{item.value}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#64748b", fontSize: "14px" }}>↗</div>
                </motion.a>
              ) : item.action ? (
                <motion.div
                  onClick={item.action}
                  whileHover={{ x: 4, borderColor: `${item.color}60` }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#64748b",
                        fontFamily: "'JetBrains Mono', monospace",
                        marginBottom: "2px",
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 600, wordBreak: "break-word" }}>{item.value}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: copiedType === item.type ? "#4ade80" : "#a5b4fc", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                    {copiedType === item.type ? "Copied!" : item.actionText}
                  </div>
                </motion.div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#64748b",
                        fontFamily: "'JetBrains Mono', monospace",
                        marginBottom: "2px",
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 600, wordBreak: "break-word" }}>{item.value}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right CTA Container */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: "20px",
            textAlign: "center",
            width: "100%",
          }}
          className="contact-cta-padding"
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "26px",
              boxShadow: "0 0 25px rgba(99,102,241,0.4)",
              color: "#fff",
            }}
          >
            💼
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#f8fafc",
              marginBottom: "10px",
              letterSpacing: "-0.01em",
            }}
          >
            Looking for a Senior Backend Specialist?
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "#94a3b8",
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            Experienced in building mission-critical Go microservices, multi-cloud networking control planes, and scaling cloud infrastructure. Currently at F5 Networks.
          </p>

          <motion.a
            href="mailto:mohammedraheez3@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 24px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "12px",
              boxShadow: "0 0 20px rgba(99,102,241,0.35)",
              letterSpacing: "0.02em",
              textDecoration: "none",
              width: "100%",
            }}
          >
            <FaEnvelope size={15} />
            <span>Send Direct Email →</span>
          </motion.a>

          <motion.a
            href="/RaheezResume.pdf"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "13px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#cbd5e1",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
              fontFamily: "'JetBrains Mono', monospace",
              width: "100%",
            }}
          >
            <FaFileAlt size={13} />
            <span>Download Official Resume ↗</span>
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .contact-cta-padding {
          padding: 36px 28px;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .mobile-section-padding { padding: 60px 16px !important; }
          .contact-cta-padding { padding: 24px 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
