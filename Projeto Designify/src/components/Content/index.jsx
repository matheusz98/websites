import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Tilt from "react-tilt";
import {
  ContentSection,
  ContentContainer,
  ContentRow,
  ContentColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ContentButton,
  ImgWrapper,
  Img,
} from "./style";

const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  start,
  bottomImg,
  backgroundColor,
  linkTo,
  inverse,
  reverse,
  bigImage,
  id,
}) => {
  const initial = { opacity: 0, y: 30 };
  const transition = { delay: 0.3, duration: 0.6 };
  const animation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <ContentSection ref={ref}>
      <ContentContainer>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                animate={animation}
                inverse={inverse}
                transition={transition}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                primary={primary}
                backgroundColor={backgroundColor}
              >
                {buttonLabel}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={transition}
            animate={animation}
            bigImage={bigImage}
          >
            <Tilt
              className="Tilt"
              options={{ max: 20, scale: 1.01, speed: 200 }}
            >
              <ImgWrapper backgroundColor={backgroundColor}>
                <Img
                  src={img}
                  alt={alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </ImgWrapper>
            </Tilt>
          </ContentColumn>
        </ContentRow>
      </ContentContainer>
    </ContentSection>
  );
};

export default Content;
