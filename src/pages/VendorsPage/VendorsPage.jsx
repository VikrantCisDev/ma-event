import React, { useState } from 'react';
import './style.css';
import playStore from '../../assets/Images/play-store.png';
import appleStore from '../../assets/Images/apple-store.png';
import Image from 'react-bootstrap/Image';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BreadcrumbSection from '../../components/ui/BreadcrumbSection';
import ProductImg from '../../assets/Images/card6.jpg';
import { Form, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FaRegStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import { MdCameraAlt } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa'
import MultiMenus from '../../components/ui/MultiMenus';



const VendorsPage = () => {
    const newrating = 3;
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);


    return (
        <>
    
            {/* <main className='main-section'>
                <div className='vendorPage'>
                    <section className="vptopSec">
                        <Container className='custom-container'>
                            <Row>
                                <Col>
                                    <ul className="topStoreList">
                                        <li>
                                            <a href="#">
                                                <Image src={playStore} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image src={appleStore} />
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="vpMidSec">
                        <Container className='custom-container'>
                            <Row>
                                <Col xs="7" >
                                    <div className="vpLeftSec">
                                        <BreadcrumbSection
                                            FirstBredItem='Home'
                                            SecondBredItem='Vendors'
                                            ThirdBredItem='Catering'
                                            ActiveBredItem="Jail's Catering Services"
                                        />

                                        <div className="vpItemSec">
                                            <div className="ProductImg">
                                                <Image src={ProductImg} className='img-fluid' />
                                                <span className='verified'>VERIFIED</span>
                                            </div>
                                            <div className="ProductDetails">
                                                <div className="pdRow">
                                                    <div className="pdLeft">
                                                        <div className="pdTitle">
                                                            <h2 className='pink-text'>Jail's Catering Services</h2>

                                                        </div>
                                                    </div>
                                                    <div className="pdRight">
                                                        <ListGroup variant="flush">
                                                            <ListGroupItem className='border-0 pt-2 p-0'>
                                                                <div className="d-flex align-items-center  justify-content-end">


                                                                    {Array.from({ length: 5 }, (_, i) => (
                                                                        <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                            <FaRegStar />

                                                                        </span>
                                                                    ))}



                                                                </div>
                                                            </ListGroupItem>
                                                            <ListGroupItem className='fw-semibold text-end border-0 pt-2 p-0'>
                                                                STAR RATING
                                                            </ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                </div>


                                                <div className="pdRow mb-4">
                                                    <div className="pdLeft">
                                                        <div className="pdLocation">

                                                            <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                                <IoLocationSharp /></span> East London / Easterncape</h4>
                                                            <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                                &#40; Map Location &#41;
                                                            </h6>

                                                            <h6 className="pink-text text-uppercase fw-bold">
                                                                Interact with us
                                                            </h6>


                                                            <ul className='social_links'>
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

                                                                <li>
                                                                    <a href="#">
                                                                        <TbWorldSearch />
                                                                    </a>
                                                                </li>
                                                            </ul>


                                                        </div>
                                                    </div>
                                                    <div className="pdRight">
                                                        <div className="reviewBoxes mb-4">
                                                            <div className="reviewBox">
                                                                <span><MdCameraAlt /> 0</span>
                                                                <p className='text-uppercase'>Albums</p>
                                                            </div>
                                                            <div className="reviewBox">
                                                                <span>
                                                                    <TiHeartFullOutline /> 21</span>
                                                                <p className='text-uppercase'>Loves</p>
                                                            </div>
                                                            <div className="reviewBox">
                                                                <span>

                                                                    <FaCommentDots /> 3
                                                                </span>
                                                                <p className='text-uppercase'>Reviews</p>
                                                            </div>
                                                            <div className="reviewBox">
                                                                <span><FaCheck /></span>
                                                                <p className='text-uppercase'>shortlist</p>
                                                            </div>
                                                        </div>
                                                        <p className="text-end text-uppercase mb-0 fw-medium">
                                                            Write a Reviews
                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="productGallery">
                                                    <div className="pdRow">
                                                        <div className="pdLeft">
                                                            <h4>Gallery</h4>
                                                        </div>
                                                        <div className="pdRight">
                                                            <a href="#" className='text-uppercase pink-text fs-5 fw-bold'>View All</a>



                                                        </div>
                                                    </div>


                                                    <div className='productGalleryBoxes'>
                                                        <div className='proGalleryBox'>
                                                            <Image src={ProductImg} className='img-fluid' />
                                                        </div>
                                                        <div className='proGalleryBox'>
                                                            <Image src={ProductImg} className='img-fluid' />
                                                        </div>
                                                        <div className='proGalleryBox'>
                                                            <Image src={ProductImg} className='img-fluid' />
                                                        </div>
                                                        <div className='proGalleryBox'>
                                                            <Image src={ProductImg} className='img-fluid' />
                                                        </div>
                                                        <div className='proGalleryBox'>
                                                            <Image src={ProductImg} className='img-fluid' />
                                                        </div>
                                                        <div className='proGalleryBox'>
                                                            <Image src={ProductImg} className='img-fluid' />
                                                        </div>
                                                    </div>



                                                    <Form className='mt-4'>
                                                        <h5 className='border-bottom pb-1'>Be the first to Write a Review on Jali’s Catering Services</h5>
                                                        <Form.Group as={Row} className="my-3">
                                                            <Form.Label column sm="2">Your rating:</Form.Label>
                                                            <Col sm="8">
                                                                {[...Array(5)].map((star, index) => {
                                                                    const ratingValue = index + 1;
                                                                    return (
                                                                        <label key={index}>
                                                                            <input
                                                                                type="radio"
                                                                                name="rating"
                                                                                value={ratingValue}
                                                                                onClick={() => setRating(ratingValue)}
                                                                                style={{ display: 'none' }}
                                                                            />
                                                                            <FaRegStar
                                                                                size={30}
                                                                                color={ratingValue <= (hover || rating) ? "#ff841e" : "#7a7a7a"}
                                                                                onMouseEnter={() => setHover(ratingValue)}
                                                                                onMouseLeave={() => setHover(null)}
                                                                            />
                                                                        </label>
                                                                    );
                                                                })}

                                                            </Col>
                                                            <Col sm="2">
                                                                <span>{rating === 0 ? "Not Rated" : `${rating} Star${rating > 1 ? 's' : ''}`}</span>
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Control type="text" placeholder="Enter Review title" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Control as="textarea" rows={3} placeholder="Tell us about your experience..." />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3 d-flex">
                                                            <Form.Control className='border-end-0 rounded-end-0' type="text" placeholder="How much did you spend on this vendor? (optional)" />
                                                            <Button variant="primary" className=' rounded-start-0 dark-btn' type="submit">
                                                                Submit
                                                            </Button>
                                                        </Form.Group>

                                                    </Form>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="5" >
                                    <div className="vpRightSec">
                                        <div className="vpForm">
                                            <div className="vpFormTop">
                                                <h6 className='text-white'>Share Jail's Catering Services</h6>
                                                <ul className='social_links'>
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

                                                    <li>
                                                        <a href="#">
                                                            <TbWorldSearch />
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="vpFormBottom">
                                                <Form>

                                                    <Form.Group as={Row} className='mb-3' controlId="formFirstName">
                                                        <Col>
                                                            <Form.Control type="text" placeholder="Enter your first name" />
                                                        </Col>
                                                        <Col>
                                                            <Form.Control type="text" placeholder="Enter your last name" />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group controlId="formEmail" className='mb-3'>
                                                        <Form.Control type="email" placeholder="Enter your email" />
                                                    </Form.Group>

                                                    <Form.Group as={Row} className='mb-3' controlId="formFirstName">
                                                        <Col>
                                                            <Form.Control type="tel" placeholder="Enter your phone number" />
                                                        </Col>
                                                        <Col>
                                                            <Form.Control type="date" />
                                                        </Col>
                                                    </Form.Group>


                                                    <Form.Group className='mb-3' controlId="formMessage">

                                                        <Form.Control as="textarea" rows={4} placeholder="Write your message" />
                                                    </Form.Group>

                                                    <Button type="submit" className='dark-btn w-100' block>
                                                        Send Message
                                                    </Button>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="vpContactDetailsForm mt-4 text-center">
                                            <Row>
                                                <Col>
                                                    <h4 className='mb-4'> Shortlist Jali’s Catering Services or Ask for a Quotation for their services</h4>
                                                    <Button variant="primary" className="m-2 dark-btn" >Request Price</Button>
                                                    <Button variant="secondary" className="m-2 gray-btn">Shortlist Vendor</Button>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4">
                                                <Col>
                                                    <div style={{ backgroundColor: '#8B1E64', color: 'white', padding: '10px' }}>
                                                        <h4>CONTACT DETAILS</h4>
                                                    </div>
                                                    <div style={{ backgroundColor: '#F8F8F8', padding: '10px' }}>
                                                        <h5>+277 (0) 45 678 9064</h5>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>


                    <section className='vpBottomSec'>
                        <Container className='custom-container'>
                            <Row>
                                <Col>

                                    <div className="vpItemSec">
                                        <div className="ProductImg">
                                            <Image src={ProductImg} className='img-fluid' />
                                            <span className='verified'>VERIFIED</span>
                                        </div>

                                        <div className="pdRow">
                                            <div className="pdLeft">
                                                <div className="pdTitle">
                                                    <h2 className='pink-text'>Jail's Catering Services</h2>

                                                </div>
                                            </div>
                                            <div className="pdRight w-100">
                                                <ListGroup variant="flush" className='w-100 flex-row justify-content-between align-items-center flex-wrap'>
                                                    <ListGroupItem className='border-0 pb-2 p-0'>
                                                        <div className="d-flex align-items-center">


                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                    <FaRegStar />

                                                                </span>
                                                            ))}



                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem className='fw-semibold border-0 starRating p-0'>
                                                        STAR RATING
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>


                                        <div className="pdRow mb-4">

                                            <div className="pdLocation">

                                                <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                    <IoLocationSharp /></span> East London / Easterncape</h4>
                                                <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                    &#40; Map Location &#41;
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col>

                                    <div className="vpItemSec">
                                        <div className="ProductImg">
                                            <Image src={ProductImg} className='img-fluid' />
                                            <span className='verified'>VERIFIED</span>
                                        </div>

                                        <div className="pdRow">
                                            <div className="pdLeft">
                                                <div className="pdTitle">
                                                    <h2 className='pink-text'>Jail's Catering Services</h2>

                                                </div>
                                            </div>
                                            <div className="pdRight w-100">
                                                <ListGroup variant="flush" className='w-100 flex-row justify-content-between align-items-center flex-wrap'>
                                                    <ListGroupItem className='border-0 pb-2 p-0'>
                                                        <div className="d-flex align-items-center">


                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                    <FaRegStar />

                                                                </span>
                                                            ))}


                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem className='fw-semibold border-0 starRating p-0'>
                                                        STAR RATING
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>


                                        <div className="pdRow mb-4">

                                            <div className="pdLocation">

                                                <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                    <IoLocationSharp /></span> East London / Easterncape</h4>
                                                <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                    &#40; Map Location &#41;
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col>

                                    <div className="vpItemSec">
                                        <div className="ProductImg">
                                            <Image src={ProductImg} className='img-fluid' />
                                            <span className='verified'>VERIFIED</span>
                                        </div>

                                        <div className="pdRow">
                                            <div className="pdLeft">
                                                <div className="pdTitle">
                                                    <h2 className='pink-text'>Jail's Catering Services</h2>

                                                </div>
                                            </div>
                                            <div className="pdRight w-100">
                                                <ListGroup variant="flush" className='w-100 flex-row justify-content-between align-items-center flex-wrap'>
                                                    <ListGroupItem className='border-0 pb-2 p-0'>
                                                        <div className="d-flex align-items-center">


                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                    <FaRegStar />

                                                                </span>
                                                            ))}



                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem className='fw-semibold border-0 starRating p-0'>
                                                        STAR RATING
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>


                                        <div className="pdRow mb-4">

                                            <div className="pdLocation">

                                                <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                    <IoLocationSharp /></span> East London / Easterncape</h4>
                                                <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                    &#40; Map Location &#41;
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col>

                                    <div className="vpItemSec">
                                        <div className="ProductImg">
                                            <Image src={ProductImg} className='img-fluid' />
                                            <span className='verified'>VERIFIED</span>
                                        </div>

                                        <div className="pdRow">
                                            <div className="pdLeft">
                                                <div className="pdTitle">
                                                    <h2 className='pink-text'>Jail's Catering Services</h2>

                                                </div>
                                            </div>
                                            <div className="pdRight w-100">
                                                <ListGroup variant="flush" className='w-100 flex-row justify-content-between align-items-center flex-wrap'>
                                                    <ListGroupItem className='border-0 pb-2 p-0'>
                                                        <div className="d-flex align-items-center">


                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                    <FaRegStar />

                                                                </span>
                                                            ))}



                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem className='fw-semibold border-0 starRating p-0'>
                                                        STAR RATING
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>

                                        <div className="pdRow mb-4">
                                            <div className="pdLocation">

                                                <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                    <IoLocationSharp /></span> East London / Easterncape</h4>
                                                <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                    &#40; Map Location &#41;
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col>

                                    <div className="vpItemSec">
                                        <div className="ProductImg">
                                            <Image src={ProductImg} className='img-fluid' />
                                            <span className='verified'>VERIFIED</span>
                                        </div>

                                        <div className="pdRow">
                                            <div className="pdLeft">
                                                <div className="pdTitle">
                                                    <h2 className='pink-text'>Jail's Catering Services</h2>

                                                </div>
                                            </div>
                                            <div className="pdRight w-100">
                                                <ListGroup variant="flush" className='w-100 flex-row justify-content-between align-items-center flex-wrap'>
                                                    <ListGroupItem className='border-0 pb-2 p-0'>
                                                        <div className="d-flex align-items-center">


                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                    <FaRegStar />

                                                                </span>
                                                            ))}
                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem className='fw-semibold border-0 starRating p-0'>
                                                        STAR RATING
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>


                                        <div className="pdRow mb-4">

                                            <div className="pdLocation">

                                                <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                    <IoLocationSharp /></span> East London / Easterncape</h4>
                                                <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                    &#40; Map Location &#41;
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col>

                                    <div className="vpItemSec">
                                        <div className="ProductImg">
                                            <Image src={ProductImg} className='img-fluid' />
                                            <span className='verified'>VERIFIED</span>
                                        </div>

                                        <div className="pdRow">
                                            <div className="pdLeft">
                                                <div className="pdTitle">
                                                    <h2 className='pink-text'>Jail's Catering Services</h2>

                                                </div>
                                            </div>
                                            <div className="pdRight w-100">
                                                <ListGroup variant="flush" className='w-100 flex-row justify-content-between align-items-center flex-wrap'>
                                                    <ListGroupItem className='border-0 pb-2 p-0'>
                                                        <div className="d-flex align-items-center">


                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i} className={i < newrating ? 'rated' : 'unrated'}>
                                                                    <FaRegStar />

                                                                </span>
                                                            ))}



                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem className='fw-semibold border-0 starRating p-0'>
                                                        STAR RATING
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>

                                        <div className="pdRow mb-4">
                                            <div className="pdLocation">
                                                <h4 className='d-flex align-items-center'><span className='pink-text'>
                                                    <IoLocationSharp /></span> East London / Easterncape</h4>
                                                <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                    &#40; Map Location &#41;
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </main> */}

            <MultiMenus />
         
        </>
    );
}

export default VendorsPage;
