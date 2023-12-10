import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar>Courses</Navbar>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav>
                  <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/profile"} style={{ textDecoration: "none" }}>
                    Profile
                  </Link>
                </Nav>
                <Nav>
                  <FaPowerOff />
                </Nav>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  style={{ backgroundColor: "orange" }}
                  className="border-0"
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
