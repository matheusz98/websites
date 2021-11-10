import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import {
  ContentSection,
  ContentContainer,
  ContentRow,
  ContentColumn,
  ContentText,
  ContentTitle,
  ContentBox,
  ContentSubtitle,
  ContentDescription,
  ContentImg,
  ContentSecondColumn,
  ContentImgWrapper,
} from "./style";

const Content = ({
  id,
  primary,
  title,
  subTitle,
  description,
  buttonLabel,
  img,
  alt,
  start,
  secondImg,
  linkTo,
  inverse,
  reverse,
  bigImage,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ContentSection id={id} inverse={inverse}>
      <ContentContainer>
        <ContentRow reverse={reverse}>
          <ContentColumn bigImage={bigImage} data-aos="fade-up">
            <ContentText>
              <ContentTitle>
                {title.text && (
                  <ContentBox>
                    <ContentBox>{title.subText}</ContentBox>
                    {title.text}
                  </ContentBox>
                )}
              </ContentTitle>
              <ContentSubtitle inverse={inverse}>{subTitle}</ContentSubtitle>
              <ContentDescription inverse={inverse}>
                {description}
              </ContentDescription>

              {secondImg ? (
                <ContentImg src={secondImg} alt={alt} />
              ) : (
                <Link to={linkTo}>
                  <Button primary={primary} fontBig big>
                    {buttonLabel}
                  </Button>
                </Link>
              )}
            </ContentText>
          </ContentColumn>
          <ContentSecondColumn bigImage={bigImage} data-aos="fade-down">
            <ContentImgWrapper start={start}>
              <ContentImg src={img} alt={alt} />
            </ContentImgWrapper>
          </ContentSecondColumn>
        </ContentRow>
      </ContentContainer>
    </ContentSection>
  );
};

export default Content;
