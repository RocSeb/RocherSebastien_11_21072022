import React, { useState } from "react";
import data from "../../data/data.json";
import "./Galery.css";

export default function Galery() {
  const [cardTitle, setCardTitle] = useState(data);
  console.log(cardTitle, "<== cardTitle");
  const elements = cardTitle.map(function(getTitle) {
    console.log(getTitle.cover, "<==Pictures");
    return(
    <div className="galery-card" key={getTitle.id}>
      <img src={getTitle.cover} alt="appartement" />
      <span>{getTitle.title}</span>
    </div>
    )
  })
  return (
    <div className="galery-container">
      {elements}
    </div>
  );
}
