import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiGo,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiRedis,
  SiPrometheus,
} from "react-icons/si";
import { FaJava, FaNetworkWired, FaServer, FaCloud, FaDatabase, FaCogs } from "react-icons/fa";

const skillGroups = [
  {
    label: "Languages",
    category: "Languages",
    icon: <SiGo className="text-indigo-400" size={18} />,
    color: "#6366f1",
    skills: [
      { name: "Go (Golang)", icon: <SiGo />, level: 92, tag: "Primary" },
      { name: "Java", icon: <FaJava />, level: 88, tag: "Primary" },
      { name: "Python", icon: <SiPython />, level: 82, tag: "Scripting" },
      { name: "JavaScript / ES6+", icon: <SiJavascript />, level: 88 },
      { name: "TypeScript", icon: <SiTypescript />, level: 80 },
      { name: "C++", icon: <SiCplusplus />, level: 75 },
      { name: "SQL", icon: null, level: 85 },
    ],
  },
  {
    label: "Backend & Distributed Systems",
    category: "Backend",
    icon: <FaServer className="text-purple-400" size={18} />,
    color: "#8b5cf6",
    skills: [
      { name: "Microservices Architecture", icon: null, level: 94 },
      { name: "gRPC & Protocol Buffers", icon: null, level: 90 },
      { name: "REST APIs & OpenAPI", icon: null, level: 92 },
      { name: "Spring Boot & Java EE", icon: <SiSpringboot />, level: 85 },
      { name: "Node.js & Express", icon: <SiNodedotjs />, level: 88 },
      { name: "Control & Data Planes", icon: null, level: 90 },
      { name: "Distributed Systems Design", icon: null, level: 88 },
    ],
  },
  {
    label: "Cloud & DevOps Infrastructure",
    category: "Cloud",
    icon: <FaCloud className="text-cyan-400" size={18} />,
    color: "#06b6d4",
    skills: [
      { name: "AWS (S3, SQS, SES, EC2)", icon: <SiAmazonwebservices />, level: 90 },
      { name: "Kubernetes (K8s)", icon: <SiKubernetes />, level: 86 },
      { name: "Docker Containers", icon: <SiDocker />, level: 88 },
      { name: "CI/CD & GitHub Actions", icon: <SiGithubactions />, level: 85 },
      { name: "Linux Administration", icon: <SiLinux />, level: 88 },
      { name: "Prometheus Observability", icon: <SiPrometheus />, level: 82 },
      { name: "Git & Version Control", icon: <SiGit />, level: 92 },
    ],
  },
  {
    label: "Networking & Reliability",
    category: "Networking",
    icon: <FaNetworkWired className="text-amber-400" size={18} />,
    color: "#f59e0b",
    skills: [
      { name: "BGP (Border Gateway Protocol)", icon: null, level: 90 },
      { name: "BFD (Link Failure Probe)", icon: null, level: 88 },
      { name: "IPSec VPN & Tunneling", icon: null, level: 84 },
      { name: "NAT / IPv4 / IPv6 Routing", icon: null, level: 85 },
      { name: "FRRouting (FRR Stack)", icon: null, level: 86 },
      { name: "Primary On-Call Ops", icon: null, level: 92 },
      { name: "Root Cause Analysis (RCA)", icon: null, level: 90 },
    ],
  },
  {
    label: "Databases & Caching",
    category: "Databases",
    icon: <FaDatabase className="text-emerald-400" size={18} />,
    color: "#10b981",
    skills: [
      { name: "Redis In-Memory Cache", icon: <SiRedis />, level: 88 },
      { name: "MongoDB NoSQL", icon: <SiMongodb />, level: 84 },
      { name: "MySQL / Relational DBs", icon: <SiMysql />, level: 82 },
      { name: "Data Modeling & Indexing", icon: null, level: 85 },
    ],
  },
  {
    label: "Engineering Practices",
    category: "Practices",
    icon: <FaCogs className="text-pink-400" size={18} />,
    color: "#ec4899",
    skills: [
      { name: "Data Structures & Algorithms", icon: null, level: 88 },
      { name: "Agile & Scrum Cycles", icon: null, level: 90 },
      { name: "Technical Team Mentoring", icon: null, level: 94 },
      { name: "FedRAMP Security Compliance", icon: null, level: 82 },
    ],
  },
];

const SkillBar = ({ name, icon, level, tag, color }) => (
  <div style={{ marginBottom: "16px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {icon && <span style={{ fontSize: "15px", color, opacity: 0.9 }}>{icon}</span>}
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#e2e8f0",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {name}
        </span>
        {tag && (
          <span
            style={{
              fontSize: "10px",
              padding: "2px 6px",
              background: `${color}20`,
              color,
              borderRadius: "4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <span
        style={{
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          color: "#64748b",
          fontWeight: 600,
        }}
      >
        {level}%
      </span>
    </div>
    <div
      style={{
        height: "4px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "100px",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        style={{
          height: "100%",
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          borderRadius: "100px",
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "Languages", "Backend", "Cloud", "Networking", "Databases"];

  const filteredGroups =
    activeFilter === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeFilter);

  return (
    <section
      id="skills"
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
            04. TECHNICAL ARSENAL
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
          Skills & Technical Domain
        </h2>
        <p style={{ marginTop: "12px", fontSize: "16px", color: "#64748b", maxWidth: "550px" }}>
          Core languages, frameworks, cloud services, and protocols I leverage daily for mission-critical systems.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "12px",
          marginBottom: "40px",
          scrollbarWidth: "none",
        }}
      >
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: "9px 18px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              border: activeFilter === cat ? "1px solid rgba(99,102,241,0.5)" : "1px solid rgba(255,255,255,0.06)",
              background: activeFilter === cat ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.02)",
              color: activeFilter === cat ? "#fff" : "#64748b",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Groups Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
        className="skills-grid"
      >
        {filteredGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ borderColor: `${group.color}50` }}
            style={{
              padding: "28px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: `${group.color}15`,
                  border: `1px solid ${group.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: group.color,
                }}
              >
                {group.icon}
              </div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#cbd5e1",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {group.label}
              </h3>
            </div>

            {group.skills.map((skill, j) => (
              <SkillBar key={j} {...skill} color={group.color} />
            ))}
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
