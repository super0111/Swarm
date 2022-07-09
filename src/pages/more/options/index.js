import React, { useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Container, Form, Card, Button, Modal } from "react-bootstrap";
import { BsFillEyeFill, BsFilm, BsDownload } from "react-icons/bs";
import Clipboard from 'clipboard';
import { AiFillWarning, AiOutlineCloudUpload } from "react-icons/ai";
import moment from "moment";
import User from "./user";
import classes from "./options.module.css";
import Theme from "./theme";
import NumberFormart from "./numberFormart";
import VelocityFormart from "./velocityFormart";
import DurationFormart from "./durationFormart";
import { Context } from "../../../context/AppContext";

new Clipboard('#data');

const StartModal = (props) => {
  const { show, handleClose } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>www.swarmsim.com says</Modal.Title>
      </Modal.Header>
      <Modal.Body>You will lose everything and restart the game. No reset-bonuses here.<br></br> You sure?</Modal.Body>
      <Modal.Footer>
        <Button size="sm" variant="outline-primary" onClick={handleClose}>
          OK
        </Button>
        <Button size="sm" variant="outline-danger" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const Options = () => {
  const { 
    velocity, setVelocity,
    numFormart, setNumFormart,
    durationFormart, setDurationFormart,
    selectedTheme, setSelectedTheme,
    advanceUnit, setAdvanceUnit,
  } = useContext(Context)
  const [ isShow, setIsShow ] = useState(false);
  const [ cookies, setCookie, removeCookie ] = useCookies([ "startTime" ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = "MS4xLjEz|Q2hlYXRlciA6KAoKN4IgrgdglgLjCeAHApgZxALlFCA3KqUARgDbIAWAhjAMbnIBO8mIAjCADQgC2y1LAZgCsnECUoNclFqwAMomgHsliiC3lcYjBrEVN1o5BEYBzZhhAaQDNChoBRYwzMGu3GAA9Hp85dHGPMHQLKxomVBhKElceMEiTIxjEG244ygS1ENFKVBojQlUYgDMbZAAlW2QaFgAWUQATBlVkGIBHMGRErK5jCJiTG2pGds7Mvy5yKFwW7pBJ6ZGu8ZBkbmS0YOXkxUR6GH7FevqNpMoIGHpC2cQzi+RVACZT88uIAWe71Trr29eRWcU0wY3Bw9RigMYIIg9SeAKBUPq7zhkNB32WEOBoP+6PhoIAbDFUAB3CTcEg4EyEmAUxiExBQY4MGLcRSodq6GIkZRBfazJqUOj9KC3VD0xkxPLnKAoY4xEmimLHXCKMA2JmzEyKK7LaAmcgwIhgSmzFkXGJEfgmtIvah0Ri+KypSLnC285ZO240LnGZnWmDE0kkhiIX3OmAMILkUO3PiCq1hkrIVrR84BIIpyLAh2iD3nXiWvwAXy49SGmFAEQkWjBFgesgeDwAtLI8Y2BLIACqsPEYGqsXs1AB0AA4+wAtUQ2SsMassOsN5ut9tdnt9gcj8eiVCUaY1kDzpsttud1jDjAPHtCViD1gATlkE64NigRSgyD3B8Xx5Xvf7NSHo6sI+IBeqy75zvWh5Lieq5/gBm7FiAOzUqowQVuQihEgAgvUUgQHk9QAKrQDAAAi1DSBgRRRKgyBcEUiCoFhcSKJg1EkLR9GMZgDwAOw9IokQoWMRgmDgnQ6BAlIlqq1BQKoABiejcAW5BgCpahcAQADCPKKNwHb0LwbE0XRIB3MZFh5BGZBnNkLGIJGJkccgiFgIgAyUMcaGIZW1IRFANBoSARDwMRsDlohoWER5DBeTMwCIV6gUANbBLIiECpMyDTLw5zBXQZwJFyxpXqwDxCDUiEkrQ9A1olXCoCl0oygAslAJDkulXBAgUmQVpms4WNeI3vI1O7gcNN43u8mV0G+uVGP6ADKGFEv1KwSMYNbhh0XCQHwDDbZgu1mSpTWTadXB6OKFjHNRYAkPsT45YwtEnRGrmFkAA";
  
  const handleThemeSelect = (eventKey) => {
    setSelectedTheme(eventKey);
  };

  const handleChange = () => {};
  const handleFocus = (event) => {
    event.target.select();
  };
  const handleVelocity = (e) => {
    setVelocity(e.target.value);
  }

  const handleNumFormat = (e) => {
    setNumFormart(e.target.value);
  }

  const handleDuration = (e) => {
    setDurationFormart(e.target.value);
  }

  const handleRemoveCook = () => {
    cookies.remove('larvaeCount', { path: '/' });
  }

  return (
    <Container>
      <h1>Options</h1>
      <div className={classes.flex}>
        <BsFillEyeFill />
        <strong style={{margin: "0 5px"}}> Show advanced unit data </strong>
        <Form.Check
          type="checkbox"
          checked={advanceUnit}
          onChange={ () => {setAdvanceUnit(!advanceUnit)} }
        />
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
      <NumberFormart numFormart={numFormart} handleNumFormat={handleNumFormat} />
      <VelocityFormart velocity={velocity} handleVelocity={handleVelocity} />
      <DurationFormart durationFormart={durationFormart} handleDuration={handleDuration}  />
      <Theme selectedTheme={selectedTheme} handleThemeSelect={handleThemeSelect} />
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
        onClick={handleShow}
      >
        <AiFillWarning size={18} />
        Wipe all saved data and start over 
      </Button>
      <p>
        You started playing {moment(cookies.startTime).fromNow()}.
      </p>
      <StartModal show={show} handleClose={handleClose} />
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