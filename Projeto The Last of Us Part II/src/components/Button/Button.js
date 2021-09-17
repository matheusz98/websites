import { useHistory } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ outline, big, large_font, children, onClick, to }) => {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        onClick && onClick();
        history.push(to);
      }}
      className={`${styles.button} ${outline ? styles.outline : ""} ${
        big ? styles.big : ""
      } ${large_font ? styles.large_font : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
