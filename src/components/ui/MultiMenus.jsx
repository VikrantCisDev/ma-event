import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";


import { RxCross2 } from "react-icons/rx";

const MultilevelMenu = () => {
  const menuData = [
    {
      label: "ABOUT MA-EVENT",
    },
    {
      label: "VENDORS",
      subItems: [
        {
          label: "POPULAR CATEGORIES",
          subItems: [
            { label: "Events Venues" },
            { label: "Decorators / Decor" },
            { label: "Photographers" },
            { label: "Car Hires" },
            { label: "Beauty Salon" },
            { label: "Honeymoon Destinations" },
            { label: "Accommodation" },
            { label: "Wedding Planners" },
            { label: "Cakes" },
            { label: "Catering" },
            { label: "Videographers" },
            { label: "Florists" },
            { label: "Event Loans" },
            { label: "Wedding Websites" },
          ],
        },
        {
          label: "BRIDE & GROOM FAVOURITES",
          subItems: [
            { label: "Wedding Dress" },
            { label: "Tuxed Outfits" },
            { label: "Bridal Wear" },
            { label: "Groom's Wear" },
            { label: "Gifts & Packaging" },
            { label: "Bridal Accessories" },
            { label: "Bridal Shoes" },
          ],
        },
        {
          label: "ENTERTAINMENT",
          subItems: [
            { label: "Cultural Dance Groups" },
            { label: "Dance Bands" },
            { label: "Live Bands" },
            { label: "Ceremony Musicians" },
            { label: "DJs" },
            { label: "Choirs" },
          ],
        },
        {
          label: "ACCESSORIES",
          subItems: [{ label: "Jewellery" }, { label: "Wedding Rings" }],
        },
        {
          label: "EVENT RENTALS",
          subItems: [
            { label: "PA Systems" },
            { label: "Tents & Chairs" },
            { label: "Warming Dishes" },
            { label: "Wedding Fonts" },
            { label: "Toast Master or MC" },
          ],
        },
      ],
    },
    { label: "EVENT PING" },
    {
      label: "PLANNING TOOLS",
      subItems: [
        {
          label: "POPULAR CATEGORIES",
          subItems: [
            { label: "Events Venues" },
            { label: "Decorators / Decor" },
            { label: "Photographers" },
            { label: "Car Hires" },
            { label: "Beauty Salon" },
            { label: "Honeymoon Destinations" },
            { label: "Accommodation" },
            { label: "Wedding Planners" },
            { label: "Cakes" },
            { label: "Catering" },
            { label: "Videographers" },
            { label: "Florists" },
            { label: "Event Loans" },
            { label: "Wedding Websites" },
          ],
        },
        {
          label: "BRIDE & GROOM FAVOURITES",
          subItems: [
            { label: "Wedding Dress" },
            { label: "Tuxed Outfits" },
            { label: "Bridal Wear" },
            { label: "Groom's Wear" },
            { label: "Gifts & Packaging" },
            { label: "Bridal Accessories" },
            { label: "Bridal Shoes" },
          ],
        },
        {
          label: "ENTERTAINMENT",
          subItems: [
            { label: "Cultural Dance Groups" },
            { label: "Dance Bands" },
            { label: "Live Bands" },
            { label: "Ceremony Musicians" },
            { label: "DJs" },
            { label: "Choirs" },
          ],
        },
        {
          label: "ACCESSORIES",
          subItems: [{ label: "Jewellery" }, { label: "Wedding Rings" }],
        },
        {
          label: "EVENT RENTALS",
          subItems: [
            { label: "PA Systems" },
            { label: "Tents & Chairs" },
            { label: "Warming Dishes" },
            { label: "Wedding Fonts" },
            { label: "Toast Master or MC" },
          ],
        },
      ],
    },
    { label: "BLOG" },
    { label: "HELP" }
  ];


  const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = (e) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    };

    return (
      <li onClick={toggleSubMenu} className={`${isOpen ? "nav-active" : ""}`}>
        <a href="#">{item.label}{item.subItems && (<IoMdArrowDropdown />)}</a>
        {item.subItems && (
          <ul className={`d-${isOpen ? "block" : "none"} submenu ${isOpen ? "submenu-open" : ""}`}>
            {item.subItems.map((subItem, index) => (
              <MenuItem key={index} item={subItem} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>

      <div className="close-btn">
        <RxCross2 size={25} />
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </>
  );
};

export default MultilevelMenu;
