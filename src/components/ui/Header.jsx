import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Images/logo.svg';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ImFacebook2 } from "react-icons/im";
import { FaUserCircle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import MegaMenu from './MegaMenu';
import { Container } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";



const Header = () => {
    return (
        <header className='header'>
            <Container className="custom-container">
                <Navbar expand="lg" className="">
                    <Navbar.Brand  href="#home">
                        <img className='img-fluid logo' src={logo} alt="Ma-event" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" center-links text-uppercase">
                            <Nav.Link href="#home">About ma-event</Nav.Link>

                            <div className="nav-mega">
                                <Nav.Link href="javascript:void(0)">Vendors <IoMdArrowDropdown /> </Nav.Link>
                                <div className="megamenu-wrapper">
                                    <MegaMenu />
                                </div>
                            </div>

                            <Nav.Link href="#link">Events ping</Nav.Link>

                            <div className="nav-mega">
                                <Nav.Link href="javascript:void(0)">Planning tools <IoMdArrowDropdown /> </Nav.Link>
                                <div className="megamenu-wrapper">
                                    <MegaMenu />
                                </div>
                            </div>



                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Help</Nav.Link>
                            


                            <div className="nav-mega">
                               
                                <a href="javascript:void(0)" className='rightNavLink' ><FaUserCircle size={30} color='black' /> My Account </a>
                                <div className="megamenu-wrapper menu-list">
                                    <ul className='m-0 p-0 list-style-none '>
                                        <li><a href="">Login</a></li>
                                        <li><a href="">Register</a></li>
                                        <li><a href="">My Ads</a></li>
                                        <li><a href="">Favourites</a></li>
                                        <li><a href="">Profile</a></li>
                                        <li><a href="">Messages</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="nav-mega">
                                <a href="javascript:void(0)" className='rightNavLink postYourAd'><FaPlus /> Post your AD</a>
                            </div>



                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;
