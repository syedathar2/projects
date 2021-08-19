import React from "react";
import "./Message.css";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

function Message() {
  return (
    <div className="message">
      {/* We have a Sidebar */}
      <Sidebar />
      {/* We have a Chat */}
      <ChatWindow />
    </div>
  );
}

export default Message;
