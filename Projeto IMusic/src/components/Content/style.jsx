import styled from "styled-components";

export const ContentSection = styled.section`
  padding: 160px 0;
  background: ${({ inverse }) => (inverse ? "#101522" : "#ffffff")};
  color: #ffffff;
  width: auto;

  @media (min-width: 768px) {
    padding: 70px 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1300px;
  width: 100%;
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
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const ContentColumn = styled.div`
  max-width: ${({ bigImage }) => (bigImage ? "40%" : "50%")};
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1rem;
  padding: 0 15px;

  @media (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentText = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 65px;

    > h2,
    p {
      text-align: center;
    }

    > img {
      width: 300px;
      margin-left: -3px;
    }
  }
`;

export const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
`;

export const ContentBox = styled.span`
  background: #fefefe;
  padding: 10px;
  border-radius: 50px;
  color: #0c0c0c;

  > span {
    background: var(--pink);
    padding: 5px 15px;
    border-radius: 50px;
    color: var(--white);
    margin-right: 0.6rem;
  }
`;

export const ContentSubtitle = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  color: ${({ inverse }) => (inverse ? "#f7f8fa" : "#1c2237")};
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContentDescription = styled.p`
  max-width: 440px;
  font-size: 18px;
  color: ${({ inverse }) => (inverse ? "#f7f8fa" : "#1c2237")};
  line-height: 24px;
  margin-bottom: 34px;
`;

export const ContentImg = styled.img`
  max-width: 100%;
  max-height: 700px;
  padding-right: 0;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
`;

export const ContentSecondColumn = styled.div`
  max-width: ${({ bigImage }) => (bigImage ? "40%" : "50%")};
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1rem;
  padding: 0 15px;

  @media (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentImgWrapper = styled.div`
  max-height: 600px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    display: none;
  }
`;
