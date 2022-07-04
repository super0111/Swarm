import { Form, Button } from "react-bootstrap";
import classes from "../user.module.css";

const Signin = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Email</Form.Label>
        <Form.Control type="email" />
        <Form.Label>We'll only send you account recovery/lost password emails.  </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Password</Form.Label>
        <Form.Control type="password" />
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group>
        <Form.Check.Input type='checkbox' isValid />
        <strong style={{margin: "0 5px"}}>Remember me</strong>
      </Form.Group>
      <Form.Group>
        <Button className={classes.login_btn}>
          Sign In
        </Button>
      </Form.Group>
    </Form>
  )
}

export default Signin