import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Changelog = () => {
    return (
      <Container>
        <h1>Patch Notes</h1>
        <p>
          Swarm Simulator is open source. See the 
          <Link>source code repository</Link>
          for a more thorough, but less readable, change history. 179 updates released since 2014/08/28.
        </p>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    )
}

export default Changelog