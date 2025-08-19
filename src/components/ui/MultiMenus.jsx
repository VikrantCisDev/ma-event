import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

// Options structure with the icons uncommented
const options = [
  {
    id: 1,
    name: "POPULAR CATEGORIES",
    icon: <LiaAngleRightSolid />,
    children: [
      { id: 1.1, name: "Events Venues" },
      { id: 1.2, name: "Decorators / Decor" },
      { id: 1.3, name: "Photographers" },
      { id: 1.4, name: "Car Hires" },
      { id: 1.5, name: "Beauty Salon" },
      { id: 1.6, name: "Honeymoon Destinations" },
      { id: 1.7, name: "Accommodation" },
      { id: 1.8, name: "Wedding Planners" },
      { id: 1.9, name: "Cakes" },
      { id: 1.10, name: "Catering" },
      { id: 1.11, name: "Videographers" },
      { id: 1.12, name: "Florists" },
      { id: 1.13, name: "Event Loans" },
      { id: 1.14, name: "Wedding Websites" },
    ],
  },
  {
    id: 2,
    name: "BRIDE & GROOM FAVOURITES",
    icon: <LiaAngleRightSolid />,
    children: [
      { id: 2.1, name: "Wedding Dress" },
      { id: 2.2, name: "Tuxed Outfits" },
      { id: 2.3, name: "Bridal Wear" },
      { id: 2.4, name: "Groom's Wear" },
      { id: 2.5, name: "Gifts & Packaging" },
      { id: 2.6, name: "Bridal Accessories" },
      { id: 2.7, name: "Bridal Shoes" },
    ],
  },
  {
    id: 3,
    name: "ENTERTAINMENT",
    icon: <LiaAngleRightSolid />,
    children: [
      { id: 3.1, name: "Cultural Dance Groups" },
      { id: 3.2, name: "Dance Bands" },
      { id: 3.3, name: "Live Bands" },
      { id: 3.4, name: "Ceremony Musicians" },
      { id: 3.5, name: "DJs" },
      { id: 3.6, name: "Choirs" },
    ],
  },
  {
    id: 4,
    name: "ACCESSORIES",
    icon: <LiaAngleRightSolid />,
    children: [
      { id: 4.1, name: "Jewellery" },
      { id: 4.2, name: "Wedding Rings" },
    ],
  },
  {
    id: 5,
    name: "EVENT RENTALS",
    icon: <LiaAngleRightSolid />,
    children: [
      { id: 5.1, name: "PA Systems" },
      { id: 5.2, name: "Tents & Chairs" },
      { id: 5.3, name: "Warming Dishes" },
      { id: 5.4, name: "Wedding Fonts" },
      { id: 5.5, name: "Toast Master or MC" },
    ],
  },
];

const MultiMenus = ({ open, handleSidebarToggle, handleClose }) => {
  const [currentMenu, setCurrentMenu] = useState(null); // State to handle current menu
 

  // Handle parent menu click
  const handleMenuClick = (menu) => {
    setCurrentMenu(menu); // Set currentMenu to the clicked menu
  };

  // Handle back button click (go to the previous level)
  const handleBack = () => {
    setCurrentMenu(null); // Set currentMenu to null to go back to the root menu
  };


  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        {currentMenu ? (
          <button className="back-btn p-0" onClick={handleBack}>
            <LiaAngleLeftSolid /> Back
          </button>
        ) : (
          <button className="close-btn p-0" onClick={handleClose}>
            <IoMdClose size={22} />
          </button>
        )}
      </div>

      <div className="sidebar-content">
        {currentMenu ? (
          // Rendering child items of the current menu
          <div>
            <ul>
              {currentMenu.children.map((child) => (
                <li key={child.id}>
                  {child.name}
                 
                </li>
              ))}
            </ul>

          </div>
        ) : (
          // Rendering the parent menus
          <ul className="main-navList">
            {options.map((menu) => (
              <li key={menu.id} onClick={() => handleMenuClick(menu)}>
                {menu.icon} {menu.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiMenus;
