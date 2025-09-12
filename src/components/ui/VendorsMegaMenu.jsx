import React, { useState } from "react";
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

function MenuIcon(path) {
  return <img src={path} className="megaMenuIcon" />
}



// Icon-enhanced category data
const categoryData = [
  { name: "Accessories", icon: MenuIcon(Accessories), services: [] },
  { name: "Food & Beverages", icon: MenuIcon(Food), services: [] },
  { name: "Decor", icon: MenuIcon(Decor), services: [] },
  { name: "Entertainment", icon: MenuIcon(Entertainment), services: [] },
  { name: "Hospitality", icon: MenuIcon(Hospitality), services: [] },
  { name: "Leisure", icon: MenuIcon(Beach), services: [] },
  { name: "Outdoor", icon: MenuIcon(Raft), services: [] },
  { name: "Printed Materials", icon: MenuIcon(Mail), services: [] },
  { name: "Rentals / Book / Hire", icon: MenuIcon(Rentals), services: [] },
  { name: "Transportation", icon: MenuIcon(Transport), services: [] },
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

const VendorsMegaMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Services");

  return (
    <section className="mega-menu vendor-mega-menu">
      <h4 className="h5 mega-menu-title mb-2 fw-bold">VENDOR CATEGORIES <span className="fw-normal">(SELECT APPLICABLE)</span></h4>
      {/* <Container> */}
        <Row>
          {/* Sidebar */}
          <Col md={5}>
            <ListGroup>
              {categoryData.map(({ name, icon }) => (
                <ListGroup.Item
                  key={name}
                  active={name === selectedCategory}
                  onClick={() => setSelectedCategory(name)}
                  className="d-flex align-items-center gap-2 menu-category-item"
                >
                  {icon}
                  {name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Content Panel */}
          <Col md={7}>
              <h4 className="h6 d-flex align-items-center gap-2 menu-category-item">
                {
                  categoryData.find(cat => cat.name === selectedCategory)?.icon
                }
                {selectedCategory}
              </h4>
                {categoryData.find((cat) => cat.name === selectedCategory)
                  ?.services.length > 0 ? (
                  <ul className="square-list">
                    {categoryData
                      .find((cat) => cat.name === selectedCategory)
                      .services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-muted">
                    No services listed under this category yet.
                  </p>
                )}
          </Col>
        </Row>
      {/* </Container> */}
    </section>
  );
};

export default VendorsMegaMenu;
