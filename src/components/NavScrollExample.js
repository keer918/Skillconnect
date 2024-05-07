import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from './hackimages/logo1.png';
function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#074173" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "row", gap: "1px" }}>
          <img src={logo1} className="rounded-circle" style={{ width: '60px', height: "50px" }} />
          <Navbar.Brand href="#" style={{ color: "#ffffff", fontFamily: "Brush Script MT", fontWeight: "bolder", fontSize: "30px" }}><span style={{ color: "white" }}>Skill</span><span style={{ color: "white" }}>Connect</span></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "#ffffff" }} >HOME</Nav.Link>
              <Nav.Link href="/about" style={{ color: "#ffffff" }}>ABOUT US</Nav.Link>
              <Nav.Link href="/" style={{ color: "#ffffff" }} >CONTACT</Nav.Link>
              <Nav.Link href="/login" style={{ color: "#ffffff" }} >LOGIN</Nav.Link>
              <Nav.Link href="/signup" style={{ color: "#ffffff" }}>SIGNUP</Nav.Link>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;