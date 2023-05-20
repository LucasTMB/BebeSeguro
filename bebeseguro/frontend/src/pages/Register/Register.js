import styles from "./Register.module.css";

// hooks
import { useState, useEffect } from "react";
//import { useAuthentication } from "../../hooks/useAuthentication";

// Redux
import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

// components
import Message from "../../components/Message";

// bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //const [error, setError] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  //const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setError("");

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    /*if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }*/

    //const res = await createUser(user);

    console.log(user);

    dispatch(register(user));
  }

  /*useEffect(() => {
    if(authError) setError(authError);
  }, [authError]);*/

  // clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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
              className="form_lr_input" 
              type="text"
              required 
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Control 
              className="form_lr_input" 
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Control 
              className="form_lr_input" 
              type="password" 
              required
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Control 
              className="form_lr_input" 
              type="password" 
              required
              placeholder="Confirme a sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {!loading && <Button variant="primary" type="submit">Cadastrar</Button>}
          {loading && <Button variant="primary" type="submit" disabled>Aguarde...</Button>}
          {error && <Message msg={error} type="danger" />}

        </Form>
      </div>
    </div>
  )
}

export default Register