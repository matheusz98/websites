import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  height: 640px;
  display: flex;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
  background-size: cover;
  background-attachment: fixed;
  z-index: 10;
  padding: 160px 0;
  color: var(--white);

  @media (min-width: 1200px) {
    height: 820px;
  }

  @media (min-width: 990px) {
    height: 710px;
  }

  @media (min-width: 768px) {
    height: 590px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  object-fit: cover;
  z-index: 10;

  &.pattern {
    max-height: 100%;
    height: 100%;
    top: 0;
  }

  &.guy {
    bottom: 0;
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;

export const ImageCharacter = styled(motion.img)`
  width: 100%;
  width: clamp(90px, 15vw, 200px);
  left: auto;
  z-index: 10;

  &.one {
    top: 4rem;
    right: 200px;
    width: clamp(170px, 15vw, 230px);

    @media screen and (max-width: 768px) {
      right: 50%;
      transform: translateX(50%);
    }
  }

  &.two {
    bottom: 4rem;
    right: 200px;
    z-index: 100;
    @media screen and (max-width: 768px) {
      right: 50px;
    }
  }

  &.three {
    top: 3rem;
    left: 150px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  position: relative;
  padding: 0 16px;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: clamp(2.8rem, 6vw, 6.7rem);
  color: var(--white);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const HeroText = styled.div`
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  text-align: center;
`;

export const ButtonContainer = styled.div`
  height: 170px;
  display: flex;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeroButton = styled(motion.button)`
  width: 250px;
  position: absolute;
  margin: 0 auto;
  padding: 15px 20px;
  bottom: calc(100vh - 100px);
  right: 50%;
  transform: translate(50%);
  background: var(--white);
  color: var(--purple);
  font-size: 1rem;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &.corner {
    width: 64px;
    height: 64px;
    position: fixed;
    bottom: 3rem;
    background: var(--red);
    padding: 10px;
    border-radius: 50%;
  }

  &:hover {
    box-shadow: 0 0 10px 10px var(--purple);
  }
`;
