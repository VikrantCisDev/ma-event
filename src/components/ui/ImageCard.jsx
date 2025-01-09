import React from 'react'
import Card from 'react-bootstrap/Card';

const ImageCard = ({data,cardStyle}) => {
  const styleOptions ={
    primary: "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-opacity-50 bg-black text-light",
    secondary: ""
  }
  return (
    <Card className='border-0'>
      <Card.Img variant="top" src={data.img} />
      <Card.Body className={styleOptions[cardStyle] ? styleOptions[cardStyle] : styleOptions[secondary]}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ImageCard
