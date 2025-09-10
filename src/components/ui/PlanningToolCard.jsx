import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const PlanningToolCard = ({icon,title,description,button,link}) => {
  return (
    <Card className="text-center border-0 planningToolCard">
      <Card.Body className="bg-transparent py-4">
        <div className="d-flex justify-content-center mb-3 pt-cardIcon">
          <Image src={icon} fluid />
        </div>
        <Card.Title className=" fw-semibold">{title}</Card.Title>
        <Card.Text className=" px-3">
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 py-3">
        <a href={!!link ? link : "#" } className="pt-cardBtn fw-bold px-4">
          {button}
        </a>
      </Card.Footer>
    </Card>
  )
}

export default PlanningToolCard