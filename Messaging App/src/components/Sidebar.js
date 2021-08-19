import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, Button, IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import db, { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  const [open, setOpen] = useState(false);
  const [chatName, setChatName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
      setChatName("");
      handleClose();
    }
  };

  return (
    <div className="sidebar">
      <Modal open={open} onClose={handleClose} className="sidebar-addChatModal">
        <Fade in={open}>
          <div className="sidebar-addChatModalContainer">
            <h2>Add New Chat</h2>
            <TextField
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
              id="outlined-basic"
              label="Enter Chat Name"
              variant="outlined"
              margin="dense"
            />
            <Button onClick={addChat} className="sidebar-addChannelButton">
              Add Chat
            </Button>
          </div>
        </Fade>
      </Modal>

      <div className="sidebar-header">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar-avatar"
        />

        <div className="sidebar-input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar-input-button">
          <RateReviewOutlinedIcon
            className="sidebar-add"
            onClick={handleOpen}
          />
          {/* <Button onClick={handleOpen}>Add Chat</Button> */}
        </IconButton>
      </div>

      <div className="sidebar-chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
