import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
