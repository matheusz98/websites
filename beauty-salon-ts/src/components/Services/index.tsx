import Cards from "../Cards";
import styles from "./services.module.css";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container grid">
        <div
          className={styles.title}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <h2>Serviços</h2>
          <p className={styles.subtitle}>
            Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>

        <Cards />
      </div>
    </section>
  );
};

export default Services;
