import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" component={Home} exact />
    </Router>
  );
}

export default App;
