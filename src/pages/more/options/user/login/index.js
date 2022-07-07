import { useState, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import classes from "../user.module.css";
import { Context } from "../../../../../context/AppContext";

const Login = (props) => {
  const setLoginType = props.setLoginType;
  const { setShowLogout } = props;
  const { setCurrentUser } = useContext(Context);
  const [ emailValue, setEmilValue ] = useState("");
  const [ passwordValue, setPasswordValue ] = useState("");
  const [ alert, setAlert ] = useState("");

  const handleLogin = () => {
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
    const oldUsers = localStorage.getItem('formdata');
    const users = JSON.parse(oldUsers);
    if(!users) { setAlert("User isn't found"); return;}
    const existUser = users.find(user => ( user.email === emailValue ));
    if(!existUser) {
      setAlert("User isn't found"); return;
    } else
      if(existUser.password !== passwordValue) {
        setAlert("User password isn't correct");
        return;
      }
      setShowLogout(true);
      setCurrentUser(emailValue)
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Email</Form.Label>
        <Form.Control 
          type="email" 
          onChange={ (e) => 
            setEmilValue(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Password</Form.Label>
        <Form.Control 
          type="password" 
          onChange={ (e) => 
            setPasswordValue(e.target.value)
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
          onClick={handleLogin}  
        >
          Log in
        </Button>
      </Form.Group>
      <Button 
        className={classes.forgot_btn}
        onClick={() => setLoginType("forgot")}
      >
        Forgot your password?
      </Button>
      { 
        alert ? 
        <Alert variant="danger">
          {alert}
        </Alert> 
        : "" 
      }
    </Form>
  )
}

export default Login