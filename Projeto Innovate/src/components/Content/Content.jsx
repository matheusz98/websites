import {
  ContentSection,
  ContentContainer,
  ContentRow,
  ContentColumn,
  ContentWrapper,
  TopLine,
  Heading,
  Subtitle,
  ContentButton,
  ImgWrapper,
  Img,
} from "./ContentStyle";

const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) => {
  return (
    <ContentSection inverse={inverse}>
      <ContentContainer>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <ContentWrapper>
              <TopLine inverse={inverse}>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <ContentButton inverse={inverse} primary={primary}>
                {buttonLabel}
              </ContentButton>
            </ContentWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </ContentContainer>
    </ContentSection>
  );
};

export default Content;
