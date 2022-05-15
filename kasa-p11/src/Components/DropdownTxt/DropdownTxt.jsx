import React from "react";

export default function DropdownTxt(props) {
  const localData = {
    toggle: false,
    label: props.label,
    content: props.content
  }
  console.log(localData.label, "<==text")
  return (
    <div className="dropdown">
      <div className="dropdown-container">
        <span>{localData.label}</span>
        <span className="arrow-up">&lt;</span>
      </div>
      <div className="dropdown-content">
        <p>{ localData.content }</p>
      </div>
    </div>
  );
}
