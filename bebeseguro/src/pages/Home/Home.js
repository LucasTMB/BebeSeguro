// CSS
import styles from "./Home.module.css";

// firebase
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

// react bootstrap
import Button from "react-bootstrap/Button";

const Home = () => {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <main>
      {!user && (
        <section className={styles.banner}>
          <h1>
            BebeSeguro
          </h1>
          <p>
            Cada dia é uma nova descoberta na jornada da maternidade.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.loginBtn} to="/login">
              <Button>
                Entrar
              </Button>
            </Link>
            <Link className={styles.registerBtn} to="/register">
              <Button>
                Cadastre-se
              </Button>
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}

export default Home