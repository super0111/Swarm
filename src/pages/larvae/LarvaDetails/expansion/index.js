import ExpansionUnit from "../expansionUnit";
import classes from "../../larvae.module.css";
import { Button, ProgressBar } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../../context/AppContext";

const Expansion = () => {
  const { expansionNotify, advanceUnit } = useContext(Context);
  const ExpPercentage = 0;

  return (
    <div style={{marginTop: 30}}>
      <div className={classes.flex}>
        <p>Expansion (0) </p>
        { advanceUnit === true ? <ExpansionUnit /> : "" }
      </div>
      {
        expansionNotify === "hide" ? "" :
        <>
          <p>Each expansion increases your hatcheries' larvae production by 10%. Currently, your expansions increase hatchery production by 0%.</p>
          <p>Next upgrade costs 10 territory</p>
          <ProgressBar  now={ExpPercentage} label={`${ExpPercentage}% `} />
          <Button
            disabled
            variant="outline-secondary"
            className={classes.disable_btn}
            style={{marginBottom: 50}}
          >
            Can't buy
          </Button>
        </>
      }
    </div>
  )
}

export default Expansion