import React from "react";
import { Dropdown } from "react-bootstrap";

function Topic( { handleSelect, selectCategory } ) {

  return (
    <Dropdown onSelect={(eventKey) => handleSelect(eventKey)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectCategory}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="ALL">All</Dropdown.Item>
        <Dropdown.Item eventKey="Design">Design</Dropdown.Item>
        <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
        <Dropdown.Item eventKey="Frontend">Frontend</Dropdown.Item>
        <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Topic;