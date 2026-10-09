import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "98%", label: "Faster Convergence (180s→3s)" },
  { value: "90%", label: "Ops Cost Reduction" },
  { value: "2K+", label: "Developers Trained" },
];

const highlights = [
  {
    icon: "⚙️",
    title: "Distributed Systems",
    text: "Designing and building Go microservices for F5 Distributed Cloud — a large-scale multi-cloud networking platform connecting workloads across AWS and on-premises environments.",
  },
  {
    icon: "☁️",
    title: "Cloud Architecture",
    text: "Architected and shipped two production platforms on AWS end-to-end, cutting operational costs by 90% and improving API efficiency by 80% with S3-backed caching.",
  },
  {
    icon: "🔌",
    title: "Networking & Protocols",
    text: "Deep expertise in BGP, BFD, IPSec VPN, NAT, and multi-hop routing. Implemented BFD over eBGP, cutting failure convergence from 180s to 3s across hundreds of CE sites.",
  },
  {
    icon: "🧑‍🏫",
    title: "Mentorship & Leadership",
    text: "Led engineering teams and ran 50+ workshops training 2,000+ developers. Mentored junior engineers, resulting in 30% faster ramp-up times.",
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
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "64px" }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "#6366f1",
            letterSpacing: "0.1em",
          }}>01. ABOUT</span>
          <div style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)",
            maxWidth: "200px",
          }} />
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#e2e8f0",
          lineHeight: 1.1,
        }}>
          Who I Am
        </h2>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "start",
      }} className="about-grid">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontSize: "17px",
            color: "#64748b",
            lineHeight: 1.9,
            marginBottom: "20px",
          }}>
            I'm a <span style={{ color: "#94a3b8", fontWeight: 600 }}>Software Engineer II</span> at{" "}
            <span style={{ color: "#6366f1", fontWeight: 600 }}>F5 Networks</span>, focused on distributed systems, backend infrastructure, and cloud networking. I design and develop Go microservices for the control plane and data plane of F5 Distributed Cloud (XC) Multi-Cloud Networking.
          </p>
          <p style={{
            fontSize: "17px",
            color: "#64748b",
            lineHeight: 1.9,
            marginBottom: "20px",
          }}>
            Previously, I independently built and shipped two full production platforms on AWS from scratch, and delivered scalable MERN stack solutions while mentoring hundreds of developers as an instructor.
          </p>
          <p style={{
            fontSize: "17px",
            color: "#64748b",
            lineHeight: 1.9,
            marginBottom: "32px",
          }}>
            I hold a B.Tech in ECE from CMR College of Engineering & Technology (CGPA: 8.5/10) and specialize in debugging complex distributed systems, on-call operations, and pushing performance boundaries.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://linkedin.com/in/raheez"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "#6366f1",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.03em",
              }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/18H51A0476"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#94a3b8",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.03em",
              }}
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>

        {/* Right: Highlights Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}>
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
              style={{
                padding: "24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{item.icon}</div>
              <h4 style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#e2e8f0",
                marginBottom: "8px",
                letterSpacing: "0.02em",
              }}>{item.title}</h4>
              <p style={{
                fontSize: "13px",
                color: "#475569",
                lineHeight: 1.7,
              }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          marginTop: "80px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "36px 24px",
              textAlign: "center",
              background: "rgba(10,10,15,0.8)",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <div style={{
              fontSize: "36px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "8px",
              fontFamily: "'JetBrains Mono', monospace",
            }}>{s.value}</div>
            <div style={{
              fontSize: "13px",
              color: "#475569",
              fontWeight: 500,
            }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;