import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Col, Row, Button, Form } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from "../meat.module.css"
import TwinDrones from "./twinDrones";
import FasterDrones from "./fasterDrones";
import { Context } from "../../../context/AppContext";

const DroneDetails = () => {
  const {
    droneCount, setDroneCount,
    meatCount, setMeatCount,
    larvaeNum,  setLarvaeNum, 
    droneClick, setDroneClick,
    queenCount,
    fasterDronesCounter,
    twinDronesCounter,
  } = useContext(Context);
  const [ droneStateValue, setDroneStateValue ] = useState(0);
  const [ cookies, setCookie ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount",
    "droneTime",
    "droneClick",
    "hatcheryCount",
  ]);

  const handleDroneChange = (e) => {
    setDroneStateValue(e.target.value);
  }

  const handleHatch = (i) => {
    if(larvaeNum < i) {
      alert("You do't have enough larvae");
      return;
    }
    if(cookies.droneTime === undefined) {
      const time = new Date();
      setCookie("droneTime", time, {path: "/"});
    }
    setDroneClick(droneClick+1);
    if(droneCount === undefined) {
      setDroneCount(0 + Number(droneStateValue));
    }
    setDroneCount(prevCount => Number(prevCount) + Number(i));
    setMeatCount(meatCount - Number(i*10));
    setLarvaeNum(larvaeNum - Number(i));
  }
  

  console.log("+++++++++++++++++++++", twinDronesCounter)
  console.log("queenCount", queenCount)
  return (
    <div className={classes.droneDetails}>
      <Link 
        to="/larvae"
        className={classes.top_btn}
      >
        Drone
      </Link>
      <p>Drones are the lowest class of worker in your swarm. They continuously gather meat to feed your swarm.</p>
      <p>You own {droneCount === 0 ? "no" : droneCount} drones.</p>
      <p>Each produces {' '}
        {
          cookies.velocity === "seconds" ? "1.00000"
        : cookies.velocity === "minutes" ? "60"
        : cookies.velocity === "hours" ? "3,600"
        : cookies.velocity === "days" ? "86,400"
        : "900/wrap"
        }
          {' '}meat per {' '}
        {cookies.velocity}. (×1.00 bonus)
      </p>
      <p>
        In total, they produce {' '}
        {
          cookies.velocity === "seconds" ? 1*cookies.droneCount
        : cookies.velocity === "minutes" ? 60*Number(cookies.droneCount)
        : cookies.velocity === "hours" ? 3600*Number(cookies.droneCount)
        : cookies.velocity === "days" ? 86400*Number(cookies.droneCount)
        : 900*Number(cookies.droneCount)
        }
        {' '}meat per {cookies.velocity}
      </p>
      <div className={classes.divider} />
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          Hatching
        </Form.Label>
        <Col sm="4">
          <Form.Control 
            type="text" 
            placeholder="1"
            onChange={handleDroneChange}
          />
        </Col>
        <Form.Label column sm="4">
          drone will cost {droneStateValue*10} meat and {droneStateValue} larva.
        </Form.Label>
      </Form.Group>
      { larvaeNum < droneStateValue || meatCount < 10*droneStateValue ?
        <Button
          disabled
          className={classes.disableHatch_btn}
        >
          Can't Hatch
        </Button> :
        <>
          <Button
            variant="outline-secondary"
            className={classes.hatch_btn}
            value={droneStateValue}
            onClick={ () => handleHatch( 
              droneStateValue === 0 ? 1 :
              droneStateValue*10 < meatCount ? droneStateValue : 
              Math.trunc(meatCount/10)
            )}
          >
            Hatch 
            { droneStateValue === 0 ? 1 :
              droneStateValue*10 < meatCount ? droneStateValue : 
              Math.trunc(meatCount/10)
            }
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.hatch_btn}
            onClick={ () => handleHatch( Math.trunc(meatCount/10 ))}
          >
            Hatch { Math.trunc(meatCount/10) }
          </Button>
        </>
      }
      <Link
        to="/meat"
        className={classes.close}
      >
        <BsXLg className={classes.close_btn} />
      </Link>
      { 
        droneCount > 66 || fasterDronesCounter > 0 || twinDronesCounter > 0 ? 
        <FasterDrones />: ""
      }
      {
       twinDronesCounter > 0 || queenCount > 0 ? <TwinDrones /> : ""
      }
    </div>
  )
}

export default DroneDetails