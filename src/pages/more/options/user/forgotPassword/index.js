import { Form, Button } from "react-bootstrap";
import classes from "../user.module.css";

const ForgotPassword = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={classes.input_name}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button className={classes.login_btn}>
        Send recovery email
      </Button>
    </Form>
  )
}

export default ForgotPassword