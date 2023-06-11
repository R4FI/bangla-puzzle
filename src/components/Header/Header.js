import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../image/short-logo.png";
import "./Header.css";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="bgnav"
    >
      <Container>
        <Navbar.Brand href="home">
          <img src={logo} alt="logo" className="navimg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-2 navfont" href="home">
              Home
            </Nav.Link>
            <Nav.Link className="me-2 navfont" href="privacy-policy">
              Privacy Policy
            </Nav.Link>
            <Nav.Link className="me-2 navfont" href="terms-condition">
              Terms Condition
            </Nav.Link>
            <Nav.Link className="me-2 navfont" href="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link className="me-2 navfont" href="contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link className="me-2 navfont" href="#advertise">
              Advertise
            </Nav.Link>
            <button className="navbtn m-auto">join Now</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
