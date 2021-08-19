import React, { useEffect } from "react";
import "./App.css";
import Message from "./components/Message";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return <div className="app">{user ? <Message /> : <Login />}</div>;
}

export default App;
