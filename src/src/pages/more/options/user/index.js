import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import Login from "./login";
import Signin from "./signin";
import ForgotPassword from "./forgotPassword";
import classes from "./user.module.css";

const User = () => {
  const [ loginType, setLoginType ] = useState("login");
  const [ showLogout, setShowLogout ] = useState(false);

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
      { 
        showLogout === true ? 
        <div className="m-2">
          Hello sven@mail.com! 
          <Button 
            variant="outline-secondary"
            onClick={() => setShowLogout(false)}
          >
            Logout
          </Button>
        </div> :
        showLogout === false && loginType === "login" ?
        <Login 
          setLoginType = { setLoginType } 
          setShowLogout = {setShowLogout}
        /> :
        showLogout === false && loginType === "signin" ?
        <Signin setShowLogout = {setShowLogout}/> : <ForgotPassword />
      }
    </>
    
  )
}

export default User