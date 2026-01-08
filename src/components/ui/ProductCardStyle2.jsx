import React, { useState } from "react";
import "../../styles/productCardStyle2.css";

import { Image, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Image1 from "../../assets/Images/card6.jpg";
import { RiBookmarkFill } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCardStyle2 = ({
  item = {
    id: 1,
    name: "Jail's Catering Services",
    rating: 3,
    location: "East London / Easterncape",
    img: Image1,
    price: "R3,000",
    time: "1 Year ago",
    views: "896",
    bookMarkType: "Photography",
    wishlist: false,
  },
}) => {
  const [wishlist, setWishlist] = useState(item.wishlist);

  return (
    <>
      <div className="product-card-style2">
        <div className="ProductImg">
          <span
            className="wishlist-icon pink-text"
            onClick={() => setWishlist(!wishlist)}
          >
            {wishlist ? <FaHeart /> : <FaRegHeart />}
          </span>
          <Image src={item.img} className="img-fluid w-100" />
          <span className="verified">VERIFIED</span>
        </div>
        <div className="">
          <div className="pt-2">
            <div className="cartType">
              <RiBookmarkFill />
              <h6>{item.bookMarkType}</h6>
            </div>
            <div className="pdLeft">
              <div className="pcsTitle">
                <h2 className="pink-text">{item.name}</h2>
              </div>
            </div>
            <div className="pdRight w-100">
              <ListGroup
                variant="flush"
                className="w-100 flex-row justify-content-between align-items-center flex-wrap"
              >
                <ListGroupItem className="border-0 pb-2 p-0">
                  <div className="d-flex align-items-center ratingStars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={i < item.rating ? "rated" : "unrated"}
                      >
                        {/* {i < item.rating ? <FaStar /> :  */}
                        <FaRegStar />
                        {/* } */}
                      </span>
                    ))}
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>

            <div className="pcsPrice">{item.price}</div>

            <div className="timeAndView">
              <div className="postTime">
                <IoTimeOutline color="#921f62" />
                <span>{item.time}</span>
              </div>
              <div className="postView">
                <IoEyeSharp color="#921f62" />
                <span>{item.views}</span>
              </div>
            </div>
          </div>

          <div className="pdRow">
            <div className="pcsLocation">
              <h4 className="d-flex align-items-center">
                <span className="pink-text">
                  <IoLocationSharp />
                </span>{" "}
                {item.location}
              </h4>
              {item.mapLocation && (
                <h6 className="pink-text text-uppercase fw-bold mb-3">
                  &#40; Map Location &#41;
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardStyle2;
