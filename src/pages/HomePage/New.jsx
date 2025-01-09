import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../../components/ui/ImageCard';
import image from "../../assets/Images/diet.png"
import Header from '../../components/ui/header';

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
        <div className="heading-wrapper">
          <h3 className='text-center pink-text '>Your Perfect Event with all your Vendors on one platform</h3>
        </div>
          <Row className='row-gap-3'>
            {
              cardData.map((item, index) => {
                return (
                  <Col lg={3} md={4} sm={6} key={index}>
                    <ImageCard data={item} cardStyle={"secondary"} />
                  </Col>
                )
              })
            }
          </Row>
        </div>

      </section>
    </>
  )
}

export default New