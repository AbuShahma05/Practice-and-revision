import React from "react";
import styles from "./Day21.module.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import styled from "styled-components"; 

// 1. Styled Component Example
const StyledButton = styled.button`
  background: #6d28d9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #9333ea;
  }
`;

const Day21 = () => {
  // 2. Inline Styles
  const inlineStyle = {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "20px",
  };

  return (
    <div className="p-6 space-y-6">
      {/* --- CSS Modules --- */}
      <div className={styles.card}>
        <h2 className={styles.title}>CSS Modules</h2>
        <p className={styles.text}>
          This section is styled using <b>CSS Modules</b>. Classes are scoped
          locally, so no conflicts!
        </p>
      </div>

      {/* --- Inline Styles --- */}
      <div style={inlineStyle}>
        <h2>Inline Styles</h2>
        <p>
          These styles are directly written in the component using a
          JavaScript object.
        </p>
      </div>

      {/* --- Tailwind CSS --- */}
      <div className="bg-purple-700 text-white p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Tailwind CSS</h2>
        <p>
          This box uses <b>Tailwind CSS utility classes</b>. Super fast and
          responsive!
        </p>
      </div>

      {/* --- Bootstrap --- */}
      <div className="card text-center mt-4 p-3 shadow">
        <h2 className="card-title">Bootstrap</h2>
        <p className="card-text">
          This is styled with <b>Bootstrap classes</b>. Easy and classic!
        </p>
        <button className="btn btn-primary">Bootstrap Button</button>
      </div>

      {/* --- Styled Components --- */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold mb-4">Styled Components</h2>
        <StyledButton>Click Me</StyledButton>
      </div>
    </div>
  );
};

export default Day21;
