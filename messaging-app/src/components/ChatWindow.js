import React, { useEffect, useRef, useState } from "react";
import "./ChatWindow.css";
//import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { IconButton } from "@material-ui/core";
import Text from "./Text";
import { useSelector } from "react-redux";
import { selectChatName, selectChatId } from "../features/chatSlice";
import db from "../firebase";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function ChatWindow() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const [messages, setMessages] = useState([]);
  const chatId = useSelector(selectChatId);
  const ref = useRef(null);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput("");

    ref.current.scrollTo(0, ref.current.scrollHeight + 100);
  };
  return (
    <div className="chat">
      {/* Header */}
      <div className="chat-header">
        <h4>
          Chat: <span className="chat-name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* Messages/Body */}
      <div className="chat-messages" ref={ref}>
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Text key={id} contents={data} />
          ))}
        </FlipMove>
      </div>
      {/* Type of Message */}
      <div className="chat-input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat-mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatWindow;
