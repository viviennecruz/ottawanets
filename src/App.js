import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './pages/landing';
import Leagues from './pages/leagues';
import House from './pages/house';
import Rep from './pages/rep';
import Training from './pages/training';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={ Landing } />
        <Route exact path ="/leagues" component={ Leagues } />
        <Route exact path ="/house" component={ House } />
        <Route exact path ="/rep" component={ Rep } />
        <Route exact path="/training" component={Training} />
      </Switch>
    </Router>
  );
}

export default App;
