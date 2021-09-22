// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, Keyboard } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, Keyboard]);
const Videos = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        keyboard={true}
        className="mySwiper swiper"
        id="videos"
      >
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/psit-4r_hys"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/eOiUtRF8k28"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/W2Wnvvj33Wo"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/btmN-bWwv0A"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/II5UsqP2JAk"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/vhII1qlcZ4E"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/2NdGeJNB5eY"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/DTxBAuXUHMU"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/saE6O93x3MA"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            src="https://www.youtube.com/embed/mRj3B3GY9KM"
            className="iframe"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Videos;
