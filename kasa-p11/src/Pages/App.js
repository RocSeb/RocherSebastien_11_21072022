import React from "react";
import Galery from "../Components/Galery/Galery.jsx";

import "./css/App.css";

export default function app() {
    return (
      <div className="App">
        <div className="image-container">
          <img src="../Images/Background.png" alt="img1" />
          <div className="text-cover">
            <span>Chez vous, partout et ailleurs</span>
          </div>
        </div>
        <Galery />
      </div>
    );
}