import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
};

export default App;
