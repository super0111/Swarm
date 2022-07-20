import React, { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from "../meat.module.css";
import TwinDrones from "./twinDrones";
import FasterDrones from "./fasterDrones";
import { Context } from "../../../context/AppContext";
import DroneHatching from "./droneHatching";

const DroneDetails = () => {
  const {
    droneCount, 
    queenCount,
    velocity,
    fasterDronesCounter,
    twinDronesCounter,
  } = useContext(Context);

  return (
    <div className={classes.droneDetails}>
      <Link to="/larvae" className={classes.top_btn}>
        Drone
      </Link>
      <p>Drones are the lowest class of worker in your swarm. They continuously gather meat to feed your swarm.</p>
      <p>You own {droneCount === 0 ? "no" : droneCount} drones.</p>
      <p>Each produces {' '}
        {
            velocity === "seconds" ? "1.00000"
          : velocity === "minutes" ? "60"
          : velocity === "hours" ? "3,600"
          : velocity === "days" ? "86,400"
          : "900/wrap"
        }
          {' '} meat per {' '}
        {velocity}. (×1.00 bonus)
      </p>
      <p>
        In total, they produce {' '}
        {
            velocity === "seconds" ? 1*droneCount
          : velocity === "minutes" ? 60*droneCount
          : velocity === "hours" ? 3600*droneCount
          : velocity === "days" ? 86400*droneCount
          : 900*droneCount
        }
        {' '}meat per {velocity}
      </p>
      <div className={classes.divider} />
      <DroneHatching />
      <Link to="/meat" className={classes.close}>
        <BsXLg className={classes.close_btn} />
      </Link>
      { droneCount > 66 || fasterDronesCounter > 0 || twinDronesCounter > 0 ? <FasterDrones />: "" }
      { twinDronesCounter > 0 || queenCount > 0 ? <TwinDrones /> : "" }
    </div>
  )
}

export default DroneDetails