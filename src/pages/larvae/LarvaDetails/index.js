import { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import classes from "../larvae.module.css";
import { Context } from "../../../context/AppContext";
import Upgrades from "./upgrades";
import Expansion from "./expansion";

const LarvaDetails = () => {
  const { 
    velocity,
    larvaeNum,
    meatCount, setMeatCount,
    hatcheryClick, setHatcheryClick,
    hatcheryCount, setHatcheryCount,
  } = useContext(Context);
  const [ cookies, setCookie ] = useCookies([ "hatcheryTime" ]);
  const [hatPercentage, setHatPercentage] = useState(0);
  const [ buttons, setButtons ] = useState([1]);

  useEffect(() => {
    const _hatPercentage = Math.trunc( meatCount/(300*(Math.pow(10, hatcheryCount)))*100);
    setHatPercentage(_hatPercentage % 100);
    if( _hatPercentage > 100 ) {
      setHatcheryCount(hatcheryCount +1);
      setButtons([...buttons, hatcheryCount + 1]);
    }
  }, [meatCount])

  const handleHatchery = () => {
    if(hatcheryClick === 0 ) {
      const time = new Date();
      setCookie("hatcheryTime", time, {path: "/"});
    }
    setHatcheryCount( hatcheryCount + 1);
    setMeatCount(meatCount - 300*Math.pow(10, hatcheryClick));
    setHatcheryClick(hatcheryClick + 1);
  }

  return (
    <div className={classes.larvaDetails}>
      <Link to="/larvae" className={classes.top_btn}>
        Larva
      </Link>
      <p>The children of your swarm. These young morph into other adult units.</p>
      <p>You own { larvaeNum } larvae</p>
      <p>
        You earn {' '}
        {
          velocity === "seconds" ? 1*hatcheryClick+1
        : velocity === "minutes" ? 60*hatcheryClick+1
        : velocity === "hours" ? 3600*hatcheryClick+1
        : velocity === "days" ? 86400*hatcheryClick+1
        : 900*hatcheryClick+1
        }
        {' '}larvae per {' '}
        {velocity}. (×1.00 bonus)</p>
      <hr />
      <Upgrades 
        hatPercentage={hatPercentage} 
        handleHatchery={handleHatchery} 
      />
      <Expansion />
      <Link to="/meat" className={classes.close}>
        <BsXLg className={classes.close_btn} />
      </Link>
    </div>
  )
}

export default LarvaDetails