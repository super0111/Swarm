import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import classes from "../../../meat.module.css";
import { useContext } from "react";
import { Context } from "../../../../../context/AppContext";

const FasterUnit = () => {
  const { 
    fasterNotify, setFasterNotify
  } = useContext(Context);

  const handleFasterSelect = (eventKey) => {
    setFasterNotify(eventKey);
  };

console.log("fasterNotify", fasterNotify)

  return (
    <div className={classes.flex}>
      <BsFillArrowUpCircleFill color="#337ab7" />
      <Dropdown onSelect={handleFasterSelect}>
        <Dropdown.Toggle 
          className={classes.toggle_btn} 
          variant="outline-secondary"
          id="dropdown-basic"
        >
          {
            fasterNotify === "hide" ? "Hide upgrade" :
            fasterNotify === "never" ? "Never notify" :
            fasterNotify === "buyable" ? "Notify when buyble" :
            fasterNotify === "2cost" ? "Notify at 2* cost" : 
            fasterNotify === "4cost" ? "Notify at 4* cost" : "Select"
          }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey='hide' >Hide upgrade</Dropdown.Item>
          <Dropdown.Item eventKey='never' >Never notify</Dropdown.Item>
          <Dropdown.Item eventKey='buyable' >Notify when buyable</Dropdown.Item>
          <Dropdown.Item eventKey='2cost' >Notify at 2* cost</Dropdown.Item>
          <Dropdown.Item eventKey='4cost' >Notify at 4* cost</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default FasterUnit