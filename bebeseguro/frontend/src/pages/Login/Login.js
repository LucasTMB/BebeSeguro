import styles from "./Login.module.css";

// hooks
//import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux
import { login, reset } from "../../slices/authSlice";

// react router
import { NavLink } from "react-router-dom";

// components
import Message from "../../components/Message";

// bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const {loading, error} = useSelector((state) => state.auth);
  //const [error, setError] = useState("");
  //const {login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setError("");

    const user = {
      email,
      password
    };

    //const res = await login(user);

    console.log(user);

    dispatch(login(user));
  }

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  /*
  useEffect(() => {
    if(authError) setError(authError);
  }, [authError]);
  */

  return (
    <div className={styles.login}>
      <div className={styles.slogan}>
        <h1>
          BebeSeguro
        </h1>
        <p>
          Cada dia é uma nova descoberta na jornada da maternidade.
        </p>
      </div>
      <div className={styles.form}>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Control 
              className="form_lr_input" 
              type="email" 
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Control 
              className="form_lr_input" 
              type="password" 
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <NavLink className={styles.navlink} to="/">
              <Form.Text className={styles.forget_password}>
                Esqueceu sua senha? {/* Ainda vou criar uma página de recuperação de senha */}
              </Form.Text>
            </NavLink>
          </Form.Group>

          <>
            {!loading && <Button className={styles.btn_enter} variant="primary" type="submit">Entrar</Button>}
            {loading && <Button className={styles.btn_enter} variant="secondary" type="submit" disabled>Aguarde...</Button>}
            {!loading && 
              <NavLink to="/register">
                <Button className={styles.btn_register}>Cadastre-se</Button>
              </NavLink>
            }
            {loading && 
              <NavLink to="/register">
                <Button variant="secondary" disabled>Aguarde...</Button>
              </NavLink>
            }
          </>

          {error && <Message msg={error} type="danger" />}

        </Form>
      </div>
      
    </div>
  )
}

export default Login