import React,{useState, useEffect} from 'react';
import './App.css';
import Register from "./components/Register.js";
import { BrowserRouter as Router, Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NewLogin from './components/NewLogin';
import NewRegister from './components/NewRegister';
import Grid from '@material-ui/core/Grid';
import Home from './components/Home';
import CardPage from './pages/CardPage';
import UserPage from './components/UserPage';
import Tab from './pages/Tab';
import Verify from './pages/Verify';
import Deposit from './components/Deposits';
import Chart from './components/Chart';
import Reset from './components/Reset';
import Stars from './components/Stars';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Settings from './components/Settings';
import Token from './components/Token';
import Leaderboard from './components/Leaderboard'
import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import { lighten, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import background from './pages/space.jpg';
import { Button, Nav, Container, Row, Col, Form, Modal, Alert} from 'react-bootstrap';
function App() 
{
  const section = {
    height: "100%",
    margin: 0,
    backgroundColor: "#fff"
  };

  const section1 = {
    height: "100%",
    backgroundColor: "#fff"
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: blue,
      secondary: {
        main: '#67EE5E',
      },
    },
  });
  return (
  <div>
    <ThemeProvider theme={darkTheme}>
    <HashRouter >
    <Switch>
      <Route path="/" exact>
        
        <div>
          <div className="scale-in-center" id="welcome">
          
          <NewLogin/>
          </div>
          <Stars/>
        </div>
      
          
      </Route>
      <Route path="/Verified" exact>
        <Verify />
      </Route>
      <Route path="/Register" exact>
        <NewRegister />
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
      <Route path="/Leaderboard" exact>
        <Leaderboard />
      </Route>
      <Redirect to="/" />
    </Switch>  
  </HashRouter>
  </ThemeProvider>
  </div>
  );
}

export default App;