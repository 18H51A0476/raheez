import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer II",
    company: "F5 Networks",
    product: "F5 Distributed Cloud (XC)",
    period: "Mar 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "#6366f1",
    highlights: [
      "Design and develop Go microservices for the control plane & data plane of F5 Distributed Cloud Multi-Cloud Networking.",
      "Implemented BFD over eBGP, cutting route failure convergence from 180s → 3s (98% faster) across hundreds of Customer Edge sites.",
      "Developed BGP routing features (single-hop, multihop, hub-and-spoke, L2/L3) for a major telecom customer with thousands of CEs.",
      "Led FRRouting (FRR) upgrade from 6.x → 8.x to meet FedRAMP compliance, resolving compatibility issues across the stack.",
      "Built diagnostic automation detecting container memory limits, summarizing OOM kills, and forecasting next OOM from usage trends.",
      "Troubleshoot production issues across NAT, routing, MTU, and IPSec tunnels; participate in on-call rotation.",
    ],
    tags: ["Go", "gRPC", "BGP", "BFD", "Kubernetes", "FedRAMP", "Distributed Systems"],
  },
  {
    role: "Lead Software Engineer",
    company: "ChaturaITLearnings",
    product: "ChaturaITLearnings & CodeChatura",
    period: "Aug 2023 – Feb 2025",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "#8b5cf6",
    highlights: [
      "Independently built and deployed two production platforms serving thousands of users end-to-end on AWS.",
      "Migrated enterprise clients off third-party vendor (HackerEarth) onto in-house infrastructure — cutting operational costs by 90%.",
      "Improved API efficiency by 80% through S3-backed caching architecture.",
      "Built high-throughput messaging pipelines on AWS SES and SQS.",
      "Fully automated deployments with CI/CD using GitHub Actions and AWS CloudFormation.",
    ],
    tags: ["AWS", "Node.js", "S3", "SQS", "SES", "CloudFormation", "CI/CD"],
  },
  {
    role: "Software Developer & Instructor",
    company: "BeingZero",
    product: "MERN Stack Platform",
    period: "Aug 2022 – Jul 2023",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "#06b6d4",
    highlights: [
      "Delivered scalable MERN stack solutions, improving system efficiency by 20%.",
      "Shipped a push notification system that raised user engagement by 25%.",
      "Mentored junior engineers, achieving 30% faster ramp-up times.",
      "Ran 50+ workshops training 2,000+ developers across the platform.",
    ],
    tags: ["MERN", "React", "Node.js", "MongoDB", "Mentoring"],
  },
  {
    role: "Java Full Stack Engineer Intern",
    company: "Cognizant",
    product: "Student Management System",
    period: "Feb 2022 – Jul 2022",
    location: "Hyderabad, India",
    type: "Internship",
    color: "#f59e0b",
    highlights: [
      "Designed and developed a student management system using Java, Spring Boot, and microservices architecture.",
      "Built React frontend components with REST API integration.",
      "Collaborated in an Agile team across 3 sprint cycles, from planning through delivery.",
    ],
    tags: ["Java", "Spring Boot", "React", "Microservices", "Agile"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: "1000px",
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
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6366f1", letterSpacing: "0.1em" }}>
            02. EXPERIENCE
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)", maxWidth: "200px" }} />
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#e2e8f0",
          lineHeight: 1.1,
        }}>
          Work History
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Timeline line */}
        <div style={{
          position: "absolute",
          left: "0",
          top: "0",
          bottom: "0",
          width: "1px",
          background: "linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.05))",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "48px", paddingLeft: "40px" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ position: "relative" }}
            >
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-44px",
                top: "28px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: exp.color,
                boxShadow: `0 0 12px ${exp.color}`,
                border: "2px solid rgba(10,10,15,0.8)",
              }} />

              {/* Card */}
              <motion.div
                whileHover={{ borderColor: `${exp.color}40`, boxShadow: `0 0 30px ${exp.color}10` }}
                style={{
                  padding: "32px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <h3 style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#e2e8f0",
                        letterSpacing: "-0.01em",
                      }}>{exp.role}</h3>
                      <span style={{
                        padding: "3px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: 600,
                        background: "rgba(99,102,241,0.1)",
                        color: "#6366f1",
                        border: "1px solid rgba(99,102,241,0.2)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>{exp.type}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: exp.color,
                      }}>{exp.company}</span>
                      <span style={{ color: "#374151", fontSize: "14px" }}>·</span>
                      <span style={{ fontSize: "13px", color: "#475569" }}>{exp.product}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#4b5563",
                      marginBottom: "4px",
                    }}>{exp.period}</div>
                    <div style={{ fontSize: "12px", color: "#374151" }}>{exp.location}</div>
                  </div>
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{
                        color: exp.color,
                        fontSize: "16px",
                        marginTop: "2px",
                        flexShrink: 0,
                        fontWeight: 700,
                      }}>›</span>
                      <span style={{
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: 1.7,
                      }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 12px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "6px",
                      fontSize: "12px",
                      color: "#64748b",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: "80px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6366f1", letterSpacing: "0.1em" }}>
            EDUCATION
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)", maxWidth: "200px" }} />
        </div>

        <motion.div
          whileHover={{ borderColor: "rgba(99,102,241,0.3)" }}
          style={{
            padding: "28px 32px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            transition: "all 0.3s ease",
          }}
        >
          <div>
            <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#e2e8f0", marginBottom: "6px" }}>
              B.Tech, Electronics & Communication Engineering
            </h4>
            <p style={{ fontSize: "14px", color: "#6366f1", fontWeight: 600, marginBottom: "4px" }}>
              CMR College of Engineering and Technology
            </p>
            <p style={{ fontSize: "13px", color: "#475569" }}>Hyderabad, India · May 2022</p>
          </div>
          <div style={{
            textAlign: "center",
            padding: "16px 24px",
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "12px",
          }}>
            <div style={{
              fontSize: "24px",
              fontWeight: 800,
              fontFamily: "'JetBrains Mono', monospace",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>8.5</div>
            <div style={{ fontSize: "11px", color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>CGPA / 10</div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          #experience { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
