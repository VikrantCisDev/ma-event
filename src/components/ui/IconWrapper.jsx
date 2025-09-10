import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

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

const icons = [
  {
    icon: <AiFillBank size={40} className="pink-text me-2" />,
    label: "Event Venues",
  },
  {
    icon: <ImHeadphones size={40} className="pink-text me-2" />,
    label: "DJ's",
  },
  {
    icon: <MdCarRental size={40} className="pink-text me-2" />,
    label: "Car Hire",
  },
  { icon: <FaSpa size={40} className="pink-text me-2" />, label: "Beauty Spa" },
  {
    icon: <IoIosBed size={40} className="pink-text me-2" />,
    label: "Accommodation",
  },
  {
    icon: <GiFlowerPot size={40} className="pink-text me-2" />,
    label: "Florists",
  },
  {
    icon: <MdTableRestaurant size={40} className="pink-text me-2" />,
    label: "Decorators",
  },
  {
    icon: <FaPeopleGroup size={40} className="pink-text me-2" />,
    label: "Choirs",
  },
  { icon: <SiCakephp size={40} className="pink-text me-2" />, label: "Cakes" },
  { icon: <PiBathtub size={40} className="pink-text me-2" />, label: "Salons" },
];

const IconWrapper = () => {
  return (
    <section className="marquee-sec">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000} // smooth scroll speed
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 8 }, // instead of icons.length
        }}
        spaceBetween={20}
        allowTouchMove={false} // disable dragging (marquee style)
      >
        {icons.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="icon-box">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default IconWrapper;
