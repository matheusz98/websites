import { navbarLinks } from "../../data/navbarData";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeHeaderShadow = () => {
    if (window.scrollY >= 72) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderShadow);
  }, []);

  return (
    <header className={`${scrollHeader ? `${styles.scroll}` : ""}`}>
      <nav className="container">
        <a href="#home" className={styles.logo}>
          beauty<span>salon</span>.
        </a>
        <div className={`${styles.menu} ${isOpen ? `${styles.open}` : ""} `}>
          <ul className="grid">
            {Object.entries(navbarLinks).map(([key, value]) => (
              <li key={key}>
                <a href={value.section} className="title">
                  {value.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={toggle} className={styles.toggle}>
          {isOpen ? (
            <FiX
              className={`${styles.iconClose} ${
                isOpen ? `${styles.openMenu}` : ""
              }  `}
            />
          ) : (
            <FiMenu className={styles.iconOpen} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
