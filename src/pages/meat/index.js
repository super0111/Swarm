import classes from "./meat.module.css";

const Meat = () => {
    return (
        <div className={classes.meat}>
            <div className={classes.drone}>
                <div className={classes.drone_name}>Drone</div>
                <div className={classes.drone_value}>0</div>
            </div>
            <div className={classes.drone}>
                <div className={classes.drone_name}>Meat</div>
                <div className={classes.drone_value}>35</div>
            </div>
        </div>
    )
}

export default Meat