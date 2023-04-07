import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Bebe<span>Seguro</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({isActive}) => (isActive ? styles.active : '')}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/guides" className={({isActive}) => (isActive ? styles.active : '')}>
            Guias
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" className={({isActive}) => (isActive ? styles.active : '')}>
            Comunidade
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar