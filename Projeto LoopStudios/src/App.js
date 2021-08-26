import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import Interactive from "./components/Interactive/Interactive";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";
import CreationsDesktop from "./components/Creations/CreationsDesktop";
import "./Styles/App/App.css";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </>
  );
}

export default App;
