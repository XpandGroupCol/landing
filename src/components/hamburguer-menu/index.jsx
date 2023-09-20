// HamburguesaMenu.js

import React, { useState } from "react";

const HamburguerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Botón Hamburguesa */}
      <div
        className={`hamburguesa-icon ${menuOpen ? "open" : ""} cursor-pointer`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        {/* Contenido del menú */}
        {/* ... (tu contenido del menú) ... */}
      </div>
    </div>
  );
};

export default HamburguerMenu;
