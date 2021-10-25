import styled from "styled-components";

export const ContentSection = styled.section`
  background: ${({ inverse }) => (inverse ? "#ffffff" : "#2b0d50")};
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 10;
  padding: 2rem 1.25rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 540px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    h2,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 300px;
  }
`;

export const TopLine = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ inverse }) => (inverse ? "#0c0c0c" : "#ffffff")};
  line-height: 15px;
  letter-spacing: 1px;
  margin-bottom: 1.25rem;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  color: ${({ inverse }) => (inverse ? "#7835ca" : "#ffffff")};
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2rem;
  line-height: 1.25rem;
  color: ${({ inverse }) => (inverse ? "#585858" : "#ffffff")};
`;

export const ContentButton = styled.button`
  height: 3rem;
  background: transparent;
  font-size: 1rem;
  color: ${({ inverse }) => (inverse ? "#0c0c0c" : "#ffffff")};
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid ${({ inverse }) => (inverse ? "#aa63ff" : "#ffffff")};
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    width: 100%;
    height: 0%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ inverse }) => (inverse ? "#aa63ff" : "#ffffff")};
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: 0.3s ease-in-out;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: ${({ inverse }) => (inverse ? "#ffffff" : "#0c0c0c")};
  }
`;

export const ImgWrapper = styled.div`
  max-height: 700px;
  justify-content: center;
  position: relative;
  display: flex;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 700px;
  padding-right: 0;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  z-index: 1;
`;
