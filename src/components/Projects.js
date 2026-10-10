import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaServer, FaCloud, FaNetworkWired, FaMemory, FaCode, FaTimes, FaCheck } from "react-icons/fa";

const projectsData = [
  {
    id: "bfd-bgp-controller",
    category: "Distributed Systems",
    icon: <FaNetworkWired className="text-indigo-400" size={24} />,
    badge: "F5 XC Production",
    title: "High-Speed BFD / eBGP Control Plane Engine",
    subtitle: "Distributed Cloud Multi-Cloud Networking Engine",
    metrics: [
      { label: "Convergence Speed", val: "180s → 3s", highlight: true },
      { label: "Sites Connected", val: "100s of CEs" },
      { label: "Uptime Target", val: "99.999%" },
    ],
    description:
      "Designed & engineered Go microservices driving control plane and data plane route convergence across hybrid and multi-cloud topologies. Implemented Bidirectional Forwarding Detection (BFD) over eBGP for immediate link-failure recovery.",
    tech: ["Go", "gRPC", "BGP / BFD", "FRRouting", "Kubernetes", "FedRAMP"],
    details: {
      overview:
        "At F5 Distributed Cloud (XC), connecting enterprise workloads across multi-cloud environments (AWS, Azure, On-Prem) requires ultra-fast routing convergence. Standard eBGP timers take up to 180 seconds to detect route failures.",
      architecture: [
        "Built Go control plane daemons interfacing with FRRouting (FRR) protocol stack.",
        "Integrated BFD (Bidirectional Forwarding Detection) sub-second keepalive probing over single-hop and multi-hop eBGP peerings.",
        "Engineered diagnostic telemetry to detect memory pressure and packet loss under heavy BGP churn.",
        "Led FRR compliance upgrade from 6.x to 8.x for FedRAMP enterprise security standards.",
      ],
      codeSnippet: `// BFD Session Controller Handler (Go)
package controller

import (
	"context"
	"fmt"
	"time"
)

type BFDConfig struct {
	PeerIP        string        \`json:"peer_ip"\`
	MinTxInterval time.Duration \`json:"min_tx_ms"\`
	MinRxInterval time.Duration \`json:"min_rx_ms"\`
	DetectMultiplier uint8       \`json:"detect_mult"\`
}

func (c *RoutingController) ReconcileBFDSession(ctx context.Context, cfg BFDConfig) error {
	c.mu.Lock()
	defer c.mu.Unlock()

	// Fast link failure detection: 300ms interval x 3 multiplier = 900ms detection
	session, err := c.frrClient.GetBFDSession(cfg.PeerIP)
	if err != nil || session.State == "DOWN" {
		c.logger.Warn("BFD Peer DOWN, triggering rapid BGP failover", "peer", cfg.PeerIP)
		return c.triggerBGPFastReroute(ctx, cfg.PeerIP)
	}
	return nil
}`,
    },
  },
  {
    id: "aws-cloud-platform",
    category: "Cloud Platform",
    icon: <FaCloud className="text-cyan-400" size={24} />,
    badge: "AWS Infrastructure",
    title: "Multi-Region Cloud Platform & Asset Pipeline",
    subtitle: "ChaturaITLearnings & CodeChatura Enterprise Platform",
    metrics: [
      { label: "Cost Reduction", val: "90% Ops Savings", highlight: true },
      { label: "API Latency Boost", val: "80% Faster" },
      { label: "Active Users", val: "Thousands" },
    ],
    description:
      "Independently architected and deployed two full production platforms on AWS from scratch. Migrated enterprise clients off vendor tools to custom cloud infra, reducing operational costs by 90%.",
    tech: ["AWS S3", "AWS SQS", "AWS SES", "Node.js", "CloudFormation", "GitHub Actions"],
    details: {
      overview:
        "Built a complete cloud infrastructure solution hosting high-concurrency coding assessments and learning platforms. Replaced third-party vendor platforms (HackerEarth) with an in-house AWS architecture.",
      architecture: [
        "Architected S3-backed caching layers for static assets & dynamic query outputs, dropping API latency by 80%.",
        "Configured AWS SQS queues with S3 payload pointers for high-throughput event processing and transactional email delivery via SES.",
        "Automated multi-environment IaC deployments with AWS CloudFormation templates integrated into GitHub Actions CI/CD pipelines.",
      ],
      codeSnippet: `// AWS SQS / S3 Event Pipeline Handler (Node.js)
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs");

async function processAssessmentQueue() {
  const sqs = new SQSClient({ region: "us-east-1" });
  const messages = await sqs.send(new ReceiveMessageCommand({
    QueueUrl: process.env.ASSESSMENT_QUEUE_URL,
    MaxNumberOfMessages: 10,
    WaitTimeSeconds: 20
  }));

  for (const msg of messages.Messages || []) {
    const payload = JSON.parse(msg.Body);
    // Process S3 cached assessment bundle
    await executeSandboxJob(payload.s3Key);
  }
}`,
    },
  },
  {
    id: "sandbox-execution-engine",
    category: "Real-Time Systems",
    icon: <FaServer className="text-purple-400" size={24} />,
    badge: "Distributed Engine",
    title: "Isolated Real-Time Code Execution Sandbox",
    subtitle: "High-Throughput Code Execution & Grading Platform",
    metrics: [
      { label: "Execution Speed", val: "<50ms Latency" },
      { label: "Developers Trained", val: "2,000+ Users", highlight: true },
      { label: "Concurrent Sandboxes", val: "500+ Nodes" },
    ],
    description:
      "Engineered a secure containerized code execution service supporting multi-language compilation (Go, Python, Java, C++) with strict memory/CPU limits and real-time WebSocket feedback.",
    tech: ["Node.js", "Docker Sandboxes", "Redis", "WebSockets", "Linux Cgroups"],
    details: {
      overview:
        "To serve live coding workshops and student evaluations safely, code submitted by users must run in ephemeral, isolated sandboxes without risking host server security or resource exhaustion.",
      architecture: [
        "Implemented Docker container sandboxing with memory limits (cgroups), CPU time quotas, and disabled network access.",
        "Integrated Redis pub/sub queues for distributed task scheduling across worker nodes.",
        "Provided live streamed stdout/stderr output directly to user browser web sessions over WebSockets.",
      ],
      codeSnippet: `// Docker Ephemeral Sandbox Execution (Node.js)
const { exec } = require('child_process');

function runIsolatedCode(language, codeBuffer, timeoutMs = 3000) {
  return new Promise((resolve, reject) => {
    // Isolated container run with restricted cgroups & no network
    const dockerCmd = \`docker run --rm \\
      --net=none \\
      --memory="128m" \\
      --cpus="0.5" \\
      --read-only \\
      sandbox-runner:\${language} timeout \${timeoutMs / 1000}s execute\`;

    exec(dockerCmd, { timeout: timeoutMs + 1000 }, (err, stdout, stderr) => {
      if (err && err.killed) return resolve({ status: "TIMEOUT", output: "Execution timed out" });
      resolve({ status: "SUCCESS", stdout, stderr });
    });
  });
}`,
    },
  },
  {
    id: "k8s-oom-diagnostics",
    category: "Reliability & DevOps",
    icon: <FaMemory className="text-emerald-400" size={24} />,
    badge: "Cloud Reliability",
    title: "Kubernetes OOM Diagnostics & Memory Forecasting",
    subtitle: "Automated Container Reliability & Observability Tool",
    metrics: [
      { label: "Failure Alerting", val: "Real-time" },
      { label: "RAM Savings", val: "30% Optimized", highlight: true },
      { label: "OOM Downtime", val: "Zero Impact" },
    ],
    description:
      "Built diagnostic automation for Kubernetes workloads detecting container memory limits, analyzing OOM kill patterns, and forecasting future memory exhaustion before crashes occur.",
    tech: ["Go", "Kubernetes API", "Prometheus", "Linux Procfs", "Grafana"],
    details: {
      overview:
        "Unpredictable Out-Of-Memory (OOM) kills in Kubernetes clusters can disrupt critical control plane microservices. Built a pro-active diagnostic system that predicts memory exhaustion.",
      architecture: [
        "Scraped cgroup memory usage trends via Kubernetes cAdvisor API.",
        "Applied linear regression trends over 15-minute sliding windows to project OOM failure events.",
        "Triggered automated pod scale-out or memory limit adjustments via Kubernetes custom controllers.",
      ],
      codeSnippet: `// Memory Spike Forecasting Controller (Go)
package observability

func AnalyzeMemoryTrend(samples []MetricSample, limitBytes int64) (willOOM bool, minutesLeft float64) {
	if len(samples) < 5 {
		return false, -1
	}
	slope := calculateGrowthSlope(samples) // bytes per second
	current := samples[len(samples)-1].Value

	if slope > 0 {
		remainingBytes := float64(limitBytes - current)
		secondsToOOM := remainingBytes / slope
		if secondsToOOM < 900 { // Less than 15 mins remaining
			return true, secondsToOOM / 60.0
		}
	}
	return false, -1
}`,
    },
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ["All", "Distributed Systems", "Cloud Platform", "Real-Time Systems", "Reliability & DevOps"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto", position: "relative", width: "100%" }}
      className="mobile-section-padding"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
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
        style={{ marginBottom: "40px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6366f1", letterSpacing: "0.1em" }}>
            03. FEATURED ARCHITECTURE & PROJECTS
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(99,102,241,0.3), transparent)", maxWidth: "200px" }} />
        </div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#e2e8f0", lineHeight: 1.1 }}>
          High-Impact Systems Built
        </h2>
        <p style={{ marginTop: "12px", fontSize: "16px", color: "#64748b", maxWidth: "600px", lineHeight: 1.6 }}>
          Production distributed engines, AWS cloud infrastructure, and low-latency systems engineered for high reliability and scale.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "12px",
          marginBottom: "36px",
          scrollbarWidth: "none",
          maxWidth: "100%",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "9px 18px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              border: activeCategory === cat ? "1px solid rgba(99,102,241,0.5)" : "1px solid rgba(255,255,255,0.06)",
              background: activeCategory === cat ? "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))" : "rgba(255,255,255,0.02)",
              color: activeCategory === cat ? "#fff" : "#64748b",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          width: "100%",
        }}
        className="projects-grid"
      >
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
            className="project-card-padding"
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #6366f1, #8b5cf6, transparent)",
              }}
            />

            <div>
              {/* Header info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {project.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94a3b8",
                      fontWeight: 600,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "#e2e8f0", marginBottom: "6px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#6366f1", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", marginBottom: "16px" }}>
                {project.subtitle}
              </p>

              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, marginBottom: "20px" }}>
                {project.description}
              </p>

              {/* Metrics Highlights Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "6px",
                  background: "rgba(10,10,15,0.6)",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.04)",
                  marginBottom: "20px",
                  width: "100%",
                }}
                className="metrics-bar-mobile"
              >
                {project.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: m.highlight ? "#38bdf8" : "#e2e8f0",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {m.val}
                    </div>
                    <div style={{ fontSize: "10px", color: "#475569", fontWeight: 500, marginTop: "2px" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Stack */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.18)",
                      borderRadius: "6px",
                      fontSize: "11px",
                      color: "#a5b4fc",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* View Specs Trigger Button */}
              <motion.button
                onClick={() => {
                  setSelectedProject(project);
                  setActiveTab("overview");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "#fff",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span>View Specs & Code</span>
                <span style={{ fontSize: "14px" }}>→</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              background: "rgba(5, 5, 10, 0.88)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                background: "#0d0e15",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: "20px",
                maxWidth: "760px",
                width: "100%",
                maxHeight: "88vh",
                overflowY: "auto",
                padding: "24px",
                position: "relative",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FaTimes size={16} />
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "rgba(99,102,241,0.15)",
                    color: "#a5b4fc",
                    border: "1px solid rgba(99,102,241,0.3)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {selectedProject.badge}
                </span>
                <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                  {selectedProject.category}
                </span>
              </div>

              <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#e2e8f0", marginBottom: "4px" }}>{selectedProject.title}</h2>
              <p style={{ fontSize: "13px", color: "#6366f1", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", marginBottom: "20px" }}>
                {selectedProject.subtitle}
              </p>

              {/* Tabs */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: "10px",
                  marginBottom: "20px",
                  overflowX: "auto",
                }}
              >
                {[
                  { id: "overview", label: "Overview & Impact" },
                  { id: "architecture", label: "Highlights" },
                  { id: "code", label: "Sample Code" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: "'JetBrains Mono', monospace",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      background: activeTab === tab.id ? "rgba(99,102,241,0.2)" : "transparent",
                      border: activeTab === tab.id ? "1px solid rgba(99,102,241,0.4)" : "1px solid transparent",
                      color: activeTab === tab.id ? "#fff" : "#64748b",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div>
                  <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
                    OVERVIEW
                  </h4>
                  <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.7, marginBottom: "20px" }}>
                    {selectedProject.details.overview}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "20px" }}>
                    {selectedProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "12px",
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: "10px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: "15px", fontWeight: 800, color: m.highlight ? "#38bdf8" : "#818cf8", fontFamily: "'JetBrains Mono', monospace" }}>
                          {m.val}
                        </div>
                        <div style={{ fontSize: "10px", color: "#64748b", marginTop: "2px" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div>
                  <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", marginBottom: "14px", fontFamily: "'JetBrains Mono', monospace" }}>
                    TECHNICAL IMPLEMENTATION
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {selectedProject.details.architecture.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "#6366f1", fontWeight: 700, marginTop: "2px" }}>⚡</span>
                        <span style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "code" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                      Production Code Snippet
                    </span>
                    <button
                      onClick={() => handleCopyCode(selectedProject.details.codeSnippet)}
                      style={{
                        padding: "5px 10px",
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.3)",
                        color: "#a5b4fc",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontFamily: "'JetBrains Mono', monospace",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {copiedCode ? <FaCheck className="text-green-400" /> : <FaCode />}
                      <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                    </button>
                  </div>

                  <pre
                    style={{
                      background: "#050608",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "16px",
                      borderRadius: "10px",
                      overflowX: "auto",
                      fontSize: "12px",
                      color: "#38bdf8",
                      fontFamily: "'JetBrains Mono', monospace",
                      lineHeight: 1.5,
                    }}
                  >
                    <code>{selectedProject.details.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .project-card-padding {
          padding: 28px;
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .mobile-section-padding { padding: 60px 16px !important; }
          .project-card-padding { padding: 20px 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
