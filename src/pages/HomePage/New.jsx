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

        <div className=''>

        </div>
      </Container>
    </>
  )
}

export default New