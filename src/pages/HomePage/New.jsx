import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../../components/ui/ImageCard';
import image from "../../assets/Images/diet.png"
import Header from '../../components/ui/header';

import { AiOutlineFileSearch } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";



const New = () => {

  let cardData = [
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    },
    {
      img: image,
      title: "Video/Photography",
    }
  ]

  let cardData2 = [
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Video/Photography",
    },
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Video/Photography",
    },
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Video/Photography",
    },
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Video/Photography",
    },
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Video/Photography",
    },
    {
      img: <AiOutlineFileSearch className='icon'/>,
      title: "Video/Photography",
    }
  ]

  return (
    <>
      <Header />
      <section className='py-5'>
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
      <section className='py-5'>
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
    </>
  )
}

export default New