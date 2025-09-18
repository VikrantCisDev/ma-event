import React from "react";
import { Accordion } from "react-bootstrap";



const TogglePanel = ({data}) => {
  return (
    <Accordion defaultActiveKey="0" flush className="togglePanel">
      {data.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default TogglePanel;
