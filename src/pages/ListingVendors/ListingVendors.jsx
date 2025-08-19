import React, { useState } from 'react'
import Footer from '../../components/ui/Footer'
import Header from '../../components/ui/Header'
import ProductCard from '../../components/ui/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsFillGridFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import './style.css'
import { FaCheck } from "react-icons/fa6";
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Image1 from '../../assets/Images/card6.jpg'
import IconWrapper from '../../components/ui/IconWrapper';
import { RiBookmarkFill } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";



const ListingVendors = () => {

    const [activeButton, setActiveButton] = useState('grid'); // Default to list view
    const [data, setData] = useState([
        { id: 1, name: "Jail's Catering Services", rating: 3, location: 'East London / Easterncape', img: Image1, price: 'R3,000', time: '1 Year ago', views: '896', bookMarkType: 'Photography' },
        { id: 2, name: 'Sunshine Bakery', rating: 4, location: 'Cape Town / Westerncape', img: Image1, price: 'On Call', time: '1 Year ago', views: '896', bookMarkType: 'Decor' },
        { id: 3, name: 'Rainbow Florist', rating: 5, location: 'Durban / KZN', img: Image1, price: 'R3,000', time: '1 Year ago', views: '896', bookMarkType: 'Professional Makeup' },
        { id: 4, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'Negotiable', time: '1 Year ago', views: '896', bookMarkType: 'Cakes' },
        { id: 5, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'R1,200', time: '1 Year ago', views: '896', bookMarkType: 'Photography' },
        { id: 6, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'R10,000', time: '1 Year ago', views: '896', bookMarkType: 'Decor' },
        { id: 7, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'R10,000', time: '1 Year ago', views: '896', bookMarkType: 'Professional Makeup' },
        { id: 8, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'R3,000', time: '1 Year ago', views: '896', bookMarkType: 'Cakes' },
        { id: 9, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'On Call', time: '1 Year ago', views: '896', bookMarkType: 'Photography' },
        { id: 10, name: 'Golden Spa', rating: 1, location: 'Johannesburg / Gauteng', img: Image1, price: 'R3,000', time: '1 Year ago', views: '896', bookMarkType: 'Decor' },
        { id: 11, name: 'Golden Spa', rating: 2, location: 'Johannesburg / Gauteng', img: Image1, price: 'On Call', time: '1 Year ago', views: '896', bookMarkType: 'Professional Makeup' },
        { id: 12, name: 'Golden Spa', rating: 5, location: 'Johannesburg / Gauteng', img: Image1, price: 'R3,000', time: '1 Year ago', views: '896', bookMarkType: 'Cakes' },
    ]);

    const handleClick = (view) => {
        setActiveButton(view);
    };



    return (
        <>

            <main className='main-section'>
                <div className="ListingVendorsPage">
                    <Container className="custom-container">
                        <Row>
                            <Col>
                                <div className='itemTopSec'>
                                    <div>
                                        <h4>Showing 1-6 of 6 results</h4>
                                    </div>
                                    <div className='itsRightSec'>
                                        <Form.Select aria-label="Default select example">
                                            <option>Recently added &#40; latest &#41;</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        <div className='itsRightBtn'>
                                            <Button
                                                className={activeButton === 'list' ? 'active-items' : ''}
                                                onClick={() => handleClick('list')}
                                            >
                                                <TiThList />
                                            </Button>
                                            <Button
                                                className={activeButton === 'grid' ? 'active-items' : ''}
                                                onClick={() => handleClick('grid')}
                                            >
                                                <BsFillGridFill />
                                            </Button>
                                        </div>


                                    </div>
                                </div>


                                <div className={`product-list ${activeButton}`}>
                                    {data.map((item) => (
                                        <div key={item.id} className={`vpItemSec ${activeButton}`}>
                                            <div className="ProductImg">
                                                <Image src={item.img} className="img-fluid" />
                                                <span className="verified">VERIFIED</span>
                                            </div>

                                            <div className="pt-2">
                                                <div className="cartType">
                                                    <RiBookmarkFill />
                                                    <h6>{item.bookMarkType}</h6>

                                                </div>
                                                <div className="pdLeft">
                                                    <div className="pdTitle">
                                                        <h2 className="pink-text">{item.name}</h2>
                                                    </div>
                                                </div>
                                                <div className="pdRight w-100">
                                                    <ListGroup variant="flush" className="w-100 flex-row justify-content-between align-items-center flex-wrap">
                                                        <ListGroupItem className="border-0 pb-2 p-0">
                                                            <div className="d-flex align-items-center">
                                                                {Array.from({ length: 5 }, (_, i) => (
                                                                    <span key={i} className={i < item.rating ? 'rated' : 'unrated'}>
                                                                        {i < item.rating ? <FaStar /> : <FaRegStar />}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </ListGroupItem>

                                                    </ListGroup>
                                                </div>

                                                <div className="priceDetail">

                                                    <h2 className="pink-text">{item.price}</h2>

                                                </div>



                                                <div className='timeAndView'>
                                                    <div className='postTime'>
                                                        <IoTimeOutline color='#921f62' />
                                                        <span>{item.time}</span>
                                                    </div>
                                                    <div className='postView'>
                                                        <IoEyeSharp  color='#921f62' />
                                                        <span>{item.views}</span>

                                                    </div>
                                                </div>


                                            </div>

                                            <div className="pdRow mb-4">
                                                <div className="pdLocation">
                                                    <h4 className="d-flex align-items-center">
                                                        <span className="pink-text"><IoLocationSharp /></span> {item.location}
                                                    </h4>
                                                    <h6 className="pink-text text-uppercase fw-bold mb-3">
                                                        &#40; Map Location &#41;
                                                    </h6>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>




                            </Col>
                        </Row>
                    </Container>
                </div>

                <IconWrapper />
            </main>

        </>
    )
}

export default ListingVendors