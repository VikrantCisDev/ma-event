import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import {
  FaUsers,
  FaStore,
  FaCalendarCheck,
  FaRegNewspaper,
  FaHeadset,
  FaConciergeBell,
  FaSquareFull,
  FaSearch,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import footerLogo from "../../assets/Images/footer-logo.png";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export const options = [
  {
    id: 1,
    name: "ABOUT MA-EVENT",
    icon: <FaUsers />,
    children: [],
    link: "/about",
  },
  {
    id: 2,
    name: "VENDORS CATEGORIES",
    icon: <FaStore />,
    children: [
      {
        id: "2.1",
        name: "Events Venues",
        children: [],
        link: "/vendors/events-venues",
      },
      {
        id: "2.2",
        name: "Decorators / Decor",
        children: [],
        link: "/vendors/decorators",
      },
      {
        id: "2.3",
        name: "Photographers",
        children: [],
        link: "/vendors/photographers",
      },
      {
        id: "2.4",
        name: "Car Hires",
        children: [],
        link: "/vendors/car-hires",
      },
      {
        id: "2.5",
        name: "Beauty Salon",
        children: [],
        link: "/vendors/beauty-salon",
      },
      {
        id: "2.6",
        name: "Honeymoon Destinations",
        children: [],
        link: "/vendors/honeymoon",
      },
      {
        id: "2.7",
        name: "Accommodation",
        children: [],
        link: "/vendors/accommodation",
      },
      {
        id: "2.8",
        name: "Wedding Planners",
        children: [],
        link: "/vendors/wedding-planners",
      },
      { id: "2.9", name: "Cakes", children: [], link: "/vendors/cakes" },
      { id: "2.10", name: "Catering", children: [], link: "/vendors/catering" },
      {
        id: "2.11",
        name: "Videographers",
        children: [],
        link: "/vendors/videographers",
      },
      { id: "2.12", name: "Florists", children: [], link: "/vendors/florists" },
      {
        id: "2.13",
        name: "Event Loans",
        children: [],
        link: "/vendors/event-loans",
      },
      {
        id: "2.14",
        name: "Wedding Websites",
        children: [],
        link: "/vendors/wedding-websites",
      },
      {
        id: "2.15",
        name: "Services",
        children: [
          {
            id: "2.15.1",
            icon: <FaSquareFull size={7} />,
            name: "Events Venues",
            children: [],
            link: "/services/events-venues",
          },
          {
            id: "2.15.2",
            icon: <FaSquareFull size={7} />,
            name: "Beauty Spa’s",
            children: [],
            link: "/services/beauty-spas",
          },
          {
            id: "2.15.3",
            icon: <FaSquareFull size={7} />,
            name: "Security",
            children: [],
            link: "/services/security",
          },
          {
            id: "2.15.4",
            icon: <FaSquareFull size={7} />,
            name: "Event Ushers",
            children: [],
            link: "/services/event-ushers",
          },
          {
            id: "2.15.5",
            icon: <FaSquareFull size={7} />,
            name: "Professional Makeup",
            children: [],
            link: "/services/makeup",
          },
          {
            id: "2.15.6",
            icon: <FaSquareFull size={7} />,
            name: "Nail Technician",
            children: [],
            link: "/services/nail-technician",
          },
          {
            id: "2.15.7",
            icon: <FaSquareFull size={7} />,
            name: "Cakes",
            children: [],
            link: "/services/cakes",
          },
          {
            id: "2.15.8",
            icon: <FaSquareFull size={7} />,
            name: "Catering",
            children: [],
            link: "/services/catering",
          },
          {
            id: "2.15.9",
            icon: <FaSquareFull size={7} />,
            name: "Photographers",
            children: [],
            link: "/services/photographers",
          },
          {
            id: "2.15.10",
            icon: <FaSquareFull size={7} />,
            name: "Videography",
            children: [],
            link: "/services/videography",
          },
          {
            id: "2.15.11",
            icon: <FaSquareFull size={7} />,
            name: "Events Cleaners",
            children: [],
            link: "/services/cleaners",
          },
          {
            id: "2.15.12",
            icon: <FaSquareFull size={7} />,
            name: "Tailored Outfits",
            children: [],
            link: "/services/tailored-outfits",
          },
          {
            id: "2.15.13",
            icon: <FaSquareFull size={7} />,
            name: "Graduation Outfits",
            children: [],
            link: "/services/graduation-outfits",
          },
          {
            id: "2.15.14",
            icon: <FaSquareFull size={7} />,
            name: "Matric Dance Outfits",
            children: [],
            link: "/services/matric-dance-outfits",
          },
          {
            id: "2.15.15",
            icon: <FaSquareFull size={7} />,
            name: "Events Planners",
            children: [],
            link: "/services/events-planners",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "PLANNING TOOLS",
    icon: <FaCalendarCheck />,
    children: [],
    link: "/planning-tools",
  },
  {
    id: 4,
    name: "LATEST EVENTS",
    icon: <MdEventAvailable />,
    children: [],
    link: "/latest-events",
  },
  {
    id: 5,
    name: "BLOG",
    icon: <FaRegNewspaper />,
    children: [],
    link: "/blog",
  },
  {
    id: 6,
    name: "HELP",
    icon: <FaHeadset />,
    children: [],
    link: "/help",
  },
];

const MultiMenus = ({ open, handleSidebarToggle, handleClose }) => {
  const [menuStack, setMenuStack] = useState([]); // Stack to track navigation
  const [search, setSearch] = useState("");

  const currentMenu = menuStack[menuStack.length - 1]; // Top of the stack

  const handleMenuClick = (menu) => {
    if (menu.children && menu.children.length > 0) {
      setMenuStack((prev) => [...prev, menu]); // Push to stack
    }
  };

  const handleBack = () => {
    setMenuStack((prev) => prev.slice(0, -1)); // Pop from stack
  };

  const renderMenuItems = (items) => (
    <>
      {!menuStack.length && (
        <div className="input-group mobileSearchBar p-1 mb-2">
          <span className="input-group-text pink-text bg-transparent border-0">
            <FaSearch size={20} />
          </span>
          <input
            id="search"
            type="text"
            className="form-control bg-transparent border-0"
            placeholder=" "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </div>
      )}
      <ul className="main-navList">
        {items.map((item) => (
          <li
            key={item.id}
            className="fw-medium"
            onClick={() => handleMenuClick(item)}
          >
            <LiaAngleRightSolid />
            <div className="d-flex gap-2 align-items-center">
              {item.icon && <>{item.icon}</>}
              <span>{item.name}</span>
            </div>
            {/* {item.children && item.children.length > 0 && (
              <LiaAngleRightSolid />
              )} */}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className={`sidebar d-flex flex-column  ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        {menuStack.length > 0 ? (
          <button className="back-btn p-0" onClick={handleBack}>
            <LiaAngleLeftSolid /> {currentMenu.name}
          </button>
        ) : (
          <button className="close-btn p-0" onClick={handleClose}>
            <IoMdClose size={22} />
          </button>
        )}
      </div>

      <div className="sidebar-content h-100">
        {menuStack.length > 0
          ? renderMenuItems(currentMenu.children)
          : renderMenuItems(options)}
      </div>

      <div className="sidebar-ftr mt-auto px-4 mx-2 pb-4">
        <div className="ftr-logo my-2 text-center">
          <Link to="/">
            <Image src={footerLogo} rounded className="img-fluid" />
          </Link>
        </div>
        <ul className="social_links list-unstyled d-flex gap-3 justify-content-center mb-0">
          <li>
            <a href="#">
              <ImFacebook2 size={24} className="text-white" />
            </a>
          </li>

          <li>
            <a href="#">
              <FaInstagram size={24} className="text-white" />
            </a>
          </li>

          <li>
            <a href="#">
              <FaTwitter size={24} className="text-white" />
            </a>
          </li>

          <li>
            <a href="#">
              <FaYoutube size={24} className="text-white" />
            </a>
          </li>

          <li>
            <a href="#">
              <FaWhatsapp size={24} className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MultiMenus;
