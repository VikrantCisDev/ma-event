import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import MegaMenu from "./MegaMenu";
import MultilevelMenu from "./MultiMenus";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import VendorsMegaMenu from "./VendorsMegaMenu";

const Header = () => {
  // State for mobile navigation toggle
  const [active, setActive] = useState(false);
  // State for multi-level sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle mobile navigation
  const handleClick = () => {
    setActive(!active);
  };

  // Close all menus
  const handleClose = () => {
    setActive(false);
    setSidebarOpen(false);
  };

  // Sidebar toggle handler
  const handleSidebarToggle = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <header className="header">
      <Container className="custom-container">
        <Navbar expand="xl" className="headerNavbar">
          <Navbar.Brand>
            <Link to="/">
              <img className="img-fluid logo" src={logo} alt="Ma-event" />
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-2 ms-auto">
            <div className="nav-mega d-xl-none d-flex gap-2 align-items-center">
              <div className="nav-mega">
                <a href="#" className="rightNavLink postYourAd">
                  <FaPlus /> Post <span className="postSpan"> your</span> AD
                </a>
              </div>
              {/* <div>
                <a href="#" className='rightNavLink p-0'>
                  <IoChatbubblesOutline color='#921f62' size={30} />
                </a>
              </div>
              <NavDropdown
                title={<HiOutlineUser color='#921f62' size={30} />}
                className='myAccount'
                id="basic-nav-dropdown"
                as="div"
              >
                <NavDropdown.Toggle as="a" className="nav-link p-0">
                  <HiOutlineUser color='#921f62' size={30} />
                </NavDropdown.Toggle>
                <NavDropdown.Menu>
                  <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">My Ads</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Favourites</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Messages</NavDropdown.Item>
                </NavDropdown.Menu>
              </NavDropdown> */}
            </div>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-3"
            onClick={handleClick}
          >
            <GiHamburgerMenu color="#921f62" size={30} />
          </Navbar.Toggle>
          <Navbar
            className={`responsiveNav ${active ? "active" : ""}`}
            id="basic-navbar-nav"
          >
            <Nav className="center-links text-uppercase d-xl-flex d-none">
              <Nav.Link href="#home">About ma-event</Nav.Link>
              <div className="nav-mega">
                <Link to="/vendorpage" className="nav-link">
                  Vendors <IoMdArrowDropdown />
                </Link>
                <div className="megamenu-wrapper">
                  <VendorsMegaMenu />
                </div>
              </div>
              <div className="nav-mega">
                <Nav.Link href="#">
                  Planning tools <IoMdArrowDropdown />
                </Nav.Link>
                <div className="megamenu-wrapper mini-mega-menu">
                  <MegaMenu />
                </div>
              </div>
              <Nav.Link href="#link">Latest Events</Nav.Link>
              <Nav.Link href="#link">Images</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">FAQ'S</Nav.Link>

              <div className="d-xxl-flex d-none userLoginLinks">
                <Nav.Link href="/login" className="fw-bold ">
                  Log in
                </Nav.Link>
                <Nav.Link href="/signup" className="fw-bold">
                  Sign up
                </Nav.Link>
              </div>

              <div className="nav-mega">
                <a href="#" className="rightNavLink fw-bold">
                  <FaUserCircle size={30} color="black" /> My Account
                </a>
                <div className="megamenu-wrapper menu-list">
                  <ul className="m-0 p-0 list-style-none">
                    <li>
                      <a href="">Login</a>
                    </li>
                    <li>
                      <a href="">Register</a>
                    </li>
                    <li>
                      <a href="">My Ads</a>
                    </li>
                    <li>
                      <a href="">Favourites</a>
                    </li>
                    <li>
                      <a href="">Profile</a>
                    </li>
                    <li>
                      <a href="">Messages</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-mega">
                <a href="#" className="rightNavLink postYourAd ms-3 fw-bold">
                  <FaPlus size={14} /> Post
                  <span className="postSpan"> your</span>
                  Ad
                </a>
              </div>
            </Nav>

            {/* Mobile Multi-Level Sidebar */}
            <div className="d-xl-none mobileMultiMenu">
              <MultilevelMenu
                open={sidebarOpen}
                handleSidebarToggle={handleSidebarToggle}
                handleClose={handleClose}
              />
            </div>
          </Navbar>
        </Navbar>
      </Container>

      <div
        className={`${active ? "fade show" : ""} offcanvas-backdrops`}
        onClick={handleClose}
      ></div>
    </header>
  );
};

export default Header;
