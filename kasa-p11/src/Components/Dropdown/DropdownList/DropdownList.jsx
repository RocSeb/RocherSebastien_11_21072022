import React, { useState } from "react";
import "../Dropdown.css";

export default function DropdownList(props) {
  const localData = {
    label: props.label,
    content: props.content
  }

  const Equipments = localData.content.map(getEquipment => {
    return <li key={getEquipment}>{getEquipment}</li>
  })

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
        <ul>
          {Equipments}
        </ul>
      </div> )}
    </div>
  );
}