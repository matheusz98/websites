import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroData } from "../../data/heroData";
import "swiper/swiper-bundle.css";
import "swiper";
import "./swiper.css";
import { Button } from "../Button/Button";
import {
  HeroContainer,
  HeroContent,
  ContentColumn,
  HeroImgWrapper,
  HeroTextWrapper,
  Img,
  ImgDescriptions,
  ImgDescription,
  ImgDescriptionTwo,
  Heading,
  Title,
  Description,
} from "./HeroStyle";

import SwiperCore, { Navigation, Autoplay, Keyboard } from "swiper";

SwiperCore.use([Navigation, Autoplay, Keyboard]);

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <HeroContainer id="home">
      <Swiper
        navigation={true}
        autoplay={{ delay: 5000 }}
        keyboard={true}
        className="mySwiper swiper"
      >
        {heroData.map((item, index) => (
          <SwiperSlide>
            <HeroContent key={index} data-aos="fade-up">
              <ContentColumn>
                <HeroImgWrapper>
                  <Img src={item.image} alt={item.alt} />
                  <ImgDescriptions>
                    <ImgDescription>{item.imageDescription}</ImgDescription>
                    <ImgDescriptionTwo>
                      {item.imageDescriptionTwo}
                    </ImgDescriptionTwo>
                  </ImgDescriptions>
                </HeroImgWrapper>
              </ContentColumn>
              <ContentColumn>
                <HeroTextWrapper>
                  <Heading>{item.heading}</Heading>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Button>Book Now</Button>
                </HeroTextWrapper>
              </ContentColumn>
            </HeroContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroContainer>
  );
};

export default Hero;
