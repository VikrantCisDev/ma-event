import React, { useState } from "react";
import "./Account.css";
import image1 from "../../assets/Images/jewelry.png";
import image2 from "../../assets/Images/decor.png";
import image3 from "../../assets/Images/band.png";
import image4 from "../../assets/Images/food.png";
import image5 from "../../assets/Images/hospitality.png";
import image6 from "../../assets/Images/beach.png";
import image7 from "../../assets/Images/rafting.png";
import image8 from "../../assets/Images/invitation.png";
import image9 from "../../assets/Images/tent.png";
import image10 from "../../assets/Images/bus.png";
import image11 from "../../assets/Images/service.png";
import image12 from "../../assets/Images/couple.png";
import UserImg from "../../assets/Images/userProfile.png";
import { Col, Image, Row } from "react-bootstrap";
import IconWrapper from "../../components/ui/IconWrapper";
import { MdAddCircle } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import ProductCardStyle2 from "../../components/ui/ProductCardStyle2";
import Image1 from "../../assets/Images/card6.jpg";
import ReviewCard from "../../components/ui/ReviewCard";
import { FaXmark } from "react-icons/fa6";

let cardData = [
  {
    img: image1,
    title: "Accessories",
    bgColor: "blue",
  },
  {
    img: image2,
    title: "Decor",
    bgColor: "green",
  },
  {
    img: image3,
    title: "Entertainment",
    bgColor: "orange",
  },
  {
    img: image4,
    title: "Food & Beverages",
    bgColor: "blue",
  },
  {
    img: image5,
    title: "Hospitality",
    bgColor: "green",
  },
  {
    img: image10,
    title: "Transportation",
    bgColor: "blue",
  },
  {
    img: image6,
    title: "Leisure",
    bgColor: "green",
  },
  {
    img: image7,
    title: "Outdoor",
    bgColor: "orange",
  },
  {
    img: image8,
    title: "Printed Materials",
    bgColor: "blue",
  },
  {
    img: image9,
    title: "Rentals / Book / Hire",
    bgColor: "green",
  },
  {
    img: image11,
    title: "Services",
    bgColor: "orange",
  },
];

