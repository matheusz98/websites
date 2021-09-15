import styles from './Button.module.scss';
import { useHistory } from "react-router-dom";

const Button = ({ outline, children, onClick, to }) => {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        onClick && onClick();
        history.push(to);
      }}
      className={`${styles.button} ${outline ? styles.outline : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
