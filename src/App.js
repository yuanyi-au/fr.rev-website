import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Republic from './components/pages/Republic';
import Empire from './components/pages/Empire';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/republic' component={Republic} />
          <Route path='/empire' component={Empire} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
