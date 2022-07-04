import {
  BsArrowUpCircleFill,
  BsArrowUpCircle,
  BsFillReplyFill,
  BsCheckLg,
  BsGearFill,
  BsPersonFill,
  BsBarChartFill,
  BsChatFill,
} from 'react-icons/bs';
import {
  GiSpiderAlt
} from "react-icons/gi";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { AiOutlineContainer } from "react-icons/ai";
import { BsFillFileEarmarkFontFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { Nav, NavDropdown } from 'react-bootstrap';

const LinkButton = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.to)
  }
  return (
    <span role='button' style={props.style} onClick={handleClick}>
      {props.children}
    </span>
  )
}

const Navbar = () => {
  const [ cookies ] = useCookies([
    "velocity", 
    "larvaeCount", 
    "meatCount", 
    "droneCount",
    "hatcheryCount",
    "startCount",
    "startTime",
  ]);
  const [ active, setActive ] = useState("meat");
  const styles = {
    textformat: {
      textDecoration: "none",
      color: "black",
      marginLeft: 5,
    }
  };

  return (
    <Nav 
      variant="tabs" 
      activeKey={active}
      onSelect={(eventKey) => setActive(eventKey)}
    >
      <Nav.Item>
        <Nav.Link 
          eventKey="meat"
        >
          <LinkButton
            to='/meat'
            style={{ color: '#337ab7', textDecoration: "none" }}
          >
            { cookies.meatCount } meat
          </LinkButton>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link 
          eventKey="larvae"
        >
          <LinkButton 
            to='/larvae'
            style={{ color: "#337ab7", textDecoration: "none" }}
          >
            { cookies.larvaeCount } {' '}larvae{' '}
            { Number(cookies.meatCount) > 300*(Math.pow(10, Number(cookies.hatcheryCount))) ?
              <BsFillArrowUpCircleFill size={12} color="#337ab7" /> : ""
            }
          </LinkButton>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown 
        title={
          <span style={{ color: "#337ab7", fontWeight: 500 }}>More...</span>
        }
        id="nav-dropdown"
      >
        <NavDropdown.Item eventKey="4.1">
          {' '}
          <BsArrowUpCircleFill /> Buy all 1 upgrade
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          {' '}
          <BsArrowUpCircle /> Buy cheapest 1 upgrade
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3">
          {' '}
          <BsFillReplyFill /> Undo
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">
          {' '}
          <BsGearFill /> 
          <Link style = {styles.textformat} to="/options">Options</Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5">
          {' '}
          <BsCheckLg /> 
          <Link style = {styles.textformat} to="/achievements">Achievements</Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.6">
          {' '}
          <BsBarChartFill /> 
          <Link style = {styles.textformat} to="/statistics">Statistics</Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.7">
          {' '}
          <BsFillFileEarmarkFontFill /> 
          <Link style = {styles.textformat} to="/changelog">Patch Notes</Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.8">
          {' '}
          <BsPersonFill /> 
          <a style = {styles.textformat} href="http://reddit.com/r/swarmsim" target="_blank">Community</a>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.9">
          {' '}
          <BsChatFill />
          <Link style = {styles.textformat} to="/contact"> Send Feedback</Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.10">
          {' '}
          <GiSpiderAlt />
          <Link style = {styles.textformat} to="/contact">Report Problem</Link>    
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.11">
          {' '}
          <AiOutlineContainer /> 
          <Link style = {styles.textformat} to="/all">Show all units</Link>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}

export default Navbar