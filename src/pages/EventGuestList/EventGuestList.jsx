import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import {
  FaCheck,
  FaPlus,
  FaMoon,
  FaTimes,
   FaQuestion } from "react-icons/fa";

import { LuClock9, LuPhone, LuClock3 } from "react-icons/lu";
import { SlHome } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

import "./EventGuestList.css";
import ToolCardsWrap from "../../components/ui/ToolCardsWrap";
import IconWrapper from "../../components/ui/IconWrapper";

const initialGuests = [
  { id: 1, name: "Deepak Gaur", invited: true, rsvp: "pending" },
  { id: 2, name: "Deepak Gaur", invited: true, rsvp: "pending" },
  { id: 3, name: "Deepak Gaur", invited: true, rsvp: "pending" },
  { id: 4, name: "Deepak Gaur", invited: true, rsvp: "pending" },
  { id: 5, name: "Deepak Gaur", invited: true, rsvp: "pending" },
];

const EventGuestList = () => {
  const [guests, setGuests] = useState(initialGuests);
  const [newGuest, setNewGuest] = useState("");

  const addGuest = () => {
    if (!newGuest.trim()) return;
    setGuests([
      ...guests,
      {
        id: Date.now(),
        name: newGuest,
        invited: false,
        rsvp: "pending",
      },
    ]);
    setNewGuest("");
  };

  return (
    <>
      <section className="event-guest-list-section py-5">
        <Container className="guest-list-page">
          <ToolCardsWrap />

          {/* Header */}
          <Row className="align-items-center mb-3">
            <Col>
              <h2 className="pink-text">Our Event Guest list</h2>
            </Col>
            <Col className="text-end">
              <Button variant="secondary" className="me-2">
                Show Filters
              </Button>
              <Button variant="secondary" className="me-2">
                Search
              </Button>
              <Button variant="secondary" className="me-2">
                Export
              </Button>
              <Button className="rounded-2  dark-btn  ">
                + Add A New Guest(s)
              </Button>
            </Col>
          </Row>

          <div className="p-3 bg-light rounded">
            {/* Summary */}
            <div className="guest-summary mb-3 p-2 rounded bg-white">
              <div className="d-flex flex-wrap gap-2 ">
                <span className="">
                  <strong>All guests:</strong> 2
                </span>

                <span className="summary-item">
                  <FaCheck className="icon " />
                  <strong>Full invite:</strong> 7
                </span>

                <span className="summary-item">
                  <FaMoon className="icon " />
                  <strong>Evening:</strong> 5
                </span>

                <span className="summary-item">
                  <FaQuestion className="icon " />
                  <strong>Waitlist:</strong> 2
                </span>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="">
                  <strong>RSVP total:</strong>
                </span>

                <span className="summary-item">
                  <FaCheck className="icon " />
                  <strong>Yes:</strong> 0
                </span>

                <span className="summary-item">
                  <FaTimes className="icon " />
                  <strong>No:</strong> 0
                </span>

                <span className="summary-item">
                  <LuClock9 className="icon " />
                  <strong>No reply:</strong> 2
                </span>
              </div>
            </div>

            {/* Guest Card */}
            <Card className="mb-4">
              <div className="guest-row">
                <div>Kuldeep Kumar Gaur's guests ({guests.length})</div>
                <div className="text-center">Invites</div>
                <div className="text-center">RSVPs</div>
                <div className="text-center">Address</div>
              </div>

              <Card.Body className="p-0">
                {guests.map((guest) => (
                  <div key={guest.id} className="guest-row">
                    <div className="guest-name">{guest.name}</div>
                    <div className="guest-invite">
                      {guest.invited && <FaCheck className="icon success" />}
                    </div>
                    <div className="guest-rsvp">
                      <LuClock3 className="icon muted" />
                    </div>
                    <div className="guest-actions">
                      <SlHome />
                      <MdOutlineAlternateEmail />
                      <LuPhone />
                    </div>
                  </div>
                ))}

                {/* Add Guest */}
                <div className="guest-add">
                  <Form.Control
                    placeholder="Add guest's name"
                    value={newGuest}
                    onChange={(e) => setNewGuest(e.target.value)}
                    className="default-style"
                  />
                  <Button className="btn-purple dark-btn rounded px-lg-4 py-lg-3 " onClick={addGuest}>
                    <FaPlus /> ADD NEW ITEM
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <hr className="text-gray" />

            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex gap-2 align-items-center text-muted py-2">
                  <IoMdAddCircle size={20}/> <span className="text-decoration-underline fs-6">Add a Category</span>
                </div>
              </Card.Body>
            </Card>

            {/* Footer */}
            <div className="text-center">
              <Button variant="secondary" className="px-lg-5 py-lg-3 fw-bold mb-3">RESET GUEST LIST</Button>
            </div>
          </div>
        </Container>
      </section>
      <IconWrapper />
    </>
  );
};

export default EventGuestList;
