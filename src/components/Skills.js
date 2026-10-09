import { motion } from "framer-motion";
import {
  SiGo, SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiSpringboot, SiMongodb, SiMysql,
  SiDocker, SiKubernetes, SiAmazonwebservices, SiGithubactions,
  SiGit, SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillGroups = [
  {
    label: "Languages",
    color: "#6366f1",
    skills: [
      { name: "Go", icon: <SiGo />, level: 90 },
      { name: "Java", icon: <FaJava />, level: 88 },
      { name: "Python", icon: <SiPython />, level: 80 },
      { name: "JavaScript", icon: <SiJavascript />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 78 },
      { name: "C++", icon: <SiCplusplus />, level: 72 },
      { name: "SQL", icon: null, level: 82 },
    ],
  },
  {
    label: "Backend & Distributed Systems",
    color: "#8b5cf6",
    skills: [
      { name: "Microservices", icon: null, level: 92 },
      { name: "gRPC", icon: null, level: 88 },
      { name: "REST APIs", icon: null, level: 90 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 82 },
      { name: "Node.js", icon: <SiNodedotjs />, level: 84 },
      { name: "Control Plane", icon: null, level: 88 },
      { name: "System Design", icon: null, level: 86 },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#06b6d4",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices />, level: 88 },
      { name: "Kubernetes", icon: <SiKubernetes />, level: 84 },
      { name: "Docker", icon: <SiDocker />, level: 86 },
      { name: "CI/CD", icon: null, level: 82 },
      { name: "GitHub Actions", icon: <SiGithubactions />, level: 80 },
      { name: "Linux", icon: <SiLinux />, level: 85 },
      { name: "Git", icon: <SiGit />, level: 90 },
    ],
  },
  {
    label: "Networking & Reliability",
    color: "#f59e0b",
    skills: [
      { name: "BGP", icon: null, level: 88 },
      { name: "BFD", icon: null, level: 85 },
      { name: "IPSec VPN", icon: null, level: 82 },
      { name: "NAT / IPv4 / IPv6", icon: null, level: 80 },
      { name: "Wireshark", icon: null, level: 78 },
      { name: "On-Call Ops", icon: null, level: 90 },
      { name: "Root Cause Analysis", icon: null, level: 88 },
    ],
  },
  {
    label: "Databases",
    color: "#10b981",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 82 },
      { name: "MySQL", icon: <SiMysql />, level: 80 },
      { name: "NoSQL", icon: null, level: 78 },
      { name: "Data Modeling", icon: null, level: 76 },
    ],
  },
  {
    label: "Practices",
    color: "#ec4899",
    skills: [
      { name: "DSA", icon: null, level: 85 },
      { name: "Agile / Scrum", icon: null, level: 88 },
      { name: "Tech Mentoring", icon: null, level: 92 },
      { name: "FedRAMP Compliance", icon: null, level: 78 },
    ],
  },
];

const SkillBar = ({ name, icon, level, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    style={{ marginBottom: "14px" }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {icon && (
          <span style={{ fontSize: "15px", color, opacity: 0.8 }}>{icon}</span>
        )}
        <span style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#94a3b8",
          fontFamily: "'JetBrains Mono', monospace",
        }}>{name}</span>
      </div>
      <span style={{
        fontSize: "11px",
        fontFamily: "'JetBrains Mono', monospace",
        color: "#374151",
      }}>{level}%</span>
    </div>
    <div style={{
      height: "3px",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "100px",
      overflow: "hidden",
    }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{
          height: "100%",
          background: `linear-gradient(to right, ${color}, ${color}99)`,
          borderRadius: "100px",
        }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
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
        style={{ marginBottom: "64px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "#6366f1",
            letterSpacing: "0.1em",
          }}>03. SKILLS</span>
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
        }}>Technical Arsenal</h2>
        <p style={{
          marginTop: "12px",
          fontSize: "15px",
          color: "#475569",
          maxWidth: "500px",
        }}>
          Technologies I use to build scalable, production-grade systems.
        </p>
      </motion.div>

      {/* Skill Groups Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      }} className="skills-grid">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ borderColor: `${group.color}40` }}
            style={{
              padding: "28px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              transition: "border-color 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div style={{
                width: "6px",
                height: "24px",
                background: group.color,
                borderRadius: "3px",
                boxShadow: `0 0 10px ${group.color}80`,
              }} />
              <h3 style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
              }}>{group.label}</h3>
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
