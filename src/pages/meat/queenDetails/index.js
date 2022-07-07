import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Col, Row, Button, Form } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from "../meat.module.css";
import { Context } from "../../../context/AppContext";

const DroneDetails = () => {
  const { queenCount, setQueenCount, meatCount, setMeatCount,  droneCount, setDroneCount } = useContext(Context);
  const [ queenStateValue, setQueenStateValue ] = useState(0);

  const [ cookies ] = useCookies([
    "velocity", 
  ]);

  const handleQueenChange = (e) => {
    setQueenStateValue(e.target.value);
  }

  const handleHatch = () => {
    if(queenStateValue === 0) {
      alert("Please input number"); 
      return;
    }
    if(queenCount === undefined) {
      setQueenCount(0 + Number(queenStateValue));
    }
    setQueenCount(prevCount => Number(prevCount) + Number(queenStateValue))
    setMeatCount(meatCount - Number(queenStateValue*810));
    setDroneCount(droneCount - Number(queenStateValue*100));
  }

  return (
    <div className={classes.droneDetails}>
      <Link 
        to="/larvae"
        className={classes.top_btn}
      >
        Queen
      </Link>
      <p>Queens rule over your swarm's workers.</p>
      <p>You own {queenCount === 0 ? "no" : queenCount} queens.</p>
      <p>Each produces {' '}
        {
          cookies.velocity === "seconds" ? "1.00000"
        : cookies.velocity === "minutes" ? "60"
        : cookies.velocity === "hours" ? "3,600"
        : cookies.velocity === "days" ? "86,400"
        : "900/wrap"
        }
          {' '} drones per {' '}
        {cookies.velocity}. (×1.00 bonus)
      </p>
      <div className={classes.divider} />
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          Hatching
        </Form.Label>
        <Col sm="4">
          <Form.Control 
            type="text"
            placeholder="Enter number"
            onChange={handleQueenChange}
          />
        </Col>
        <Form.Label column sm="4">
          queen will cost {queenStateValue*810} meat and {queenStateValue*100} drones, and {queenStateValue} larva.
        </Form.Label>
      </Form.Group>
      {
        (droneCount < (100*queenStateValue) || meatCount < (810*queenStateValue)) ?
        <Button
          disabled
          className={classes.disableHatch_btn}
        >
          Can't Hatch
        </Button> :
        <Button
          variant="outline-secondary"
          className={classes.queenHatch_btn}
          value={queenStateValue}
          onClick={handleHatch}
        >
          Hatch
        </Button>
      }
      <Link
        to="/meat"
        className={classes.close}
      >
        <BsXLg className={classes.close_btn} />
      </Link>
    </div>
  )
}

export default DroneDetails

