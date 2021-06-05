import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import './App.css';

function App() {
  return (
   <>
   <Router>
     <Nav />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/services" component={Services} />
       <Route path="/products" component={Products} />
       <Route path="/login" component={Login} />
     </Switch>
   </Router>
   </> 
  );
}

export default App;
