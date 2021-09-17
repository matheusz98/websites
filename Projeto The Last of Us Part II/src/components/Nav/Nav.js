import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = ({ toggle }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li onClick={toggle}>
          <Link to="about">Sinopse</Link>
        </li>
        <li onClick={toggle}>
          <Link to="features">Novidades</Link>
        </li>
        <li onClick={toggle}>
          <Link to="videos">Vídeos</Link>
        </li>
        <li onClick={toggle}>
          <Link to="accolades">Premiações</Link>
        </li>
        <li onClick={toggle}>
          <Link to="gallery">Galeria</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
