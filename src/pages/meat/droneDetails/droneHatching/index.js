import { useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { Col, Row, Button, Form } from "react-bootstrap";
import { Context } from "../../../../context/AppContext";
import classes from "../../meat.module.css";

const DroneHatching = () => {
  const { 
    droneCount, setDroneCount,
    meatCount, setMeatCount,
    larvaeNum,  setLarvaeNum, 
    droneClick, setDroneClick,
    advanceUnit,
  } = useContext(Context);
  const [ cookies, setCookie ] = useCookies([ "droneTime" ]);
  const [ droneStateValue, setDroneStateValue ] = useState(0);

  const handleDroneChange = (e) => {
    setDroneStateValue(e.target.value);
  }
  const handleHatch = (i) => {
    if(larvaeNum < i) {
      alert("You do't have enough larva");
      return;
    }

    if(cookies.droneTime === undefined) {
      const time = new Date();
      setCookie("droneTime", time, {path: "/"});
    }
    setDroneClick(droneClick+1);
    if(droneCount === undefined) {
      setDroneCount(0 + Number(droneStateValue));
    }
    setDroneCount(prevCount => Number(prevCount) + Number(i));
    setMeatCount(meatCount - Number(i*10));
    setLarvaeNum(larvaeNum - Number(i));
  }

  return (
    <>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          Hatching
        </Form.Label>
        <Col sm="4">
          <Form.Control 
            type="text" 
            placeholder="1"
            onChange={handleDroneChange}
          />
        </Col>
        <Form.Label column sm="4">
          drone will cost {droneStateValue*10} meat and {droneStateValue} larva.
        </Form.Label>
      </Form.Group>
      { 
        advanceUnit === true ?
        <>
          <p>
            Hatching your maximum of {' '}
            { 
              larvaeNum < Math.trunc(meatCount/10) ? 
              larvaeNum : Math.trunc(meatCount/10)
            } 
            {' '}drones will cost {' '}
            { 
              larvaeNum < Math.trunc(meatCount/10) ? 
              ((larvaeNum/meatCount)*100).toFixed(1) : ((Math.trunc(meatCount/10)/meatCount)*100).toFixed(1) 
            }
            % of your meat and {' '}
            {
              larvaeNum < Math.trunc(meatCount/10) ? 
              (larvaeNum/larvaeNum*100).toFixed(1) : (Math.trunc(meatCount/10)/larvaeNum*100).toFixed(1)
            } 
            % of your larvae.</p>
          <p>
            You can hatch one drone every {' '} 
            { 10/droneCount < 1 ? 1 : droneCount === 0 ? 10 : (10/droneCount).toFixed(0) }
            {' '}seconds, using {' '}
            {
              larvaeNum < Math.trunc(meatCount/10) ? 
              ((larvaeNum/meatCount)*100).toFixed(0) : ((Math.trunc(meatCount/10)/meatCount)*100).toFixed(1) 
            }
            % of your meat income and {' '}
            {
              larvaeNum < Math.trunc(meatCount/10) ? 
              (larvaeNum/larvaeNum*100).toFixed(0) : (Math.trunc(meatCount/10)/larvaeNum*100).toFixed(0)
            }
            % of your larva income.
          </p>
        </>
        : ""
      }
      { larvaeNum < droneStateValue || meatCount < 10*droneStateValue ?
        <Button
          disabled
          className={classes.disableHatch_btn}
        >
          Can't Hatch
        </Button> :
        <>
          <Button
            variant="outline-secondary"
            className={classes.hatch_btn}
            value={droneStateValue}
            onClick={ () => handleHatch( 
              droneStateValue === 0 ? 1 :
              droneStateValue*10 < meatCount ? droneStateValue : 
              Math.trunc(meatCount/10)
            )}
          >
            Hatch 
            { droneStateValue === 0 ? 1 :
              droneStateValue*10 < meatCount ? droneStateValue : 
              Math.trunc(meatCount/10)
            }
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.hatch_btn}
            onClick={ () => handleHatch( Math.trunc(meatCount/10 ))}
          >
            Hatch { Math.trunc(meatCount/10) }
          </Button>
        </>
      }
    </>
  )
}

export default DroneHatching