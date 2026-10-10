import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        style={{
          position: "fixed",
          bottom: "80px",
          right: "24px",
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.95)",
          border: "1px solid rgba(99, 102, 241, 0.4)",
          borderRadius: "12px",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#fff",
          fontSize: "14px",
          fontFamily: "'JetBrains Mono', monospace",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(99, 102, 241, 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <FaCheckCircle className="text-emerald-400" size={18} />
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
