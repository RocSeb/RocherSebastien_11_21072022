import React from "react";

export default function dropdownList() {
  return (
    <div className="dropdown">
      <div className="dropdown-container">
        <span>Liste</span>
        <span className="arrow-up">&lt;</span>
      </div>
      <div className="dropdown-content">
        <ul>
          <li>Liste 1</li>
          <li>Liste 2</li>
          <li>Liste 3</li>
        </ul>
      </div>
    </div>
  );
}