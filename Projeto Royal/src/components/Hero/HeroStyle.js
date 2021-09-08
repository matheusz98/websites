import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const HeroSection = styled.section`
  max-height: 1100px;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const HeroSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  &::before {
    content: "";
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    position: absolute;
    z-index: 2;
    overflow: hidden;
    opacity: 0.5;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  transition: 0.3s;
`;

export const HeroContent = styled.div`
  width: calc(100% - 100px);
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  color: #ffffff;

  h2 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    margin-bottom: 1.2rem;
  }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const SliderButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 10;
`;

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  background: #0c0c0c;
  color: #ffffff;
  margin-right: 1rem;
  padding: 0.625rem;
  border-radius: 50px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #15ab97;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons};
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons};
`;
