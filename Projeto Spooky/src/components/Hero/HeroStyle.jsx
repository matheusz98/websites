import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #ffffff;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 360px;
  margin-bottom: 2rem;
`;

export const ImgDescriptions = styled.div`
  text-align: left;
  color: #3f3d3d;
`;

export const ImgDescription = styled.h4``;

export const ImgDescriptionTwo = styled.h5``;

export const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.625rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.625rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

export const HeroButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background: #e96d26;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
      background: #7923db;
  }
`;
