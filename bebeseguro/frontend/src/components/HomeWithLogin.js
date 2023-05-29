import styles from './HomeWithLogin.module.css';

// hooks
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useCheckAdm } from '../hooks/useCheckAdm';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { getUserDetails } from '../slices/userSlice';

// scroll reveal
import ScrollReveal from "scrollreveal";

// bootstrap
import Button from 'react-bootstrap/Button';

const HomeWithLogin = () => {

  const { user: userAdm } = useCheckAdm();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(userAdm._id));
  }, [dispatch, userAdm._id]);

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      delay: 200,
      duration: 800,
      distance: "20px",
      easing: "ease-out",
      origin: "bottom",
    });
  }, []);

  return (
    <div className={styles.HomeWithLogin}>
      <section className={styles.banner}>
        <h1 className='reveal'>
          Seja bem-vinda a BebeSeguro!
        </h1>
      </section>

      <section className={styles.container}>
        <img src="https://i.ytimg.com/vi/MU1vOdsWV9A/maxresdefault.jpg" />
        <div className={styles.titles}>
          <h2 className='reveal'>
            Confira a nossa loja!
          </h2>
          <p className='reveal'>
            Descubra o encanto da maternidade. Explore nossa loja e encante-se!
          </p>
          <Link className={`${styles.linkBtn} reveal`} to="/store">
            <Button className={styles.Btn}>
              Ir para loja
            </Button>
          </Link>
        </div>
      </section>

      <section className={styles.bannerCommunity}>
        <h1 className='reveal'>
          Interaja em nossa comunidade!
        </h1>
        <p className='reveal'>
          Participe da nossa comunidade de mães e conecte-se com outras mães
        </p>
        <Link className={`${styles.linkBtn} reveal`} to="/community">
          <Button className={styles.Btn}>
            Acessar comunidade
          </Button>
        </Link>
      </section>

      <section className={styles.container}>
        <img src="https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <div className={styles.titles}>
          <h2 className='reveal'>
            Explore o nosso blog!
          </h2>
          <p className='reveal'>
            Nosso blog está repleto de informações úteis, dicas e sugestões sobre maternidade.
          </p>
          <Link className={`${styles.linkBtn} reveal`} to="/guides">
            <Button className={styles.Btn}>
              Acessar blog
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomeWithLogin