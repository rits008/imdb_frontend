import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">IMDB App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/moviecreation">Add Movie</Nav.Link>
            <Nav.Link href="/actorcreation">Add Actor</Nav.Link>
            <Nav.Link href="/producercreation">Add Producer</Nav.Link>
            <Nav.Link herf="#snjfkjs">Add Genre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;