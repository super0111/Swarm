import { useCookies } from "react-cookie";
import { useContext } from "react";

export const handleHatchery = (i) => {

  const [ cookies, setCookie ] = useCookies([ "hatcheryTime" ]);

  const { 
    velocity,
    larvaeNum,
    meatCount, setMeatCount,
    hatcheryClick, setHatcheryClick,
    hatcheryCount, setHatcheryCount,
  } = useContext(Context);

  if(hatcheryClick === 0 ) {
    const time = new Date();
    setCookie("hatcheryTime", time, {path: "/"});
  }
  setHatcheryCount( hatcheryCount + 1);
  setMeatCount(meatCount - 300*Math.pow(10, i));
  setHatcheryClick(hatcheryClick + 1);
}