import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ImageCard from "../../components/ui/ImageCard";
import { BsGrid3X3GapFill } from "react-icons/bs";

import image1 from "../../assets/Images/jewelry.png";
import image2 from "../../assets/Images/decor.png";
import image3 from "../../assets/Images/band.png";
import image4 from "../../assets/Images/food.png";
import image5 from "../../assets/Images/hospitality.png";
import image6 from "../../assets/Images/beach.png";
import image7 from "../../assets/Images/rafting.png";
import image8 from "../../assets/Images/invitation.png";
import image9 from "../../assets/Images/tent.png";
import image10 from "../../assets/Images/bus.png";
import image11 from "../../assets/Images/camera.png";
import image12 from "../../assets/Images/couple.png";
import VendorCategoryPanel from "../../components/ui/VendorCategoryPanel";

const VendorCategory = () => {
  const [showCategories, setShowCategories] = useState(false);

  let cardData = [
    {
      img: image1,
      title: "Accessories",
    },
    {
      img: image2,
      title: "Decor",
    },
    {
      img: image3,
      title: "Entertainment",
    },
    {
      img: image4,
      title: "Food & Beverages",
    },
    {
      img: image5,
      title: "Hopitality",
    },
    {
      img: image6,
      title: "Leisure",
    },
    {
      img: image7,
      title: "Outdoor",
    },
    {
      img: image8,
      title: "Printed Materials",
    },
    {
      img: image9,
      title: "Rentals / Book / Hire",
    },
    {
      img: image10,
      title: "Tranportations",
    },
    {
      img: image11,
      title: "Services",
    },
    {
      img: image12,
      title: "Weddings",
    },
  ];

  const eventCategories = [
    "Events Venues",
    "Decorations / Decor",
    "Photographers",
    "Car Hire",
    "Honeymoon Destinations",
    "Beauty Spa's",
    "Accommodation",
    "Catering",
    "Wedding Planners",
    "Tents & Chairs",
    "Cakes",
  ];

  return (
    <>
      <section className="vendor-categories py-5">
        <div className="custom-container">
          <h2
            className={`pink-text fs-1 cursor-pointer fw-bold  d-flex align-items-center gap-lg-3 gap-2 ${
              showCategories ? "mb-2" : "mb-5"
            }`}
            onClick={() => setShowCategories(!showCategories)}
          >
            <BsGrid3X3GapFill size={36} /> Vendor Categories
          </h2>
          {showCategories && (
            <div className="mb-5">
              <VendorCategoryPanel />
            </div>
          )}
          <div className="category-cardWrapper d-grid">
            {cardData.map((item, index) => {
              return (
                <div key={index} className="category-card">
                  <ImageCard data={item} cardStyle={"default"} />
                </div>
              );
            })}
          </div>

          <div className="category-button-grid d-flex flex-wrap gap-2 py-3 mt-4">
            {eventCategories.map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorCategory;
