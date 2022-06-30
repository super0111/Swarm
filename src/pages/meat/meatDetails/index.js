import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { BsXLg } from "react-icons/bs";
import classes from "../meat.module.css";

const MeatDetails = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Row>
                        <Col md={4}>Drone</Col>
                        <Col md={{ span: 4, offset: 4 }}>0</Col>
                    </Row>
                    <Row>
                        <Col md={4}>Meat</Col>
                        <Col md={{ span: 4, offset: 4 }}>35</Col>
                    </Row>
                </Col>
                <Col sm={8}>
                    <Button className={classes.top_btn}>Larva</Button>
                    <p>Drones are the lowest class of worker in your swarm. They continuously gather meat to feed your swarm.</p>
                    <p>You own no drones.</p>
                    <p>Each produces 1.00000 meat per second. (×1.00 bonus)</p>
                    <hr />
                    <p>
                        Hatching
                        <Form.Control type="text" placeholder="Enter email" />
                        drone will cost 10 meat and 1 larva.
                    </p>
                    <Button>Hatch 1</Button>
                    <Button>Hatch 3</Button>
                </Col>
                <BsXLg />
            </Row>
        </Container>
    )
}

export default MeatDetails