import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
