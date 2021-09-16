import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import LocationsPage from "./pages/LocationsPage";
import BookNow from "./pages/BookNow";
import Pricing from "./pages/Pricing";
import LearnMore from "./pages/LearnMore";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/locations">
          <LocationsPage />
        </Route>
        <Route path="/booknow">
          <BookNow />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/learnmore">
          <LearnMore />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
