import { BsWhatsapp } from "react-icons/bs";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import styles from "./contact.module.css";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className={`container ${styles.contact}`}>
        <div
          className={styles.text}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <h2>Entre em contato com a gente</h2>
          <p>
            Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
            ouvir suas críticas e sugestões.
          </p>

          <ButtonWithIcon
            reference="https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário"
            content="Entrar em contato"
          >
            <BsWhatsapp />
          </ButtonWithIcon>
        </div>

        <div className={styles.links}>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