const myAds = [
  {
    id: 1,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "R3,000",
    time: "1 Year ago",
    views: "896",
    bookMarkType: "Photography",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 2,
    name: null,
    rating: 3,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "ON CALL",
    time: "2 weeks ago",
    views: "82",
    bookMarkType: "Decor",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 3,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "NEGOTIABLE",
    time: "8 months ago",
    views: "45",
    bookMarkType: "Professional Makeup",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 4,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "R1,200",
    time: "6 weeks ago",
    views: "92",
    bookMarkType: "Cakes",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
  {
    id: 5,
    name: null,
    rating: 5,
    location: "Port Elizabeth / Easterncape",
    img: Image1,
    price: "R1,200",
    time: "6 weeks ago",
    views: "92",
    bookMarkType: "Cakes",
    wishlist: true,
    verified: true,
    mapLocation: null,
  },
];

const reviewsData = [
  {
    id: 1,
    name: "Robert",
    date: "05 December 2025",
    rating: 5,
    review:
      "Quick and easy to deal with.\nA pleasure to deal with and everything",
  },
  {
    id: 2,
    name: "Nancy",
    date: "12 November 2025",
    rating: 3,
    review:
      "Smooth process from start to finish—friendly and reliable in order.",
  },
  {
    id: 3,
    name: "Lucy",
    date: "23 October 2025",
    rating: 5,
    review: "Professional, easy to deal with, and highly recommended in order.",
  },
];

const profileInfoData = {
  fullname: {
    value: "Rose Jamali",
    isEditing: false,
  },
  username: {
    value: "Jamalico Beauty",
    isEditing: false,
  },
  email: {
    value: "ja****co@gmail.com",
    isEditing: false,
  },
  phoneNumber: {
    value: null,
    isEditing: false,
  },
};

const Account = () => {
  const [profileInfo, setProfileInfo] = useState(profileInfoData);

  const handleProfileData = (e, field) => {
    if (profileInfo[field].isEditing) {
      setProfileInfo({
        ...profileInfo,
        [field]: {
          ...profileInfo[field],
          value: e.target.value,
        },
      });
    }
  };

  const handleProfileEdit = (field) => {
    setProfileInfo({
      ...profileInfo,
      [field]: {
        ...profileInfo[field],
        isEditing: !profileInfo[field].isEditing,
      },
    });
  };

  return (
    <>
      <div className="account-page">
        <div className="catWrapper my-4 py-2">
          <div className="custom-container">
            <div className="catGrid ">
              {cardData.map((item, idx) => {
                return (
                  <div className={`catCard card-${item.bgColor}`} key={idx}>
                    <Image src={item.img} fluid />
                    <p className="mt-1 mb-0 fw-medium">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="account-container mb-5">
          <h1 className="h3 pink-text mb-4">My Account / Personal Information</h1>
          <div className="accountProfileWrapper mt-3 pb-5">
            <Row className="align-items-start">
              <Col lg={3} md={4} className="align-self-center ">
                <div className="ProfilePic ">
                  <Image src={UserImg} fluid />
                </div>
              </Col>

              <Col lg={8} md={8}>
                <div className="account-header mb-3">
                  <h1 className="business-name">Jamalico Beauty</h1>
                  <div className="d-flex align-items-center ratings">
                    <FaRegStar className="stars" />
                    <FaRegStar className="stars" />
                    <FaRegStar className="stars" />
                    <FaRegStar className="stars" />
                    <FaRegStar className="stars" />
                    <span className="ratings-count ms-2">(23 Ratings)</span>
                  </div>
                </div>

                <div className="personal-info">
                  <h2 className="personal-info-title">Personal information</h2>

                  {/* FULL NAME */}
                  <div className="info-row d-flex justify-content-between align-items-center">
                    <div className="inputWrapCol">
                      <div className="info-label">Name &amp; surname</div>
                      <input
                        className="info-value"
                        value={profileInfo.fullname.value}
                        disabled={!profileInfo.fullname.isEditing}
                        onChange={(e) => handleProfileData(e, "fullname")}
                      />
                    </div>
                    <button
                      className="add-btn"
                      onClick={() => handleProfileEdit("fullname")}
                    >
                      {profileInfo.fullname.isEditing ? <FaXmark /> : "Edit"}
                    </button>
                  </div>

                  {/* USERNAME */}
                  <div className="info-row d-flex justify-content-between align-items-center">
                    <div className="inputWrapCol">
                      <div className="info-label">Username</div>
                      <input
                        className="info-value"
                        value={profileInfo.username.value}
                        disabled={!profileInfo.username.isEditing}
                        onChange={(e) => handleProfileData(e, "username")}
                      />
                    </div>
                    <button
                      className="add-btn"
                      onClick={() => handleProfileEdit("username")}
                    >
                      {profileInfo.username.isEditing ? <FaXmark /> : "Edit"}
                    </button>
                  </div>

                  {/* EMAIL */}
                  <div className="info-row d-flex justify-content-between align-items-center">
                    <div className="inputWrapCol">
                      <div className="info-label">Email</div>
                      <input
                        className="info-value"
                        value={profileInfo.email.value}
                        disabled={!profileInfo.email.isEditing}
                        onChange={(e) => handleProfileData(e, "email")}
                      />
                    </div>
                    <button
                      className="add-btn"
                      onClick={() => handleProfileEdit("email")}
                    >
                      {profileInfo.email.isEditing ? <FaXmark /> : "Edit"}
                    </button>
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="info-row d-flex justify-content-between align-items-center">
                    <div className="inputWrapCol">
                      <div className="info-label">Phone number</div>
                      <input
                        className="info-value"
                        value={
                          profileInfo.phoneNumber.value ??
                          "We'll send you an OTP to verify your mobile number."
                        }
                        readOnly={true}
                        // disabled={!profileInfo.phoneNumber.isEditing}
                        // onChange={(e) => handleProfileData(e, "phoneNumber")}
                      />
                    </div>
                    <button
                      className="add-btn"
                      // onClick={() => handleProfileEdit("phoneNumber")}
                    >
                      {/* {profileInfo.phoneNumber.isEditing ? (
                        <FaXmark />
                      ) : (
                        <> */}
                          <MdAddCircle size={20} /> Add
                        {/* </> */}
                      {/* )} */}
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="pt-1 gap-2">
            <Col lg={3} md={4}>
              <h4 className="fw-normal">
                <strong>2 years</strong> on Maevent
              </h4>
            </Col>
            <Col lg={3} md={4}>
              <h4 className="fw-normal">
                <strong>93 ads</strong> posted
              </h4>
            </Col>
            <Col lg={3} md={4}>
              <h4 className="fw-normal">
                <strong>12</strong> Blog posts
              </h4>
            </Col>
          </Row>
        </div>

        <div className="innerContainer mb-5">
          <h2 className="h3 pink-text mb-4">My Active Ads ({myAds.length})</h2>
          <div className="myads-wrapper">
            {myAds.map((item) => (
              <ProductCardStyle2 item={item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="innerContainer mb-5">
          <h2 className="h3 ">
            Reviews <span>45</span>
          </h2>
          <div className="d-flex align-items-center ratings mb-4">
            <FaRegStar className="stars" />
            <FaRegStar className="stars" />
            <FaRegStar className="stars" />
            <FaRegStar className="stars" />
            <FaRegStar className="stars" />
            <span className=" ms-2"> 5 star average from 45 ratings</span>
          </div>
          <div className="reviews-wrapper">
            <Row className="mb-3 gap-md-0 gap-3">
              {reviewsData.map((item) => (
                <Col key={item.id} md={4}>
                  <ReviewCard item={item} />
                </Col>
              ))}
            </Row>
          </div>
          <button className="border-btn">Load More</button>
        </div>

        <IconWrapper />
      </div>
    </>
  );
};

export default Account;
