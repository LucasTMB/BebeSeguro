import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.error}>
          <h1>
            Oh Ohh!
          </h1>
          <p>
            Não conseguimos encontrar a página que você procura. Vamos voltar?
          </p>
          <div className={styles.btn}>
            <NavLink
              to="/"
              className={styles.btn_back}
            >
              Voltar
            </NavLink>
          </div>
        </div>
        <img src="https://404-page-using-html-css.netlify.app/Images/404.png" alt="404 image" className={styles.error_img} />
      </div>
    </div>
  )
}

export default NotFound