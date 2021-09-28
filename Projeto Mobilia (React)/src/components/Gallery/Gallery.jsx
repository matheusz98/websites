import {
  GallerySection,
  GalleryTitle,
  GalleryContainer,
  GalleryContent,
} from "./GalleryStyle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "./Gallery.css";

import SwiperCore, { Pagination, Navigation, Autoplay, Keyboard } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay, Keyboard]);

const Gallery = ({ id, paragraphOne, img1, img2, img3, alt1, alt2, alt3 }) => {
  return (
    <>
      <GallerySection id={id}>
        <GalleryContainer>
          <GalleryTitle>
            <h2>
              Nossos <span>trabalhos</span>
            </h2>
            <p>{paragraphOne}</p>
          </GalleryTitle>
          <GalleryContent>
            <Swiper
              navigation={true}
              autoplay={{ delay: 5000 }}
              keyboard={true}
              className="mySwiper swiper"
            >
              <SwiperSlide className="swiper-slide">
                <img src={img1} alt={alt1} />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img2} alt={alt2} />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img3} alt={alt3} />
              </SwiperSlide>
            </Swiper>
          </GalleryContent>
        </GalleryContainer>
      </GallerySection>
    </>
  );
};

export default Gallery;
