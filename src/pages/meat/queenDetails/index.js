import React, { useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Col, Row, Button, Form } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from "../meat.module.css";
import { Context } from "../../../context/AppContext";

const DroneDetails = () => {
  const { queenCount, setQueenCount } = useContext(Context);
  const { meatCount, setMeatCount } = useContext(Context);
  const { droneCount, setDroneCount } = useContext(Context);
  const { larvaeCount, setLarvaeCount } = useContext(Context);

  const [ cookies, setCookie ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount",
    "queenCount",
    "droneTime",
    "hatcheryCount",
    "droneClick",
  ]);

  const [ queenStateValue, setQueenStateValue ] = useState(0);

  const handleQueenChange = (e) => {
    setQueenStateValue(e.target.value);
  }

  const handleHatch = () => {
    if(cookies.queenCount === undefined) {
      setQueenCount(0 + Number(queenStateValue));
    }

    setQueenCount(prevCount => Number(prevCount) + Number(queenStateValue))
    setMeatCount(meatCount - Number(queenStateValue*810));
    setDroneCount(droneCount - Number(queenStateValue*100));
    setLarvaeCount((larvaeCount - Number(queenStateValue)));
  }

  useEffect(() => {
    setCookie("droneCount", droneCount , { path: '/' });
  }, [droneCount])

  useEffect(() => {
    setCookie("meatCount", meatCount , { path: '/' });
  }, [ meatCount ])
  
  useEffect(() => {
    setCookie("queenCount", queenCount , { path: '/' });
  }, [queenCount])

  return (
    <div className={classes.droneDetails}>
      <Link 
        to="/larvae"
        className={classes.top_btn}
      >
        Queen
      </Link>
      <p>Queens rule over your swarm's workers.</p>
      <p>You own {Number(cookies.queenCount) === 0 ? "no" : cookies.queenCount} queens.</p>
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
        Number(cookies.droneCount) < 100 ?
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

