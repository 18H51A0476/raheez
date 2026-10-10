import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer II",
    company: "F5 Networks",
    product: "F5 Distributed Cloud (XC) Multi-Cloud Networking",
    period: "Mar 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "#6366f1",
    impactMetric: "98% Convergence Boost (180s → 3s)",
    highlights: [
      "Architect and build Go microservices for control plane & data plane of F5 Distributed Cloud Multi-Cloud Networking.",
      "Implemented Bidirectional Forwarding Detection (BFD) over eBGP, reducing network failure convergence from 180s → 3s across hundreds of Customer Edge (CE) sites.",
      "Developed advanced eBGP routing features (single-hop, multihop, hub-and-spoke, L2/L3 topology) for Tier-1 telecom enterprise customers.",
      "Led FRRouting (FRR) routing stack migration from version 6.x to 8.x to achieve FedRAMP security compliance.",
      "Built diagnostic automation for Kubernetes monitoring container cgroup memory limits, tracking OOM kills, and forecasting memory exhaustion trends.",
      "Troubleshoot production networking issues across NAT, IPSec VPN tunnels, MTU mismatch, and participate in primary on-call rotations.",
    ],
    tags: ["Go (Golang)", "gRPC", "BGP", "BFD", "FRRouting", "Kubernetes", "FedRAMP", "Distributed Systems"],
  },
  {
    role: "Lead Software Engineer",
    company: "ChaturaITLearnings",
    product: "ChaturaITLearnings & CodeChatura Platforms",
    period: "Aug 2023 – Feb 2025",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "#8b5cf6",
    impactMetric: "90% Infrastructure Cost Reduction",
    highlights: [
      "Independently designed, built, and deployed two scalable production cloud platforms on AWS serving thousands of active developers.",
      "Migrated enterprise clients off vendor services (HackerEarth) to custom AWS architecture — reducing annual operational costs by 90%.",
      "Boosted API efficiency by 80% through an S3-backed asset caching architecture.",
      "Engineered high-concurrency transactional messaging and notification pipelines using AWS SQS and AWS SES.",
      "Automated end-to-end CI/CD deployments using AWS CloudFormation templates and GitHub Actions workflows.",
    ],
    tags: ["AWS", "Node.js", "S3", "SQS", "SES", "CloudFormation", "GitHub Actions", "System Design"],
  },
  {
    role: "Software Developer & Instructor",
    company: "BeingZero",
    product: "MERN Stack Learning & Assessment Engine",
    period: "Aug 2022 – Jul 2023",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "#06b6d4",
    impactMetric: "2,000+ Developers Trained",
    highlights: [
      "Delivered scalable full-stack MERN (MongoDB, Express, React, Node.js) solutions, driving a 20% system throughput improvement.",
      "Engineered a real-time web push notification engine boosting user engagement by 25%.",
      "Mentored junior engineers and led 50+ technical workshops training over 2,000 developers on data structures, algorithms, and system design.",
    ],
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "WebSockets", "Technical Leadership"],
  },
  {
    role: "Java Full Stack Engineer Intern",
    company: "Cognizant",
    product: "Enterprise Management Systems",
    period: "Feb 2022 – Jul 2022",
    location: "Hyderabad, India",
    type: "Internship",
    color: "#f59e0b",
    impactMetric: "Full Stack Microservices",
    highlights: [
      "Engineered enterprise backend microservices using Java, Spring Boot, REST APIs, and MySQL.",
      "Developed responsive React frontend components connected with secure Spring Security endpoints.",
      "Collaborated in an Agile Scrum environment across 3 full sprint cycles from planning to delivery.",
    ],
    tags: ["Java", "Spring Boot", "React", "REST APIs", "Microservices", "Agile"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
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
            02. WORK EXPERIENCE
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
          Engineering History
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Vertical line (Desktop only) */}
        <div
          style={{
            position: "absolute",
            left: "12px",
            top: "20px",
            bottom: "20px",
            width: "2px",
            background: "linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4, rgba(255,255,255,0.05))",
          }}
          className="hidden-mobile"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }} className="timeline-container">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ position: "relative", width: "100%" }}
            >
              {/* Timeline Node Dot (Desktop only) */}
              <div
                style={{
                  position: "absolute",
                  left: "-48px",
                  top: "28px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: exp.color,
                  boxShadow: `0 0 16px ${exp.color}`,
                  border: "3px solid #0a0a0f",
                  zIndex: 2,
                }}
                className="hidden-mobile"
              />

              {/* Card Container */}
              <motion.div
                whileHover={{ borderColor: `${exp.color}50`, boxShadow: `0 10px 30px ${exp.color}15` }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                }}
                className="timeline-card-padding"
              >
                {/* Accent Top Strip */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: exp.color }} />

                {/* Card Top Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                      <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.01em" }}>{exp.role}</h3>
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: "100px",
                          fontSize: "11px",
                          fontWeight: 600,
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "16px", fontWeight: 700, color: exp.color }}>{exp.company}</span>
                      <span style={{ color: "#475569", fontSize: "14px" }}>·</span>
                      <span style={{ fontSize: "14px", color: "#94a3b8" }}>{exp.product}</span>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }} className="period-mobile-left">
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "13px",
                        color: "#a5b4fc",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      {exp.period}
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>{exp.location}</div>
                  </div>
                </div>

                {/* Impact Highlight Badge */}
                {exp.impactMetric && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      borderRadius: "8px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#38bdf8",
                      fontWeight: 600,
                      marginBottom: "20px",
                      maxWidth: "100%",
                    }}
                  >
                    <span>⚡ Key Impact:</span>
                    <span style={{ color: "#fff" }}>{exp.impactMetric}</span>
                  </div>
                )}

                {/* Bullets List */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: exp.color, fontSize: "16px", marginTop: "1px", flexShrink: 0, fontWeight: 700 }}>›</span>
                      <span style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.7 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "5px 12px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#94a3b8",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
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
        style={{ marginTop: "64px", width: "100%" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6366f1", letterSpacing: "0.1em" }}>
            EDUCATION
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)", maxWidth: "200px" }} />
        </div>

        <motion.div
          whileHover={{ borderColor: "rgba(99,102,241,0.4)", boxShadow: "0 10px 30px rgba(99,102,241,0.1)" }}
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            transition: "all 0.3s ease",
            width: "100%",
          }}
          className="timeline-card-padding"
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                border: "1px solid rgba(99,102,241,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6366f1",
                flexShrink: 0,
              }}
            >
              <FaGraduationCap size={26} />
            </div>

            <div>
              <h4 style={{ fontSize: "17px", fontWeight: 800, color: "#f8fafc", marginBottom: "4px" }}>
                B.Tech, Electronics & Communication Engineering
              </h4>
              <p style={{ fontSize: "14px", color: "#6366f1", fontWeight: 600, marginBottom: "4px" }}>
                CMR College of Engineering and Technology
              </p>
              <p style={{ fontSize: "13px", color: "#64748b" }}>Hyderabad, India · Graduated May 2022</p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "14px 24px",
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "14px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: 900,
                fontFamily: "'JetBrains Mono', monospace",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              8.5
            </div>
            <div style={{ fontSize: "11px", color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
              CGPA / 10
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .timeline-container {
          padding-left: 48px;
        }
        .timeline-card-padding {
          padding: 32px;
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: block !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .timeline-container { padding-left: 0 !important; }
          .timeline-card-padding { padding: 20px 16px !important; }
          .period-mobile-left { text-align: left !important; }
          .mobile-section-padding { padding: 60px 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
