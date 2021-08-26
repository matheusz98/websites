import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import Interactive from "./components/Interactive/Interactive";
import Creations from "./components/Creations/Creations";
import "./Styles/App/App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
