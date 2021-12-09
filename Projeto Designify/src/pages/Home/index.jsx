import Clients from "../../components/Clients";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import styled from "styled-components";
import Content from "../../components/Content";
import {
  contentOne,
  contentTwo,
  contentThree,
  contentFour,
} from "../../data/contentData";

const Title = styled.h2`
  font-size: 3rem;
  color: #1c2237;
  text-align: center;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.4rem;
`;

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Title id="projects">Our Projects</Title>
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Content {...contentThree} />
      <Content {...contentFour} />
    </>
  );
};

export default Home;
