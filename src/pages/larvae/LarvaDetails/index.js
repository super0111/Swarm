import { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { Button, ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import classes from "../larvae.module.css"
import { Context } from "../../../context/AppContext";

const LarvaDetails = () => {
  const { meatCount, setMeatCount } = useContext(Context);
  const [ cookies, setCookie ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "hatcheryCount",
    "hatcheryClick",
    "hatcheryTime",
  ]);
  const [hatPercentage, setHatPercentage] = useState(0)
  const { hatcheryCount, setHatcheryCount } = useContext(Context);
  const [ hatcheryClick, setHatcheryClick ] = useState(Number(cookies.hatcheryClick) || 0);
  const [ buttons, setButtons ] = useState([1]);

  const ExpPercentage = 0;

  useEffect(() => {
    const _hatPercentage = Math.trunc( Number(cookies.meatCount)/(300*(Math.pow(10, (hatcheryClick))))*100);
    setHatPercentage(_hatPercentage % 100);
    if( _hatPercentage > 100 ) {
      setHatcheryClick(hatcheryClick +1)
      setButtons([...buttons, hatcheryClick + 1])
    }
  })

  const handleHatchery = (i) => {
    if(Number(cookies.hatcheryClick) === 0) {
      const time = new Date();
      setCookie("hatcheryTime", time ,{ path: '/' });
    }
    setHatcheryCount( prevCount => Number(prevCount) + 1);
    setMeatCount(meatCount - 300*Math.pow(10, i));
    setHatcheryClick(hatcheryClick + 1);
  }

  useEffect(() => {
    setCookie("meatCount", meatCount , { path: '/' });
  }, [ meatCount ])

  useEffect(() => {
    setCookie("hatcheryCount", hatcheryCount , { path: '/' });
  }, [ hatcheryCount ])

  useEffect(() => {
    setCookie("hatcheryClick", hatcheryClick , { path: '/' });
  }, [ hatcheryClick ])

  console.log("hatcheryClick", hatcheryClick)

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
        { cookies.meatCount < 300*(Math.pow(10, hatcheryCount)) ? "Can't buy" : "Buy" }
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