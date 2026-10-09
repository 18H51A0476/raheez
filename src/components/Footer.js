import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 24px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Top glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)",
      }} />

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Logo */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
        }}>
          <div style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: "13px",
            color: "#fff",
          }}>MR</div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "#374151",
          }}>Mohammed Raheez</span>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
          {[
            { icon: <FaGithub size={18} />, href: "https://github.com/18H51A0476", label: "GitHub" },
            { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/raheez", label: "LinkedIn" },
            { icon: <FaEnvelope size={18} />, href: "mailto:mohammedraheez3@gmail.com", label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              title={s.label}
              whileHover={{ y: -3, color: "#6366f1" }}
              style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#4b5563",
                transition: "color 0.2s ease",
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <p style={{
          fontSize: "12px",
          color: "#1f2937",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.05em",
        }}>
          © {new Date().getFullYear()} Mohammed Raheez · Built with React & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;