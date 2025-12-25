import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import "./EventChecklist.css";
import eventImage from "../../assets/Images/img-cal.jpg";
import IconWrapper from "../../components/ui/IconWrapper";
import ToolCardsWrap from "../../components/ui/ToolCardsWrap";

const EventChecklist = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // TAB STATE
  const [activeTab, setActiveTab] = useState("year");

  // FORM STATES
  const [season, setSeason] = useState("SPRING");
  const [month, setMonth] = useState("JANUARY");
  const [undecided, setUndecided] = useState(false);

  // TAB ORDER
  const tabOrder = ["year", "month", "day"];

  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  const seasons = ["SPRING", "SUMMER", "FALL", "WINTER"];
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const year = ["2021", "2022", "2023", "2024", "2025"];

  const dofWeek = [
    "MON-THURS",
    "TUESDAY",
    "WEDNESDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  return (
    <>
      <section className="py-5">
        <Container>
          <ToolCardsWrap />
          <Row>
            <Col md={8}>
              <div className="event_checklist">
                <div className="event_checklist_content">
                  <h2 className="fw-medium pink-text mb-3">
                    Our Event Checklist
                  </h2>
                  <h5 className="fw-bold mb-2">
                    Let’s create your event checklist!
                  </h5>
                  <p className="text-muted">
                    Stay on track with South Africa’s best events checklist,
                    guiding you every step of the way
                  </p>
                </div>

                <div className="event_checklist_picker mt-4">
                  <label className="form-label fw-bold pink-text">
                    Enter your event date:
                  </label>
                  <div className="d-flex gap-2">
                    <input type="text" className="form-control rounded-0" />
                    <button className="btn_event_date p-2" onClick={handleShow}>
                      <svg
                        width="34px"
                        height="34px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="dark-btn btn btn-primary mt-4 fw-bold"
                >
                  CREATE MY EVENT CHECKLIST
                </button>
              </div>
            </Col>

            <Col md={4} className="d-flex align-items-center">
              <Image
                src={eventImage}
                alt="checklist illustration"
                className="img-fluid w-100 object-fit-cover rounded"
              />
            </Col>
          </Row>
        </Container>

        {/* MODAL */}
        <Modal
          className="deal_event_modal"
          show={show}
          size="lg"
          onHide={handleClose}
          centered
        >
          <Modal.Header className="justify-content-center border-0">
            <div className="text-center">
              <h6 className="text-muted">Ideal Event Date</h6>
              <h5 className="event-date pink-text">20 January 2020</h5>
            </div>
          </Modal.Header>

          <Modal.Body className="px-0">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="justify-content-center mb-4 custom-tabs pointer-events-none"
            >
              {/* YEAR TAB */}
              <Tab eventKey="year" title="Year">
                <div className="d-flex flex-wrap gap-4 card_event_picker">
                  <div className="p-4 card_events border_end">
                    <h5 className="mb-3">Select a year</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {year.map((yearView) => (
                        <Button
                          key={yearView}
                          variant={
                            year === yearView ? "primary" : "outline-secondary"
                          }
                          onClick={() => {
                            setYear(yearView);
                            setUndecided(false);
                          }}
                        >
                          {yearView}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 card_events">
                    <h5 className="mb-3">Or select from the</h5>
                    <div className="w-100 select-yearView">
                      <select className="w-100" name="month" id="month">
                        {months.map((monthView) => (
                          <option key={monthView} value={monthView}>
                            {monthView}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </Tab>

              {/* MONTH TAB */}
              <Tab eventKey="month" title="Season/Month">
                <div className="d-flex flex-wrap gap-4 card_event_picker">
                  <div className="p-4 card_events border_end">
                    <h5 className="mb-3">Select a season</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {seasons.map((seasonView) => (
                        <Button
                          key={seasonView}
                          variant={
                            season === seasonView
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => {
                            setSeason(seasonView);
                            setUndecided(false);
                          }}
                        >
                          {seasonView}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 card_events">
                    <h5 className="mb-3">Or select a month</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {months.map((monthView) => (
                        <Button
                          key={monthView}
                          variant={
                            month === monthView
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => {
                            setMonth(monthView);
                            setUndecided(false);
                          }}
                        >
                          {monthView}
                        </Button>
                      ))}
                    </div>

                    <Form.Check
                      className="mt-3 month-undecided "
                      type="radio"
                      label="Undecided on month/season"
                      checked={undecided}
                      onChange={() => setUndecided(true)}
                    />
                  </div>
                </div>
              </Tab>

              {/* DAY TAB */}
              <Tab eventKey="day" title="Day">
                <div className="d-flex flex-wrap gap-4 card_event_picker">
                  <div className="p-4 card_events border_end">
                    <h5 className="mb-3">Select a day of the week</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {dofWeek.map((dofWeekView) => (
                        <Button
                          key={dofWeekView}
                          variant={
                            season === dofWeekView
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => {
                            setSeason(dofWeekView);
                            setUndecided(false);
                          }}
                        >
                          {dofWeekView}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 card_events">
                    <h5 className="mb-3">Or select a date</h5>
                    <div>reserved for date picker</div>

                    <Form.Check
                      className="mt-3  month-undecided "
                      type="radio"
                      label="Undecided on month/season"
                      checked={undecided}
                      onChange={() => setUndecided(true)}
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Modal.Body>

          {/* FOOTER NAV */}
          <Modal.Footer>
            <div className="d-flex justify-content-between w-100">
              <Button
                variant="link"
                onClick={handlePrevious}
                disabled={activeTab === "year"}
                className="text-black fw-medium text-decoration-none"
              >
                PREVIOUS
              </Button>

              <Button
                variant="link"
                onClick={handleNext}
                disabled={activeTab === "day"}
                className="text-black fw-medium text-decoration-none"
              >
                NEXT
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </section>
      <IconWrapper />
    </>
  );
};

export default EventChecklist;
