import { useState, useEffect, useContext } from "react";
import { Button, ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import classes from "../larvae.module.css"
import { Context } from "../../../context/AppContext";

const LarvaDetails = () => {
  const { 
    velocity,
    larvaeNum,
    meatCount, setMeatCount,
    hatcheryClick, setHatcheryClick,
    hatcheryCount, setHatcheryCount,
    setHatcheryTime,
  } = useContext(Context);
  const [hatPercentage, setHatPercentage] = useState(0);
  const [ buttons, setButtons ] = useState([1]);

  const ExpPercentage = 0;

  useEffect(() => {
    const _hatPercentage = Math.trunc( meatCount/(300*(Math.pow(10, hatcheryClick)))*100);
    setHatPercentage(_hatPercentage % 100);
    if( _hatPercentage > 100 ) {
      setHatcheryClick(hatcheryClick +1);
      setButtons([...buttons, hatcheryClick + 1]);
    }
  }, [])

  const handleHatchery = () => {
    console.log("hatcheryClick", hatcheryClick)
    if(hatcheryClick === 0) {
      const time = new Date();
      setHatcheryTime(time);
    }
    setHatcheryCount( hatcheryCount + 1);
    setMeatCount(meatCount - 300*Math.pow(10, hatcheryCount));
    setHatcheryClick(hatcheryClick + 1);
  }

  return (
    <div className={classes.larvaDetails}>
      <Link 
        to="/larvae"
        className={classes.top_btn}
      >
        Larva
      </Link>
      <p>The children of your swarm. These young morph into other adult units.</p>
      <p>You own { larvaeNum } larvae</p>
      <p>
        You earn {' '}
        {
          velocity === "seconds" ? 1*hatcheryCount+1
        : velocity === "minutes" ? 60*hatcheryCount+1
        : velocity === "hours" ? 3600*hatcheryCount+1
        : velocity === "days" ? 86400*hatcheryCount+1
        : 900*hatcheryCount+1
        }
        {' '}larvae per {' '}
        {velocity}. (×1.00 bonus)</p>
      <hr />
      <h4>Upgrades</h4>
      <p>Hatchery ({hatcheryCount})</p>
      <p>
        Each hatchery produces more larvae per second. Currently, your hatcheries produce a total of {' '} 
        {
          velocity === "seconds" ? 1*hatcheryCount+1
        : velocity === "minutes" ? 60*hatcheryCount+1
        : velocity === "hours" ? 3600*hatcheryCount+1
        : velocity === "days" ? 86400*hatcheryCount+1
        : 900*hatcheryCount+1
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
        {' '}larvae per {velocity}.</p>
      <p>Next upgrade costs {300*(Math.pow(10, hatcheryCount))} meat</p>
      <ProgressBar
        className={classes.progressBar}
        now={hatPercentage} 
        label={`${hatPercentage}% `}
        variant="custom"
        height={30}
      />
        <Button
          disabled={
            meatCount > 300*(Math.pow(10, hatcheryCount)) ? false : true
          }
          variant="outline-secondary"
          className={classes.disable_btn}
          onClick={ () => handleHatchery()}
        >
        { meatCount < 300*(Math.pow(10, hatcheryCount)) ? "Can't buy" : "Buy" }
      </Button>
      
      <p>Expansion (0) </p>
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
      <Link
        to="/meat"
        className={classes.close}
      >
        <BsXLg className={classes.close_btn} />
      </Link>
    </div>
  )
}

export default LarvaDetails