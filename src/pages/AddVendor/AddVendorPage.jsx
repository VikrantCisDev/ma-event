import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Image,
} from "react-bootstrap";
import IconWrapper from "../../components/ui/IconWrapper";
import "./AddVendorPage.css";
import image1 from "../../assets/Images/jewelry.png";
import image2 from "../../assets/Images/decor.png";
import image3 from "../../assets/Images/band.png";
import image4 from "../../assets/Images/food.png";
import image5 from "../../assets/Images/hospitality.png";
import image6 from "../../assets/Images/beach.png";
import image7 from "../../assets/Images/rafting.png";
import image8 from "../../assets/Images/invitation.png";
import image9 from "../../assets/Images/tent.png";
import image10 from "../../assets/Images/bus.png";
import image11 from "../../assets/Images/service.png";
import image12 from "../../assets/Images/couple.png";

export let cardData = [
  {
    img: image1,
    title: "Accessories",
    bgColor: "blue",
  },
  {
    img: image2,
    title: "Decor",
    bgColor: "green",
  },
  {
    img: image3,
    title: "Entertainment",
    bgColor: "orange",
  },
  {
    img: image4,
    title: "Food & Beverages",
    bgColor: "blue",
  },
  {
    img: image5,
    title: "Hospitality",
    bgColor: "green",
  },
  {
    img: image10,
    title: "Transportation",
    bgColor: "blue",
  },
  {
    img: image6,
    title: "Leisure",
    bgColor: "green",
  },
  {
    img: image7,
    title: "Outdoor",
    bgColor: "orange",
  },
  {
    img: image8,
    title: "Printed Materials",
    bgColor: "blue",
  },
  {
    img: image9,
    title: "Rentals / Book / Hire",
    bgColor: "green",
  },
  {
    img: image11,
    title: "Services",
    bgColor: "orange",
  },
];

const AddVendorPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: "",
    price: "",
    rateType: "year",
    region: "Eastern Cape",
    region_city: "",
    mobile: "",
    email: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData((prev) => ({ ...prev, images: files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API logic or dummy data handling here
  };

  return (
    <>
      <section>
        <div className="custom-container py-5">
          <div className="mt-4 ">
            <Container>
              <h1 className="h3 pink-text mb-4">
                Select the most relevant category to get started.
              </h1>

              <div className="categoryGrid my-4 py-2">
                {cardData.map((item, idx) => {
                  return (
                    <div
                      className={`catCard card-${item.bgColor} p-lg-3 p-2 rounded-4`}
                      key={idx}
                    >
                      <Image src={item.img} fluid />
                      <p className="mt-2 mb-0 fw-medium">{item.title}</p>
                    </div>
                  );
                })}
              </div>

              <h2 className="h3 pink-bg text-white px-3 py-2 mb-4 rounded">
                GET YOUR BUSINESS LISTED FOR FREE ON MAEVENT!
              </h2>
              <Form onSubmit={handleSubmit}>
                {/* Listing Title */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                    <span>Listing Title</span> <span>(0/100)</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    maxLength={100}
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter listing title"
                  />
                </Form.Group>

                {/* Category & Subcategory */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Category
                      </Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="">Select category</option>
                        <option value="Services">Services</option>
                        <option value="Products">Products</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Subcategory
                      </Form.Label>
                      <Form.Select
                        name="subcategory"
                        value={formData.subcategory}
                        onChange={handleChange}
                      >
                        <option value="">Select subcategory</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Design">Design</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Description */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                    <span>Description</span> <span>(0/3000)</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="description"
                    maxLength={3000}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add any other information that might be of use to your potential clients."
                  />
                </Form.Group>

                {/* Price */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                    Price
                  </Form.Label>
                  <InputGroup>
                    <Form.Select
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Amount"
                    >
                      <option value="amount">Amount</option>
                      <option value="month">Rate per month</option>
                    </Form.Select>
                    <div className="px-3 pink-text fw-bold fs-4 lh-1 pt-1">
                      :
                    </div>
                    <Form.Select
                      name="rateType"
                      value={formData.rateType}
                      onChange={handleChange}
                    >
                      <option value="year">Rate per year</option>
                      <option value="month">Rate per month</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>

                {/* Location */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                    Location
                  </Form.Label>
                  <Form.Select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                  >
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="Gauteng">Gauteng</option>
                  </Form.Select>
                  <Form.Select
                    name="region_city"
                    value={formData.region_city}
                    onChange={handleChange}
                    className="mt-3"
                  >
                    <option value="Select City">Select City</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="Gauteng">Gauteng</option>
                  </Form.Select>
                </Form.Group>

                {/* Contact Details */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Mobile Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="123 456 7890"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="maeve@maeveinmyway.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h4 className="pink-text mb-2">Social</h4>
                    <p className="text-muted lh-1">
                      Please include any links to Social Media, Videos. Be sure
                      to include the 'http://www...' as it would read in a web
                      address. <br />
                      For example: http://www.facebook.com/maevent or
                      http://www.instagram.com/maevent
                    </p>
                  </Col>
                </Row>

                {/* Social Media Links */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Facebook
                      </Form.Label>
                      <Form.Control
                        type="url"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        placeholder="Facebook profile link"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Twitter
                      </Form.Label>
                      <Form.Control
                        type="url"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        placeholder="Twitter profile link"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        LinkedIn
                      </Form.Label>
                      <Form.Control
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="LinkedIn profile link"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center justify-content-between">
                        Instagram
                      </Form.Label>
                      <Form.Control
                        type="url"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="Instagram profile link"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Upload Photos */}
                <Form.Group className="mb-4">
                  <h4 className="fw-semibold d-flex align-items-center justify-content-between mb-2">
                    Upload Photos
                  </h4>
                  <p className="lh-1">
                    Upload JPEG, JPG, PNG, BMP, WEBP, HEIC or AVIF images
                    (minimum 220x220 pixels, maximum 10MB).
                  </p>
                  <div className="uploadPhoto py-5 px-4 rounded-4">
                    <Form.Control
                      type="file"
                      name="images"
                      multiple
                      accept=".jpeg,.jpg,.png,.bmp,.webp,.heic,.avif"
                      onChange={handleChange}
                    />
                    <div className="btn-theme mx-auto mt-4 mb-2 w-fit px-4 py-2 fw-bold fs-5 rounded-2">
                      Upload Photos
                    </div>
                    <p className="text-muted lh-1 m-0 text-center">
                      Or Drag & Drop files
                      <br className="d-md-block d-none" />
                      to rearrange
                    </p>
                  </div>
                </Form.Group>

                {/* Submit Button */}
                <div className="d-flex mt-5">
                  <Button
                    type="submit"
                    className="mx-auto px-sm-4 btn-theme fw-bold fs-4  py-2"
                  >
                    Post Advert
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      </section>
      <IconWrapper />
    </>
  );
};

export default AddVendorPage;
