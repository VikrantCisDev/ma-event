import React, { useState } from 'react';
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
import { HiOutlineUser } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import MultilevelMenu from './MultiMenus';

const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
  
    const handleClose = () => {
      setActive(false); // Ensure the menu is closed
    };

    return (
        <header className='header'>
            <Container className="custom-container">
                <Navbar expand="lg" className={` headerNavbar`}>
                    <Navbar.Brand href="#home">
                        <img className='img-fluid logo' src={logo} alt="Ma-event" />
                    </Navbar.Brand>
                    <div className='d-flex align-items-center gap-2'>
                        <div className="nav-mega d-lg-none d-flex gap-2 align-items-center">
                            <div className="nav-mega">
                                <a href="javascript:void(0)" className='rightNavLink postYourAd '><FaPlus /> Post <span className='postSpan'> your</span> AD</a>
                            </div>
                            <div>
                                <a href="javascript:void(0)" className='rightNavLink p-0'><IoChatbubblesOutline color='#921f62' size={30} /></a>
                            </div>
                            <NavDropdown title={<><HiOutlineUser color='#921f62' size={30} /></>} className='myAccount' id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">My Ads</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Favourites</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Messages</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
                            <GiHamburgerMenu color='#921f62' size={30} />
                        </Navbar.Toggle>
                    </div>
                    <Navbar className={`responsiveNav ${active ? 'active' : ''}`} id="basic-navbar-nav">
                        <Nav className="center-links text-uppercase d-lg-flex d-none">
                            <Nav.Link href="#home">About ma-event</Nav.Link>
                            <div className="nav-mega">
                                <Nav.Link href="javascript:void(0)">Vendors <IoMdArrowDropdown /></Nav.Link>
                                <div className="megamenu-wrapper">
                                    <MegaMenu />
                                </div>
                            </div>
                            <Nav.Link href="#link">Events ping</Nav.Link>
                            <div className="nav-mega">
                                <Nav.Link href="javascript:void(0)">Planning tools <IoMdArrowDropdown /></Nav.Link>
                                <div className="megamenu-wrapper">
                                    <MegaMenu />
                                </div>
                            </div>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Help</Nav.Link>
                            <div className="nav-mega">
                                <a href="javascript:void(0)" className='rightNavLink'><FaUserCircle size={30} color='black' /> My Account</a>
                                <div className="megamenu-wrapper menu-list">
                                    <ul className='m-0 p-0 list-style-none'>
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
                                <a href="javascript:void(0)" className='rightNavLink postYourAd'><FaPlus /> Post <span className='postSpan'> your</span> AD</a>
                            </div>
                        </Nav>


                        <div className='d-lg-none mobileMultiMenu'>
                            <MultilevelMenu />
                        </div>
                    </Navbar>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;
