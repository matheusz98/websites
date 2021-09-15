import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? styles.menu_nav : styles.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/locations">Locations</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/learnmore">Learn More</Link>
        </li>
      </ul>
      <Button to="/booknow" onClick={menuToggle}>
        Book Now
      </Button>
    </nav>
  );
};

export default Nav;
