import React, { useState, useEffect } from "react";
import "./Nav.css";
import netflixLogo from "./imgs/Netflix-Logo.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflixLogo} alt="Netflix Logo" />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix User Avatar"
      />
    </div>
  );
};

export default Nav;
