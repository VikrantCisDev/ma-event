import React from "react";
import { Col, Row } from "react-bootstrap";
import PlanningToolCard from "../../components/ui/PlanningToolCard";
import Guestlist from "../../assets/Images/pt-icon1.png";
import Checklist from "../../assets/Images/pt-icon2.png";
import BudgetCalculator from "../../assets/Images/pt-icon3.png";
import Shortlist from "../../assets/Images/pt-icon4.png";


const PlanningTools = () => {
  const planningCards = [
    {
      title: "Guestlists",
      icon: Guestlist,
      description:
        "Easily track invitations, RSVPs, and guest info all in one place.",
      button: "Get Started",
      link: "/event-guest-list",
    },
    {
      title: "Checklist",
      icon: Checklist,
      description:
        "Keep track of tasks, deadlines, and event details all in one place.",
      button: "Get Started",
      link: "/event-checklist",
    },
    {
      title: "Budget",
      icon: BudgetCalculator,
      description:
        "Estimate total event costs by comparing different service providers in one place.",
      button: "Get Started",
      link: "/budget-calculator",
    },
    {
      title: "Shortlist",
      icon: Shortlist,
      description:
        "Save favorite vendors, compare options, and decide faster all in one place.",
      button: "Get Started",
      link: "/shortlist",
    },
  ];

  return (
    <section className="my-lg-5 my-3 py-5">
      <div className="custom-container">
        <h1 className="pink-text text-center mb-4">EVENTS MANAGER PLANNING TOOLS</h1>
        <Row className="row-gap-3 px-xxl-5">
          {planningCards.map((card, id) => {
            return (
              <Col lg="3" md="6" key={id}>
                <PlanningToolCard 
                    icon={card.icon} 
                    title={card.title} 
                    description={card.description} 
                    button={card.button} 
                    link={card.link} 
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default PlanningTools;
