import React, { useState } from "react";
import "./Header.css";
import log from "../images/log.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking a section link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={log} alt="Logo" className="lit" />

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Overlay menu */}
      <div className={`overlay ${menuOpen ? "open" : ""}`}>
        <nav>
          <ul className="nav-list">
            <div className="logo" onClick={() => scrollToSection("home")}>
              Home
            </div>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
