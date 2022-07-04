import { useCookies } from "react-cookie";
import { Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import classes from "./all.module.css";

const All = () => {
  const [ cookies ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount", 
    "hatcheryCount"
  ]);

  return (
    <Row className={classes.height}>
      <Col md={3}>
        <Link className={classes.drone} to="meat">
          <div className={classes.drone_name}>Meat</div>
          <div className={classes.drone_value}>{cookies.meatCount}</div>
          <div className={classes.drone_value}>
            +{cookies.droneCount == undefined  ? 0 : cookies.droneCount}/
            {
              cookies.velocity === "seconds" ? "sec" :
              cookies.velocity === "minutes" ? "min" :
              cookies.velocity === "hours" ? "hour" :
              cookies.velocity === "days" ? "days" : "wrap"
            }
          </div>
        </Link>
        <Link className={classes.meat} to="larva">
          <div className={classes.drone_name}>Larva</div>
          <div className={classes.drone_value}>{cookies.larvaeCount}</div>
          <div className={classes.drone_value}>
            +{cookies.hatcheryCount == undefined ? 1 : (Number(cookies.hatcheryCount)+1)}/
            {
              cookies.velocity === "seconds" ? "sec" :
              cookies.velocity === "minutes" ? "min" :
              cookies.velocity === "hours" ? "hour" :
              cookies.velocity === "days" ? "days" : "wrap"
            }
          </div>
        </Link>
        <Link className={classes.meat} to="crystal">
          <div className={classes.drone_name}>Crystal</div>
          <div className={classes.drone_value}>0</div>
        </Link>
        <Link className={classes.meat} to="drone">
          <div className={classes.drone_name}>Drone</div>
          <div className={classes.drone_value}>{cookies.droneCount == undefined  ? 0 : cookies.droneCount}</div>
        </Link>
      </Col>
      <Col md={9}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default All