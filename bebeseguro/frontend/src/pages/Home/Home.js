// CSS
import styles from "./Home.module.css";

// firebase
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { Link } from "react-router-dom";
//import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";

// components
import HomeWithoutLogin from "../../components/HomeWithoutLogin";
import HomeWithLogin from "../../components/HomeWithLogin";

const Home = () => {

  const {auth, loading} = useAuth();

  if (loading) {
    return <p>Carregando...</p>
  }

  //const [user, setUser] = useState(undefined);
  //const { auth } = useAuthentication();

  /*
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  */

  return (
    <main>
      {!auth && (
        <HomeWithoutLogin />
      )}
      {auth && (
        <HomeWithLogin />
      )}
    </main>
  )
}

export default Home