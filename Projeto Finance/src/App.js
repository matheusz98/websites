import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Signin from "./pages/Signin/Signin";
import ForgotPass from "./pages/ForgotPass/ForgotPass";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/forgotpass" component={ForgotPass} exact />
      </Switch>
    </Router>
  );
}

export default App;
