import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 1.875rem;
  z-index: 1;
  background: #0c0c0c;

  :before {
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  background: #232a34;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 3;
  padding: 0.5rem 1.5rem;
`;

export const HeroH1 = styled.h1`
  color: #ffffff;
  font-size: 3.125rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

export const HeroP = styled.p`
  max-width: 600px;
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
`;

export const ArrowFoward = styled(MdArrowForward)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;
