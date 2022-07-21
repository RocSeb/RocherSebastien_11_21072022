import React, { useState } from "react";
import "../Dropdown.css";

export default function DropdownTxt(props) {
  const localData = {
    label: props.label,
    content: props.content
  }
  
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown" onClick={(e) => setIsActive(!isActive)}>
      <div className="dropdown-container">
        <span>{localData.label}</span>
        {isActive &&(
          <span className="arrow-down">&lt;</span>
        )}
        {!isActive && (
          <span className="arrow-up">&lt;</span>
        )}
      </div>
      {isActive && (
      <div className="dropdown-content">
        <p>{ localData.content }</p>
      </div>
      )}
    </div>
  );
}
