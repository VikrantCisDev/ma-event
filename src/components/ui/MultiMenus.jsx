import React, { useState } from "react";





const MultiMenus = () => {



    const menus = [
        {
          label: "Menu 1"
        },
        {
          label: "Menu 2",
          submenu: [
            {
              label: "Sub Menu 1"
            },
            {
              label: "Sub Menu 2"
            }
          ]
        },
        {
          label: "Menu 3",
          submenu: [
            {
              label: "Sub Menu 1",
              submenu: [
                {
                  label: "Boom 1"
                },
                {
                  label: "Boom 2"
                }
              ]
            },
            {
              label: "Sub Menu 2",
              submenu: [
                {
                  label: "Deep 1"
                },
                {
                  label: "Deep 2",
                  submenu: [
                    {
                      label: "Lorem 1"
                    },
                    {
                      label: "Lorem 2",
                      submenu: [
                        {
                          label: "Super Deep"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: "Sub Menu 3"
            },
            {
              label: "Sub Menu 4",
              submenu: [
                {
                  label: "Last 1"
                },
                {
                  label: "Last 2"
                },
                {
                  label: "Last 3"
                }
              ]
            }
          ]
        },
        {
          label: "Menu 4"
        }
      ];




  const [activeMenus, setActiveMenus] = useState([]);

  const handleMenuClick = data => {
    console.log(data);
  };

  const handleArrowClick = menuName => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <li>
      <div className="item" style={{ paddingLeft: `${dept * 18}px` }}>
        <span className="label" onClick={() => handleMenuClick(data)}>{data.label} </span>
        {hasSubMenu && (
          <span
            className={`arrow ${activeMenus.includes(menuName) ? 'toggle' : ''}`}
            onClick={() => handleArrowClick(menuName)}
          />
        )}
      </div>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </li>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <ul>
        {data.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <ul>
      {menus.map((menu, index) => {
        const dept = 1;
        const menuName = `sidebar-menu-${dept}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </ul>
  );
};

export default MultiMenus;
