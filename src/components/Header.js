import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import logoApp from "../assets/images/logo192.png"
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "../redux/actions/userAction";
const Header = (props) => {
  const [hideHeader, setHideHeader] = useState(false);
  const user = useSelector(state => state.user.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(handleLogoutRedux());


  }
  useEffect(() => {
    if (user && user.auth === false) {
      navigate("/");
      toast.success("Logout success")
    }
  }, [user])
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
            {user && (user.auth || window.location.pathname === "/") &&
              <>
                <Nav className="me-auto" >
                  <NavLink className="nav-link" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/users">Manage Users</NavLink>
                </Nav>
                <Nav>
                  {user && user.email && <span className="nav-link">Welcome {user.email}  </span>}
                  <NavDropdown title="Setting" >
                    {user && user.auth === true
                      ? <NavDropdown.Item onClick={() => handleLogout()}>
                        Logout
                      </NavDropdown.Item>
                      :
                      <NavLink className="dropdown-item" to="/login" active>Login</NavLink>
                    }
                  </NavDropdown>
                </Nav>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header