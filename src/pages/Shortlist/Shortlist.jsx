import React, { useState } from "react";
import "./Shortlist.css";
import IconWrapper from "../../components/ui/IconWrapper";
import ProductCardStyle2 from "../../components/ui/ProductCardStyle2";
import Image1 from "../../assets/Images/card6.jpg";
import {
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Image,
  Form,
} from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import {
  FiHome,
  FiMusic,
  FiCamera,
  FiSearch,
  FiScissors,
  FiTruck,
  FiUsers,
  FiChevronRight,
} from "react-icons/fi";

import { GiCakeSlice, GiDiamondRing, GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineStorefront, MdOutlineEventSeat } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

import { SlHome } from "react-icons/sl";
import { LiaWineGlassAltSolid } from "react-icons/lia";
import { LiaLeafSolid } from "react-icons/lia";
import { PiMusicNotesBold } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GrDiamond } from "react-icons/gr";
import { GiKnifeFork } from "react-icons/gi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { PiVideoCameraBold } from "react-icons/pi";
import { LiaBlackTie } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import ToolCardsWrap from "../../components/ui/ToolCardsWrap";
import CustomOffcanvas from "../../components/ui/CustomOffcanvas";

export const servicesData = [
  {
    id: 1,
    icon: SlHome,
    title: "Your Venue",
    subtitle: "5 SAVED",
    isSaved: true,
    isBooked: false,
  },
  {
    id: 2,
    icon: LiaLeafSolid,
    title: "Your Florist",
    subtitle: "5 SAVED",
    isSaved: true,
    isBooked: false,
  },
  {
    id: 3,
    icon: LiaWineGlassAltSolid,
    title: "Your Caterer",
    subtitle: "5 SAVED",
    isSaved: true,
    isBooked: false,
  },
  {
    id: 4,
    icon: PiMusicNotesBold,
    title: "Your Music",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 5,
    icon: LiaBirthdayCakeSolid,
    title: "Your Cake Maker",
    subtitle: "JAVED ALI",
    isSaved: false,
    isBooked: true,
  },
  {
    id: 6,
    icon: FiScissors,
    title: "Your Hair & Beauty",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 7,
    icon: GrDiamond,
    title: "Your Jewellers",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 8,
    icon: MdOutlineStorefront,
    title: "Your Decor & Hire",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 9,
    icon: HiOutlineBuildingLibrary,
    title: "Your Marquee",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 10,
    icon: FiCamera,
    title: "Your Photographer",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 11,
    icon: PiVideoCameraBold,
    title: "Your Videographer",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 12,
    icon: LiaBlackTie,
    title: "Your Dressmaker",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 13,
    icon: LiaBlackTie,
    title: "Your Menswear",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 14,
    icon: MdOutlineLocationOn,
    title: "Your Transport",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
  {
    id: 15,
    icon: BiMessageDetail,
    title: "Your Planners",
    subtitle: "",
    isSaved: false,
    isBooked: false,
  },
];

const ServiceCard = ({ item, handleClick }) => {
  const Icon = item.icon;

  return (
    <div
      className={`service-card h-100 ${item.isBooked ? "booked-card" : ""} ${
        item.isSaved ? "saved-card" : ""
      }`}
    >
      <div className="sc-icon">
        <Icon />
      </div>

      <div className="d-flex align-items-center gap-3 px-md-4 px-3">
        <div className="flex-grow-1">
          <h6 className="sc-title">{item.title}</h6>

          {item.subtitle && (
            <span className="sc-subtitle">{item.subtitle || "SAVED"}</span>
          )}
        </div>

        <Button className="text-decoration-none action-btn" onClick={handleClick}>
          {item.isBooked ? "Booked " : "Get started "} <FiChevronRight />
        </Button>
      </div>
    </div>
  );
};

const Shortlist = () => {
  const [tab, setTab] = useState("shortlisted");
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="shortlist-main my-5">
        <div className="custom-container mb-5 px-xxl-5">
          <div className="mx-xxl-5">
            <div className="px-lg-3">
              <ToolCardsWrap />
            </div>

            <div className="d-flex flex-column flex-md-row  align-items-start align-items-md-center mb-4 px-lg-3">
              <div className="">
                <h2 className="h3 pink-text mb-2">Our Shortlist</h2>
                <p className="pink-text mb-0 fs-5">Robert Teye's Guests</p>
              </div>

              <div className="shortlist-search mt-3 d-flex justify-content-end">
                <div className="search-box d-flex gap-1 align-items-center">
                  <input
                    type="text"
                    className="shortlist-input"
                    placeholder="Add a supplier to your shortlist..."
                    aria-label="Add a supplier to your shortlist"
                  />
                  <button className="search-btn d-flex align-items-center">
                    <FiSearch />
                    <span>SEARCH</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="servicesWrapper p-3 rounded pb-4">
              {/* Tabs */}
              <div className="mb-4 gap-2 d-flex sc-tabs-wrap">
                <ToggleButton
                  id="shortlisted"
                  type="radio"
                  variant="outline-secondary"
                  checked={tab === "shortlisted"}
                  onChange={() => setTab("shortlisted")}
                >
                  Shortlisted
                </ToggleButton>
                <ToggleButton
                  id="booked"
                  type="radio"
                  variant="outline-secondary"
                  checked={tab === "booked"}
                  onChange={() => setTab("booked")}
                >
                  Booked
                </ToggleButton>
              </div>

              {/* Grid */}
              <Row className="g-3">
                {tab === "shortlisted" &&
                  servicesData.map((item, idx) => (
                    <Col key={idx} xs={12} md={6} >
                      <ServiceCard item={item} handleClick={() => setShow(!show)}/>
                    </Col>
                  ))}

                {tab === "booked" &&
                  servicesData
                    .filter((item) => item.isBooked)
                    .map((item, idx) => (
                      <Col key={idx} xs={12} md={6}>
                        <ServiceCard item={item} />
                      </Col>
                    ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
      <IconWrapper />

      <CustomOffcanvas
        show={show}
        onClose={() => setShow(false)}
        title="Your Venue"
        backdrop={false}
      />
    </>
  );
};

export default Shortlist;
