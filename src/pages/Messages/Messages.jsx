import React, { useState } from "react";
import "./Messages.css";
import IconWrapper from "../../components/ui/IconWrapper";
import ProductCardStyle2 from "../../components/ui/ProductCardStyle2";
import Image1 from "../../assets/Images/card6.jpg";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import {
  FiHome,
  FiMusic,
  FiCamera,
  FiScissors,
  FiTruck,
  FiUsers,
  FiChevronRight,
} from "react-icons/fi";
import { GiCakeSlice, GiDiamondRing, GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineStorefront, MdOutlineEventSeat } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";


const myAds = [
  {
    id: 1,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "R3,000",
    time: "1 Year ago",
    views: "896",
    bookMarkType: "Photography",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 2,
    name: null,
    rating: 3,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "ON CALL",
    time: "2 weeks ago",
    views: "82",
    bookMarkType: "Decor",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 3,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "NEGOTIABLE",
    time: "8 months ago",
    views: "45",
    bookMarkType: "Professional Makeup",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 4,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "R1,200",
    time: "6 weeks ago",
    views: "92",
    bookMarkType: "Cakes",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 5,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "R1,200",
    time: "6 weeks ago",
    views: "92",
    bookMarkType: "Cakes",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
];


const Messages = () => {

  return (
    <>
      <div className="message-main py-lg-5 py-4">
        <div className="custom-container">
          <h2 className="h3 pink-text mb-4">My Active Ads ({myAds.length})</h2>
          <div className="myads-wrapper">
            {myAds.map((item) => (
              <ProductCardStyle2 item={item} key={item.id} />
            ))}
          </div>

          <br />
        </div>
      </div>
      <IconWrapper />
    </>
  );
};

export default Messages;
