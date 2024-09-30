import React from "react";
import "./Skills.css";

function Skills({ skill, deleteItem }) {
  return (
    <div className="skill-tag">
      <p className="skill-text" onClick={deleteItem}>{skill}</p>
    </div>
  );
}

export default Skills;