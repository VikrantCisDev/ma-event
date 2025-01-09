import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BannerImg from '../../assets/Images/event-venue.jpg'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { IoLocationSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item className='BannerImgs'>
                <Image src={BannerImg} rounded />
                <Carousel.Caption className='bannerCaption'>
                    <div className='bannerTxt'>
                        <h2>Ma Event, <span>My Way</span> ...</h2>
                        <h6>Find the perfect vendors for your Event</h6>
                    </div>

                    <div className='bottomForm'>
                        <div className='bottomFormLeft '>
                            <div className='BannerSelect'>
                                <Form.Select sm="4" aria-label="Default select example" className='rounded-0 border-0'>
                                    <option>Select vendor Category...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className='BannerInput'>
                                <span>
                                    <IoLocationSharp />
                                </span>
                                <Form.Control type="text" placeholder="Easterncape" className='rounded-0 border-0' />
                            </div>
                        </div>
                        <div className='BannerBtn ms-2'>
                            <Button className='rounded-0 border-0 text-white'>
                                <GoSearch />Search
                            </Button>
                        </div>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default Banner