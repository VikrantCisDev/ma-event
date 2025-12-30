import React, { useState } from "react";
import "../../styles/ChatScreen.css";

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="main-container">
        {/* <div 
          className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
        ></div> */}

        <div className={`contacts-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="messages-header px-3 py-2">
            <div className="d-flex align-items-center gap-3">
              <button className="menu-toggle" onClick={toggleSidebar}>
                ☰
              </button>
              <h4 className="messages-title">Messages</h4>
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-btn btn rounded py-1  ${
                  activeFilter === "All" ? "active" : "inactive"
                }`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              <button
                className={`filter-btn btn rounded py-1  ${
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
          </div>

          <div className="chat-messages p-3 p-md-4">
            <div className="message-date mb-3 mb-md-4">
              <span className="date-badge">Saturday, December 05</span>
            </div>
            <div className="msg-item upcoming">
              <div className="message-bubble mb-2">
                Hi there, I'm interested in ordering a cake from you. Sorry to
                ask, but is the price negotiable? And if we agree on a price,
                would it be possible to make payment through your preferred
                platform?
              </div>
              <div className="message-time mt-2">
                <svg className="checkmark" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="#666"
                  />
                </svg>
                12:00PM
              </div>
            </div>
            <div className="msg-item sending">
              <div className="message-bubble mb-2">
                Hi there, I'm interested in ordering a cake from you. Sorry to
                ask, but is the price negotiable? And if we agree on a price,
                would it be possible to make payment through your preferred
                platform?
              </div>
              <div className="message-time mt-2">
                <svg className="checkmark" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="#666"
                  />
                </svg>
                12:00PM
              </div>
            </div>
          </div>

          <div className="chat-input-container p-3 p-md-4">
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

<style>
  {`.messages-header {
    border-bottom: 1px solid #808180;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    max-height: 80px;
    background: white;
}

.messages-title {
    font-weight: 600;
    color: var(--pink);
    margin: 0;
}

.filter-buttons {
    display: flex;
    gap: 0.25rem;
}

.filter-btn {
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    min-width: 60px;
}

.filter-btn.active {
    background: var(--pink);
    color: white;
}

.filter-btn.inactive {
    background: white;
    color: var(--pink);
    border: 1px solid var(--pink);
}

.main-container {
    display: flex;
    height: 100%;
    min-height: 85vh;
    position: relative;
    gap: 0.5rem;
}

.contacts-sidebar {
    width: 370px;
    background: white;
    border: 1px solid #808180;
    overflow-y: auto;
    transition: transform 0.3s ease;
    scrollbar-width: 0;   
}
.contacts-sidebar::-webkit-scrollbar{
    display: none;
}

.contact-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #808180;
    transition: background 0.2s;
}

.contact-item:hover {
    background: #f8f8f8;
}

.contact-item.active {
    background: var(--pink);
    color: white;
}

.contact-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--pink);
    border: 1px solid var(--pink);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.contact-item.active .contact-avatar {
    background: white;
}

.avatar-icon {
    width: 30px;
    height: 30px;
}

.avatar-icon path {
    fill: white;
}

.contact-item.active .avatar-icon path {
    fill: var(--pink);
}

.contact-info {
    flex: 1;
    min-width: 0;
}

.contact-name {
    font-weight: bold;
    font-size: 16px;
    margin: 0 0 4px 0;
}

.contact-category {
    font-size: 14px;
    color: #666;
    margin: 0;
}

.contact-item.active .contact-category {
    color: rgba(255, 255, 255, 0.8);
}

.contact-time {
    font-size: 12px;
    color: #999;
    white-space: nowrap;
}

.contact-item.active .contact-time {
    color: rgba(255, 255, 255, 0.9);
}

.chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #808180;
}

.chat-header {
    border-bottom: 1px solid #808180;
    display: flex;
    align-items: center;
    gap: 15px;
    background: white;
    min-height: 80px;
    max-height: 80px;
}

.chat-header-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--pink);
    border: 1px solid var(--pink);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.chat-header-avatar::before,
.contact-avatar::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #FFF;
    position: absolute;
    top: 0;
    left: 0;
}

.chat-header-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
}

.chat-header-info p {
    margin: 0;
    font-size: 13px;
    color: #666;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    background: #d9d7eb;
}

.message-date {
    text-align: center;
}

.date-badge {
    display: inline-block;
    background: #2c3e50;
    color: white;
    padding: 6px 16px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
}

.message-bubble {
    background: var(--pink);
    color: #FFF;
    padding: 16px 20px;
    border-radius: 18px;
    max-width: 740px;
    width: 80%;
    font-family: var(--font-roboto);
    line-height: 1.4;
    position: relative;
    margin-left: 1rem;
    border: 0;
}

.message-bubble::before {
    content: " ";
    background: var(--pink);
    position: absolute;
    left: -15px;
    clip-path: polygon(100% 0, 0 100%, 100% 85%);
    width: 1rem;
    height: 1rem;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
}

.message-time {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: 1rem;
    font-size: 12px;
    color: #666;
}

.checkmark {
    width: 16px;
    height: 16px;
}

.chat-input-container {
    border-top: 1px solid #808180;
    background: white;
}

.input-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
}

.attach-icon {
    width: 24px;
    height: 24px;
    color: #999;
    cursor: pointer;
    flex-shrink: 0;
}

.message-input {
    flex: 1;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    outline: none;
    border: 2px solid var(--pink);
}

.message-input:focus {
    border-color: var(--pink);
}

.send-button {
    background: var(--pink);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

.send-button:hover {
    background: #5f2357;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--pink);
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
}

.sidebar-overlay {
    display: none;
}

/* Mobile Responsive Styles */
@media (max-width: 767px) {
    .menu-toggle {
        display: block;
    }

    .contacts-sidebar {
        position: fixed;
        left: 0;
        top: 70px;
        height: calc(100vh - 70px);
        z-index: 1000;
        transform: translateX(-100%);
        width: 280px;
    }

    .contacts-sidebar.open {
        transform: translateX(0);
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .sidebar-overlay {
        display: none;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .sidebar-overlay.open {
        display: block;
    }

    .chat-area {
        width: 100%;
    }

    .message-bubble {
        max-width: 85%;
    }

    .filter-buttons {
        margin-top: 0;
    }
}

@media (max-width: 576px) {
    .messages-title {
        font-size: 20px;
    }

    .filter-btn {
        font-size: 12px;
        min-width: 50px;
        padding: 6px 12px;
    }

    .contact-item {
        padding: 12px 15px;
    }

    .contact-avatar {
        width: 40px;
        height: 40px;
        margin-right: 12px;
    }

    .avatar-icon {
        width: 24px;
        height: 24px;
    }

    .contact-name {
        font-size: 14px;
    }

    .contact-category {
        font-size: 12px;
    }

    .send-button {
        padding: 10px 20px;
        font-size: 14px;
    }
}`}
</style>;
