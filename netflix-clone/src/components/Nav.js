import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", function () {
        setTimeout(500);
      });
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <Link to="/home">
        <button className="nav-button-3">Home</button>
      </Link>

      <Link to="/films">
        <button className="nav-button">Films</button>
      </Link>

      <Link to="/tv-series">
        <button className="nav-button-2">Tv-Series</button>
      </Link>
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
