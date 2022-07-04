import { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { Button, ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import classes from "../larvae.module.css"
import { Context } from "../../../components/AppContext";

const LarvaDetails = () => {
  const [ cookies, setCookie ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "hatcheryCount",
    "hatcheryClick",
    "hatcheryTime",
  ]);
  const HatPercentage = Math.trunc( Number(cookies.meatCount)/(300*Math.pow(10, Number(cookies.hatcheryClick)))*100);
  const ExpPercentage = 0;

  const { hatcheryCount, setHatcheryCount } = useContext(Context);
  const [ hatcheryClick, setHatcheryClick ] = useState(Number(cookies.hatcheryClick) || 0);

  const handleHatchery = () => {
    if(Number(cookies.hatcheryClick) === 0) {
      const time = new Date();
      setCookie("hatcheryTime", time ,{ path: '/' });
    }

    setHatcheryCount(Number(cookies.hatcheryCount) + 1);
    setHatcheryClick(Number(cookies.hatcheryClick) + 1);
    setCookie("meatCount", Number(cookies.meatCount)-300*Math.pow(10, Number(cookies.hatcheryClick)));
  }
  useEffect(() => {
    setCookie("hatcheryCount", hatcheryCount , { path: '/' });
  }, [ hatcheryCount ])

  useEffect(() => {
    setCookie("hatcheryClick", hatcheryClick , { path: '/' });
  }, [ hatcheryClick ])

  return (
    <div className={classes.larvaDetails}>
      <Link 
        to="/larvae"
        className={classes.top_btn}
      >
        Larva
      </Link>
      <p>The children of your swarm. These young morph into other adult units.</p>
      <p>You own { cookies.larvaeCount } larvae</p>
      <p>
        You earn {' '}
        {
          cookies.velocity === "seconds" ? 1*(Number(cookies.hatcheryCount)+1)
        : cookies.velocity === "minutes" ? 60*(Number(cookies.hatcheryCount)+1)
        : cookies.velocity === "hours" ? 3600*(Number(cookies.hatcheryCount)+1)
        : cookies.velocity === "days" ? 86400*(Number(cookies.hatcheryCount)+1)
        : 900*(Number(cookies.hatcheryCount)+1)
        }
        {' '}larvae per {' '}
        {cookies.velocity}. (×1.00 bonus)</p>
      <hr />
      <h4>Upgrades</h4>
      <p>Hatchery ({cookies.hatcheryCount})</p>
      <p>
        Each hatchery produces more larvae per second. Currently, your hatcheries produce a total of {' '} 
        {
          cookies.velocity === "seconds" ? 1*(Number(cookies.hatcheryCount)+1)
        : cookies.velocity === "minutes" ? 60*(Number(cookies.hatcheryCount)+1)
        : cookies.velocity === "hours" ? 3600*(Number(cookies.hatcheryCount)+1)
        : cookies.velocity === "days" ? 86400*(Number(cookies.hatcheryCount)+1)
        : 900*(Number(cookies.hatcheryCount)+1)
        }
        {' '}larvae per {cookies.velocity}. 
        With no multipliers, they would produce {' '}
        {
          cookies.velocity === "seconds" ? 1
        : cookies.velocity === "minutes" ? 60
        : cookies.velocity === "hours" ? 3600
        : cookies.velocity === "days" ? 86400
        : 900
        } 
        {' '}larvae per {cookies.velocity}.</p>
      <p>Next upgrade costs {300*(Math.pow(10, Number(cookies.hatcheryCount)))} meat</p>
      <ProgressBar
        className={classes.progressBar}
        now={HatPercentage} 
        label={`${HatPercentage}% `}
        variant="custom"
        height={30}
      />
      <Button
        disabled={
          cookies.hatcheryCount == 0 && cookies.meatCount > 300 ? false : true
        }
        variant="outline-secondary"
        className={classes.disable_btn}
        onClick={handleHatchery}
      >
        { cookies.meatCount < 300 ? "Can't buy" : "Buy 1" }
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