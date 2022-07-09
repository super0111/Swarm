
import classes from "../options.module.css";
import { Form } from "react-bootstrap";
import { ImBarcode } from "react-icons/im";
import { Link } from 'react-router-dom';

const NumberFormart = (props) => {
  const { numFormart, handleNumFormat } = props;
  return (
    <>
      <div className={classes.flex}>
        <ImBarcode />
        <strong style={{marginLeft: 5}}>Number format</strong>
      </div>
      <div>
        <Form.Check.Input 
          type='radio' 
          isValid
          value="standard"
          checked={ numFormart === undefined ? numFormart === "standard" : numFormart === "standard"}
          onChange={handleNumFormat}
        />
        {' '} Standard decimal
        (
          <Link
            className={classes.aTag}
            to="/decimallegend"
          >
            legend
          </Link>
        )
        {' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="scientic"
          checked={numFormart === "scientic" }
          onChange={handleNumFormat} 
        />
        {' '}Scientific-E{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="hybrid"
          checked={numFormart === "hybrid" }
          onChange={handleNumFormat} 
        />
        {' '}Hybrid{' '}
        <Form.Check.Input 
          type='radio' 
          isValid
          value="engineering"
          checked={numFormart === "engineering" }
          onChange={handleNumFormat} 
        />
        {' '}Engineering
        <p>Examples: 
          { 
            numFormart === "standard" ? "123.456 million, 123M, 123.456 undecillion, 123UDc"
          : numFormart === "scientic" ? "1.23456e8, 1.23e8, 1.23456e38, 1.23e38"
          : numFormart === "hybrid" ? "123.456 million, 123M, 1.23456e38, 1.23e38"
          : numFormart === "engineering" ? "123.456E6, 123E6, 123.456E36, 123E36" 
          : ""
          }
        </p>       
      </div>
    </>
  )
}

export default NumberFormart