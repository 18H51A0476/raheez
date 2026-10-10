import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = ({ onToast }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammedraheez3@gmail.com");
    if (onToast) onToast("Email copied to clipboard!");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10, 10, 15, 0.88)" : "rgba(10, 10, 15, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.15)" : "1px solid rgba(255,255,255,0.03)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <motion.a href="#" style={{ textDecoration: "none" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: "15px",
                color: "#fff",
                boxShadow: "0 0 20px rgba(99,102,241,0.5)",
              }}
            >
              MR
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#f8fafc",
                  letterSpacing: "0.02em",
                }}
              >
                raheez<span style={{ color: "#6366f1" }}>.dev</span>
              </span>
              <span style={{ fontSize: "10px", color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                SWE II @ F5 Networks
              </span>
            </div>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }} className="hidden-mobile">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: isActive ? "#fff" : "#94a3b8",
                  background: isActive ? "rgba(99,102,241,0.15)" : "transparent",
                  border: isActive ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
              </motion.a>
            );
          })}

          <motion.a
            href="/RaheezResume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginLeft: "12px",
              padding: "9px 20px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
              letterSpacing: "0.03em",
              fontFamily: "'JetBrains Mono', monospace",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <FaFileAlt size={13} />
            <span>Resume ↗</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#f8fafc",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(10, 10, 15, 0.97)",
              borderTop: "1px solid rgba(99, 102, 241, 0.2)",
              backdropFilter: "blur(20px)",
              padding: "20px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "12px 16px",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: isActive ? "#6366f1" : "#cbd5e1",
                    borderRadius: "10px",
                    background: isActive ? "rgba(99,102,241,0.1)" : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ fontSize: "14px", opacity: 0.5 }}>→</span>
                </a>
              );
            })}

            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button
                onClick={() => {
                  handleCopyEmail();
                  setMenuOpen(false);
                }}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#cbd5e1",
                  fontWeight: 600,
                  fontSize: "13px",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <FaEnvelope size={14} />
                <span>Copy Email</span>
              </button>

              <a
                href="/RaheezResume.pdf"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  borderRadius: "10px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "13px",
                  fontFamily: "'JetBrains Mono', monospace",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <FaFileAlt size={13} />
                <span>Resume ↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
