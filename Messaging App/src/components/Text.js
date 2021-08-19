import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Text.css";

const Text = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message-sender"}`}
      >
        <Avatar className="message-photo" src={photo} />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
      </div>
    );
  }
);
export default Text;
