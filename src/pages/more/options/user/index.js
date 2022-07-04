import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Login from "./login";
import Signin from "./signin";
import ForgotPassword from "./forgotPassword";
import classes from "./user.module.css";

const User = () => {
  const [ loginType, setLoginType ] = useState("login")
  const handleSelect = (eventKey) => {
      setLoginType(eventKey)
  };
  return (
    <>
      <Nav 
        variant="tabs" 
        defaultActiveKey="login"
        onSelect={handleSelect}
        className={classes.loginNavField}
      >
        <Nav.Item>
          <Nav.Link 
            eventKey="login"
            className={classes.loginNav}
          >
            Log in 
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="signin"
            className={classes.loginNav}
          >
            Sign in
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="forgot"
            className={classes.loginNav}
          >
            Forgot password
          </Nav.Link>
        </Nav.Item>
      </Nav>
      { loginType === "login" ?
        <Login setLoginType = { setLoginType } /> :
        loginType === "signin" ?
        <Signin/> : <ForgotPassword />
      }
    </>
    
  )
}

export default User