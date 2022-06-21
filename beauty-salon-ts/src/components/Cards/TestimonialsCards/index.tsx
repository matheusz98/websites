import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styles from "./testimonials-cards.module.css";
import { testimonialItems } from "../../../data/testimonialsData";

SwiperCore.use([Pagination]);

const TestimonialsCards = () => {
  return (
    <Swiper
      className={styles.testimonial}
      slidesPerView={1}
      spaceBetween={32}
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      loop={true}
      tag={"div"}
      wrapperTag={"div"}
      breakpoints={{
        767: {
          slidesPerView: 2,
          setWrapperSize: true,
        },
      }}
    >
      {Object.entries(testimonialItems).map(([key, testimonial]) => (
        <SwiperSlide
          key={key}
          style={{ height: "auto", padding: "4rem 1rem", width: "100%" }}
        >
          <blockquote>
            <p>
              <span>&ldquo;</span>
              {testimonial.comment}
            </p>
            <cite>
              <img src={testimonial.image.src} alt={testimonial.image.alt} />
              {testimonial.name}
            </cite>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsCards;
