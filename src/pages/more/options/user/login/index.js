import { Form, Button } from "react-bootstrap";
import classes from "../user.module.css";

const Login = (props) => {
  const setLoginType = props.setLoginType;
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group>
        <Form.Check.Input type='checkbox' isValid />
        <strong style={{margin: "0 5px"}}>Remember me</strong>
      </Form.Group>
      <Form.Group>
        <Button className={classes.login_btn}>
          Log in
        </Button>
      </Form.Group>
      <Button 
        className={classes.forgot_btn}
        onClick={() => setLoginType("forgot")}
      >
        Forgot your password?
      </Button>
    </Form>
  )
}

export default Login