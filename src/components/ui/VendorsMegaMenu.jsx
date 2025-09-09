import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import {
  FaGem,
  FaUtensils,
  FaPaintBrush,
  FaMusic,
  FaHotel,
  FaSwimmer,
  FaTree,
  FaPrint,
  FaBookOpen,
  FaBus,
  FaConciergeBell,
} from "react-icons/fa";

// Icon-enhanced category data
const categoryData = [
  { name: "Accessories", icon: <FaGem />, services: [] },
  { name: "Food & Beverages", icon: <FaUtensils />, services: [] },
  { name: "Decor", icon: <FaPaintBrush />, services: [] },
  { name: "Entertainment", icon: <FaMusic />, services: [] },
  { name: "Hospitality", icon: <FaHotel />, services: [] },
  { name: "Leisure", icon: <FaSwimmer />, services: [] },
  { name: "Outdoor", icon: <FaTree />, services: [] },
  { name: "Printed Materials", icon: <FaPrint />, services: [] },
  { name: "Rentals / Book / Hire", icon: <FaBookOpen />, services: [] },
  { name: "Transportation", icon: <FaBus />, services: [] },
  {
    name: "Services",
    icon: <FaConciergeBell />,
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
