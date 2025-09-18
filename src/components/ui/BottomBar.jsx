import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from '../../assets/Images/Home.png';
import Categories from '../../assets/Images/Categories.png';
import Vendors from '../../assets/Images/Vendors.png';
import Favourites from '../../assets/Images/Favourites.png';
import Account from '../../assets/Images/Account.png';

const BottomBar = () => {

    // const [activeNav, setActiveNav] = useState("Home")
    const location = useLocation();
  const navigate = useNavigate();

    const itemList= [
        {img:Home,title:"Home", link:"/"},
        {img:Categories,title:"Categories", link:"/vendor-categories"},
        {img:Vendors,title:"Vendors",link:"/vendors-listing"},
        {img:Favourites,title:"Favourites", link:"/"},
        {img:Account,title:"Account", link:"/login"},
    ]
    // useEffect(()=>{
    //     setActiveNav("Home")
    // },[])

  return (
    <>
    <div className="bottomBarMain">
        {
            itemList.map((item,index)=>{
                 const isActive = location.pathname === item.link;
                return (
                    <div className={`icontext  ${isActive ? "active" : ""}`} key={index}
                    onClick={() => navigate(item.link)}>
                        <img src={item.img} alt={item.title} className='img-fluid' />
                        <p>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default BottomBar