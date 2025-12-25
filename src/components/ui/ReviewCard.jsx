import React from "react";
import Card from "react-bootstrap/Card";
import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";
import "../../styles/reviewCard.css";

const ReviewCard = ({item = {
  name : "Robert",
    avatar : null,
  date : "05 December 2025",
  rating : 5,
  review : "Quick and easy to deal with.\nA pleasure to deal with and everything"
}}) => {
  return (
    <Card className="rounded-4 p-3 review-card">
      <div className="rc-inner">
        
        {/* Avatar */}
        <div className="reviewAvatar">
          {item.avatar ? (
            <img src={item.avatar} alt={item.name} className="w-100 h-100 rounded-circle object-fit-cover" />
          ) : (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 8 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            )}
        </div>

        {/* Content */}
        <div>
          {/* Header */}
          <div className="">
            <strong>{item.name}</strong> on {item.date}
          </div>

          {/* Stars */}
          <div className="rc-stars">
            {[...Array(5)].map((_, index) => (
              <FaRegStar
                key={index}
                size={20}
                className={`me-1 ${
                  index < item.rating ? "active" : ""
                }`}
              />
            ))}
          </div>

          {/* Review text */}
          <Card.Text className="mb-0 rc-txt ">
            {item.review}
          </Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
