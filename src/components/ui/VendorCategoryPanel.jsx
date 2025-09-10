import React, { useState } from "react";
import {
  FaGem,
  FaUtensils,
  FaPaintBrush,
  FaMusic,
  FaHotel,
  FaSwimmer,
  FaTree,
  FaPrint,
  FaBookOpen,
  FaBus,
  FaSquareFull,
  FaConciergeBell,
} from "react-icons/fa";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

const categoryData = [
  { name: "Accessories", icon: <FaGem />, services: [] },
  { name: "Food & Beverages", icon: <FaUtensils />, services: [] },
  { name: "Decor", icon: <FaPaintBrush />, services: [] },
  { name: "Entertainment", icon: <FaMusic />, services: [] },
  { name: "Hospitality", icon: <FaHotel />, services: [] },
  { name: "Leisure", icon: <FaSwimmer />, services: [] },
  { name: "Outdoor", icon: <FaTree />, services: [] },
  { name: "Printed Materials", icon: <FaPrint />, services: [] },
  { name: "Rentals / Book / Hire", icon: <FaBookOpen />, services: [] },
  { name: "Transportation", icon: <FaBus />, services: [] },
  {
    name: "Services",
    icon: <FaConciergeBell />,
    services: [
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
    if (category.services && category.services.length > 0) {
      setCategoryStack((prev) => [...prev, category]);
    }
  };

  const handleBack = () => {
    setCategoryStack((prev) => prev.slice(0, -1));
  };

  const renderCategories = (items) => (
    <ul className="category-list list-unstyled fw-medium ps-2">
      {items.map((item, index) => (
        <li key={index} onClick={() => handleCategoryClick(item)}  className={`${(item.services && item.services.length > 0) ? "cursor-pointer hoverlistItem" : ""}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              {item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </div>
            {item.services && item.services.length > 0 && (
              <LiaAngleRightSolid />
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  const renderServices = (services) => (
    <ul className="service-list list-unstyled ps-4">
      {services.map((item, idx) => (
        <li key={idx} className="mb-1">
            <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex lh-md gap-2 align-items-center">
              {item.icon && <span className="pink-text">{item.icon}</span>}
              <span className="border-dark  border-bottom">{item.name}</span>
            </div>
            {item.services && item.services.length > 0 && (
              <LiaAngleRightSolid />
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="vendor-category-panel">
      <div className="category-header mb-3 ps-2">
        {categoryStack.length > 0 && (
          <h4 className="cursor-pointer fw-semibold lh-1 d-flex gap-2 align-items-center" onClick={handleBack}>
            {currentCategory.icon}{currentCategory.name}
          </h4>
        )}
      </div>

      <div className="category-body">
        {categoryStack.length === 0
          ? renderCategories(categoryData)
          : renderServices(currentCategory.services)}
      </div>
    </div>
  );
};

export default VendorCategoryPanel;
