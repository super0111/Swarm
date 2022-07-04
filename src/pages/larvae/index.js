import { useCookies } from "react-cookie";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import classes from "./larvae.module.css";

const Larvae = () => {
  const [ cookies ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount",
    "hatcheryCount",
    "startCount",
    "startTime",
  ]);
  return (
    <Row className={classes.height}>
      <Col md={3}>
        <Link className={classes.larva} to='larva'>
          { Number(cookies.meatCount) > 300*(Math.pow(10, Number(cookies.hatcheryCount))) ?
            <BsFillArrowUpCircleFill color="#337ab7" /> : ""        
          }
          <div className={classes.larva_name}>Larva</div>
          <div className={classes.larva_value}>
            {cookies.larvaeCount} +
            {
            cookies.velocity === "seconds" ? "1.00/sec"
          : cookies.velocity === "minutes" ? "60/min"
          : cookies.velocity === "hours" ? "3,600/hr"
          : cookies.velocity === "days" ? "86,400/day"
          : "900/wrap"
            }
          </div>
        </Link>
      </Col>
      <Col md={9}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default Larvae;