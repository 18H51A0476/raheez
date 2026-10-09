import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiGo, SiKubernetes, SiAmazonwebservices } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const floatingTechs = [
  { icon: <SiGo size={28} color="#00ACD7" />, label: "Go", x: "8%", y: "25%", delay: 0 },
  { icon: <FaJava size={26} color="#f89820" />, label: "Java", x: "88%", y: "20%", delay: 1 },
  { icon: <SiKubernetes size={26} color="#326ce5" />, label: "K8s", x: "5%", y: "65%", delay: 2 },
  { icon: <SiAmazonwebservices size={30} color="#FF9900" />, label: "AWS", x: "88%", y: "68%", delay: 1.5 },
];

const Hero = () => {
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
        padding: "120px 24px 80px",
      }}
    >
      {/* Background Orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "15%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "800px",
        background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* Floating Tech Icons */}
      {floatingTechs.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + tech.delay * 0.3, duration: 0.5 }}
          style={{
            position: "absolute",
            left: tech.x,
            top: tech.y,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
          className="float-animation hidden-on-mobile"
        >
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "14px",
            backdropFilter: "blur(10px)",
          }}>
            {tech.icon}
          </div>
          <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{tech.label}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span style={{
            width: "7px", height: "7px",
            background: "#22c55e",
            borderRadius: "50%",
            boxShadow: "0 0 8px #22c55e",
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontSize: "12px",
            color: "#94a3b8",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.05em",
          }}>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            background: "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Mohammed
          <br />
          <span style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Raheez</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#64748b",
            fontWeight: 500,
            letterSpacing: "0.05em",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: "24px",
          }}
        >
          Software Engineer II · Distributed Systems · Backend
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#475569",
            maxWidth: "600px",
            margin: "0 auto 48px",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          4+ years building production-grade distributed systems in Go, Java & Node.js.
          Currently at <span style={{ color: "#94a3b8", fontWeight: 600 }}>F5 Distributed Cloud</span> —
          cutting failure convergence from 180s → 3s.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px" }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            Get in Touch →
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "14px 32px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e2e8f0",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              letterSpacing: "0.02em",
            }}
          >
            View Experience
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: "16px" }}
        >
          {[
            { icon: <FaGithub size={20} />, href: "https://github.com/18H51A0476", label: "GitHub" },
            { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/raheez", label: "LinkedIn" },
            { icon: <FaEnvelope size={20} />, href: "mailto:mohammedraheez3@gmail.com", label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#6366f1" }}
              title={s.label}
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#64748b",
                transition: "all 0.2s ease",
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
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#374151",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: "20px" }}
        >↓</motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hidden-on-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;