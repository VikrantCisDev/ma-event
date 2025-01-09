import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../../components/ui/ImageCard';
import image1 from "../../assets/Images/card1.jpg"
import image2 from "../../assets/Images/card2.jpg"
import image3 from "../../assets/Images/card3.jpg"
import image4 from "../../assets/Images/card4.jpg"
import image5 from "../../assets/Images/card5.jpg"
import image6 from "../../assets/Images/card6.jpg"
import image7 from "../../assets/Images/card7.jpg"
import image8 from "../../assets/Images/card8.jpg"
import Header from '../../components/ui/header';
import Banner from '../../components/ui/Banner';
import Footer from '../../components/ui/Footer';
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import Button from 'react-bootstrap/Button';


const HomePage = () => {

  let cardData = [
    {
      img: image1,
      title: "Video / Photography",
    },
    {
      img: image2,
      title: "Venues",
    },
    {
      img: image3,
      title: "Hair / Beauty",
    },
    {
      img: image4,
      title: "Cake",
    },
    {
      img: image5,
      title: "Jewellery",
    },
    {
      img: image6,
      title: "Catering",
    },
    {
      img: image7,
      title: "Spa",
    },
    {
      img: image8,
      title: "Entertainment",
    }
  ]


  let cardData2 = [
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Search for a service provider",
    },
    {
      img: <BsShopWindow className='icon'/>,
      title: "Connect with the best vendor",
    },
    {
      img: <IoLogoWechat className='icon'/>,
      title: "Easy communication with vendor",
    },
    {
      img: <FaRegHandshake className='icon'/>,
      title: "Satisfied with the vendors Product / service",
    },
    {
      img: <FaTruckFast className='icon'/>,
      title: "Vendor delivers on time for event",
    },
    {
      img: <GiPartyPopper className='icon'/>,
      title: "Enjoy the party with your friends",
    }
  ]
  

  return (
    <>
      <Header />



      <div className="banner-sec">
        <Banner />
      </div>

      {/* <div className="cardSec">
        <Container>
          <h3 className='text-center py-2'>Your Perfect Event with all your Vendors on one platform</h3>
          <Row className='row-gap-3'>
            {
              cardData.map((item, index) => {
                return (
                  <Col lg={3} md={4} sm={6} key={index}>
                    <ImageCard data={item} cardStyle={"primary"} />
                  </Col>
                )
              })
            }
          </Row>
        </Container >
      </div> */}



      <section className='py-5 cardSec'>
        <div className='custom-container'>
          <h3 className='text-center mb-4'>Your Perfect Event with all your Vendors on one platform</h3>
          <Row className='row-gap-3'>
            {
              cardData.map((item, index) => {
                return (
                  <Col lg={3} md={4} sm={6} key={index}>
                    <ImageCard data={item} cardStyle={"primary"} />
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </section>
      <section className='pb-5'>
        <div className='custom-container'>
          <div className="heading-wrapper pink-text text-center mb-5">
            <h3 className=' fs-1 mb-2 fw-normal'>How it works</h3>
            <p className='fs-4 fw-medium'>The most efficient way to find all your event vendors in one place</p>
          </div>
        </div>
        <div className="howitworkbg">
          <div className='custom-container'>

            <Row className='py-5 '>
              {
                cardData2.map((item, index) => {
                  return (
                    <Col lg={2} md={4} sm={6} key={index}>
                      <ImageCard data={item} cardStyle={"secondary"} />
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        </div>

      </section>


      <section className='pb-5 twoBtnSec'>
            <ul className='list-style-none m-0'>
              <li>
                <Button className='dark-btn'>Latest Events</Button>
              </li>
              <li>
                <Button className='dark-btn'>Gallry</Button>
              </li>
            </ul>
      </section>

      <Footer />


    </>
  )
}

export default HomePage