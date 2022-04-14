// IMPORT //
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Styles.scss";

// Initiation de la boucle de base pour envoyer le contenue JS dans la boucle ROOT du HTML

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
