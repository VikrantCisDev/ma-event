import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap'
import ImageCard from '../../components/ui/ImageCard'
import { BsGrid3X3GapFill } from "react-icons/bs";

import image1 from "../../assets/Images/jewelry.png"
import image2 from "../../assets/Images/decor.png"
import image3 from "../../assets/Images/band.png"
import image4 from "../../assets/Images/food.png"
import image5 from "../../assets/Images/hospitality.png"
import image6 from "../../assets/Images/beach.png"
import image7 from "../../assets/Images/rafting.png"
import image8 from "../../assets/Images/invitation.png"
import image9 from "../../assets/Images/tent.png"
import image10 from "../../assets/Images/bus.png"
import image11 from "../../assets/Images/camera.png"
import image12 from "../../assets/Images/couple.png"

import { FaSquare, FaRegSquare } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";

export const vendorCategoriesOptions = [
  { id: "2.1", name: "Events Venues" },
  { id: "2.2", name: "Decorators / Decor" },
  { id: "2.3", name: "Photographers" },
  { id: "2.4", name: "Car Hires" },
  { id: "2.5", name: "Beauty Salon" },
  { id: "2.6", name: "Honeymoon Destinations" },
  { id: "2.7", name: "Accommodation" },
  { id: "2.8", name: "Wedding Planners" },
  { id: "2.9", name: "Cakes" },
  { id: "2.10", name: "Catering" },
  { id: "2.11", name: "Videographers" },
  { id: "2.12", name: "Florists" },
  { id: "2.13", name: "Event Loans" },
  { id: "2.14", name: "Wedding Websites" },
  {
    id: "2.15",
    name: "Services",
    icon: <FaConciergeBell />,
    children: [
      { id: "2.15.1", name: "Events Venues" },
      { id: "2.15.2", name: "Beauty Spa’s" },
      { id: "2.15.3", name: "Security" },
      { id: "2.15.4", name: "Event Ushers" },
      { id: "2.15.5", name: "Professional Makeup" },
      { id: "2.15.6", name: "Nail Technician" },
      { id: "2.15.7", name: "Cakes" },
      { id: "2.15.8", name: "Catering" },
      { id: "2.15.9", name: "Photographers" },
      { id: "2.15.10", name: "Videography" },
      { id: "2.15.11", name: "Events Cleaners" },
      { id: "2.15.12", name: "Tailored Outfits" },
      { id: "2.15.13", name: "Graduation Outfits" },
      { id: "2.15.14", name: "Matric Dance Outfits" },
      { id: "2.15.15", name: "Events Planners" },
    ],
  },
];



const VendorCategory = () => {

    const [expandedId, setExpandedId] = useState(null);
    const [showCategories, setShowCategories] = useState(false);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };


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
      }
    ]

    

  return (
    <>
      <section className='vendor-categories py-5'>
        <div className="custom-container">
          <h2 className='pink-text fs-1 fw-bold mb-5 d-flex align-items-center gap-lg-3 gap-2' onClick={()=> setShowCategories(!showCategories)}><BsGrid3X3GapFill size={36} /> Vendor Categories</h2>
{ showCategories &&
<div className="categories-wrapper d-none">
   <ul className="vendor-list">
      {vendorCategoriesOptions.map((item) => (
        <li key={item.id}>
          <div
            className="d-flex align-items-center justify-content-between"
            onClick={() => item.children && toggleExpand(item.id)}
            style={{ cursor: item.children ? "pointer" : "default" }}
          >
            <div className="d-flex gap-2 align-items-center">
              {item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </div>
            {item.children && (
              <span>
                {expandedId === item.id ? <FaSquare /> : <FaRegSquare />}
              </span>
            )}
          </div>

          {/* Nested children */}
          {item.children && expandedId === item.id && (
            <ul className="nested-list ps-4 mt-2">
              {item.children.map((child) => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
</div>
}
          <div className='category-cardWrapper d-grid'>
              {
                cardData.map((item, index) => {
                  return (
                    <div key={index} className='category-card'>
                      <ImageCard data={item} cardStyle={"default"} />
                    </div>
                  )
                })
              }
            </div>
        </div>
      </section>
    </>
  )
}

export default VendorCategory