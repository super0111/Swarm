import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import classes from "../larvae.module.css"

const LarvaDetails = () => {
    const HatPercentage = 11;
    const ExpPercentage = 1;
    return (
        <div className={classes.larvaDetails}>
            <Link 
                to="/larvae"
                className={classes.top_btn}
            >
                Larva
            </Link>
            <p>The children of your swarm. These young morph into other adult units.</p>
            <p>You own 123 larvae</p>
            <p>You earn 1.00000 larvae per second. (×1.00 bonus)</p>
            <hr />
            <h4>Upgrades</h4>
            <p>Hatchery (0)</p>
            <p>Each hatchery produces more larvae per second. Currently, your hatcheries produce a total of 1 larvae per second. With no multipliers, they would produce 1 larvae per second.</p>
            <p>Next upgrade costs 300 meat</p>
            <ProgressBar
                className={classes.progressBar}
                now={HatPercentage} 
                label={`${HatPercentage}% `}
                variant="custom"
                height={30}
            />
            <Button  className={classes.disable_btn}>Can't buy</Button>
            <p>Expansion (<p>0</p>) </p>
            <p>Each expansion increases your hatcheries' larvae production by 10%. Currently, your expansions increase hatchery production by 0%.</p>
            <p>Next upgrade costs 10 territory</p>
            <ProgressBar  now={ExpPercentage} label={`${ExpPercentage}% `} />
            <Button className={classes.disable_btn}>Can't buy</Button>
            <div className={classes.close_btn}>
                <BsXLg />
            </div>
        </div>
    )
}

export default LarvaDetails