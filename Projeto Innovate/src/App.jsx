import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pricing" component={Pricing} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
