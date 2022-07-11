import { useEffect, useContext } from "react";
import { Context } from "../../../../context/AppContext";
import UpgradeUnit from "./upgradeUnit";
import { Button, ProgressBar } from "react-bootstrap";
import classes from "../../larvae.module.css";


const Updrades = (props) => {
  const { hatPercentage } = props;
  const { 
    advanceUnit, 
    velocity, 
    hatcheryClick, 
    hatcheryCount,
    meatCount,  
    upgradeNotify,
    handleHatchery,
  } = useContext(Context);

  return (
    <>
      <h4>Upgrades</h4>
      <div  className={classes.flex}>
        <p>Hatchery ({hatcheryClick-1})</p>
        { advanceUnit === true ? <UpgradeUnit /> : "" }
      </div>
      { upgradeNotify === "hide" ? "" :
        <>
          <p>
            Each hatchery produces more larvae per second. Currently, your hatcheries produce a total of {' '} 
            {
              velocity === "seconds" ? 1*hatcheryClick
            : velocity === "minutes" ? 60*hatcheryClick
            : velocity === "hours" ? 3600*hatcheryClick
            : velocity === "days" ? 86400*hatcheryClick
            : 900*hatcheryClick
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
          <p>Next upgrade costs {300*(Math.pow(10, hatcheryClick-1))} meat</p>
          <ProgressBar
            className={classes.progressBar}
            now={hatPercentage}
            label={`${hatPercentage}%`}
            variant="custom"
            height={30}
          />
          {
            hatcheryCount < 2 && meatCount < (300*(Math.pow(10, hatcheryCount))) ?
              <Button
                disabled={
                    meatCount > 300*(Math.pow(10, hatcheryClick-1)) ? false : true
                }
                variant="outline-secondary"
                className={classes.disable_btn}
                onClick={ () => handleHatchery(hatcheryClick-1) }
              >
                { meatCount < 300*(Math.pow(10, hatcheryClick-1)) ? "Can't buy" : `Buy ${hatcheryClick}` }
              </Button> :
            hatcheryCount > 0 && meatCount > 300*(Math.pow(10, hatcheryCount-1)) && meatCount > 300*(Math.pow(10, hatcheryClick-1)) ?
              <div className={classes.flex}>
                <Button
                  variant="outline-secondary"
                  className={classes.disable_btn}
                  onClick={ () => handleHatchery(hatcheryClick-1) }
                >
                  Buy 1
                </Button>
                <Button
                  variant="outline-secondary"
                  className={classes.disable_btn}
                  onClick={ () => handleHatchery(hatcheryCount-1) }
                >
                  Buy {hatcheryCount}
                </Button>
              </div> : 
            meatCount < 300*(Math.pow(10, hatcheryClick-1)) ?
              <Button
                className={classes.disable_btn}
                variant="outline-secondary"
                disabled={true}
              >
                Can't Buy
              </Button> : ""
          }
        </>
      }
    </>
  )
}

export default Updrades