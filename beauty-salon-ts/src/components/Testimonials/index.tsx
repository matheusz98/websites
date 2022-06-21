import TestimonialsCards from "../Cards/TestimonialsCards";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div
          className={styles.title}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <h2>Depoimentos de quem já passou por aqui</h2>
        </div>

        <TestimonialsCards />
      </div>
    </section>
  );
};

export default Testimonials;
