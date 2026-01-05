import React, { useState } from "react";
import "../../styles/ChatScreen.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { PiClockLight } from "react-icons/pi";


const ChatScreen = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const contacts = [
    {
      name: "Robert Teye",
      category: "Cake / fruit malad",
      time: "04 Days ago",
      active: true,
    },
    {
      name: "Robert Teye",
      category: "Cake / fruit malad",
      time: "39 Weeks ago",
      active: false,
    },
    {
      name: "Augusy Paine",
      category: "Cake / fruit malad",
      time: "Today @17:23",
      active: false,
    },
    {
      name: "James Catridge",
      category: "Traditional Dance",
      time: "12 Days ago",
      active: false,
    },
    {
      name: "Rudi Empire",
      category: "Clothing",
      time: "15 Weeks ago",
      active: false,
    },
    {
      name: "Peter Dami",
      category: "Photography",
      time: "Today @11:23",
      active: false,
    },
    {
      name: "Jenipher rush",
      category: "Dj Music",
      time: "45 Weeks ago",
      active: false,
    },
  ];

  const chatData = {
    date: "Saturday, December 05",
    messages: [
      {
        id: 1,
        type: "server", // type: user for msg sent from user
        text: "Hi there, I'm interested in ordering a cake from you. Sorry to ask, but is the price negotiable? And if we agree on a price, would it be possible to make payment through your preferred platform?",
        time: "12:00 PM",
        status: "sent",
      },
    ],
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="chat-container">
        {/* <div 
          className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
        ></div> */}

        <div className={`contacts-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="messages-header px-3 py-2 position-sticky top-0 z-1">
            <div className="d-flex align-items-center gap-3">
              <button className="menu-toggle" onClick={toggleSidebar}>
                <IoArrowBackOutline />
              </button>
              <h4 className="messages-title">Messages</h4>
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-btn rounded py-1  ${
                  activeFilter === "All" ? "active" : "inactive"
                }`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              <button
                className={`filter-btn rounded py-1  ${
                  activeFilter === "Unread" ? "active" : "inactive"
                }`}
                onClick={() => setActiveFilter("Unread")}
              >
                Unread
              </button>
            </div>
          </div>
          <div className="contacts-wrapper">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`contact-item px-3 py-3 ${
                  contact.active ? "active" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="contact-avatar me-3">
                  <svg className="avatar-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact-info">
                  <p className="contact-name">{contact.name}</p>
                  <p className="contact-category">{contact.category}</p>
                </div>
                <div className="contact-time ms-2">{contact.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-area">
          <div className="chat-header px-3 px-md-4 py-2 py-md-3">
            <div className="chat-header-avatar">
              <svg className="avatar-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="chat-header-info">
              <h3>Robert Teye</h3>
              <p>Last seen Sun, 07 Dec, 16:34</p>
            </div>
            <button className="menu-toggle ms-auto" onClick={toggleSidebar}>
              <MdContacts />
            </button>
          </div>

          <div className="p-2 ms-1">
            <p className="m-0 fs-5">Cake / Fruit Malad</p>
          </div>

          <div className="chat-messages p-sm-3 py-3 px-2 p-md-4 ms-1">
            

            {chatData && (
              <>
                <div className="message-date mb-3 mb-md-4">
                  <span className="date-badge">{chatData.date}</span>
                </div>

                {chatData.messages.map((item, idx)=>{
                  return <div className={`msg-item ${item.type}`} key={idx}>
                    <div className="message-bubble mb-2">{item.text}</div>
                    <div className="message-time mt-2">
                      <PiClockLight size={16} className="checkmark" />
                      {item.time}
                    </div>
                  </div>
                })}

              </>
            )}
          </div>

          <div className="chat-input-container px-3 px-md-4 py-2 ">
            <div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M13 18.999a.974.974 0 0 0 .196.563l-1.79 1.81a5.5 5.5 0 1 1-7.778-7.78L15.185 2.159a4 4 0 0 1 5.63 5.685L10.259 18.276a2.5 2.5 0 0 1-3.526-3.545l8-7.999.706.707-8 8a1.5 1.5 0 0 0 2.116 2.126L20.111 7.132a3 3 0 1 0-4.223-4.263L4.332 14.304a4.5 4.5 0 1 0 6.364 6.364L13 18.338zM19 14h-1v4h-4v.999h4V23h1v-4.001h4V18h-4z"/></svg>
              <input
                type="text"
                className="message-input p-2"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="send-button px-4 py-2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
