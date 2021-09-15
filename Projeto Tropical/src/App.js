import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
