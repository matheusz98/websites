import styled from "styled-components";
import { motion } from "framer-motion";
import HeroBg from "../../assets/images/hero-pattern-bg.png";

export const ContentSection = styled.section`
  padding: 100px 0;
  background: var(--white);

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  margin: 0 -15px -15px -15px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 10;
  margin-bottom: 16px;
  padding: 0 16px;

  @media (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  > img {
    width: 300px;
    margin-left: -3px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 64px;

    > h2,
    p {
      text-align: center;
    }
  }
`;

export const TopLine = styled(motion.div)`
  font-size: 1rem;
  color: var(--gray);
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1px;
  margin-bottom: 1.3rem;
`;

export const Heading = styled(motion.h2)`
  font-size: 2rem;
  color: #1c2237;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  color: ${({ inverse }) => (inverse ? "#a9b3c1" : "#1c2237")};
  margin-bottom: 34px;
  line-height: 24px;
`;

export const ContentButton = styled(motion.button)`
  height: 3rem;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fafeff"};
  padding: 16px 32px;
  font-size: 1rem;
  color: var(--white);
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 32px 4px var(--gray);
  }
`;

export const ImgWrapper = styled(motion.div)`
  max-height: 600px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};
  position: relative;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fafeff"};
  box-shadow: 0 0 32px 4px var(--lightgray);
  border-radius: 1rem;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: url(${HeroBg});
    background-size: 100% auto;
    object-fit: cover;
  }
`;

export const Img = styled(motion.img)`
  max-width: 100%;
  max-height: 700px;
  display: inline-block;
  vertical-align: middle;
  padding-right: 0;
  z-index: 1;
  object-fit: cover;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
