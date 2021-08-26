import "../../Styles/Footer/Footer.css";
import logo from "../../images/logo.svg";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer-logo">
            <img src={logo} alt="LoopStudios Logo" />
          </div>
          <ul className="footer-links">
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
        </div>

        <div>
          <ul className="footer-socials">
            <li>
              <GrFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>

          <div className="footer-copyright"><p>&copy; 2021 LoopStudios. All rights reserved.</p></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
