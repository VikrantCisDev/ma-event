import React from 'react'

import { AiFillBank } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { MdCarRental } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { GiFlowerPot } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiCakephp } from "react-icons/si";
import { MdTableRestaurant } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";


const IconWrapper = () => {
  return (
    <section className='marquee-sec'>
        <marquee class="html-marquee" direction="left" behavior="scroll" scrollamount="12" loop="infinite">
          <div className="icn-wrp">
              <div className="icon-box"><AiFillBank /> <span>Event Venues</span></div>
              <div className="icon-box"><ImHeadphones /> <span>DJ's</span></div>
              <div className="icon-box"><MdCarRental /> <span>Car Hire</span></div>
              <div className="icon-box"><FaSpa /> <span>Beauty Spa</span></div>
              <div className="icon-box"><IoIosBed /> <span>Accomodation</span></div>
              <div className="icon-box"><GiFlowerPot /> <span>Florists</span></div>
              <div className="icon-box"><MdTableRestaurant /> <span>Decorstors</span></div>
              <div className="icon-box"><FaPeopleGroup /> <span>Choirs</span></div>
              <div className="icon-box"><SiCakephp /> <span>Cakes</span></div>
              <div className="icon-box"><PiBathtub /> <span>Salons</span></div>
            </div>
        </marquee>
    </section>
  )
}

export default IconWrapper
