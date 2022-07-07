import { useContext } from "react";
import { useCookies } from "react-cookie";
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Context } from "../../../context/AppContext";
import classes from "../meat.module.css"

const MeatDetails = () => {
    const { 
        meatCount,
        droneCount,
        velocity,
    } = useContext(Context)
    return (
        <div className={classes.meatDetails}>
            <Link 
                to="/larvae"
                className={classes.top_btn}
            >
                Meat
            </Link>
            <p>Meat is delicious. All of your swarm's creatures eat meat.</p>
            <p>You own {meatCount} meat.</p>
            <p>You earn {' '}
                { 
                 velocity === "seconds" ? 1*droneCount
                 : velocity === "minutes" ? 60*droneCount
                 : velocity === "hours" ? 3600*droneCount
                 : velocity === "days" ? 86400*droneCount
                 : 900*droneCount
                } 
              {' '}meat per {velocity}.
            </p>
            <Link
                to="/meat"
                className={classes.close}
            >
                <BsXLg className={classes.close_btn} />
            </Link>
        </div>
    )
}

export default MeatDetails