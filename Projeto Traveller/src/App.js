import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
   <Router>
     <Nav />
     <Switch>
       <Route path="/" exact />
     </Switch>
   </Router>
   </> 
  );
}

export default App;
