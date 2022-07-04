import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { Container, Form, Dropdown, Card, Button } from "react-bootstrap"
import { BsFillEyeFill, BsFilm, BsDownload } from "react-icons/bs";
import { ImBarcode, ImImage } from "react-icons/im";
import Clipboard from 'clipboard';
import { AiFillWarning, AiOutlineCloudUpload } from "react-icons/ai";
import moment from "moment";
import User from "./user";
import classes from "./options.module.css";

new Clipboard('#data');

const Options = () => {
  const [ isShow, setIsShow ] = useState(false);
  const [ cookies, setCookie, removeCookie ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount",
    "hatcheryCount",
    "startCount",
    "startTime",
  ]);
  const data = "MS4xLjEz|Q2hlYXRlciA6KAoKN4IgrgdglgLjCeAHApgZxALlFCA3KqUARgDbIAWAhjAMbnIBO8mIAjCADQgC2y1LAZgCsnECUoNclFqwAMomgHsliiC3lcYjBrEVN1o5BEYBzZhhAaQDNChoBRYwzMGu3GAA9Hp85dHGPMHQLKxomVBhKElceMEiTIxjEG244ygS1ENFKVBojQlUYgDMbZAAlW2QaFgAWUQATBlVkGIBHMGRErK5jCJiTG2pGds7Mvy5yKFwW7pBJ6ZGu8ZBkbmS0YOXkxUR6GH7FevqNpMoIGHpC2cQzi+RVACZT88uIAWe71Trr29eRWcU0wY3Bw9RigMYIIg9SeAKBUPq7zhkNB32WEOBoP+6PhoIAbDFUAB3CTcEg4EyEmAUxiExBQY4MGLcRSodq6GIkZRBfazJqUOj9KC3VD0xkxPLnKAoY4xEmimLHXCKMA2JmzEyKK7LaAmcgwIhgSmzFkXGJEfgmtIvah0Ri+KypSLnC285ZO240LnGZnWmDE0kkhiIX3OmAMILkUO3PiCq1hkrIVrR84BIIpyLAh2iD3nXiWvwAXy49SGmFAEQkWjBFgesgeDwAtLI8Y2BLIACqsPEYGqsXs1AB0AA4+wAtUQ2SsMassOsN5ut9tdnt9gcj8eiVCUaY1kDzpsttud1jDjAPHtCViD1gATlkE64NigRSgyD3B8Xx5Xvf7NSHo6sI+IBeqy75zvWh5Lieq5/gBm7FiAOzUqowQVuQihEgAgvUUgQHk9QAKrQDAAAi1DSBgRRRKgyBcEUiCoFhcSKJg1EkLR9GMZgDwAOw9IokQoWMRgmDgnQ6BAlIlqq1BQKoABiejcAW5BgCpahcAQADCPKKNwHb0LwbE0XRIB3MZFh5BGZBnNkLGIJGJkccgiFgIgAyUMcaGIZW1IRFANBoSARDwMRsDlohoWER5DBeTMwCIV6gUANbBLIiECpMyDTLw5zBXQZwJFyxpXqwDxCDUiEkrQ9A1olXCoCl0oygAslAJDkulXBAgUmQVpms4WNeI3vI1O7gcNN43u8mV0G+uVGP6ADKGFEv1KwSMYNbhh0XCQHwDDbZgu1mSpTWTadXB6OKFjHNRYAkPsT45YwtEnRGrmFkAA";
  const handleSelect = (eventKey) => {
    console.log("ssd", eventKey)
  };
  const handleChange = () => {};
  const handleFocus = (event) => {
    event.target.select();
  };
  const handleVelocity = (e) => {
    setCookie("velocity", e.target.value, { path: '/' });
  }

  const handleStart = () => {
    removeCookie(['larvaeCount']);
  }
    
  return (
    <Container>
      <h1>Options</h1>
      <div className={classes.flex}>
        <BsFillEyeFill />
        <strong style={{margin: "0 5px"}}>Show advanced unit data</strong>
        <Form.Check.Input type='checkbox' isValid />
      </div>
      <p>Show more detailed numbers for each of your units, and allow customizing when each upgrade notifier appears.</p>
      <div className={classes.flex}>
        <BsFilm />
        <strong style={{marginLeft: 5}}>Maximum frames per second</strong>
      </div>
      <div className={classes.flex}>
        <Form.Check.Input type='checkbox' isValid />
        <strong style={{marginLeft: 5}}> Automatic</strong>
      </div>
      <Form.Range />
      <div className={classes.flex}>
        <span>About</span>
        <Form.Check.Input type='number' isValid className={classes.inputNumber} />
        <span>fps. Time between frames: 37ms</span>
      </div>
      <br></br>
      <p>Reduce this setting if the game is slowing down your computer. This doesn't affect gameplay; your units won't produce resources any faster or slower.</p>
      <div className={classes.flex}>
        <ImBarcode />
        <strong style={{marginLeft: 5}}>Number format</strong>
      </div>
      <div>
        <Form.Check.Input 
          type='radio' 
          isValid 
        />
        {' '}Standard decimal(legend){' '}
        <Form.Check.Input 
          type='radio' 
          isValid 
        />
        {' '}Scientific-E{' '}
        <Form.Check.Input 
          type='radio' 
          isValid 
        />
        {' '}Hybrid{' '}
        <Form.Check.Input 
          type='radio' 
          isValid 
        />
        {' '}Engineering
        <p>Examples: 123.456E6, 123E6, 123.456E36, 123E36</p>       
      </div>
      <div className={classes.flex}>
        <ImBarcode />
        <strong style={{marginLeft: 5}}> Velocity format</strong>
      </div>
      <div>
        <Form.Check.Input 
          type='radio' 
          isValid
          value="seconds"
          checked={ cookies.velocity === undefined ? cookies.velocity === "seconds" : cookies.velocity === "seconds"}
          onChange={handleVelocity}
        />
        {' '}Seconds{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="minutes"
          checked={cookies.velocity === "minutes"}
          onChange={handleVelocity} 
        />
        {' '}Minutes{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="hours"
          checked={cookies.velocity === "hours"}
          onChange={handleVelocity}
        />
        {' '}Hours{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="days"
          checked={cookies.velocity === "days"}
          onChange={handleVelocity} 
        />
        {' '}Days{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="swarmwraps"
          checked={cookies.velocity === "sarmwraps"}
          onChange={handleVelocity} 
        />
        {' '}Swarmwarps{' '}
        <p>Example: {' '}
          {
            cookies.velocity === "seconds" ? 10
          : cookies.velocity === "minutes" ? 600
          : cookies.velocity === "hours" ? "36,000"
          : cookies.velocity === "days" ? 864.000E3 
          : "9,000" 
          }
          {' '}meat/
          { 
            cookies.velocity === "seconds" ? "sec"
          : cookies.velocity === "minutes" ? "min"
          : cookies.velocity === "hours" ? "hr"
          : cookies.velocity === "days" ? "day" 
          : "wrap" 
          }
        </p>
      </div>
      <div className={classes.flex}>
        <ImBarcode />
        <strong style={{marginLeft: 5}}>Duration format</strong>
      </div>
      <div>
        <Form.Check.Input type='radio' isValid />{' '}Exact{' '}
        <Form.Check.Input type='radio' isValid />{' '}Approximate{' '}
        <p>Examples: 00:16, 2:43, 2:30:00, 23 days 7 hours, 2 months 7 days, 1 years 2 months</p>
      </div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle 
          className={classes.toggle_btn} 
          variant="outline-secondary" 
          id="dropdown-basic"
        >
          <ImImage />Theme<strong style={{color: "red"}}>(BETA)</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey='a' >Action</Dropdown.Item>
          <Dropdown.Item eventKey='b' >Another action</Dropdown.Item>
          <Dropdown.Item eventKey='c' >Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p>
        Current theme:{' '} 
        <a 
          className={classes.selectedTheme}
          href="https://bootswatch.com/default/"
          target="_blannk"
        >
          default white
        </a>
      </p>
      <div className={classes.flex}>
        <img src="/img/playfab.0ef01669.png" style={{width: 20}} />
        <strong style={{marginLeft: 5}}>Sync saved data with other devices{' '}<strong style={{color: "red"}}>(BETA)</strong></strong>
      </div>
      <User />
      <div className={classes.flex}>
        <Form.Check.Input type='checkbox' isValid />
        <strong style={{marginLeft: 5}}> Auto-export every 15 minutes and before closing</strong>
      </div>
      <div className={classes.flex}>
        <BsDownload />
        <strong style={{marginLeft: 5}}>Import/export saved data</strong>
      </div>
      <Form.Control
        style={{margin: "10px 0"}}
        type="text"
        id="inputText"
        value={data}
        onChange={handleChange}
        onFocus={handleFocus}
      />
        <p>To export, click the text above and 
        <button 
          className={classes.copy_btn}
          id="data" 
          data-clipboard-text={data}
        >
          copy
        </button> 
        (ctrl-c). To import, click the text and paste (ctrl-v) your exported data.
      </p>
      <p>It's normal for imported saves to have more units than you exported with. Your swarm continues its work even after saved data is exported/before it's imported.</p>
      <div className={classes.dataSave} onClick={() =>setIsShow(!isShow)}>
        Where is Swarm Simulator's data saved?
      </div>
      { isShow === true ?
        <Card className={classes.dataSaveInfo}>
          <Card.Body>
            <p>Swarm Simulator saves your progress in your browser's localstorage, cookies, and Flash (SWF) storage. Your saved game will be loaded if it's found in any one of these sources. This is done to avoid accidentally losing your saved data; it's not intended to track you or otherwise invade your privacy. The 'wipe all saved data' button below will clear all three storage locations.</p>
            <p>Local storage: 1137 chars</p>
            <p>Cookie storage: 1137 chars</p>
            <p>Flash storage: empty</p>
          </Card.Body>
        </Card> : ""
      }
      <Button
        variant="outline-secondary"
        className={classes.dataClear_btn}
        onClick={handleStart}
      >
        <AiFillWarning size={18} />
        Wipe all saved data and start over 
      </Button>
      <p>
        You started playing {moment(cookies.startTime).fromNow()}.
      </p>
      <div className={classes.flex}>
        <AiOutlineCloudUpload size={20}/>
        <strong style={{marginLeft: 5}}>Analytics</strong>
      </div>
      <p>Swarm Simulator, like many websites, uses Google Analytics to track actions you take while playing. We use this data to improve the game. Feel free to opt out of Google Analytics.</p>
      <a
        href="https://policies.google.com/technologies/partner-sites"
        target="_blank"
        className={classes.googleUse}
      >
        How Google uses data when you use our partners' sites or apps
      </a>
    </Container>
  )
}

export default Options