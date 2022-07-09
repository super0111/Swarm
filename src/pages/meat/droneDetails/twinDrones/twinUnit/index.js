import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import classes from "../../../meat.module.css";
import { useContext } from "react";
import { Context } from "../../../../../context/AppContext";

const TwinUnit = () => {
  const { 
    twinNotify, setTwinNotify,
  } = useContext(Context);

  const handleTwinSelect = (eventKey) => {
    setTwinNotify(eventKey);
  };

  return (
    <div className={classes.flex}>
      <BsFillArrowUpCircleFill color="#337ab7" />
      <Dropdown onSelect={handleTwinSelect}>
        <Dropdown.Toggle 
          className={classes.toggle_btn} 
          variant="outline-secondary"
          id="dropdown-basic"
        >
          {
            twinNotify === "hide" ? "Hide upgrade" :
            twinNotify === "never" ? "Never notify" :
            twinNotify === "buyable" ? "Notify when buyble" :
            twinNotify === "2cost" ? "Notify at 2* cost" : 
            twinNotify === "4cost" ? "Notify at 4* cost" : "Select"
          }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey='hide' >Hide Twin</Dropdown.Item>
          <Dropdown.Item eventKey='never' >Never notify</Dropdown.Item>
          <Dropdown.Item eventKey='buyable' >Notify when buyable</Dropdown.Item>
          <Dropdown.Item eventKey='2cost' >Notify at 2* cost</Dropdown.Item>
          <Dropdown.Item eventKey='4cost' >Notify at 4* cost</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default TwinUnit