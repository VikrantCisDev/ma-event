import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";
import playStore from "../../assets/Images/play-store.png";
import appleStore from "../../assets/Images/apple-store.png";
import Image from "react-bootstrap/Image";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadcrumbSection from "../../components/ui/BreadcrumbSection";
import {
  Form,
  ListGroup,
  ListGroupItem,
  Button,
  Carousel,
} from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import { MdCameraAlt } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import IconWrapper from "../../components/ui/IconWrapper";
import ProductImg from "../../assets/Images/card6.jpg";
import ViewProfile from "../../assets/Images/view-profile.png";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { FaShareAlt } from "react-icons/fa";
import SimiliarProducts from "../../components/ui/SimiliarProducts";

const VendorsPage = () => {
  const newrating = 3;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [fav, setfav] = useState(true);

  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const images = [
    ProductImg,
    ProductImg,
    ProductImg,
    ProductImg,
    ProductImg,
    ProductImg,
  ];

  return (
    <>
      <main className="main-section">
        <div className="vendorPage pt-lg-5 pt-4">
          <section className="vpMidSec ">
            <Container className="custom-container">
              <div className="px-lg-5">
                <Row className="justify-content-between">
                  <Col lg="7" sm="12">
                    <div className="vpLeftSec">
                      <BreadcrumbSection
                        FirstBredItem="Home"
                        SecondBredItem="Vendors"
                        ThirdBredItem="Catering"
                        ActiveBredItem="Jail's Catering Services"
                      />

                      <div className="vpItemSec">
                        <div>
                          {/* Main Product Slider */}
                          <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="main-slider mb-2"
                          >
                            {images.map((src, idx) => (
                              <SwiperSlide key={idx} className="ProductImg">
                                <img src={src} alt={`Product ${idx}`} />
                                <span className="verified">VERIFIED</span>
                                <div
                                  className="addToFav"
                                  onClick={() => setfav(!fav)}
                                >
                                  <span className="text-white">
                                    Add to Favourites
                                  </span>
                                  <span className="fav-icon ms-2 pink-text">
                                    {fav ? (
                                      <IoMdHeart size={34} />
                                    ) : (
                                      <IoMdHeartEmpty
                                        className="text-white"
                                        size={34}
                                      />
                                    )}
                                  </span>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                          {/* Thumbnails */}
                          <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="thumbs-slider"
                          >
                            {images.map((src, idx) => (
                              <SwiperSlide key={idx}>
                                <img src={src} alt={`Thumbnail ${idx}`} />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>

                        <div className="ProductDetails">
                          <div className="d-flex justify-content-between align-items-center py-2 flex-wrap">
                            <div className="icon-text ">
                              <MdAccessTime size={30} className="pink-text" />{" "}
                              <span className="fw-regular h5 mb-0">
                                3 days ago
                              </span>
                            </div>
                            <div className="icon-text ">
                              <FaEye size={30} className="pink-text" />{" "}
                              <span className="fw-regular h5 mb-0">
                                792 views
                              </span>
                            </div>
                            <div className="icon-text ">
                              <FaShareAlt size={30} className="pink-text" />{" "}
                              <span className="fw-regular h5 mb-0">
                                Share this <b>Ad</b>
                              </span>
                            </div>
                            <div className="icon-text ">
                              <GrChatOption size={30} className="pink-text" />{" "}
                              <span className="fw-regular h5 mb-0">
                                Leave a Review
                              </span>
                            </div>
                          </div>
                          <div className="pdRow">
                            <div className="pdLeft">
                              <div className="pdTitle">
                                <h2 className="pink-text fs-1 fw-bold">
                                  Jail's Catering Services
                                </h2>
                              </div>
                            </div>
                            <div className="pdRight">
                              <ListGroup variant="flush">
                                <ListGroupItem className="border-0 pt-2 p-0">
                                  <div className="d-flex align-items-center  justify-content-end">
                                    {Array.from({ length: 5 }, (_, i) => (
                                      <span
                                        key={i}
                                        className={
                                          i < newrating ? "rated" : "unrated"
                                        }
                                      >
                                        <FaRegStar />
                                      </span>
                                    ))}
                                  </div>
                                </ListGroupItem>
                              </ListGroup>
                            </div>
                          </div>
                          <div className="pdRow lh-1 m-0">
                            <h4 className="d-flex align-items-center">
                              <span className="pink-text">
                                <IoLocationSharp />
                              </span>{" "}
                              East London / Easterncape
                            </h4>
                            <p className="fw-bold text-end border-0 pt-2 p-0">
                              STAR RATING
                            </p>
                          </div>
                          <div className="pdRow ">
                            <div className="price-box px-3 text-white">
                              <span className="fw-bold h2">R3,000.00</span>
                            </div>
                            <div className="report-btn lh-1 h5 fw-normal px-3">
                              Report abuse
                            </div>
                          </div>

                          <div className="pdRow my-4">
                            <h3 className="h3 pink-text mb-2 fw-bold">
                              Description
                            </h3>
                            <p className="fs-5">
                              Cakes and Sweets Galore is a bakery that makes
                              cakes and sweets of all prices for different
                              occasions, Birthdays, weddings, parties we have
                              all cakes at affordbale prices and flavours… Cakes
                              and Sweets Galore is a bakery that makes cakes and
                              sweets of all prices for different occasions,
                              Birthdays, weddings, parties we have all cakes at
                              affordbale prices and flavours…
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="5" md="6" sm="12">
                    <div className="vpRightSec ps-lg-5">
                      <div className="vpForm border-0">
                        <div className="vpFormTop d-flex align-items-center gap-xxl-3 gap-2">
                          <FaUserCircle size={46} className="lightpink-text" />
                          <h3 className="text-white">Catering 501 (Pty) Ltd</h3>
                        </div>
                        <div className="border-bottom border-dark pt-2 pb-3 pink-text text-center tracking-wide-xl">
                          <p className="m-0 h4 fw-normal">
                            Member for{" "}
                            <span className="fw-bold text-black">
                              {" "}
                              1+ years
                            </span>{" "}
                            | Active Ads{" "}
                            <span className="fw-bold text-black">8</span>
                          </p>
                        </div>
                        <div className="vpFormBottom border-0 px-0">
                          <Row>
                            <Col>
                              <h4 className="fw-bold mb-2">Member Stats</h4>
                              <div className="icon-text mb-2">
                                <MdFormatListBulletedAdd
                                  size={30}
                                  className="pink-text"
                                />{" "}
                                <span className="fw-bold h5 mb-0">
                                  50 Total Listings
                                </span>
                              </div>
                              <div className="icon-text ">
                                <FaEye size={30} className="pink-text" />{" "}
                                <span className="fw-bold h5 mb-0">
                                  378.10K Total Views
                                </span>
                              </div>
                            </Col>

                            <Col>
                              <div className="d-flex flex-column align-items-center mt-auto ms-auto w-fit">
                                <Image
                                  src={ViewProfile}
                                  className="viewProfileIcon"
                                />
                                <p className="fw-semibold fs-5 m-0">
                                  View Profile
                                </p>
                                <ul className="social_links gap-2">
                                  <li>
                                    <a href="#">
                                      <ImFacebook2 />
                                    </a>
                                  </li>

                                  <li>
                                    <a href="#">
                                      <FaInstagram />
                                    </a>
                                  </li>

                                  <li>
                                    <a href="#">
                                      <FaTwitter />
                                    </a>
                                  </li>

                                  <li>
                                    <a href="#">
                                      <FaYoutube />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaWhatsapp />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </Col>

                            <Col sm={12} className="d-flex gap-2 my-4">
                              <Button
                                variant="primary"
                                className="w-100 dark-btn fs-4 fw-bold"
                              >
                                Message Seller
                              </Button>
                              <Button
                                variant="secondary"
                                className="w-100 gray-btn blue-bg fs-4 fw-bold"
                              >
                                Phone Number
                              </Button>
                            </Col>
                          </Row>

                          <Form>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formFirstName"
                            >
                              <Col>
                                <Form.Control
                                  type="text"
                                  placeholder="First name"
                                />
                              </Col>
                              <Col>
                                <Form.Control
                                  type="text"
                                  placeholder="Last name"
                                />
                              </Col>
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                              <Form.Control
                                type="email"
                                placeholder="Email Address"
                              />
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formFirstName"
                            >
                              <Col>
                                <Form.Control
                                  type="tel"
                                  placeholder="Phone number"
                                />
                              </Col>
                              <Col>
                                <Form.Control type="date" />
                              </Col>
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              controlId="formMessage"
                            >
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Write your message..."
                              />
                            </Form.Group>

                            <Button
                              type="submit"
                              className="dark-btn rounded-0 w-100 fs-4 fw-bold"
                              block
                            >
                              Send Message
                            </Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>

          {/* similiar vendors section  */}

          <SimiliarProducts />

          <IconWrapper />
        </div>
      </main>
    </>
  );
};

export default VendorsPage;
