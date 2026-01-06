import React from "react";
import "./Congrats.css";
import { Col, Image, Row } from "react-bootstrap";
import FireWorks from "../../assets/Images/fireworks.png";
import Icon1 from "../../assets/Images/pt-icon1.png";
import Icon2 from "../../assets/Images/pt-icon2.png";
import Icon3 from "../../assets/Images/pt-icon3.png";
import Icon4 from "../../assets/Images/pt-icon4.png";
import { IoSearch } from "react-icons/io5";

const Congrats = () => {
  const listCards = [
    {
      id: 1,
      text: "Guestlists",
      icon: Icon1,
    },
    {
      id: 2,
      text: "Checklist",
      icon: Icon2,
    },
    {
      id: 3,
      text: "Budget",
      icon: Icon3,
    },
    {
      id: 4,
      text: "Shortlist",
      icon: Icon4,
    },
  ];

  return (
    <>
      <section className="congrats-section">
        <div className="custom-container">
          <div className="mx-xxl-5 px-xxl-4 py-5">
            <div className="mx-xl-5 border p-sm-4 px-2 py-2">
              <div className="d-flex align-items-stretch ">
                <button className="dark-btn fw-bold">PREV</button>
                <div className="fw-bold w-100 d-flex align-items-center justify-content-center text-white pink-bg border-white border-start border-end fs-5">
                  DONE
                </div>
                <button className="dark-btn fw-bold">NEXT</button>
              </div>

              <div className="small-container">
                <div className="mt-5  text-center">
                  <Image src={FireWorks} fluid className="firework-img" />
                  <p className="fs-3 mt-4 fw-semibold">
                    Congratulations, your events
                    <br className="d-lg-block d-none" />
                    Manager is ready !
                  </p>
                </div>

                <div className="gray-box text-center mt-5">
                  <h2>We've found your matches</h2>
                  <p className="fs-5 text-muted fw-semibold">
                    There are 8441 events venues in the
                    <br className="d-lg-block d-none" />
                    Eastern Cape Area
                  </p>
                  <button className="dark-btn fw-bold px-lg-5 px-4 rounded fs-4 d-flex align-items-center gap-2 mx-auto mb-3">
                    <IoSearch size={28} />
                    SEE THEM NOW
                  </button>
                </div>
                <Row className="mt-3 iconCard-wrapper mb-lg-5">
                  {listCards.map((item) => {
                    return (
                      <Col lg={3} sm={6} key={item.id} className="mb-3">
                        <div className="gray-box iconBox">
                          <div className="icon-wrap">
                            <Image src={item.icon} fluid />
                          </div>
                          <h4 className="fs-6">{item.text}</h4>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Congrats;
