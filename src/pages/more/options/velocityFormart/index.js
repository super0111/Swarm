import classes from "../options.module.css";
import { ImBarcode } from "react-icons/im";
import { Form } from "react-bootstrap";


const VelocityFormart = (props) => {
  const { velocity, handleVelocity } = props;
  return (
    <>
      <div className={classes.flex}>
        <ImBarcode />
        <strong style={{marginLeft: 5}}> Velocity format</strong>
      </div>
      <div>
        <Form.Check.Input 
          type='radio' 
          isValid
          value="seconds"
          checked={ velocity === "seconds"}
          onChange={handleVelocity}
        />
        {' '}Seconds{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="minutes"
          checked={velocity === "minutes"}
          onChange={handleVelocity} 
        />
        {' '}Minutes{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="hours"
          checked={velocity === "hours"}
          onChange={handleVelocity}
        />
        {' '}Hours{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="days"
          checked={velocity === "days"}
          onChange={handleVelocity} 
        />
        {' '}Days{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="swarmwraps"
          checked={velocity === "sarmwraps"}
          onChange={handleVelocity} 
        />
        {' '}Swarmwarps{' '}
        <p>Example: {' '}
          {
            velocity === "seconds" ? 10
          : velocity === "minutes" ? 600
          : velocity === "hours" ? "36,000"
          : velocity === "days" ? 864.000E3 
          : "9,000" 
          }
          {' '}meat/
          { 
            velocity === "seconds" ? "sec"
          : velocity === "minutes" ? "min"
          : velocity === "hours" ? "hr"
          : velocity === "days" ? "day" 
          : "wrap" 
          }
        </p>
      </div>
    </>
  )
}

export default VelocityFormart;