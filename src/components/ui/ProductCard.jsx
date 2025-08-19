import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { TiHeartFullOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";




const ProductCard = ({ cardStyle, title, img, text }) => {
    return (
        <Card className='border-0'>
            <Card.Header>
                <Card.Img variant="top" src={img} className='img-fluid' />

                <Button className='bg-transparent p-0 border-0'>
                    <TiHeartFullOutline />
                </Button>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <ul>
                    <li>
                        <a href="#"><FaRegStar />
                        </a>
                    </li>
                    <li>
                        <a href="#"><FaRegStar />
                        </a>
                    </li>
                    <li>
                        <a href="#"><FaRegStar />
                        </a>
                    </li>
                    <li>
                        <a href="#"><FaRegStar />
                        </a>
                    </li>
                    <li>
                        <a href="#"><FaRegStar />
                        </a>
                    </li>
                </ul>

                
                <Card.Text>{text}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default ProductCard;