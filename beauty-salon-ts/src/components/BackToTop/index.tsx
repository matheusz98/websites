import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styles from "./back-to-top.module.css";

const BackToTop = () => {
  const [pageOffset, setPageOffset] = useState(false);

  const handleOffset = () => {
    if (window.scrollY >= 560) {
      setPageOffset(true);
    } else {
      setPageOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
  });

  return (
    <a
      className={`${styles["back-to-top"]} ${pageOffset ? `styles.show` : ""}`}
      href="#home"
    >
      <FiArrowUp />
    </a>
  );
};

export default BackToTop;
