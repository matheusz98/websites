import styles from "./Logo.module.scss";
import IMG from "../../images/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={IMG} alt={Logo} />
    </div>
  );
};

export default Logo;
