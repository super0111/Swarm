import { useCookies } from "react-cookie";
import { Row, Col } from "react-bootstrap";
import { BsCheckLg, BsXLg, BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import classes from "./all.module.css";
import { useContext } from "react";
import { Context } from "../../../context/AppContext";

const All = () => {
  const { 
    meatCount,
    droneCount,
    larvaeNum,
    queenCount, 
    twinDronesCounter,
    fasterDronesCounter, 
    velocity,
    hatcheryCount,
  } = useContext(Context)

  return (
    <Row className={classes.height}>
      <Col md={3}>
        <Link className={classes.drone} to="meat">
          <div className={classes.drone_name}>Meat</div>
          <div className={classes.drone_value}>{meatCount}</div>
          <div className={classes.drone_value}>
            +{droneCount === undefined  ? 0 : droneCount}/
            {
              velocity === "seconds" ? "sec" :
              velocity === "minutes" ? "min" :
              velocity === "hours" ? "hour" :
              velocity === "days" ? "days" : "wrap"
            }
          </div>
        </Link>
        <Link className={classes.meat} to="larva">
          { meatCount > 300*(Math.pow(10, hatcheryCount)) ?
            <BsFillArrowUpCircleFill color="#337ab7" /> : "" 
          }
          <div className={classes.drone_name}>Larva</div>
          <div className={classes.drone_value}>{larvaeNum}</div>
          <div className={classes.drone_value}>
            +{hatcheryCount === undefined ? 1 : (Number(hatcheryCount)+1)}/
            {
              velocity === "seconds" ? "sec" :
              velocity === "minutes" ? "min" :
              velocity === "hours" ? "hour" :
              velocity === "days" ? "days" : "wrap"
            }
          </div>
        </Link>
        <Link className={classes.meat} to="crystal">
          <div className={classes.drone_name}>Crystal</div>
          <div className={classes.drone_value}>0</div>
        </Link>
        <Link className={classes.meat} to="drone">
          { queenCount >= Math.pow(10, twinDronesCounter) || droneCount > 66*(fasterDronesCounter+1) ?
            <BsFillArrowUpCircleFill size={16} color="#337ab7" /> : ""
          }
          <div className={classes.drone_name}>Drone</div>
          <div className={classes.drone_value}>{droneCount === undefined  ? 0 : droneCount}</div>
        </Link>
      </Col>
      <Col md={9}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default All