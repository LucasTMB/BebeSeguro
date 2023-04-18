import styles from "./Register.module.css";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    };

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  }

  useEffect(() => {
    if(authError) setError(authError);
  }, [authError]);

  return (
    <div className={styles.register}>
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
              className="form_input" 
              type="text" 
              placeholder="Nome"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Control 
              className="form_input" 
              type="email" 
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Control 
              className="form_input" 
              type="password" 
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Control 
              className="form_input" 
              type="password" 
              placeholder="Confirme a sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {!loading && <Button variant="primary" type="submit">Cadastrar</Button>}
          {loading && <Button variant="primary" type="submit" disabled>Aguarde...</Button>}
          {error && <Alert className={styles.alert} variant="danger">{error}</Alert>}

        </Form>
      </div>
    </div>
  )
}

export default Register