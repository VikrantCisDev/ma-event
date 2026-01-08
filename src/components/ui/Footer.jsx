import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import footerLogo from "../../assets/Images/footer-logo.png";
import ListGroup from "react-bootstrap/ListGroup";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import playStore from "../../assets/Images/play-store.png";
import appleStore from "../../assets/Images/apple-store.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="custom-container">
        <Row className="footer-link-row">
          <Col className="d-md-none" xs="12">
            <div className="ft-logo-sec my-2">
              <Link to="/">
                <Image src={footerLogo} rounded className="img-fluid" />
              </Link>
            </div>
          </Col>

          <Col>
            <h4>Account</h4>

            <ul>
              <li>
                <Link to="/">About Maevent</Link>
              </li>
              <li>
                <a href="#">Rules for Vendor Placement</a>
              </li>
              <li>
                <a href="#">Maevent Blog</a>
              </li>
              <li>
                <a href="#">Maevent for Business</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>About</h4>

            <ul>
              <li>
                <Link to="/vendors-listing">Vendors</Link>
              </li>
              <li>
                <Link to="/planning-tools">Planning Tools</Link>
              </li>
              <li>
                <a href="#">Latest</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Support</h4>

            <ul>
              <li>
                <Link to="/terms-conditions">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Cookie Notice</Link>
              </li>
              <li>
                <Link to="/faq">Faq's</Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>Contact</h4>

            <ul>
              <li>
                <a href="#">Help & Contact Us</a>
              </li>
            </ul>

            <div className="ft-logo-sec my-2 d-md-block d-none">
              <Link to="/">
                <Image src={footerLogo} rounded className="img-fluid" />
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="align-items-end copyRightRow">
          <Col xl={9}>
            <div className="copyrightSec text-center">
              <h6>
                Copyright © 2019-2021 | Maeventmyway (Pty) Ltd | All Rights
                reserved.
              </h6>
            </div>
          </Col>

          <Col xl={3}>
            <ul className="social_links">
              <li>
                <a href="#">
                  <ImFacebook2 />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
