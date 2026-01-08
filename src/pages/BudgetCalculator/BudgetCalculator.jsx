import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "./BudgetCalculator.css";
import IconWrapper from "../../components/ui/IconWrapper";
import ToolCardsWrap from "../../components/ui/ToolCardsWrap";

const BudgetCalculator = () => {
  const [budget, setBudget] = useState("");
  const [guests, setGuests] = useState("Undecided");
  const [day, setDay] = useState("Undecided");
  const [season, setSeason] = useState("Undecided");
  const [year, setYear] = useState("Undecided");

  const [options, setOptions] = useState({
    videographer: false,
    band: false,
    entertainment: false,
    planner: false,
    insurance: false,
    stationery: false,
  });

  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderButtons = (items, value, setValue, name) => (
    <ToggleButtonGroup
      type="radio"
      name={name}
      value={value}
      onChange={(val) => setValue(val)}
      className="d-flex flex-wrap gap-2 budget-btnwrap"
    >
      {items.map((item) => (
        <ToggleButton
          key={item}
          id={`${name}-${item}`}
          value={item}
          variant={value === item ? "primary" : "outline-secondary"}
        >
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );

  return (
    <>
    
    <section className="py-5">
      <Container className="budget-calculator">
      <ToolCardsWrap />
        <h2 className="pink-text fw-medium mb-1">Budget Calculator</h2>
        <h4 className="mb-2">Let’s calculate your Event budget!</h4>
        <p className="text-muted">
          Events Manager powerful algorithms will allocate your budget based on
          your preferences and thousands <br className="d-lg-block d-none" /> of previous couples’ actual budgets.
          Are you ready?
        </p>

        {/* Budget Input */}
        <Form.Group className="mb-4">
          <Form.Label className="pink-text fw-medium">
            Enter your target event budget
          </Form.Label>
          <div className="d-flex align-items-center gap-1 est_budget_input">
            <strong>R</strong>
            <Form.Control
              type="text"
              placeholder="Your estimated total budget goes here"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </Form.Group>

        {/* Guests */}
        <div className="section_day">
          <h5>
            How many guests do you estimate for your wedding breakfast?
          </h5>
          <p className="text-muted">
            (Hint: More guests = higher catering, stationery and other costs)
          </p>
          {renderButtons(
            [
              "Undecided",
              "Less than 50",
              "50 - 99",
              "100 - 150",
              "151 - 250",
              "More than 250",
            ],
            guests,
            setGuests,
            "guests"
          )}
        </div>

        {/* Day */}
        <div className="section_day">
          <h5>Which day of the week is your event?</h5>
          <p className="text-muted">
            (Hint: Non-Saturdays = lower prices from suppliers)
          </p>
          {renderButtons(
            ["Undecided", "Monday-Thursday", "Friday", "Saturday", "Sunday"],
            day,
            setDay,
            "day"
          )}
        </div>

        {/* Season */}
        <div className="section_day">
          <h5>Which time of year is your event?</h5>
          <p className="text-muted">
            (Hint: Off-peak months = lower prices)
          </p>
          {renderButtons(
            [
              "Undecided",
              "Peak (May to Sep)",
              "Off-Peak (Other Months)",
              "Christmas Season",
            ],
            season,
            setSeason,
            "season"
          )}
        </div>

        {/* Year */}
        <div className="section_day">
          <h5 className="mb-2">In which year is your event?</h5>
          {renderButtons(
            ["Undecided", "2020", "2021", "2022", "2022 And Later"],
            year,
            setYear,
            "year"
          )}
        </div>

        {/* Optional Categories */}
        <div className="section_day">
          <h5 className="mb-2">
            Select optional categories to INCLUDE in your event budget
            <br className="d-lg-block d-none" />
             otherwise they’re excluded:
          </h5>
          <Row className="budget-checkboxes">
            <Col md={6}>
              <Form.Check
                label="Videographer"
                checked={options.videographer}
                onChange={() => toggleOption("videographer")}
              />
              <Form.Check
                label="Non-Music Entertainment"
                checked={options.entertainment}
                onChange={() => toggleOption("entertainment")}
              />
              <Form.Check
                label="Event Insurance"
                checked={options.insurance}
                onChange={() => toggleOption("insurance")}
              />
            </Col>
            <Col md={6}>
              <Form.Check
                label="Live Band"
                checked={options.band}
                onChange={() => toggleOption("band")}
              />
              <Form.Check
                label="Planner / Toastmaster"
                checked={options.planner}
                onChange={() => toggleOption("planner")}
              />
              <Form.Check
                label="Paper Stationery & Invites"
                checked={options.stationery}
                onChange={() => toggleOption("stationery")}
              />
            </Col>
          </Row>
        </div>

        {/* CTA */}
        <Button className="calculate-btn btn-purple dark-btn mt-3 rounded-2 fw-medium">
          CALCULATE MY WEDDING BUDGET
        </Button>
      </Container>
    </section>
    <IconWrapper />
    </>
  );
};

export default BudgetCalculator;
