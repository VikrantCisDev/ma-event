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
  FaSquareFull,
  FaSearch,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import footerLogo from "../../assets/Images/footer-logo.png";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import About from "../../assets/Images/about.png";
import VendorCategory from "../../assets/Images/market-segment.png";
import PlanningTools from "../../assets/Images/startegy.png";
import Events from "../../assets/Images/people.png";
import Blogs from "../../assets/Images/blogging.png";
import Help from "../../assets/Images/customer-service.png";

import Accessories from "../../assets/Images/m-accessories.png";
import Decor from "../../assets/Images/m-decor.png";
import Entertainment from "../../assets/Images/m-music.png";
import Food from "../../assets/Images/m-food.png";
import Hospitality from "../../assets/Images/m-hospitality.png";
import Beach from "../../assets/Images/m-beach.png";
import Raft from "../../assets/Images/m-raft.png";
import Mail from "../../assets/Images/m-mail.png";
import Rentals from "../../assets/Images/m-rentals.png";
import Transport from "../../assets/Images/m-transport.png";
import Service from "../../assets/Images/m-service.png";

function MenuIcon(path) {
  return <div className="menuIconWrapper"><img src={path} className="megaMenuIcon" /></div>;
}

export const options = [
  {
    id: 1,
    name: "ABOUT MA-EVENT",
    icon: MenuIcon(About),
    children: [],
    link: "/about",
  },
  {
    id: 2,
    name: "VENDORS CATEGORIES",
    icon: MenuIcon(VendorCategory),
    children: [
      {
        id: "2.1",
        name: "Accessories",
        icon: MenuIcon(Accessories),
        children: [],
        link: "/vendors/accessories",
      },
      {
        id: "2.2",
        name: "Food & Beverages",
        icon: MenuIcon(Food),
        children: [],
        link: "/vendors/food-beverages",
      },
      {
        id: "2.3",
        name: "Decor",
        icon: MenuIcon(Decor),
        children: [],
        link: "/vendors/decor",
      },
      {
        id: "2.4",
        name: "Entertainment",
        icon: MenuIcon(Entertainment),
        children: [],
        link: "/vendors/entertainment",
      },
      {
        id: "2.5",
        name: "Hospitality",
        icon: MenuIcon(Hospitality),
        children: [],
        link: "/vendors/hospitality",
      },
      {
        id: "2.6",
        name: "Leisure",
        icon: MenuIcon(Beach),
        children: [],
        link: "/vendors/leisure",
      },
      {
        id: "2.7",
        name: "Outdoor",
        icon: MenuIcon(Raft),
        children: [],
        link: "/vendors/outdoor",
      },
      {
        id: "2.8",
        name: "Printed Materials",
        icon: MenuIcon(Mail),
        children: [],
        link: "/vendors/printed-materials",
      },
      {
        id: "2.9",
        name: "Rentals / Book / Hire",
        icon: MenuIcon(Rentals),
        children: [],
        link: "/vendors/rentals",
      },
      {
        id: "2.10",
        name: "Transportation",
        icon: MenuIcon(Transport),
        children: [],
        link: "/vendors/transportation",
      },
      {
        id: "2.11",
        name: "Services",
        icon: MenuIcon(Service),
        children: [
          {
            id: "2.11.1",
            icon: <FaSquareFull size={7} />,
            name: "Events Venues",
            children: [],
            link: "/services/events-venues",
          },
          {
            id: "2.11.2",
            icon: <FaSquareFull size={7} />,
            name: "Beauty Spa's",
            children: [],
            link: "/services/beauty-spas",
          },
          {
            id: "2.11.3",
            icon: <FaSquareFull size={7} />,
            name: "Security",
            children: [],
            link: "/services/security",
          },
          {
            id: "2.11.4",
            icon: <FaSquareFull size={7} />,
            name: "Event Ushers",
            children: [],
            link: "/services/event-ushers",
          },
          {
            id: "2.11.5",
            icon: <FaSquareFull size={7} />,
            name: "Professional Makeup",
            children: [],
            link: "/services/makeup",
          },
          {
            id: "2.11.6",
            icon: <FaSquareFull size={7} />,
            name: "Nail Technician",
            children: [],
            link: "/services/nail-technician",
          },
          {
            id: "2.11.7",
            icon: <FaSquareFull size={7} />,
            name: "Cakes",
            children: [],
            link: "/services/cakes",
          },
          {
            id: "2.11.8",
            icon: <FaSquareFull size={7} />,
            name: "Catering",
            children: [],
            link: "/services/catering",
          },
          {
            id: "2.11.9",
            icon: <FaSquareFull size={7} />,
            name: "Photographers",
            children: [],
            link: "/services/photographers",
          },
          {
            id: "2.11.10",
            icon: <FaSquareFull size={7} />,
            name: "Videography",
            children: [],
            link: "/services/videography",
          },
          {
            id: "2.11.11",
            icon: <FaSquareFull size={7} />,
            name: "Events Cleaners",
            children: [],
            link: "/services/cleaners",
          },
          {
            id: "2.11.12",
            icon: <FaSquareFull size={7} />,
            name: "Tailored Outfits",
            children: [],
            link: "/services/tailored-outfits",
          },
          {
            id: "2.11.13",
            icon: <FaSquareFull size={7} />,
            name: "Graduation Outfits",
            children: [],
            link: "/services/graduation-outfits",
          },
          {
            id: "2.11.14",
            icon: <FaSquareFull size={7} />,
            name: "Matric Dance Outfits",
            children: [],
            link: "/services/matric-dance-outfits",
          },
          {
            id: "2.11.15",
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
    icon: MenuIcon(PlanningTools),
    children: [],
    link: "/planning-tools",
  },
  {
    id: 4,
    name: "LATEST EVENTS",
    icon: MenuIcon(Events),
    children: [],
    link: "/latest-events",
  },
  {
    id: 5,
    name: "BLOG",
    icon: MenuIcon(Blogs),
    children: [],
    link: "/blog",
  },
  {
    id: 6,
    name: "HELP",
    icon: MenuIcon(Help),
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
            <div className="d-flex gap-2 align-items-center firstLevelMenu">
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
