import styles from "./Footer.module.css";

// hooks
import { Link } from "react-router-dom";

// images
import Logo from './images/BebeSeguro.png';

// react icons
import { 
  BsFacebook,
  BsTwitter,
  BsInstagram
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.brand}>
          <img src={Logo} alt="Logo da BebeSeguro" />
          <p>
            &copy; 2023 BebeSeguro, Inc
          </p>
        </div>
        <div className={styles.socialMedias}>
          <a href="">
            <BsTwitter className={styles.apps} />
          </a>
          <a href="">
            <BsInstagram className={styles.apps} />
          </a>
          <a href="">
            <BsFacebook className={styles.apps} />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer