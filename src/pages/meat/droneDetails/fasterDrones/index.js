import { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import classes from "../../meat.module.css";
import { Button, ProgressBar } from "react-bootstrap"
import { Context } from "../../../../context/AppContext";

const FasterDrones = () => {
  const {
    droneCount, setDroneCount,
    fasterDronesCounter, setFasterDrones,
  } = useContext(Context);
  const [ cookies, setCookie ] = useCookies([ "fasterDronesTime" ]);

  const [hatPercentage, setHatPercentage] = useState(0);

  useEffect(() => {
    const _hatPercentage = Math.trunc( droneCount/(66*(fasterDronesCounter+1))*100);
    setHatPercentage(_hatPercentage % 100);
  }, [droneCount])

  const handleFasterDrones = () => {

    if(cookies.fasterDronesTime === undefined) {
      const time = new Date();
      setCookie("fasterDronesTime", time, {path: "/"});
    }
 
    setFasterDrones(fasterDronesCounter + 1);
    setDroneCount(prevCount => Number(prevCount) - 66*(fasterDronesCounter+1));
  }

  return (
    <>
      <div className={classes.divider}></div>
      <h5>Upgrades</h5>
      <p>Faster Drones ({fasterDronesCounter})</p>
      <p>Drones gather more meat.</p>
      <p>Next upgrade costs {66*(fasterDronesCounter+1)} drones..</p>
      <ProgressBar  now={hatPercentage} label={`${hatPercentage}% `} />
      <Button
        disabled={
          droneCount > 66*(fasterDronesCounter+1) ? false : true
        }
        variant="outline-secondary"
        className={classes.disable_btn}
        style={{marginBottom: 50}}
        onClick={handleFasterDrones}
      >
        { droneCount > 66*(fasterDronesCounter+1) ? "buy" : "Can't buy" }
      </Button>
    </>
  )
}

export default FasterDrones