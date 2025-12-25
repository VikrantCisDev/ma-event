import React from "react";
import "../../styles/ToolCardsWrap.css";
import HomeIcon from "../../assets/Images/homeIcon.png";
import GuestListIcon from "../../assets/Images/guestListIcon.png";
import BudgetIcon from "../../assets/Images/budgetIcon.png";
import ChecklistIcon from "../../assets/Images/checklistIcon.png";
import AdviceIcon from "../../assets/Images/adviceIcon.png";
import ShortlistIcon from "../../assets/Images/pt-icon4.png";
import { Image } from "react-bootstrap";

let dashboardCards = [
  {
    id: 1,
    title: "Home",
    subtitle: "150 Days To Go",
    icon: HomeIcon,
    bgColor: "pink", // deep pink / magenta
  },
  {
    id: 2,
    title: "Guest List",
    subtitle: "8 Invited",
    icon: GuestListIcon,
    bgColor: "orange",
  },
  {
    id: 3,
    title: "Budget",
    subtitle: "30% Remaining",
    icon: BudgetIcon,
    bgColor: "blue",
  },
  {
    id: 4,
    title: "Checklist",
    subtitle: "19% Complete",
    icon: ChecklistIcon,
    bgColor: "pink",
  },
  {
    id: 5,
    title: "Shortlist",
    subtitle: "2 Saved",
    icon: ShortlistIcon,
    bgColor: "dark",
  },
  {
    id: 6,
    title: "Advice",
    subtitle: "250 Ideas",
    icon: AdviceIcon,
    bgColor: "lightPink",
  },
];

const ToolCardsWrap = () => {
  return (
    <>
      <div className="shortlistGrid mb-4 pb-lg-3">
        {dashboardCards.map((item, idx) => {
          return (
            <div className={`shortlistCard card-${item.bgColor}`} key={idx}>
              <Image src={item.icon} fluid />
              <p className="mb-0 fw-medium sc-title">{item.title}</p>
              <p className="mt-1 mb-0 fw-medium sc-subtitle">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToolCardsWrap;
