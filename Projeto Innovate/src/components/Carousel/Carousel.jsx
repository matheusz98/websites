import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/CarouselData";
import {
  CarouselSection,
  CarouselRow,
  CarouselHeading,
  ButtonContainer,
  SliderContent,
  ImageWrapper,
  CarouselImage,
  CarouselText,
  CarouselDescription,
  CarouselButton,
} from "./CarouselStyle";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <CarouselSection>
      <CarouselRow>
        <CarouselHeading>About Us</CarouselHeading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#aa63ff" }}>
            <BsFillArrowLeftCircleFill onClick={sliderRef?.slickPrev} />
            <BsFillArrowRightCircleFill onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </CarouselRow>

      <SliderContent {...sliderSettings} ref={setSliderRef}>
        {data.map((item, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={item.image} />
            <CarouselText>{item.title}</CarouselText>
            <CarouselDescription>{item.description}</CarouselDescription>
            <CarouselButton>Learn More</CarouselButton>
          </ImageWrapper>
        ))}
      </SliderContent>
    </CarouselSection>
  );
};

export default Carousel;
