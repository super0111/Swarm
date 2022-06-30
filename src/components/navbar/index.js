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
import { Link } from 'react-router-dom';
import { AiOutlineContainer } from "react-icons/ai";
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import { Nav, NavDropdown } from 'react-bootstrap'

const Navbar = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="meat">
            <Nav.Item>
                <Nav.Link 
                    eventKey="meat"
                >
                    <Link
                        to='/meat'
                        style={{ color: '#337ab7', textDecoration: "none" }}
                    >
                        35 meat
                    </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    eventKey="larvae" 
                >
                    <Link 
                        to='/larvae'
                        style={{ color: "#337ab7", textDecoration: "none" }}
                    >
                        11 larvae
                    </Link>
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
                    <BsGearFill /> Options
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                    {' '}
                    <BsCheckLg /> Achievements
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                    {' '}
                    <BsBarChartFill /> Statistics
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                    {' '}
                    <BsFillFileEarmarkFontFill /> Patch Notes
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                    {' '}
                    <BsPersonFill /> Community
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                    {' '}
                    <BsChatFill /> Send Feedback
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Report Problem</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                    {' '}
                    <AiOutlineContainer /> Show all units
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navbar