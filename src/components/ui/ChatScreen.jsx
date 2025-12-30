import React, { useState } from "react";
import "../../styles/ChatScreen.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";

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
                      <svg className="checkmark" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                          fill="#666"
                        />
                      </svg>
                      {item.time}
                    </div>
                  </div>
                })}

              </>
            )}
          </div>

          <div className="chat-input-container px-3 px-md-4 py-2 ">
            <div className="input-wrapper">
              <svg
                className="attach-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
              </svg>
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
