import { useState, useContext, useEffect } from "react";
import classes from "../../meat.module.css";
import { Button, ProgressBar } from "react-bootstrap"
import { Context } from "../../../../context/AppContext";

const TwinDrones = () => {
  const { 
    queenCount, setQueenCount,
    twinDronesCounter, setTwinDrones, 
  } = useContext(Context);
  const [hatPercentage, setHatPercentage] = useState(0);

  useEffect(() => {
    const _hatPercentage = Math.trunc( queenCount/(Math.pow(10, twinDronesCounter))*100);
    setHatPercentage(_hatPercentage % 100);
  }, [queenCount])

  const handleTwinDrones = () => {
    setTwinDrones( twinDronesCounter + 1 );
    setQueenCount( queenCount - Math.pow(10, twinDronesCounter));
  }

  return (
    <>
    <div className={classes.divider}></div>
      <p>Twin Drones ({twinDronesCounter})</p>
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
  )
}

export default TwinDrones