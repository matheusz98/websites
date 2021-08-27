import { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiSafe2Fill } from "react-icons/ri";
import Button from "../Button/Button";
import "../../Styles/Navbar/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
              <RiSafe2Fill className="navbar-logo-icon" />
              Data Vault
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "navbar-menu active" : "navbar-menu"}>
              <li className="navbar-item">
                <Link to="/" className="navbar-links" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/services"
                  className="navbar-links"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/products"
                  className="navbar-links"
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </li>
              <li className="navbar-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn-outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link" onClick={closeMenu}>
                    <Button buttonStyle="btn-outline" buttonSize="btn-mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
