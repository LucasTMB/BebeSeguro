// hooks
import { NavLink, useNavigate } from "react-router-dom";
//import { useAuthentication } from "../hooks/useAuthentication";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";

// context
//import { useAuthValue } from "../context/AuthContext";

// styles
import styles from "./Header.module.css";

// redux
import { logout, reset } from "../slices/authSlice";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  //const { user } = useAuthValue();
  //const { logout } = useAuthentication();
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
              to="/"
              exact className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              className="nav-link"
            >
              Loja
            </NavLink>
            {auth && (
              <>
                <NavLink
                  to="/guides"
                  className="nav-link"
                >
                  Guias
                </NavLink>
                <NavDropdown title="Calculadoras" id="basic-nav-dropdown">
                  <NavLink to="/calculators/ovulation" className="nav-link">
                    Período fértil
                  </NavLink>
                  <NavLink to="/calculators/gestage" className="nav-link">
                    Idade gestacional
                  </NavLink>
                  <NavLink to="/calculators/imc" className="nav-link">
                    IMC para gestantes
                  </NavLink>
                  <NavLink to="/calculators/deliverydate" className="nav-link">
                    Data do parto
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
            {!auth && (
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
            {auth && user && (
              <>
                <NavLink
                  to={`/users/${user._id}`}
                  className="nav-link"
                >
                  Perfil
                </NavLink>
                <NavLink
                  to="/profile"
                  className="nav-link"
                >
                  Editar perfil
                </NavLink>
                <button onClick={handleLogout}>Sair</button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header