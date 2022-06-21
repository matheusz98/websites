import styles from "./divider.module.css";

interface DividerProps {
  type: number;
}

const Divider = ({ type }: DividerProps) => {
  return <div className={styles[`divider-${type}`]}></div>;
};

export default Divider;
