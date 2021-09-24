import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Accolades.module.scss";

const Accolades = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className={styles.accolades} id="accolades">
      <div data-aos="fade" className={styles.accolades_content}></div>
    </div>
  );
};

export default Accolades;
