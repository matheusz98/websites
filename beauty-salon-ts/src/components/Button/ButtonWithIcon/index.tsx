import { ReactNode } from "react";
import styles from "./button-with-icon.module.css";

interface ButtonWithIconProps {
  reference: string;
  content: string;
  children?: ReactNode;
}

const ButtonWithIcon = ({
  reference,
  content,
  children,
}: ButtonWithIconProps) => {
  return (
    <a className={styles.button} href={reference}>
      <i>{children}</i>
      {content}
    </a>
  );
};

export default ButtonWithIcon;
