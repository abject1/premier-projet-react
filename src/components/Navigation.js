// IMPORT //
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="flexContainer">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
        <NavLink to="/projects">
          <li>Nos projets</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
