import { useCookies } from "react-cookie";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import classes from "./larvae.module.css";
import { useContext } from "react";
import { Context } from "../../context/AppContext";

const Larvae = () => {
  const { 
    hatcheryCount, 
    meatCount,
    larvaeNum,
    velocity,
  } = useContext(Context);

  return (
    <Row className={classes.height}>
      <Col md={3}>
        <Link className={classes.larva} to='larva'>
          { meatCount > 300*(Math.pow(10, hatcheryCount)) ?
            <BsFillArrowUpCircleFill color="#337ab7" /> : ""        
          }
          <div className={classes.larva_name}>Larva</div>
          <div className={classes.larva_value}>
            {larvaeNum} +
            {
                velocity === "seconds" ? "1.00/sec"
              : velocity === "minutes" ? "60/min"
              : velocity === "hours" ? "3,600/hr"
              : velocity === "days" ? "86,400/day"
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