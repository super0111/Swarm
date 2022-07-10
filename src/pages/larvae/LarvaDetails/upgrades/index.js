import { useContext } from "react";
import { Context } from "../../../../context/AppContext";
import UpgradeUnit from "./upgradeUnit";
import { Button, ProgressBar } from "react-bootstrap";
import classes from "../../larvae.module.css";


const Updrades = (props) => {
  const { hatPercentage, handleHatchery } = props;
  const { 
    advanceUnit, 
    velocity, 
    hatcheryClick, 
    hatcheryCount,
    meatCount,  
    upgradeNotify 
  } = useContext(Context);

  return (
    <>
      <h4>Upgrades</h4>
      <div  className={classes.flex}>
        <p>Hatchery ({hatcheryCount})</p>
        { advanceUnit === true ? <UpgradeUnit /> : "" }
      </div>
      { upgradeNotify === "hide" ? "" :
        <>
          <p>
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
            label={`${hatPercentage}%`}
            variant="custom"
            height={30}
          />
          {
            meatCount > 300*(Math.pow(10, hatcheryClick)) && meatCount < 300*(Math.pow(10, hatcheryCount-1)) ?
              <Button
                disabled={
                    meatCount > 300*(Math.pow(10, hatcheryClick)) ? false : true
                }
                variant="outline-secondary"
                className={classes.disable_btn}
                onClick={ () => handleHatchery() }
              >
                { meatCount < 300*(Math.pow(10, hatcheryClick)) ? "Can't buy" : `Buy ${hatcheryClick+1}` }
              </Button> :
            meatCount > 300*(Math.pow(10, hatcheryCount-1)) ?
              <div className={classes.flex}>
                <Button
                  variant="outline-secondary"
                  className={classes.disable_btn}
                  onClick={ () => handleHatchery(hatcheryClick+1) }
                >
                  Buy {hatcheryClick+1}
                </Button>
                <Button
                  variant="outline-secondary"
                  className={classes.disable_btn}
                  onClick={ () => handleHatchery(hatcheryCount) }
                >
                  Buy {hatcheryCount }
                </Button>
              </div> : 
              <Button
                className={classes.disable_btn}
                variant="outline-secondary"
                disabled={true}
              >
                Can't Buy
              </Button>
          }
          
        </>
      }
    </>
  )
}

export default Updrades