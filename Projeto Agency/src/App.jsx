import styled, { css } from "styled-components";
import Feature from "./components/Feature/Feature";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroductionShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Introduction />
        <IntroductionShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
    </>
  );
};

export default App;
