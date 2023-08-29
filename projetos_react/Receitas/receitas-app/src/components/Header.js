// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/headerFooter.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Adicionar Receita</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
