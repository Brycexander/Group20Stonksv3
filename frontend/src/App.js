import React,{useState, useEffect} from 'react';
import './App.css';
import Register from "./components/Register.js";
import { BrowserRouter as Router, Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './components/Home';
import CardPage from './pages/CardPage';
import UserPage from './components/UserPage';
import Tab from './pages/Tab';
import Deposit from './components/Deposits';
import Chart from './components/Chart';
import Reset from './components/Reset'
import "react-bootstrap/dist/react-bootstrap.min.js"
import Settings from './components/Settings'
import Token from './components/Token'

function App() 
{
  return (
    <HashRouter >
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/Register" exact>
        <Register />
      </Route>
      <Route path="/Home" exact>
        <Home />
      </Route>
      <Route path="/cards" exact>
        <CardPage />
      </Route>
      <Route path="/Search" exact>
        <Tab />
      </Route>
      <Route path="/Landing" exact>
        <Deposit />
      </Route>
      <Route path="/Chart" exact>
        <Chart />
      </Route>
      <Route path="/Reset" exact>
        <Reset />
      </Route>
      <Route path="/Settings" exact>
        <Settings />
      </Route>
      <Route path="/Token" exact>
        <Token />
      </Route>
      <Redirect to="/" />
    </Switch>  
  </HashRouter>
  );
}

export default App;