import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Col, Row, Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import classes from "./meat.module.css";
import { Context } from "../../context/AppContext";

import { func } from '../../utils'

const Meat = () => {
  const { queenCount, setQueenCount, fasterDrones } = useContext(Context);
  const [ cookies ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount",
    "hatcheryCount",
  ]);
  const [ isShow, setIsShow ] = useState(true);
  const handleClose = () => {
    setIsShow(true)
  }
  const value = cookies.meatCount;
  const newValue = func(value);

  return (
    <Row className={classes.height}>
      <Col md={3}>
        { Number(cookies.droneCount) >= 10 || queenCount > 0 || fasterDrones > 0 ? 
            <Link className={classes.drone} to="/meat/queen">
              <div className={classes.drone_name}>Queen</div>
              <div className={classes.drone_value}>
                {cookies.queenCount === undefined ? 0 : cookies.queenCount}
              </div>
          </Link> : ""
        }
        <Link className={classes.drone} to="/meat/drone">
          <div className={classes.drone_name}>Drone</div>
          <div className={classes.drone_value}>
            {cookies.droneCount === undefined ? 0 : cookies.droneCount}
          </div>
        </Link>
        <Link className={classes.meat} to="/meat/meat">
          <div className={classes.drone_name}>Meat</div>
          <div className={classes.drone_value}>{newValue}</div>
        </Link>
      </Col>
      <Col md={9}>
        <Outlet />
      </Col>
      {
        cookies.goodStart === true ?
        <Card className={classes.cardItem}>
          <Card.Body>
            <div className={classes.body}>
              <BsCheckLg size={50} color="#3c763d" />
              <div style={{textAlign: "center"}}>
                <span style={{color: "rgb(84 131 78)"}}>Archivement  </span>
                <h4 style={{color: "#3c763d"}}>A Good Start</h4>
                <span style={{color: "rgb(84 131 78)"}}>Hatch your first drone</span>
              </div>
              <span style={{color: "#3c763d", fontSize: "300%", fontWeight: "700"}}>+10</span>
            </div>
            <div className={classes.notify_close_btn} onClick={handleClose}>
              <BsXLg className={classes.close_btn} />
            </div>
          </Card.Body>
        </Card> : ""
      }
  </Row>
  )
}

export default Meat