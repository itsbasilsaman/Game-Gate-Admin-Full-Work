import React from "react";
import { Link } from "react-router-dom";

export const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#1C2434",
        color: "#FFFFFF",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
        Welcome to Our Website
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "40px", color: "#A0AEC0" }}>
        You must log in to access the dashboard.
      </p>
      <Link to="/admin/login">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#FFFFFF",
            backgroundColor: "#4299E1",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3182CE")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4299E1")}
        >
          Go to Login
        </button>
      </Link>
    </div>
  );
};