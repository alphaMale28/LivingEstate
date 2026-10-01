import { useState } from "react";
import {
  FiArrowLeft,
  FiInfo,
  FiMapPin,
  FiMoreHorizontal,
  FiPaperclip,
  FiPhone,
  FiSearch,
  FiSend,
  FiSmile,
} from "react-icons/fi";

import "./messagePage.scss";

const conversations = [
  {
    id: 1,
    name: "Sarah Williams",
    message: "Is the property still available?",
    time: "10:42",
    unread: 2,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "James Carter",
    message: "I'd like to schedule a viewing.",
    time: "09:18",
    unread: 0,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Emma Wilson",
    message: "Thank you for the information.",
    time: "Yesterday",
    unread: 0,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

function MessagePage() {
  const [activeId, setActiveId] = useState(1);
  const [message, setMessage] = useState("");

  const activeConversation = conversations.find(
    (conversation) => conversation.id === activeId,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    console.log(message);
    setMessage("");
  };

  return (
    <main className="messagePage">
      <div className="messageLayout">
        {/* CONVERSATIONS */}
        <aside className="conversationPanel">
          <div className="conversationHeader">
            <div>
              <span className="eyebrow">INBOX</span>
              <h1>Messages</h1>
            </div>

            <button>
              <FiMoreHorizontal />
            </button>
          </div>

          <div className="conversationSearch">
            <FiSearch />

            <input placeholder="Search conversations..." />
          </div>

          <div className="conversationList">
            {conversations.map((conversation) => (
              <button
                type="button"
                key={conversation.id}
                className={
                  activeId === conversation.id
                    ? "conversation active"
                    : "conversation"
                }
                onClick={() => setActiveId(conversation.id)}
              >
                <div className="conversationAvatar">
                  <img src={conversation.avatar} alt={conversation.name} />
                  <span />
                </div>

                <div className="conversationContent">
                  <div className="conversationTop">
                    <strong>{conversation.name}</strong>
                    <time>{conversation.time}</time>
                  </div>

                  <div className="conversationBottom">
                    <p>{conversation.message}</p>

                    {conversation.unread > 0 && (
                      <span className="unread">{conversation.unread}</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* ACTIVE CHAT */}
        <section className="chatPanel">
          <header className="chatHeader">
            <div className="chatPerson">
              <div className="chatAvatar">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                />
                <span />
              </div>

              <div>
                <strong>{activeConversation.name}</strong>
                <small>Active now</small>
              </div>
            </div>

            <div className="chatActions">
              <button>
                <FiPhone />
              </button>

              <button>
                <FiInfo />
              </button>

              <button>
                <FiMoreHorizontal />
              </button>
            </div>
          </header>

          {/* PROPERTY CONTEXT */}
          <div className="propertyContext">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
              alt="Contemporary Residence"
            />

            <div>
              <span>PROPERTY ENQUIRY</span>
              <strong>Contemporary Hillside Residence</strong>

              <small>
                <FiMapPin />
                Kathmandu, Nepal
              </small>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="chatMessages">
            <div className="dateDivider">
              <span>Today</span>
            </div>

            <div className="message received">
              <p>
                Hi Alex, I came across the Contemporary Hillside Residence on
                LivingEstate.
              </p>
              <time>10:36</time>
            </div>

            <div className="message received">
              <p>Is the property still available?</p>
              <time>10:37</time>
            </div>

            <div className="message sent">
              <p>Hi Sarah. Yes, it is currently available.</p>
              <time>10:39</time>
            </div>

            <div className="message sent">
              <p>Would you like to arrange a viewing?</p>
              <time>10:40</time>
            </div>

            <div className="message received">
              <p>That would be great. Is Saturday afternoon possible?</p>
              <time>10:42</time>
            </div>
          </div>

          {/* MESSAGE INPUT */}
          <form className="messageComposer" onSubmit={handleSubmit}>
            <button type="button">
              <FiPaperclip />
            </button>

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
            />

            <button type="button">
              <FiSmile />
            </button>

            <button className="sendButton" type="submit">
              <FiSend />
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default MessagePage;
