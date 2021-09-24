import { ReactComponent as PSLogo } from "../../images/playstation_logo.svg";
import { ReactComponent as SIELogo } from "../../images/sie.svg";
import { footerData, socials } from "../../data/FooterData";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          {footerData.map(({ id, headline, links }) => (
            <div className={styles.footer_content_col} key={id}>
              <div className={styles.footer_content_col_headline}>
                {headline}
              </div>
              <ul className={styles.footer_content_col_links}>
                {links.map((link, index) => (
                  <li key={index + 1}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footer_newsletter}>
          <h4 className={styles.footer_newsletter_headline}>
            Assine nossa newsletter!
          </h4>
          <span>Fique por dentro de todas novidades!</span>
          <div className={styles.footer_newsletter_form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Endereço de e-mail"
            />
            <Button>Inscrever</Button>
          </div>
        </div>
        <div className={styles.footer_base}>
          <SIELogo className={styles.logo} />
          <PSLogo className={styles.logo} />
          <ul className={styles.footer_base_socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <span className={styles.footer_copyright}>
          The Last of Us Part II &copy; {new Date().getFullYear()} Todos os
          direitos reservados a Sony Interactive Entertainment & Naughty Dog.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
