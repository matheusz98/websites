import "../../Styles/Header/Header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="LoopStudios logo" />
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </nav>

        <div className="menu-btn">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
