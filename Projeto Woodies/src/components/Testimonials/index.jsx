import ImgOne from "../../assets/images/testimony-1.png";
import ImgTwo from "../../assets/images/testimony-2.png";
import PersonImg from "../../assets/images/testimonial.png";
import Stars from "../../assets/svg/stars.svg";
import ArrowLeftImg from "../../assets/svg/arrow-left.svg";
import ArrowRightImg from "../../assets/svg/arrow-right.svg";

import {
  TestimonialsSection,
  TestimonialsContainer,
  TestimonialsContent,
  TestimonialsColumn,
  TestimonialsImages,
  TestimonialsImg,
  TestimonialsCard,
  TestimonialsRating,
  TestimonialsStars,
  TestimonialsDescription,
  TestimonialsDetails,
  TestimonialsPerson,
  TestimonialsPersonDetails,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimony">
      <TestimonialsContainer>
        <TestimonialsContent>
          <TestimonialsColumn>
            <TestimonialsImages>
              <TestimonialsImg src={ImgOne} alt="Image One" />
              <TestimonialsImg src={ImgTwo} alt="Image Two" />
            </TestimonialsImages>
          </TestimonialsColumn>
          <TestimonialsColumn>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <TestimonialsCard>
                  <TestimonialsRating>
                    <TestimonialsStars src={Stars} alt="Star rating" />
                  </TestimonialsRating>
                  <TestimonialsDescription>
                    My experience with WOODIES is a complete success, from
                    custom furniture, range of product, modern design,
                    purchasing experience, the delivery and newsletter.
                    Literally everything is great. Thank you!
                  </TestimonialsDescription>
                  <TestimonialsDetails>
                    <TestimonialsPerson src={PersonImg} alt="Sandra Dewi" />
                    <TestimonialsPersonDetails>
                      Sandra Dewi
                      <br /> Jakarta Selatan
                    </TestimonialsPersonDetails>
                  </TestimonialsDetails>
                </TestimonialsCard>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <TestimonialsCard>
                  <TestimonialsRating>
                    <TestimonialsStars src={Stars} alt="Star rating" />
                  </TestimonialsRating>
                  <TestimonialsDescription>
                    My experience with WOODIES is a complete success, from
                    custom furniture, range of product, modern design,
                    purchasing experience, the delivery and newsletter.
                    Literally everything is great. Thank you!
                  </TestimonialsDescription>
                  <TestimonialsDetails>
                    <TestimonialsPerson src={PersonImg} alt="Sandra Dewi" />
                    <TestimonialsPersonDetails>
                      Sandra Dewi
                      <br /> Jakarta Selatan
                    </TestimonialsPersonDetails>
                  </TestimonialsDetails>
                </TestimonialsCard>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <TestimonialsCard>
                  <TestimonialsRating>
                    <TestimonialsStars src={Stars} alt="Star rating" />
                  </TestimonialsRating>
                  <TestimonialsDescription>
                    My experience with WOODIES is a complete success, from
                    custom furniture, range of product, modern design,
                    purchasing experience, the delivery and newsletter.
                    Literally everything is great. Thank you!
                  </TestimonialsDescription>
                  <TestimonialsDetails>
                    <TestimonialsPerson src={PersonImg} alt="Sandra Dewi" />
                    <TestimonialsPersonDetails>
                      Sandra Dewi
                      <br /> Jakarta Selatan
                    </TestimonialsPersonDetails>
                  </TestimonialsDetails>
                </TestimonialsCard>
              </SwiperSlide>
            </Swiper>
          </TestimonialsColumn>
        </TestimonialsContent>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
