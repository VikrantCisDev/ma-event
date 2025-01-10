import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const MegaMenu = () => {
  return (
    <section className="mega-menu">
      <Container>
        <Row>
          <Col>
            <h5>POPULAR CATEGORIES</h5>
            <Form.Check type="checkbox" label="Events Venues" />
            <Form.Check type="checkbox" label="Decorators / Decor" />
            <Form.Check type="checkbox" label="Photographers" />
            <Form.Check type="checkbox" label="Car Hires" />
            <Form.Check type="checkbox" label="Beauty Salon" />
            <Form.Check type="checkbox" label="Honeymoon Destinations" />
            <Form.Check type="checkbox" label="Accommodation" />
            <Form.Check type="checkbox" label="Wedding Planners" />
            <Form.Check type="checkbox" label="Cakes" />
            <Form.Check type="checkbox" label="Catering" />
            <Form.Check type="checkbox" label="Videographers" />
            <Form.Check type="checkbox" label="Florists" />
            <Form.Check type="checkbox" label="Event Loans" />
            <Form.Check type="checkbox" label="Wedding Websites" />
          </Col>
          <Col>
            <h5>BRIDE & GROOM FAVOURITES</h5>
            <Form.Check type="checkbox" label="Wedding Dress" />
            <Form.Check type="checkbox" label="Tuxed Outfits" />
            <Form.Check type="checkbox" label="Bridal Wear" />
            <Form.Check type="checkbox" label="Groom's Wear" />
            <Form.Check type="checkbox" label="Gifts & Packaging" />
            <Form.Check type="checkbox" label="Bridal Accessories" />
            <Form.Check type="checkbox" label="Bridal Shoes" />
            <div className='mt-2'>
              <h5>ENTERTAINMENT</h5>
              <Form.Check type="checkbox" label="Cultural Dance Groups" />
              <Form.Check type="checkbox" label="Dance Bands" />
              <Form.Check type="checkbox" label="Live Bands" />
              <Form.Check type="checkbox" label="Ceremony Musicians" />
              <Form.Check type="checkbox" label="DJs" />
              <Form.Check type="checkbox" label="Choirs" />
            </div>
          </Col>

          <Col>
            <h5>ACCESSORIES</h5>
            <Form.Check type="checkbox" label="Jewellery" />
            <Form.Check type="checkbox" label="Wedding Rings" />

            <div className='mt-2'>
              
            <h5>EVENT RENTALS</h5>
            <Form.Check type="checkbox" label="PA Systems" />
            <Form.Check type="checkbox" label="Tents & Chairs" />
            <Form.Check type="checkbox" label="Warming Dishes" />
            <Form.Check type="checkbox" label="Wedding Fonts" />
            <Form.Check type="checkbox" label="Toast Master or MC" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MegaMenu;
