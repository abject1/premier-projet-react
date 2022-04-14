import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="header">
      <img src="./assets/logo-infini-ligne.png" alt="logo infini ligne" />
      <NavLink to="/">
        <h1 id="title">Infini Ligne</h1>
      </NavLink>
    </div>
  );
};

export default Logo;
