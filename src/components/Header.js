import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        background: scrolled
          ? "rgba(10,10,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "18px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* Logo */}
        <motion.a
          href="#"
          style={{ textDecoration: "none" }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "16px",
              color: "#fff",
              boxShadow: "0 0 20px rgba(99,102,241,0.4)",
            }}>MR</div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: "15px",
              color: "#e2e8f0",
              letterSpacing: "0.02em",
            }}>raheez.dev</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -1 }}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#94a3b8",
                borderRadius: "6px",
                transition: "color 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={e => e.target.style.color = "#e2e8f0"}
              onMouseLeave={e => e.target.style.color = "#94a3b8"}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/RaheezResume.pdf"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: "8px",
              padding: "9px 20px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
              letterSpacing: "0.03em",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Resume ↗
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e2e8f0",
            fontSize: "22px",
            padding: "4px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10,10,15,0.97)",
              borderTop: "1px solid rgba(99,102,241,0.15)",
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 0",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#94a3b8",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/RaheezResume.pdf"
              target="_blank"
              style={{
                marginTop: "12px",
                padding: "12px 20px",
                textAlign: "center",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
