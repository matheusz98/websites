import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} className={styles.icon}/>
  ) : (
    <CgClose onClick={handleMenuToggle} className={styles.icon}/>
  );

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <div className={styles.header_menu}>
        <div className={styles.header_menu_toggle}>{menuToggle}</div>
        <aside className={`${styles.menu} ${menuOpen && styles.show}`}>
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  );
};

export default Header;
