// hooks
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from "./Header.module.css";

// images
import Logo from './images/BebeSeguro.png';

// redux
import { logout, reset } from "../slices/authSlice";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";

const Header = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  }

  return (
    <Navbar fixed="top" bg="light" expand="lg" className={`${styles.navbar} mb-3`}>
      <Container fluid>
        <Navbar.Brand href="/" className={styles.brand}>
          <img src={Logo} alt="Logo da BebeSeguro" />
          <h3>
            Bebe<span>Seguro</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              BebeSeguro
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/store">Loja</Nav.Link>
              {auth && user && (
                <>
                  <Nav.Link href="/guides">Blog</Nav.Link>
                  <Nav.Link href="/community">Comunidade</Nav.Link>
                </>
              )}
              <NavDropdown
                title="Calculadoras"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="/calculators/ovulation">Período fértil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/calculators/gestage">
                  Idade gestacional
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/calculators/imc">
                  IMC para gestantes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/calculators/deliverydate">
                  Data do parto
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">Sobre Nós</Nav.Link>
              {!auth && (
                <>
                  <Nav.Link href="/login">Entrar</Nav.Link>
                  <Nav.Link href="/register">Cadastre-se</Nav.Link>
                </>
              )}
              {auth && user && (
                <>
                  <Nav.Link href={`/users/${user._id}`}>Perfil</Nav.Link>
                  <Button 
                    variant="outline-danger"
                    onClick={handleLogout}
                  >
                    Sair
                  </Button>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  )
}

export default Header