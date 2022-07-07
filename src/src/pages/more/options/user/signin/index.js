import { useState, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import classes from "../user.module.css";
import { Context } from "../../../../../context/AppContext";

const Signin = (props) => {
  const { setShowLogout } = props;
  const { setCurrentUser } = useContext(Context);
  const [ emailValue, setEmailValue ] = useState('');
  const [ passwordValue, setPasswordValue ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ alert, setAlert ] = useState('');
  const handleSignin = () => {
    if( passwordValue !== confirmPassword ) {
      setAlert("Password isn't match")
      return
    }
    if( passwordValue.length < 6 ) {
      setAlert("Input password more 6 characters")
      return
    }
    if(passwordValue.trim() === "" ) {
      setAlert("Input password value")
      return
    }
    if(emailValue.trim() === "" ) {
      setAlert("Input email value")
      return
    }else
    if( !emailValue.includes("@", ".")) {
      setAlert("Input correct Email")
      return
    }

    let formData = {
      email: emailValue,
      password: passwordValue,
      confirmPassword : confirmPassword
    }
    let users = localStorage.getItem('formdata');
    if(users == null){
      users = []
      users.push(formData)
      localStorage.setItem('formdata', JSON.stringify(users));
      setAlert("Sign in successfully");
      setShowLogout(true)
      setCurrentUser(emailValue);
    } else 
    {
      const oldArr = JSON.parse(users);
      const existUser = oldArr.filter(user => ( user.email === emailValue ));
      if( existUser.length > 0 ) {
        setAlert("User already exist");
        return;
      }
      oldArr.push(formData);
      localStorage.setItem("formdata", JSON.stringify(oldArr));
      setAlert("Sign in successfully")
      setCurrentUser(emailValue);
      setShowLogout(true)
    }
  }
  const hand =() => {
    localStorage.removeItem("formdata")
    let users = localStorage.getItem('formdata');
  }
  return (
    <Form>
      <div onClick={hand}>remove</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Email</Form.Label>
        <Form.Control 
          type="email" 
          onChange={ (e) =>
            setEmailValue(e.target.value)
          }
        />
        <Form.Label>We'll only send you account recovery/lost password emails.</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Password</Form.Label>
        <Form.Control 
          type="password" 
          onChange={ (e) =>
            setPasswordValue(e.target.value)
          }
        />
        <Form.Control 
          type="password" 
          onChange={ (e) =>
            setConfirmPassword(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Check.Input type='checkbox' isValid />
        <strong style={{margin: "0 5px"}}>Remember me</strong>
      </Form.Group>
      <Form.Group>
        <Button 
          className={classes.login_btn}
          onClick={handleSignin}
        >
          Sign In
        </Button>
      </Form.Group>
      { alert ?
        <Alert variant="danger">
          {alert}
        </Alert> : ""
      }
    </Form>
  )
}

export default Signin