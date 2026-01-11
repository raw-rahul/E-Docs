import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{
      padding: "1rem 2rem",
      background: "#004aad",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>E-Docs</h1>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
        <Link to="/process" style={{ color: "white" }}>Process Exam</Link>
      </div>
    </nav>
  );
};

export default Navbar;
