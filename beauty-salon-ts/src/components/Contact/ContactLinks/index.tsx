import { BiPhone } from "react-icons/bi";
import { FiMapPin, FiMail } from "react-icons/fi";
import styles from "./contact-links.module.css";

const contactItems = {
  Phone: {
    icon: <BiPhone />,
    content: "11 99845-6754",
  },
  Location: {
    icon: <FiMapPin />,
    content: "R. Amauri Souza, 346",
  },
  Mail: {
    icon: <FiMail />,
    content: "contato@beautysalon.com",
  },
};

const ContactLinks = () => {
  return (
    <ul className={styles.link} data-aos="fade-down" data-aos-duration="800">
      {Object.entries(contactItems).map(([key, link]) => (
        <li key={key}>
          <li>{link.icon}</li>
          {link.content}
        </li>
      ))}
    </ul>
  );
};

export default ContactLinks;
