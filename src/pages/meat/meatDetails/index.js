import { useCookies } from "react-cookie";
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from "../meat.module.css"

const MeatDetails = () => {
    const [ cookies ] = useCookies(["velocity", "meatCount"]);
    return (
        <div className={classes.meatDetails}>
            <Link 
                to="/larvae"
                className={classes.top_btn}
            >
                Meat
            </Link>
            <p>Meat is delicious. All of your swarm's creatures eat meat.</p>
            <p>You own {cookies.meatCount} meat.</p>
            <p>You earn {' '}
                { 
                 cookies.velocity === "seconds" ? 1*cookies.droneCount
                 : cookies.velocity === "minutes" ? 60*Number(cookies.droneCount)
                 : cookies.velocity === "hours" ? 3600*Number(cookies.droneCount)
                 : cookies.velocity === "days" ? 86400*Number(cookies.droneCount)
                 : 900*Number(cookies.droneCount)
                } 
              {' '}meat per {cookies.velocity}.
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