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
const [ droneClick, setDroneClick ] = useState(Number(cookies.droneClick) || 0);
const [ droneTime, setDroneTime ] = useState(Number(cookies.droneTime) || undefined);
const [ queenCount, setQueenCount ] = useState(Number(cookies.queenCount) || 0);
const [ hatcheryCount, setHatcheryCount ]= useState(Number(cookies.hatcheryCount) || 0);
const [ startCount, setStartCount ]= useState(Number(cookies.startCount) || 0);
const [ currentUser, setCurrentUser ] = useState("");

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
    setStartCount(startCount + 1);
    const startTime = new Date();
    setCookie("startTime", startTime, { path: '/' });
  }
}, [startCount])

  /******** LarvaeCount **********/
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



  return (
    <Context.Provider 
      value={{
        droneCount, setDroneCount,
        droneClick, setDroneClick,
        droneTime, setDroneTime,
        queenCount, setQueenCount,
        hatcheryCount, setHatcheryCount,
        meatCount, setMeatCount,
        currentUser, setCurrentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };