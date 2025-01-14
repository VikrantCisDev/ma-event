import React, { useState } from "react";

const MultilevelMenu = () => {
    const menuData = [
      {
        label: "Item 1",
        subItems: [
          { label: "Subitem 1.1" },
          { label: "Subitem 1.2" },
        ],
      },
      {
        label: "Item 2",
        subItems: [
          {
            label: "Subitem 2.1",
          },
          {
            label: "Subitem 2.2",
            subItems: [
              { label: "Subsubitem 2.2.1" },
              { label: "Subsubitem 2.2.2" },
            ],
          },
        ],
      },
      { label: "Item 3" },
    ];

  const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = (e) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    };

    return (
      <li onClick={toggleSubMenu} style={{ cursor: "pointer", margin: "5px 0" }}>
        {item.label}
        {item.subItems && (
          <ul style={{ display: isOpen ? "block" : "none", marginLeft: "20px", listStyle: "none" }}>
            {item.subItems.map((subItem, index) => (
              <MenuItem key={index} item={subItem} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {menuData.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default MultilevelMenu;
