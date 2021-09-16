import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { socials, footerData } from "./FooterData";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footer_newsletter}>
          <h4 className={styles.footer_newsletter_headline}>
            Join the Tropic newsletter to receive groundbreaking travel rewards!
          </h4>
          <span>Feel free to subscribe anytime!</span>
          <div className={styles.footer_newsletter_form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
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
        <div className={styles.footer_base}>
          <Logo />
          <span className={styles.footer_base_year}>
            Tropical &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
          <ul className={styles.footer_base_socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
