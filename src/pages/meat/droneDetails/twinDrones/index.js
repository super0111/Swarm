import { useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import classes from "../../meat.module.css";
import { Button, ProgressBar } from "react-bootstrap"
import { Context } from "../../../../context/AppContext";
import TwinUnit from "./twinUnit";

const TwinDrones = () => {
  const { 
    queenCount, setQueenCount,
    twinDronesCounter, setTwinDrones, 
    advanceUnit,
    twinNotify,
  } = useContext(Context);
  const [ cookies, setCookie ] = useCookies([ "twinDronesTime" ]);

  const [hatPercentage, setHatPercentage] = useState(0);

  useEffect(() => {
    const _hatPercentage = Math.trunc( queenCount/(Math.pow(10, twinDronesCounter))*100);
    setHatPercentage(_hatPercentage % 100);
  }, [queenCount])

  const handleTwinDrones = () => {

    if(cookies.twinDronesTime === undefined) {
      const time = new Date();
      setCookie("twinDronesTime", time, {path: "/"});
    }

    setTwinDrones( twinDronesCounter + 1 );
    setQueenCount( queenCount - Math.pow(10, twinDronesCounter));
  }

  return (
    <>
    <div className={classes.divider}></div>
      <div className={classes.flex}>
      <p>Twin Drones ({twinDronesCounter})</p>
        { advanceUnit === true ? <TwinUnit /> : "" }
      </div>
      {
        twinNotify === "hide" ? "" : 
        <>
          <p>Multiple drones hatch from each larva. (This does not affect queen production.)</p>
          <p>Next upgrade costs { Math.pow (10, twinDronesCounter) } queen.</p>
          <ProgressBar  now={hatPercentage} label={`${hatPercentage}% `} />
          <Button
            disabled = {
              queenCount >= Math.pow(10, twinDronesCounter) ? false : true
            }
            variant="outline-secondary"
            className={classes.disable_btn}
            style={{marginBottom: 50}}
            onClick={handleTwinDrones}
          >
            {queenCount >= Math.pow(10, twinDronesCounter) ? "buy" : "Can't buy"}
          </Button>
        </>
      }
    </>
  )
}

export default TwinDrones