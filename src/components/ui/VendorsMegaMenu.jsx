import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";

import Accessories from "../../assets/Images/m-accessories.png"
import Decor from "../../assets/Images/m-decor.png"
import Entertainment from "../../assets/Images/m-music.png"
import Food from "../../assets/Images/m-food.png"
import Hospitality from "../../assets/Images/m-hospitality.png"
import Beach from "../../assets/Images/m-beach.png"
import Raft from "../../assets/Images/m-raft.png"
import Mail from "../../assets/Images/m-mail.png"
import Rentals from "../../assets/Images/m-rentals.png"
import Transport from "../../assets/Images/m-transport.png"
import Service from "../../assets/Images/m-service.png"
import { Link } from "react-router-dom";

function MenuIcon(path) {
  return <img src={path} className="megaMenuIcon" />
}


// category data
const categoryData = [
  { 
    name: "Accessories", 
    icon: MenuIcon(Accessories), 
    services: [
      "Jewellery",
      "Wedding Rings",
      "Traditional Jewelers",
    ] 
  },
  { 
    name: "Food & Beverages", 
    icon: MenuIcon(Food), 
    services: [
      "Catering",
      "Cakes",
      "Bar",
      "Wines & Spirits",
      "Baristas",
    ] 
  },
  { 
    name: "Decor", 
    icon: MenuIcon(Decor), 
    services: [
      "Draping",
      "Stage Lighting",
      "Florists",
      "Audio Visual",
    ] 
  },
  { 
    name: "Entertainment", 
    icon: MenuIcon(Entertainment), 
    services: [
      "Cultural Dance Groups",
      "Music Bands",
      "Events Musicians",
      "DJ's",
      "Choirs",
      "Comedy",
    ] 
  },
  { 
    name: "Hospitality", 
    icon: MenuIcon(Hospitality), 
    services: [
      "Hotels",
      "Lodges",
      "Guest House’s",
      "BnB’s",
      "Back Packers",
    ] 
  },
  { 
    name: "Leisure", 
    icon: MenuIcon(Beach), 
    services: [
      "Beaches",
      "Boat Cruises",
      "Kayaking",
      "Surfing",
      "Air Gliding",
      "Water Rafting",
      "Bungee Jumping",
    ] 
  },
  { 
    name: "Outdoor", 
    icon: MenuIcon(Raft), 
    services: [
      "Camp sites",
      "Hiking",
      "Farm land sites",
      "Game Parks",
    ] 
  },
  { 
    name: "Printed Materials", 
    icon: MenuIcon(Mail), 
    services: [
      "Invitation Cards",
      "Back Drop/ Signage",
      "Programs",
      "Name Tags",
    ] 
  },
  { 
    name: "Rentals / Book / Hire", 
    icon: MenuIcon(Rentals), 
    services: [
      "PA Systems",
      "Tents & Chairs",
      "Mobile Fridge",
      "MC's",
      "Car Hire",
      "Mobile Toilets",
    ] 
  },
  { 
    name: "Transportation", 
    icon: MenuIcon(Transport), 
    services: [
      "Taxis",
      "Combi services",
      "Buses",
      "Limo services",
      "Trains",
      "Airlines",
      "Wedding Horse Carriage",
    ] 
  },
  {
    name: "Services",
    icon: MenuIcon(Service),
    services: [
      "Events Venues",
      "Beauty Spa's",
      "Security",
      "Event Ushers",
      "Professional Makeup",
      "Nail Technician",
      "Cakes",
      "Catering",
      "Photographers",
      "Videography",
      "Events Cleaners",
      "Tailored Outfits",
      "Graduation Outfits",
      "Matric Dance Outfits",
      "Events Planners",
    ],
  },
];


const VendorsMegaMenu = ({menuStatus}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory("");
  }, [menuStatus]);

  return (
    <section className="mega-menu vendor-mega-menu">
      <h4 className="h5 mega-menu-title mb-2 fw-bold">VENDOR CATEGORIES <span className="fw-normal">(SELECT APPLICABLE)</span></h4>
      {/* <Container> */}
        <Row>
          {/* Sidebar */}
          <Col md={6}>
            <ListGroup>
              {categoryData.map(({ name, icon }) => (
                <ListGroup.Item
                  key={name}
                  active={name === selectedCategory}
                  onMouseEnter={() => setSelectedCategory(name)}
                  className="d-flex align-items-center gap-2 menu-category-item"
                >
                  {icon}
                  {name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Content Panel */}
          <Col md={6}>
              <h4 className="h6 d-flex align-items-center gap-2 menu-category-item">
                {
                  categoryData.find(cat => cat.name === selectedCategory)?.icon
                }
                {selectedCategory}
              </h4>
                {categoryData.find((cat) => cat.name === selectedCategory)
                  ?.services.length > 0 ? (
                  <ul className="square-list menu-category-list">
                    {categoryData
                      .find((cat) => cat.name === selectedCategory)
                      .services.map((service, idx) => (
                        <li key={idx}><Link>{service}</Link></li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-muted">
                    {selectedCategory && <em>No services listed under this category yet.</em>}
                  </p>
                )}
          </Col>
        </Row>
      {/* </Container> */}
    </section>
  );
};

export default VendorsMegaMenu;
