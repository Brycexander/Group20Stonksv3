import React,{useState, useEffect} from 'react';
import './App.css';
import Register from "./components/Register.js";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './components/Home';
import CardPage from './pages/CardPage';
import UserPage from './components/UserPage';
import Landing from './components/Landing';

function App() 
{
  return (
    <Router >
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
      <Route path="/LoginPage" exact>
          <LoginPage />
      </Route>
      <Route path="/cards" exact>
        <CardPage />
      </Route>
      <Route path="/Search" exact>
        <UserPage />
      </Route>
      <Route path="/Landing" exact>
        <Landing />
      </Route>
      <Redirect to="/" />
    </Switch>  
  </Router>
  );
}

export default App;