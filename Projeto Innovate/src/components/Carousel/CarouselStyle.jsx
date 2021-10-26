import styled from "styled-components";
import Slider from "react-slick";

export const CarouselSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 70px;
  background: #ffffff;
`;

export const CarouselRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CarouselHeading = styled.h2`
  width: auto;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  color: #0c0c0c;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const ButtonContainer = styled(CarouselRow)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const SliderContent = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 2rem;
    gap: 2rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 430px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #7339b9;

    h2,
    span {
      color: #ffffff;
    }

    button {
      background: #ffffff;
      color: #7339b9;
      font-weight: 700;
    }
  }

  @media (max-width: 480px) {
    border: 1px solid #3b3b3b;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px 10px 0 0;
`;

export const CarouselText = styled.span`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  font-weight: 700;
`;

export const CarouselDescription = styled.span`
  font-size: 1rem;
  margin: 1rem;
  color: #1b1b1b;
  text-align: center;
`;

export const CarouselButton = styled.button`
  width: 100%;
  background: #7339b9;
  font-size: 1.2rem;
  color: #ffffff;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: 300;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  border: 2px solid #7339b9;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #aa63ff;
    letter-spacing: 1px;
  }
`;
