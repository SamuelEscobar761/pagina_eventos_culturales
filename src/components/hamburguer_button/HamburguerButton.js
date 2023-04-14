import React from "react";

function HamburgerButton(props) {
  return (
    <button className="hamburger-button" onClick={props.onClick}>
      <i className="fas fa-bars"></i>
    </button>
  );
}

export default HamburgerButton;
