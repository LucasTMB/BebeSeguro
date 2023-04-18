// hooks
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

// context
import { useAuthValue } from "../context/AuthContext";

// styles
import styles from "./Header.module.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const {user} = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.containerNavbar}>
        <NavLink 
            to="/" 
            className={`${"navbar-brand"} ${styles.brand}`}
        >
            Bebe<span>Seguro</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
                to="/store" 
                exact className="nav-link"
            >
                Loja
            </NavLink>
            {user && (
              <>
                <NavLink 
                    to="/guides" 
                    className="nav-link"
                >
                    Guias
                </NavLink>
                <NavDropdown title="Calculadoras" id="basic-nav-dropdown">
                  <NavLink to="/" className="nav-link">
                    Calculadora de níveis de hCG
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Calculadora gestacional
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Calculadora de tempo de gravidez para FIV e TEC
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Calculadora de data de nascimento por ultrassom
                  </NavLink>
                </NavDropdown>
                <NavLink 
                    to="/community" 
                    className="nav-link"
                >
                    Comunidade
                </NavLink>
              </>
            )}
            <NavLink 
                to="/about" 
                className="nav-link"
            >
                Sobre Nós
            </NavLink>
            {!user && (
              <>
                <NavLink
                  to="/login"
                  className="nav-link"
                >
                  Entrar
                </NavLink>
                <NavLink
                  to="/register"
                  className="nav-link"
                >
                  Cadastre-se
                </NavLink>
              </>
            )}
            {user && (
              <button onClick={logout}>Sair</button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header