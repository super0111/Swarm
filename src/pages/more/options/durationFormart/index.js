import { ImBarcode } from "react-icons/im";
import { Form } from "react-bootstrap";
import classes from "../options.module.css";

const DurationFormart = (props) => {
  const { durationFormart, handleDuration } = props;
  return (
    <>
      <div className={classes.flex}>
        <ImBarcode />
        <strong style={{marginLeft: 5}}>Duration format</strong>
      </div>
      <div>
        <Form.Check.Input 
          type='radio' 
          isValid
          value="exact"
          checked={  durationFormart === undefined ? durationFormart === "exact" : durationFormart === "exact" }
          onChange={handleDuration} 
        />
        {' '}Exact{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="approximate"
          checked={durationFormart === "approximate"}
          onChange={handleDuration} 
        />
        {' '}Approximate{' '}
        <p>
          { 
            durationFormart === "exact" ? "00:16, 2:43, 2:30:00, 23 days 7 hours, 2 months 7 days, 1 years 2 months"
          : durationFormart === "approximate" ? "a few seconds, 3 minutes, 3 hours, 23 days, 2 months, a year"
          : ""
          }
        </p>
      </div>
    </>
  )
}

export default DurationFormart