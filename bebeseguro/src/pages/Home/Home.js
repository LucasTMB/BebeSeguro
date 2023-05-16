// CSS
import styles from "./Home.module.css";

// firebase
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

// components
import HomeWithoutLogin from "../../components/HomeWithoutLogin";

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
        <HomeWithoutLogin />
      )}
    </main>
  )
}

export default Home