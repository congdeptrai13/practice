import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import logoApp from "../assets/images/logo192.png"
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logoApp}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span>CongCaoThu</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <NavLink className="nav-link" to="/" active>Home</NavLink>
              <NavLink className="nav-link" to="/users">Manage Users</NavLink>

            </Nav>

            <Nav>
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header