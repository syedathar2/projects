import React from "react";
import "./Login.css";
import Logo from "../images/messaging-app-logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img src={Logo} alt="" />
        <h1>Messaging App</h1>
      </div>
      <Button onClick={signIn}>Sign In With Google</Button>
    </div>
  );
}

export default Login;
