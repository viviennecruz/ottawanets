import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, Suspense } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './pages/landing';
import Leagues from './pages/leagues';
import House from './pages/house';
import Rep from './pages/rep';
import Training from './pages/training';

function App() {
  const { t, i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    if (!initialized) {
      changeLanguage(localStorage.getItem("language") || "en");
      setInitialized(true);
    }
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/leagues" component={Leagues} />
        <Route exact path="/house" component={House} />
        <Route exact path="/rep" component={Rep} />
        <Route exact path="/training" component={Training} />
      </Switch>
    </Router>
  );
}

export default App;
