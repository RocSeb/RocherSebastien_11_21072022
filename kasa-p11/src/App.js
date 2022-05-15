import React from "react";
import Galery from "./Components/Galery/Galery.jsx";
import Carousel from "./Components/Carousel/Carousel.jsx";

import "./App.css";

export default function app() {
    return (
      <div className="App">
        <Carousel />
        <Galery />
      </div>
    );
}