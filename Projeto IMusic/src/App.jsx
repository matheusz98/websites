import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
