// src/components/Footer.js
import React from "react";
import "../CSS/headerFooter.css"; // Importe o arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
