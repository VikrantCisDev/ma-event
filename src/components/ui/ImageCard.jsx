import React from 'react'

const ImageCard = ({data,cardStyle}) => {
  return (
    <Card>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ImageCard
