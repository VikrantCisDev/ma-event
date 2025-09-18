import React, { useState } from "react";
import {  FaSquareFull } from "react-icons/fa";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

import Accessories from "../../assets/Images/m-accessories.png"
import Decor from "../../assets/Images/m-decor.png"
import Entertainment from "../../assets/Images/m-music.png"
import Food from "../../assets/Images/m-food.png"
import Hospitality from "../../assets/Images/m-hospitality.png"
import Beach from "../../assets/Images/m-beach.png"
import Raft from "../../assets/Images/m-raft.png"
import Mail from "../../assets/Images/m-mail.png"
import Rentals from "../../assets/Images/m-rentals.png"
import Transport from "../../assets/Images/m-transport.png"
import Service from "../../assets/Images/m-service.png"

function MenuIcon(path) {
  return <img src={path} className="megaMenuIcon" />
}

const categoryData = [
  { 
    name: "Accessories", 
    icon: MenuIcon(Accessories), 
    submenu: [
      { name: "Jewellery", icon: <FaSquareFull size={7} /> },
      { name: "Wedding Rings", icon: <FaSquareFull size={7} /> },
      { name: "Traditional Jewelers", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Food & Beverages", 
    icon: MenuIcon(Food), 
    submenu: [
      { name: "Catering", icon: <FaSquareFull size={7} /> },
      { name: "Cakes", icon: <FaSquareFull size={7} /> },
      { name: "Bar", icon: <FaSquareFull size={7} /> },
      { name: "Wines & Spirits", icon: <FaSquareFull size={7} /> },
      { name: "Baristas", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Decor", 
    icon: MenuIcon(Decor), 
    submenu: [
      { name: "Draping", icon: <FaSquareFull size={7} /> },
      { name: "Stage Lighting", icon: <FaSquareFull size={7} /> },
      { name: "Florists", icon: <FaSquareFull size={7} /> },
      { name: "Audio Visual", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Entertainment", 
    icon: MenuIcon(Entertainment), 
    submenu: [
      { name: "Cultural Dance Groups", icon: <FaSquareFull size={7} /> },
      { name: "Music Bands", icon: <FaSquareFull size={7} /> },
      { name: "Events Musicians", icon: <FaSquareFull size={7} /> },
      { name: "DJ's", icon: <FaSquareFull size={7} /> },
      { name: "Choirs", icon: <FaSquareFull size={7} /> },
      { name: "Comedy", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Hospitality", 
    icon: MenuIcon(Hospitality), 
    submenu: [
      { name: "Hotels", icon: <FaSquareFull size={7} /> },
      { name: "Lodges", icon: <FaSquareFull size={7} /> },
      { name: "Guest House’s", icon: <FaSquareFull size={7} /> },
      { name: "BnB’s", icon: <FaSquareFull size={7} /> },
      { name: "Back Packers", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Leisure", 
    icon: MenuIcon(Beach), 
    submenu: [
      { name: "Beaches", icon: <FaSquareFull size={7} /> },
      { name: "Boat Cruises", icon: <FaSquareFull size={7} /> },
      { name: "Kayaking", icon: <FaSquareFull size={7} /> },
      { name: "Surfing", icon: <FaSquareFull size={7} /> },
      { name: "Air Gliding", icon: <FaSquareFull size={7} /> },
      { name: "Water Rafting", icon: <FaSquareFull size={7} /> },
      { name: "Bungee Jumping", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Outdoor", 
    icon: MenuIcon(Raft), 
    submenu: [
      { name: "Camp sites", icon: <FaSquareFull size={7} /> },
      { name: "Hiking", icon: <FaSquareFull size={7} /> },
      { name: "Farm land sites", icon: <FaSquareFull size={7} /> },
      { name: "Game Parks", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Printed Materials", 
    icon: MenuIcon(Mail), 
    submenu: [
      { name: "Invitation Cards", icon: <FaSquareFull size={7} /> },
      { name: "Back Drop/ Signage", icon: <FaSquareFull size={7} /> },
      { name: "Programs", icon: <FaSquareFull size={7} /> },
      { name: "Name Tags", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Rentals / Book / Hire", 
    icon: MenuIcon(Rentals), 
    submenu: [
      { name: "PA Systems", icon: <FaSquareFull size={7} /> },
      { name: "Tents & Chairs", icon: <FaSquareFull size={7} /> },
      { name: "Mobile Fridge", icon: <FaSquareFull size={7} /> },
      { name: "MC's", icon: <FaSquareFull size={7} /> },
      { name: "Car Hire", icon: <FaSquareFull size={7} /> },
      { name: "Mobile Toilets", icon: <FaSquareFull size={7} /> },
    ] 
  },
  { 
    name: "Transportation", 
    icon: MenuIcon(Transport), 
    submenu: [
      { name: "Taxis", icon: <FaSquareFull size={7} /> },
      { name: "Combi services", icon: <FaSquareFull size={7} /> },
      { name: "Buses", icon: <FaSquareFull size={7} /> },
      { name: "Limo services", icon: <FaSquareFull size={7} /> },
      { name: "Trains", icon: <FaSquareFull size={7} /> },
      { name: "Airlines", icon: <FaSquareFull size={7} /> },
      { name: "Wedding Horse Carriage", icon: <FaSquareFull size={7} /> },
    ] 
  },
  {
    name: "Services",
    icon: MenuIcon(Service),
    submenu: [
      { name: "Events Venues", icon: <FaSquareFull size={7} /> },
      { name: "Beauty Spa's", icon: <FaSquareFull size={7} /> },
      { name: "Security", icon: <FaSquareFull size={7} /> },
      { name: "Event Ushers", icon: <FaSquareFull size={7} /> },
      { name: "Professional Makeup", icon: <FaSquareFull size={7} /> },
      { name: "Nail Technician", icon: <FaSquareFull size={7} /> },
      { name: "Cakes", icon: <FaSquareFull size={7} /> },
      { name: "Catering", icon: <FaSquareFull size={7} /> },
      { name: "Photographers", icon: <FaSquareFull size={7} /> },
      { name: "Videography", icon: <FaSquareFull size={7} /> },
      { name: "Events Cleaners", icon: <FaSquareFull size={7} /> },
      { name: "Tailored Outfits", icon: <FaSquareFull size={7} /> },
      { name: "Graduation Outfits", icon: <FaSquareFull size={7} /> },
      { name: "Matric Dance Outfits", icon: <FaSquareFull size={7} /> },
      { name: "Events Planners", icon: <FaSquareFull size={7} /> },
    ],
  },
];



const VendorCategoryPanel = () => {
  const [categoryStack, setCategoryStack] = useState([]);

  const currentCategory = categoryStack[categoryStack.length - 1];

  const handleCategoryClick = (category) => {
    if (category.submenu && category.submenu.length > 0) {
      setCategoryStack((prev) => [...prev, category]);
    }
  };

  const handleBack = () => {
    setCategoryStack((prev) => prev.slice(0, -1));
  };

  const renderCategories = (items) => (
    <ul className="category-list list-unstyled fw-medium ps-2">
      {items.map((item, index) => (
        <li key={index} onClick={() => handleCategoryClick(item)}  className={`${(item.submenu && item.submenu.length > 0) ? "cursor-pointer hoverlistItem" : ""}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              {item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  const renderServices = (submenu) => (
    <ul className="service-list list-unstyled ps-4">
      {submenu.map((item, idx) => (
        <li key={idx} className="mb-1">
            <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex lh-md gap-2 align-items-center">
              {item.icon && <span className="pink-text">{item.icon}</span>}
              <span className="border-dark  border-bottom">{item.name}</span>
            </div>
              
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="vendor-category-panel">
      <div className="category-header mb-3 ">
        {categoryStack.length > 0 && (
          <h4 className="cursor-pointer fw-semibold  d-flex align-items-center" onClick={handleBack}>
            <LiaAngleLeftSolid size={18} className="pink-text" />
            <span className="px-2 pb-1">{currentCategory.icon}</span>{currentCategory.name}
          </h4>
        )}
      </div>

      <div className="category-body">
        {categoryStack.length === 0
          ? renderCategories(categoryData)
          : renderServices(currentCategory.submenu)}
      </div>
    </div>
  );
};

export default VendorCategoryPanel;
