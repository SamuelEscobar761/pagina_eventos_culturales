import React from "react";

function HamburgerButton(props) {
  return (
    <button className="hamburger-button" onClick={() => setOpen(!open)}>
      <div className={open ? "hamburger-line open" : "hamburger-line"}></div>
      <div className={open ? "hamburger-line open" : "hamburger-line"}></div>
      <div className={open ? "hamburger-line open" : "hamburger-line"}></div>
    </button>
  );
}

export default HamburgerButton;
