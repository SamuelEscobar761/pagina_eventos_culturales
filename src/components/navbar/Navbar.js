import React, { useState } from 'react';
import "./css/style.css"

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
        <div className="logo">Mi Logo</div>
        <ul>
            <li className="nav-component"><a href="#home">Inicio</a></li>
            <li className="nav-component"><a href="#calendar">Calendario</a></li>
            <li className="nav-component"><a href="#enterprises">Empresas</a></li>
            <li className="nav-component"><a href="#contact">Contacto</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
