import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
