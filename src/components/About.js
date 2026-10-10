import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaAward, FaBolt, FaCloud, FaUsers } from "react-icons/fa";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "98%", label: "Faster Convergence (180s→3s)" },
  { value: "90%", label: "Cloud Ops Savings" },
  { value: "2K+", label: "Engineers Mentored" },
];

const highlights = [
  {
    icon: <FaBolt className="text-indigo-400" size={22} />,
    title: "Distributed Control Planes",
    text: "Engineered Go microservices powering F5 Distributed Cloud Multi-Cloud Networking (XC), orchestrating real-time route convergence across cloud & edge environments.",
  },
  {
    icon: <FaCloud className="text-cyan-400" size={22} />,
    title: "AWS Cloud Infrastructure",
    text: "Architected and shipped two production platforms end-to-end on AWS from scratch, achieving 90% operational cost savings and 80% lower API latency with S3 caching.",
  },
  {
    icon: <FaAward className="text-purple-400" size={22} />,
    title: "Networking Protocols",
    text: "Deep protocol expertise in BGP, BFD, IPSec VPN, NAT, & MTU diagnostics. Implemented sub-second BFD failure detection over eBGP across hundreds of Customer Edge sites.",
  },
  {
    icon: <FaUsers className="text-emerald-400" size={22} />,
    title: "Engineering Leadership",
    text: "Led software teams, delivered 50+ technical workshops training over 2,000 developers, and accelerated junior engineer onboarding times by 30%.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        width: "100%",
      }}
      className="mobile-section-padding"
    >
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
            01. ABOUT ME
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
          }}
        >
          Engineering Philosophy & Impact
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
          width: "100%",
        }}
        className="about-grid"
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ width: "100%" }}
        >
          <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: 1.8, marginBottom: "18px" }}>
            I'm a <strong style={{ color: "#f8fafc" }}>Software Engineer II</strong> at{" "}
            <strong style={{ color: "#6366f1" }}>F5 Networks</strong> with 4+ years of hands-on experience designing high-throughput backend services, distributed systems, and multi-cloud networking infrastructure.
          </p>
          <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8, marginBottom: "18px" }}>
            My work focuses on writing production Go microservices for the control and data planes of F5 Distributed Cloud (XC), managing BGP/BFD routing convergence, FRRouting compliance (FedRAMP), and building automated container diagnostic tools for Kubernetes environments.
          </p>
          <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8, marginBottom: "28px" }}>
            I hold a B.Tech in Electronics & Communication Engineering from CMR College of Engineering & Technology (CGPA: 8.5/10). I thrive in solving high-stakes distributed systems challenges, performance optimization, and on-call operational excellence.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://linkedin.com/in/raheez"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#a5b4fc",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.03em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaLinkedin size={15} />
              <span>LinkedIn Profile ↗</span>
            </a>
            <a
              href="https://github.com/18H51A0476"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#cbd5e1",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.03em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaGithub size={15} />
              <span>GitHub Projects ↗</span>
            </a>
          </div>
        </motion.div>

        {/* Right Highlights Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            width: "100%",
          }}
          className="highlights-subgrid"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
              style={{
                padding: "20px 18px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                width: "100%",
              }}
            >
              <div style={{ marginBottom: "10px" }}>{item.icon}</div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#e2e8f0",
                  marginBottom: "6px",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Counter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          marginTop: "60px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          width: "100%",
        }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "28px 16px",
              textAlign: "center",
              background: "rgba(10, 10, 15, 0.85)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "4px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .highlights-subgrid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .mobile-section-padding { padding: 60px 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;