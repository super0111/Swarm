
import { Dropdown } from "react-bootstrap";
import { ImImage } from "react-icons/im";
import classes from "../options.module.css";

const Theme = (props) => {
  const { handleThemeSelect, selectedTheme } = props;
  return (
    <>
      <Dropdown onSelect={handleThemeSelect}>
        <Dropdown.Toggle 
          className={classes.toggle_btn} 
          variant="outline-secondary" 
          id="dropdown-basic"
        >
          <ImImage />Theme<strong style={{color: "red"}}>(BETA)</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className={classes.dropdown}>
          <Dropdown.Item eventKey='default' >Default White</Dropdown.Item>
          <Dropdown.Item eventKey='cerulean' >Cerulean</Dropdown.Item>
          <Dropdown.Item eventKey='cosmo' >Cosmo</Dropdown.Item>
          <Dropdown.Item eventKey='cyborg' >Cyborg</Dropdown.Item>
          <Dropdown.Item eventKey='darkly' >Darkly</Dropdown.Item>
          <Dropdown.Item eventKey='flatly' >Flatly</Dropdown.Item>
          <Dropdown.Item eventKey='journal' >Journal</Dropdown.Item>
          <Dropdown.Item eventKey='lumen' >Lumen</Dropdown.Item>
          <Dropdown.Item eventKey='paper' >Paper</Dropdown.Item>
          <Dropdown.Item eventKey='readable' >Readable</Dropdown.Item>
          <Dropdown.Item eventKey='sandstone' >Sandstone</Dropdown.Item>
          <Dropdown.Item eventKey='simplex' >Simplex</Dropdown.Item>
          <Dropdown.Item eventKey='slate' >Slate</Dropdown.Item>
          <Dropdown.Item eventKey='spacelab' >Spacelab</Dropdown.Item>
          <Dropdown.Item eventKey='superhero' >Superhero</Dropdown.Item>
          <Dropdown.Item eventKey='united' >United</Dropdown.Item>
          <Dropdown.Item eventKey='yeti' >Yeti</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey='custom' >Custom Style</Dropdown.Item>
          <Dropdown.Item eventKey='additional' >Additional styling (advanced)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p>
        Current theme:{' '} 
        <a 
          className={classes.selectedTheme}
          href="https://bootswatch.com/default/"
          target="_blannk"
        >
          {selectedTheme}
        </a>
      </p>
    </>
  )
}

export default Theme