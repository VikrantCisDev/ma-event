import React, { useState } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { FaAdn } from "react-icons/fa";
let options = [
  {
    content: [
      {
        id: 1,
        name: "CBSE",
        icon: <FaAdn style={{ color: "red", margin: "0px 10px 0px 0px" }} />,
        hideBorder: false,
        children: [
          {
            content: [
              {
                id: 11,
                hideBorder: false,
                name: "SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 12,
                name: "SOCIAL SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 13,
                name: "MATHEMATICS"
              }
            ]
          },
          {
            content: [
              {
                id: 14,
                name: "HINDI"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    content: [
      {
        id: 2,
        name: "ICSE",
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 21,
                name: "SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 22,
                name: "SOCIAL SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 23,
                name: "MATHEMATICS"
              }
            ]
          },
          {
            content: [
              {
                id: 24,
                name: "HINDI"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    content: [
      {
        id: 3,
        name: "BSEB",
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 31,
                name: "SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 32,
                name: "SOCIAL SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 33,
                name: "MATHEMATICS"
              }
            ]
          },
          {
            content: [
              {
                id: 34,
                name: "HINDI"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    content: [
      {
        id: 4,
        name: "JCECE",
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 41,
                name: "SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 42,
                name: "SOCIAL SCIENCE"
              }
            ]
          },
          {
            content: [
              {
                id: 43,
                name: "MATHEMATICS"
              }
            ]
          },
          {
            content: [
              {
                id: 44,
                name: "HINDI"
              }
            ]
          }
        ]
      }
    ]
  }
];

export function Test() {
  const [open, setIsopen] = useState(false);
  const handleSidebarToggle = (isOpen) => {
    setIsopen(isOpen);
  };

  const handleClick = (itemOptions) => {
    // console.log(itemOptions);
  };

  return (
    <div>
      <MultilevelSidebar
        open={open}
        onToggle={() => handleSidebarToggle()}
        options={options}
        header="React-MultiLevel-Sidebar"
        onItemClick={handleClick}
        // style={{ba}}
      />
      {/* using in our button to open the sidebar */}
      <button onClick={() => handleSidebarToggle(true)}>open</button>
    </div>
  );
}

export default Test;
