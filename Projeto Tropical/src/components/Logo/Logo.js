import styles from "./Logo.module.scss";
import LogoImg from '../../images/tropical.png';

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={LogoImg} alt="Logo" />
      <span>Tropical</span>
    </a>
  );
};

export default Logo;
