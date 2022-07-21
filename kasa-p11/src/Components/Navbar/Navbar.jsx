import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function navbar() {
  return (
    <header>
      <img
        className="logo"
        src="Images/logo.png"
        alt="Logo Kasa"
      />
      <nav className="nav-container">
        <ul>
          <li className="navigation">
            <Link to="/">Accueil</Link>
          </li>
          <li className="navigation">
          <Link to="/About">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
