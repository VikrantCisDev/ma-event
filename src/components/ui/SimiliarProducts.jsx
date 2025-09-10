import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Form,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import ProductImg from "../../assets/Images/card6.jpg";
import { FaRegStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "../../pages/VendorsPage/style.css";

const SimiliarProducts = ({rating }) => {
    const newrating = Boolean(rating) ? rating:3;
  return (
    <section className="vpBottomSec mt-md-5 pt-md-5">
      <Container className="custom-container">
        <h3 className="pink-text h3 mb-3 fw-bold ">
          Browse for other similar Vendors
        </h3>
        <Row>
          <Col xl={2} md={4} sm={6}>
            <div className="vpItemSec">
              <div className="ProductImg mb-3">
                <Image src={ProductImg} className="img-fluid w-100 shadow1" />
                <span className="verified">VERIFIED</span>
              </div>

              <div className="pdRow">
                <div className="pdLeft">
                  <div className="pdTitle">
                    <h2 className="pink-text">Jail's Catering Services</h2>
                  </div>
                </div>
                <div className="pdRight w-100">
                  <ListGroup
                    variant="flush"
                    className="w-100 flex-row justify-content-between align-items-center flex-wrap"
                  >
                    <ListGroupItem className="border-0 pb-2 p-0">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < newrating ? "rated" : "unrated"}
                          >
                            <FaRegStar />
                          </span>
                        ))}
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="fw-semibold border-0 starRating p-0">
                      STAR RATING
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>

              <div className="pdRow mb-4">
                <div className="pdLocation">
                  <h4 className="d-flex align-items-center">
                    <span className="pink-text">
                      <IoLocationSharp />
                    </span>{" "}
                    East London / Easterncape
                  </h4>
                  <h6 className="pink-text text-uppercase fw-bold mb-3">
                    &#40; Map Location &#41;
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={2} md={4} sm={6}>
            <div className="vpItemSec">
              <div className="ProductImg mb-3">
                <Image src={ProductImg} className="img-fluid w-100 shadow1" />
                <span className="verified">VERIFIED</span>
              </div>

              <div className="pdRow">
                <div className="pdLeft">
                  <div className="pdTitle">
                    <h2 className="pink-text">Jail's Catering Services</h2>
                  </div>
                </div>
                <div className="pdRight w-100">
                  <ListGroup
                    variant="flush"
                    className="w-100 flex-row justify-content-between align-items-center flex-wrap"
                  >
                    <ListGroupItem className="border-0 pb-2 p-0">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < newrating ? "rated" : "unrated"}
                          >
                            <FaRegStar />
                          </span>
                        ))}
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="fw-semibold border-0 starRating p-0">
                      STAR RATING
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>

              <div className="pdRow mb-4">
                <div className="pdLocation">
                  <h4 className="d-flex align-items-center">
                    <span className="pink-text">
                      <IoLocationSharp />
                    </span>{" "}
                    East London / Easterncape
                  </h4>
                  <h6 className="pink-text text-uppercase fw-bold mb-3">
                    &#40; Map Location &#41;
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={2} md={4} sm={6}>
            <div className="vpItemSec">
              <div className="ProductImg mb-3">
                <Image src={ProductImg} className="img-fluid w-100 shadow1" />
                <span className="verified">VERIFIED</span>
              </div>

              <div className="pdRow">
                <div className="pdLeft">
                  <div className="pdTitle">
                    <h2 className="pink-text">Jail's Catering Services</h2>
                  </div>
                </div>
                <div className="pdRight w-100">
                  <ListGroup
                    variant="flush"
                    className="w-100 flex-row justify-content-between align-items-center flex-wrap"
                  >
                    <ListGroupItem className="border-0 pb-2 p-0">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < newrating ? "rated" : "unrated"}
                          >
                            <FaRegStar />
                          </span>
                        ))}
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="fw-semibold border-0 starRating p-0">
                      STAR RATING
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>

              <div className="pdRow mb-4">
                <div className="pdLocation">
                  <h4 className="d-flex align-items-center">
                    <span className="pink-text">
                      <IoLocationSharp />
                    </span>{" "}
                    East London / Easterncape
                  </h4>
                  <h6 className="pink-text text-uppercase fw-bold mb-3">
                    &#40; Map Location &#41;
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={2} md={4} sm={6}>
            <div className="vpItemSec">
              <div className="ProductImg mb-3">
                <Image src={ProductImg} className="img-fluid w-100 shadow1" />
                <span className="verified">VERIFIED</span>
              </div>

              <div className="pdRow">
                <div className="pdLeft">
                  <div className="pdTitle">
                    <h2 className="pink-text">Jail's Catering Services</h2>
                  </div>
                </div>
                <div className="pdRight w-100">
                  <ListGroup
                    variant="flush"
                    className="w-100 flex-row justify-content-between align-items-center flex-wrap"
                  >
                    <ListGroupItem className="border-0 pb-2 p-0">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < newrating ? "rated" : "unrated"}
                          >
                            <FaRegStar />
                          </span>
                        ))}
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="fw-semibold border-0 starRating p-0">
                      STAR RATING
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>

              <div className="pdRow mb-4">
                <div className="pdLocation">
                  <h4 className="d-flex align-items-center">
                    <span className="pink-text">
                      <IoLocationSharp />
                    </span>{" "}
                    East London / Easterncape
                  </h4>
                  <h6 className="pink-text text-uppercase fw-bold mb-3">
                    &#40; Map Location &#41;
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={2} md={4} sm={6}>
            <div className="vpItemSec">
              <div className="ProductImg mb-3">
                <Image src={ProductImg} className="img-fluid w-100 shadow1" />
                <span className="verified">VERIFIED</span>
              </div>

              <div className="pdRow">
                <div className="pdLeft">
                  <div className="pdTitle">
                    <h2 className="pink-text">Jail's Catering Services</h2>
                  </div>
                </div>
                <div className="pdRight w-100">
                  <ListGroup
                    variant="flush"
                    className="w-100 flex-row justify-content-between align-items-center flex-wrap"
                  >
                    <ListGroupItem className="border-0 pb-2 p-0">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < newrating ? "rated" : "unrated"}
                          >
                            <FaRegStar />
                          </span>
                        ))}
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="fw-semibold border-0 starRating p-0">
                      STAR RATING
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>

              <div className="pdRow mb-4">
                <div className="pdLocation">
                  <h4 className="d-flex align-items-center">
                    <span className="pink-text">
                      <IoLocationSharp />
                    </span>{" "}
                    East London / Easterncape
                  </h4>
                  <h6 className="pink-text text-uppercase fw-bold mb-3">
                    &#40; Map Location &#41;
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={2} md={4} sm={6}>
            <div className="vpItemSec">
              <div className="ProductImg mb-3">
                <Image src={ProductImg} className="img-fluid w-100 shadow1" />
                <span className="verified">VERIFIED</span>
              </div>

              <div className="pdRow">
                <div className="pdLeft">
                  <div className="pdTitle">
                    <h2 className="pink-text">Jail's Catering Services</h2>
                  </div>
                </div>
                <div className="pdRight w-100">
                  <ListGroup
                    variant="flush"
                    className="w-100 flex-row justify-content-between align-items-center flex-wrap"
                  >
                    <ListGroupItem className="border-0 pb-2 p-0">
                      <div className="d-flex align-items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < newrating ? "rated" : "unrated"}
                          >
                            <FaRegStar />
                          </span>
                        ))}
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="fw-semibold border-0 starRating p-0">
                      STAR RATING
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>

              <div className="pdRow mb-4">
                <div className="pdLocation">
                  <h4 className="d-flex align-items-center">
                    <span className="pink-text">
                      <IoLocationSharp />
                    </span>{" "}
                    East London / Easterncape
                  </h4>
                  <h6 className="pink-text text-uppercase fw-bold mb-3">
                    &#40; Map Location &#41;
                  </h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SimiliarProducts;
