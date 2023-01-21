import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function MyNavBar() {
  const navigate = useNavigate();
  const handleCLick = (eventKey) => {
    if (eventKey.target.innerText === "Eduardo's PortFolio")
      return navigate("/");
    navigate("/" + eventKey.target.innerText.toLowerCase());
  };
  return (
    <>
      <Navbar className="py-4" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={handleCLick}>Eduardo's PortFolio</Navbar.Brand>
          <Nav className="me-auto" onClick={handleCLick}>
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
