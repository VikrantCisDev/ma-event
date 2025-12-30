import React from "react";
import { Container, Row, Col, Form, ListGroup, Image } from "react-bootstrap";
import Guestlist from "../../assets/Images/pt-icon1.png";
import Checklist from "../../assets/Images/pt-icon2.png";
import BudgetCalculator from "../../assets/Images/pt-icon3.png";
import Shortlist from "../../assets/Images/pt-icon4.png";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <section className="mega-menu">
      <h4 className="h5 mega-menu-title mb-2 fw-bold">
        PLANNING TOOLS <span className="fw-normal">(SELECT APPLICABLE)</span>
      </h4>
      <ListGroup className="single-list fw-medium">
        <ListGroup.Item className="d-flex align-items-center gap-2 menu-category-item">
          <div className="menu-icon">
            <Image src={Guestlist} fluid />
          </div>
          <Link to="/event-guest-list">Guestlist</Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-2 menu-category-item">
          <div className="menu-icon">
            <Image src={Checklist} fluid />
          </div>
          <Link to="/event-checklist">
          Checklist
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-2 menu-category-item">
          <div className="menu-icon">
            <Image src={BudgetCalculator} fluid />
          </div>
          <Link to="/budget-calculator">
          Budget Calculator
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-2 menu-category-item">
          <div className="menu-icon">
            <Image src={Shortlist} fluid />
          </div>
          <Link to="/shortlist">Shortlist</Link>
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
};

export default MegaMenu;
