import { useState, useEffect, createContext } from 'react';
import { useCookies } from "react-cookie";
import useInterval from "../useInterval";

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
const [ meatCount, setMeatCount ] = useState(Number(cookies.meatCount) || 35);
const [ droneCount, setDroneCount ] = useState(Number(cookies.droneCount) || 0);
const [ queenCount, setQueenCount ] = useState(Number(cookies.queenCount) || 0);
const [ larvaeCount, setLarvaeCount ] = useState(Number(cookies.larvaeCount) || 0);
const [ hatcheryCount, setHatcheryCount ]= useState(Number(cookies.hatcheryCount) || 0);
const [ startCount, setStartCount ]= useState(Number(cookies.startCount) || 0);

useInterval(() => {
  setMeatCount((prevCounter) => {
    return prevCounter + droneCount
  });
  setDroneCount((prevCounter) => {
    return prevCounter + queenCount
  });
}, 1000)

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

  /************* Initial **************/
  useEffect (() => {
    setCookie("velocity", "seconds", { path: '/' });
  }, [cookies.velocity === undefined])
  useEffect(() => {
    setCookie("meatCount", 35 , { path: '/' });
  }, [])
  useEffect(() => {
    setCookie("droneCount", 0 , { path: '/' });
  }, [])
  useEffect(() => {
    setCookie("queenCount", 0 , { path: '/' });
  }, [])
  useEffect (() => {
    setCookie("numFormart", "standard", { path: '/' });
  }, [cookies.numFormart === undefined])
  useEffect (() => {  
    setCookie("durationFormart", "exact", { path: '/' });
  }, [cookies.durationFormart === undefined])
  useEffect (() => {  
    setCookie("theme", "default", { path: '/' });
  }, [cookies.theme === undefined])
  useEffect(() => {
    setCookie("hatcheryCount", 0, {path: "/"})
  }, [])

  return (
    <Context.Provider value={{
      droneCount, setDroneCount,
      queenCount, setQueenCount,
      larvaeCount, setLarvaeCount,
      hatcheryCount, setHatcheryCount,
      meatCount, setMeatCount,
    }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };