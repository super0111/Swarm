import { useState, useEffect, createContext } from 'react';
import { useCookies } from "react-cookie";

const Context = createContext();

const AppProvider = ({children}) => {
const [ cookies, setCookie ] = useCookies([
  "velocity",
  "larvaeCount",
  "meatCount",
  "droneCount",
  "hatcheryCount",
  "startCount",
  "startTime",
]);
const [ larvaeNum, setLarvaeNum ] = useState(Number(cookies.larvaeCount) || 10);
const [ meatNum, setMeatNum ] = useState(Number(cookies.meatCount) || 35);
const [ droneCount, setDroneCount ] = useState(Number(cookies.droneCount) || 0);
const [ hatcheryCount, setHatcheryCount ]= useState(Number(cookies.hatcheryCount) || 0);
const [ startCount, setStartCount ]= useState(Number(cookies.startCount) || 0);

/******** Frist Render Time *********/
useEffect(() => {
  if(Number(cookies.startCount) === 0) {
    setStartCount(Number(cookies.startCount) + 1);
    const startTime = new Date();
    setCookie("startTime", startTime, { path: '/' });
  }
}, [cookies.startCount])

useEffect(() => {
  setCookie("startCount", startCount , { path: '/' });
}, [])

/******** LarvaeCount **********/
  useEffect(() => {
    setCookie("larvaeCount", 10 , { path: '/' });
  }, [])

  const updateLarvaeCookie = () => {
    setCookie("larvaeCount", larvaeNum , { path: '/' });
  }

  const increaseLarvae = () => {
    setTimeout(() => {
      setLarvaeNum(larvaeNum + 1 + hatcheryCount);
    }, 1000)
  }
  useEffect(() => {
    increaseLarvae();
    updateLarvaeCookie();
  }, [larvaeNum])

  /************meatCount *************/
  useEffect(() => {
    setCookie("meatCount", 35 , { path: '/' });
  }, [])
  const updateMeatCookie = () => {
    setCookie("meatCount", meatNum , { path: '/' });
  }
  const increasemeat = () => {
    if(droneCount > 0) {
      setTimeout(() => {
        setMeatNum(meatNum + droneCount);
      }, 1000)
    }
  }
  useEffect(() => {
    increasemeat();
    updateMeatCookie();
  }, [meatNum])

  
  useEffect (() => {
    setCookie("velocity", "seconds", { path: '/' });
  }, [cookies.velocity === undefined])

  useEffect(() => {
    setCookie("hatcheryCount", 0, {path: "/"})
  }, [])

  return (
    <Context.Provider value={{
      droneCount, setDroneCount,
      hatcheryCount, setHatcheryCount,
    }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };