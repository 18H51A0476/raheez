import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    value: "mohammedraheez3@gmail.com",
    href: "mailto:mohammedraheez3@gmail.com",
    color: "#6366f1",
  },
  {
    icon: <FaPhone size={17} />,
    label: "Phone",
    value: "+91-8919752306",
    href: "tel:+918919752306",
    color: "#8b5cf6",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/raheez",
    href: "https://linkedin.com/in/raheez",
    color: "#0a66c2",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/18H51A0476",
    href: "https://github.com/18H51A0476",
    color: "#e2e8f0",
  },
  {
    icon: <FaMapMarkerAlt size={17} />,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
    color: "#06b6d4",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        maxWidth: "1000px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        filter: "blur(40px)",
      }} />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "64px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6366f1", letterSpacing: "0.1em" }}>
            04. CONTACT
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)", maxWidth: "200px" }} />
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#e2e8f0",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}>
          Get In Touch
        </h2>
        <p style={{
          fontSize: "16px",
          color: "#475569",
          maxWidth: "500px",
          lineHeight: 1.7,
        }}>
          I'm open to new opportunities, collaborations, and interesting problems.
          Reach out via any channel below.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "start",
      }} className="contact-grid">

        {/* Left: Contact Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {item.href ? (
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, borderColor: `${item.color}50` }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <div style={{
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
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "#374151", fontFamily: "'JetBrains Mono', monospace", marginBottom: "3px", letterSpacing: "0.06em" }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "14px", color: "#94a3b8", fontWeight: 500 }}>{item.value}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#374151", fontSize: "16px" }}>→</div>
                </motion.a>
              ) : (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 20px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                }}>
                  <div style={{
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
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "#374151", fontFamily: "'JetBrains Mono', monospace", marginBottom: "3px", letterSpacing: "0.06em" }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "14px", color: "#94a3b8", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right: CTA Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "40px",
            background: "rgba(99,102,241,0.04)",
            border: "1px solid rgba(99,102,241,0.15)",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "28px",
            boxShadow: "0 0 30px rgba(99,102,241,0.3)",
          }}>💼</div>

          <h3 style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#e2e8f0",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}>Open to Opportunities</h3>

          <p style={{
            fontSize: "14px",
            color: "#475569",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}>
            Available for senior backend / distributed systems roles, consulting engagements, and interesting technical collaborations.
            Currently at F5 Networks — always interested in challenging problems.
          </p>

          <motion.a
            href="mailto:mohammedraheez3@gmail.com"
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "block",
              padding: "14px 28px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              marginBottom: "12px",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            Send Me an Email →
          </motion.a>

          <motion.a
            href="/RaheezResume.pdf"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            style={{
              display: "block",
              padding: "13px 28px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Download Resume ↗
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
