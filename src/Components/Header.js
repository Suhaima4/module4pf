import {Container,Navbar,Nav,} from "react-bootstrap";
import {Link}from 'react-router-dom';
function Header(){
return(


<Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">PORTFOLIO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
)}
export default Header;