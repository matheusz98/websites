import styles from "./button.module.css"

interface ButtonProps {
    content: string;
    reference: string;
}

const Button = ({ content, reference }: ButtonProps) => {
  return (
    <a className={styles.button} href={reference}>
        {content}
    </a>
  )
}

export default Button