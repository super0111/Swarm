import React, { useContext, useState } from 'react';
import { Container, Card, Nav } from 'react-bootstrap';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from './layout.module.css';
import Viewwrap from './viewwrap';
import Navbar from "./layout/navbar";
import { Context } from '../context/AppContext';

const Layout = (props) => {
  const { 
    droneCount,
    meatCount,
    hatcheryCount } = useContext(Context);
  const [ close, setClose ] = useState(false);
  
  return (
    <Container>
      <Card className={classes.nav}>
        <Card.Body>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/" style={{ color: '#777', fontSize: 21 }}>
                Swarm Simulator
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" style={{ color: '#777', fontSize: 18 }}>
                v1.1.13
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
      { 
        droneCount === 0 || droneCount === undefined ?
          <Card className={classes.tutorial}>
            <Card.Body>
              <Card.Text>
                Welcome to Swarm Simulator. Starting with just a few larvae and a small pile of meat, grow a massive swarm of giant bugs.
                <br></br><br></br>
                Your brood starts its life with a small pile of meat and a single larva-producing hatchery. Larvae mutate into other units. Begin your growth by using your meat and larvae to hatch some 
                <Link to="/meat/drone" className={classes.toDrone}>{" "}drones</Link>.
              </Card.Text>
            </Card.Body>
          </Card> 
        : ""
      }
      { droneCount < 0 || meatCount > 300*(Math.pow(10, hatcheryCount)) ?
        "" :
        <Card className={classes.tutorial1}>
          <Card.Body>
            <Card.Text>
              You lead a small brood of worker drones. Drones gather meat. Use
              this meat to build more drones and expand your brood.
            </Card.Text>
          </Card.Body>
        </Card>
      }
      {
        meatCount > 300*(Math.pow(10, hatcheryCount)) ?
        <Card className={classes.tutorial1}>
          <Card.Body>
            <Card.Text>
              A <BsFillArrowUpCircleFill color="#337ab7" /> appears when you have enough meat to upgrade your hatchery.
            </Card.Text>
          </Card.Body>
        </Card> : ""
      }
   
      { close === false && droneCount === 0 || droneCount === undefined ? (
        <Viewwrap setClose={setClose} />
        ) : ( '')
      }
      <Navbar />
      <div>
        {props.children}
      </div>
    </Container>
  )
}

export default Layout
