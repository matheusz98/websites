import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
