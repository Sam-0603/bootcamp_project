import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/image.png" alt="Brain" /> BrainRush
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#tests">Tests</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="./src/pages/signup"><span className="material-icons">person</span></a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Ace Your Exams with <span>BrainRush!</span></h1>
        <p>Attempt tests, view instant results, and improve your performance.</p>
        <div className="buttons">
          <button className="primary">Start Testing</button>
          <button className="secondary" onClick={() => navigate("PopularTests")}>Browse Tests</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
