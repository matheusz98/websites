import styles from "./footer.module.css";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container grid">
        <div
          className={styles.brand}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <a href="/">
            <a className={styles.logo} href="/">
              beauty<span>salon</span>.
            </a>
          </a>

          <p>&copy; {new Date().getFullYear()} Beautysalon.</p>
          <p>Todos os direitos reservados.</p>
        </div>

        <div
          className={styles.social}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
