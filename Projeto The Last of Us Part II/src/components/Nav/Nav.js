import { Link } from "react-scroll";
import styles from "./Nav.module.scss";

const Nav = ({ toggle }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li onClick={toggle}>
          <Link to="about" spy={true} smooth={true} duration={800}>
            Sinopse
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="features" spy={true} smooth={true} duration={800}>
            Novidades
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="videos" spy={true} smooth={true} duration={800}>
            Vídeos
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="accolades" spy={true} smooth={true} duration={800}>
            Premiações
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="gallery" spy={true} smooth={true} duration={800}>
            Galeria
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
