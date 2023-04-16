import { useState } from 'react';
import './css/style.css';

function HamburguerButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="hamburguer-button" onClick={handleClick}>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
      </button>
      {open && ( // Renderiza los enlaces si el menú está abierto
        <div className="menu-links">
          <a href="#home-page">Inicio</a><br/>
          <a href="#calendar-page">Calendario</a><br/>
          <a href="#enterprises-page">Empresas</a><br/>
          <a href="#contact-page">Contacto</a>
        </div>
      )}
    </div>
    
  );
}
export default HamburguerButton;