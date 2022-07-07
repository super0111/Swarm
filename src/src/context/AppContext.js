import { useState, useEffect, createContext } from 'react';
import { useCookies } from "react-cookie";
import useInterval from "../useInterval";

const Context = createContext();

const AppProvider = ({children}) => {
const [ cookies, setCookie ] = useCookies([
  "startCount",
  "startTime",
]);

const [ velocity, setVelocity ] = useState(Number(cookies.velocity) || "seconds");
const [ numFormart, setNumFormart ] = useState(Number(cookies.numFormart) || "standard");
const [ durationFormart, setDurationFormart ] = useState(Number(cookies.durationFormart) || "exact");
const [ larvaeNum, setLarvaeNum ] = useState(Number(cookies.larvaeCount) || 10);
const [ meatCount, setMeatCount ] = useState(Number(cookies.meatCount) || 35);
const [ droneCount, setDroneCount ] = useState(Number(cookies.droneCount) || 0);
const [ droneClick, setDroneClick ] = useState(Number(cookies.droneClick) || 0);
const [ droneTime, setDroneTime ] = useState(Number(cookies.droneTime) || undefined);
const [ fasterDronesCounter, setFasterDrones ] = useState(Number(cookies.fasterDronesCounter || 0));
const [ twinDronesCounter, setTwinDrones ] = useState(Number(cookies.twinDronesCounter || 0));
const [ queenCount, setQueenCount ] = useState(Number(cookies.queenCount) || 0);
const [ hatcheryCount, setHatcheryCount ]= useState(Number(cookies.hatcheryCount) || 0 );
const [ hatcheryTime, setHatcheryTime ]= useState(Number(cookies.hatcheryTime) || undefined );
const [ startCount, setStartCount ]= useState(Number(cookies.startCount) || 0);
const [ currentUser, setCurrentUser ] = useState("");
const [ hatcheryClick, setHatcheryClick ] = useState(Number(cookies.hatcheryClick) || 0);
const [ selectedTheme, setSelectedTheme ] = useState(cookies.theme || false);

useInterval(() => {
  setMeatCount((prevCounter) => {
    return prevCounter + droneCount;
  });
  setDroneCount((prevCounter) => {
    return prevCounter + queenCount;
  });
  setLarvaeNum((prevCounter) => {
    return prevCounter + (hatcheryCount+1);
  });
}, 1000)

/******** Frist Render Time *********/
useEffect(() => {
  if(cookies.startCount === undefined) {
    setStartCount(startCount + 1);
    const startTime = new Date();
    setCookie("startTime", startTime, { path: '/' });
  }
}, [])

  return (
    <Context.Provider 
      value={{
        startCount, setStartCount,
        droneCount, setDroneCount,
        meatCount, setMeatCount,
        larvaeNum, setLarvaeNum,
        droneClick, setDroneClick,
        droneTime, setDroneTime,
        fasterDronesCounter, setFasterDrones,
        twinDronesCounter, setTwinDrones,
        queenCount, setQueenCount,
        hatcheryCount, setHatcheryCount,
        currentUser, setCurrentUser,
        hatcheryClick, setHatcheryClick,
        hatcheryTime, setHatcheryTime,
        velocity, setVelocity,
        numFormart, setNumFormart,
        durationFormart, setDurationFormart,
        selectedTheme, setSelectedTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };