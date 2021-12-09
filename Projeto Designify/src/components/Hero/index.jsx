import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FiMail } from "react-icons/fi";
import HeroBG from "../../assets/images/hero-pattern-bg-lg.png";
import HeroPerson from "../../assets/images/hero-guy-1.png";
import ImageOne from "../../assets/images/image 1.png";
import ImageTwo from "../../assets/images/image 2.png";
import ImageThree from "../../assets/images/image 3.png";
import {
  HeroSection,
  HeroImage,
  CharacterContainer,
  ImageCharacter,
  HeroContent,
  Title,
  HeroText,
  ButtonContainer,
  ButtonWrapper,
  HeroButton,
} from "./style";
import Modal from "../Modal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, left: 0, right: 0 };

  const toggle = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };

  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };

  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {}, [inView]);

  return (
    <>
      <HeroSection id="hero">
        <HeroImage src={HeroBG} alt="Hero Background" className="pattern" />
        <HeroImage src={HeroPerson} alt="Person" className="guy" />
        <CharacterContainer>
          <ImageCharacter
            src={ImageOne}
            alt="Image One"
            className="one"
            dragConstraints={dragConstraints}
          />
          <ImageCharacter
            src={ImageTwo}
            alt="Image Two"
            className="two"
            dragConstraints={dragConstraints}
          />
          <ImageCharacter
            src={ImageThree}
            alt="Image Three"
            className="three"
            dragConstraints={dragConstraints}
            variants={variants}
            whileHover="hover"
            drag
          />
        </CharacterContainer>
        <HeroContent>
          <Title>We Are Designify</Title>
          <HeroText>
            A team of passionate designer and developers ready to provide unique
            and outstanding products for you!
          </HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton onClick={toggle} className={inView ? "" : "corner"}>
                {inView ? (
                  <>Chat with us! </>
                ) : (
                  <FiMail size="2.3rem" color="white" />
                )}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggle={toggle} />
    </>
  );
};

export default Hero;
