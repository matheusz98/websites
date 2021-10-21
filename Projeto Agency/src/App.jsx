import styled from "styled-components";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroductionShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Introduction />
      <IntroductionShape />
    </Container>
  );
};

export default App;
