import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import footerLogo from '../../assets/Images/footer-logo.png'
import ListGroup from 'react-bootstrap/ListGroup';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube,FaWhatsapp  } from "react-icons/fa";
import playStore from '../../assets/Images/play-store.png'
import appleStore from '../../assets/Images/apple-store.png'


const Footer = () => {
  return (
    <footer className='footer'>

      <Row>
        <Col>
          <div className="ft-logo-sec">
            <Image src={footerLogo} rounded />
            <h6 >Interact with us Socially</h6>
          </div>
        </Col>
        <Col>
          <h4>Get to Know Us</h4>

          <ul>
            <li>
              <a href='#'>About Maevent</a>
            </li>
            <li>
              <a href='#'>Rules for Vendor Placement</a>
            </li>
            <li>
              <a href='#'>Maevent Blog</a>
            </li>
            <li>
              <a href='#'>Maevent for Business</a>
            </li>
          </ul>


        </Col>
        <Col>
          <h4>Smart Nav </h4>

          <ul>
            <li>
              <a href='#'>Vendors</a>
            </li>
            <li>
              <a href='#'>Planning Tools</a>
            </li>
            <li>
              <a href='#'>Latest</a>
            </li>

          </ul>


        </Col>
        <Col>
          <h4>Legal Bits </h4>


          <ul>
            <li>
              <a href='#'>Terms of Use</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Cookie Notice</a>
            </li>
            <li>
              <a href='#'>Faq's</a>
            </li>

          </ul>
        </Col>
        <Col>
          <h4>Tips & Help </h4>
          <ul>
            <li>
              <a href='#'>Help & Contact Us</a>
            </li>
            <li>
              <a href='#'>Stay Safe</a>
            </li>

          </ul>
        </Col>
        <Col>
          <h2 className='mb-2'>Get our App</h2>
          <ul className='appStoreSec'>
            <li className='mb-3'>
              <a href='#'>
                <Image src={playStore} />
              </a>
            </li>
            <li>
              <a href='#'>
              <Image src={appleStore} />
              </a>
            </li>

          </ul>
        </Col>

      </Row>



      <Row className="align-items-end">

        <Col xs={3}>
          <ul className='social_links'>




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
                <FaWhatsapp  />
              </a>
            </li>

            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>

          </ul>
        </Col>
        <Col xs={9}>
          <div className='copyrightSec'>
            <h6>Copyright © 2019-2020 | Urban Craft Media (Pty) Ltd | Aidah creative enterprise</h6>
          </div>
        </Col>

      </Row>

    </footer>
  )
}

export default Footer