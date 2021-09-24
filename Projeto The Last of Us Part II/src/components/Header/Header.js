import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  /* Open Menu / Close Menu */
  const [openMenu, setOpenMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const handleToggle = () => {
    setOpenMenu((p) => !p);
  };

  const toggle = !openMenu ? (
    <RiMenu3Fill onClick={handleToggle} className={styles.icon} />
  ) : (
    <AiOutlineClose onClick={handleToggle} className={styles.icon_close} />
  );
  /* End Open Menu / Close Menu */

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeHeader);

  return (
    <header className={header ? styles.header : styles.header_active}>
      <Logo to="/" />
      <div className={styles.header_menu}>
        <div className={styles.header_menu_toggle}>{toggle}</div>
        <aside className={`${styles.menu} ${openMenu && styles.show}`}>
          <Nav toggle={handleToggle} />
        </aside>
      </div>
    </header>
  );
};

export default Header;
