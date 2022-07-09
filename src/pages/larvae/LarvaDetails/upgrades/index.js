import { useContext, useEffect } from "react";
import { Context } from "../../../../context/AppContext";
import UpgradeUnit from "./upgradeUnit";
import { Button, ProgressBar, Dropdown } from "react-bootstrap";
import classes from "../../larvae.module.css";


const Updrades = (props) => {
  const { hatPercentage, handleHatchery } = props;
  const { advanceUnit, velocity, hatcheryClick, meatCount, hatcheryCount, upgradeNotify } = useContext(Context);
  
  return (
    <>
      <h4>Upgrades</h4>
      <div  className={classes.flex}>
        <p>Hatchery ({hatcheryCount})</p>
        { advanceUnit === true ? <UpgradeUnit /> : "" }
      </div>
      { upgradeNotify === "hide" ? "" :
        <><p>
          Each hatchery produces more larvae per second. Currently, your hatcheries produce a total of {' '} 
          {
            velocity === "seconds" ? 1*hatcheryClick+1
          : velocity === "minutes" ? 60*hatcheryClick+1
          : velocity === "hours" ? 3600*hatcheryClick+1
          : velocity === "days" ? 86400*hatcheryClick+1
          : 900*hatcheryClick+1
          }
          {' '}larvae per {velocity}. 
          With no multipliers, they would produce {' '}
          {
            velocity === "seconds" ? 1
          : velocity === "minutes" ? 60
          : velocity === "hours" ? 3600
          : velocity === "days" ? 86400
          : 900
          } 
          {' '}larvae per {velocity}.
        </p>
        <p>Next upgrade costs {300*(Math.pow(10, hatcheryClick))} meat</p>
        <ProgressBar
          className={classes.progressBar}
          now={hatPercentage} 
          label={`${hatPercentage}% `}
          variant="custom"
          height={30}
        />
        <Button
          disabled={
              meatCount > 300*(Math.pow(10, hatcheryClick)) ? false : true
          }
          variant="outline-secondary"
          className={classes.disable_btn}
          onClick={ () => handleHatchery() }
        >
          { meatCount < 300*(Math.pow(10, hatcheryClick)) ? "Can't buy" : "Buy" }
        </Button></>
      }
    </>
  )
}

export default Updrades