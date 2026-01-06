import { Button, Col, Form, Offcanvas, Row } from "react-bootstrap";
import "../../styles/customOffcanvas.css";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCardStyle2 from "./ProductCardStyle2";

import Image1 from "../../assets/Images/card1.jpg";
import Image2 from "../../assets/Images/card2.jpg";
import Image3 from "../../assets/Images/card3.jpg";
import Image4 from "../../assets/Images/card5.jpg";
import Image5 from "../../assets/Images/card6.jpg";

const venueData = [
  {
    id: 1,
    name: "Phillip Photography",
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
    name: "BM Events",
    rating: 5,
    location: "Matha / Easterncape",
    img: Image2,
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
    name: "Jamalica Beauty",
    rating: 5,
    location: "Gauteng",
    img: Image3,
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
    name: "Lauryn Jewelry",
    rating: 5,
    location: "Durban / North",
    img: Image4,
    price: "R10,000",
    time: "5 Months ago",
    views: "446",
    bookMarkType: "Jewelry",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 5,
    name: "Sibusiso Cooking",
    rating: 5,
    location: "Bhisho / Easterncape",
    img: Image5,
    price: "R10,000",
    time: "3 Year ago",
    views: "11k",
    bookMarkType: "Catering",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 6,
    name: "Phillip Photography",
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
];

const CustomOffcanvas = ({
  show,
  onClose,
  title,
  placement = "end",
  children,
  backdrop = true,
  scroll = false,
  className = "",
}) => {
  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement={placement}
      backdrop={backdrop}
      scroll={scroll}
      className={`customOffcanvas ${className}`}
    >
      {title && (
        <Offcanvas.Header>
          <div className="oc-closeBtn" onClick={onClose}>
            <FaArrowRightLong />
          </div>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
      )}

      <Offcanvas.Body>
        <Form>
          <Form.Group className="mb-3" controlId="addSupplier">
            <Form.Control
              type="text"
              placeholder="Add a supplier to your shortlist..."
            />
          </Form.Group>
        </Form>

        <Row className="g-4">
          {venueData.map((item,idx) => (
            <Col xl={4} md={6} key={idx}>
              <ProductCardStyle2 item={item} key={item.id} />
            </Col>
          ))}
        </Row>

        <div className="d-flex mt-5 justify-content-center ">
          <Button className="btn-theme fw-semibold fs-5 
           px-lg-4 py-lg-2 text-uppercase rounded-0">
            Browse More Venues
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;
