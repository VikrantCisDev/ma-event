import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { FaEdit, FaFileAlt } from "react-icons/fa";
import "./EventBudget.css";

const initialItems = [
  { id: 1, title: "Music", estimate: 349, booked: 0 },
  { id: 2, title: "Photographer", estimate: 349, booked: 0 },
  { id: 3, title: "Videographer", estimate: 349, booked: 0 },
  { id: 4, title: "Catering (Food and Drink)", estimate: 349, booked: 0 },
  { id: 5, title: "Entertainment", estimate: 1200, booked: 0 },
];

export default function EventBudget() {
  const [items, setItems] = useState(initialItems);
  const [openId, setOpenId] = useState(null);
  const [openIdField, setOpenIdField] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
    setOpenIdField(null);
  };

  const toggleField = (id) => {
    setOpenIdField(openIdField === id ? null : id);
    setOpenId(null);
  };

  return (
    <section className="event-budget-section py-5">
      <Container className="event-budget">
        <Row className="mb-3 align-items-center">
          <Col>
            <h3 className="pink-text fw-medium mb-3">Our Event Budget</h3>
            <p className="pink-text mb-0">Venue & Suppliers</p>
          </Col>
          <Col className="text-end">
            <Button className="btn-purple dark-btn ">Reset Budget</Button>
          </Col>
        </Row>

        <Card className="summary-bar mb-4">
          <Card.Body>
            <Row>
              <Col md={4}>
                <strong>Target Budget:</strong>
                <br />
                R10,000 <span>Under budget: R4,000</span>
              </Col>
              <Col md={3}>
                <strong>Total estimate:</strong>
                <br />
                R3,000
              </Col>
              <Col md={3}>
                <strong>Total booked:</strong>
                <br />
                R0
              </Col>
              <Col md={2}></Col>
            </Row>
          </Card.Body>
        </Card>

        {items.map((item) => (
          <Card key={item.id} className="budget-item mb-3">
            <Card.Body>
              <Row className="align-items-center ">
                <Col md={4}>
                  <h5>{item.title}</h5>
                  <small className="text-muted">SEARCH VENDOR</small>
                </Col>
                <Col md={3}>R{item.estimate}</Col>
                <Col md={3}>R{item.booked}</Col>
                <Col md={2} className="text-end icons">
                  <FaFileAlt onClick={() => toggleField(item.id)} />
                  <FaEdit onClick={() => toggle(item.id)} />
                </Col>
              </Row>

              {(openId === item.id || openIdField === item.id) && (
                <div className="pt-2 mt-1">
                  {openId === item.id && (
                    <div className="expand-area ">
                      <Form className="d-flex gap-2 flex-wrap">
                        <div className="d-flex gap-2 flex-auto event_estimation_inputs">
                          <Form.Control placeholder="Venue" />
                          <Form.Control
                            type="number"
                            placeholder="Estimate Price"
                          />
                          <Form.Control
                            type="number"
                            placeholder="Actual Price"
                          />
                        </div>
                        <div className="d-flex gap-2 ">
                          <Button variant="secondary">Delete</Button>
                          <Button className="btn-purple dark-btn ">
                            Save Your Notes
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )}
                  {openIdField === item.id && (
                    <div className="expand-area">
                      <h5 className="mb-3">Payment & Deposit notes</h5>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your notes..."
                      />

                      <div className="d-flex gap-2 mt-3">
                        <Button variant="secondary">Delete</Button>
                        <Button className="btn-purple dark-btn ">
                          Save Your Notes
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card.Body>
          </Card>
        ))}

        <Button className="btn-purple dark-btn ">+ Add New Item</Button>
      </Container>
    </section>
  );
}
