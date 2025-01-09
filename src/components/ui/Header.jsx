import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Images/logo.png';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ImFacebook2 } from "react-icons/im";
import { FaUserCircle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
    return (
        <header className='header'>


            <Navbar expand="lg" className="">
                <Navbar.Brand className='pe-4' href="#home">
                    <img className='img-fluid logo' src={logo} alt="Ma-event" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" center-links text-uppercase">
                        <Nav.Link href="#home">ABout ma-event</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Planning tools</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Vendors</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">latest events</Nav.Link>
                        <Nav.Link href="#link">Images</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Faq's</Nav.Link>
                    </Nav>
                    <div className="nav-right">
                        <div className='social-icons d-flex gap-3'>
                            <a href='#'>
                                <ImFacebook2 />
                            </a>
                            <a href='#'>
                                <FaInstagram />
                            </a>
                            <a href='#'>
                                <FaTwitter />
                            </a>
                            <a href='#'>
                                <FaYoutube />
                            </a>
                        </div>
                        <div className='d-flex gap-5 align-items-center'>
                            <div className='user-wrapper text-uppercase d-flex gap-3'>
                                <Nav.Link href="#link">
                                    <span className='d-flex'><FaUserCircle /></span>
                                    Register
                                </Nav.Link>
                                <Nav.Link href="#link">Login</Nav.Link>
                            </div>
                            <div className='nav-search'>
                                <Form inline>
                                    <Row>
                                        <Col xs="auto" className='p-0'>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search..."
                                                className=" "
                                            />
                                        </Col>
                                        <Col xs="auto" className='p-0'>
                                            <Button type="submit" className='d-flex'>
                                                <HiMagnifyingGlass />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </header>
    )
}

export default Header