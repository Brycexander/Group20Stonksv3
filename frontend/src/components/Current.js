import React, { Component, useState, PureComponent } from 'react'; 
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Landing.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Chart from './Chart';
import Recent from './Recent';
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form, FormControl} from 'react-bootstrap';
import Pie from './Portfolio';
import Orders from './Orders';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'

/*function preventDefault(event) {
event.preventDefault();
};*/

function Current()
{
const storage = require('../tokenStorage.js');  
const jwt = require("jsonwebtoken");
var tok = storage.retrieveToken();
var ud = jwt.decode(tok,{complete:true});
console.log(ud);

if(ud !== null)
{
  var userId = ud.payload.id;
  var firstName = ud.payload.FirstName;
  var lastName = ud.payload.LastName;
  var login = ud.payload.Login;
}

  const cash;
  const holdings;

    const postCall = () => {
     
    axios
      .post('https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/getPortfolio', {
        "Login": login
      })
      .then(function (response) {
        var res = response.data;
        if (res.error) 
        {
          console.log(res.error);
        }
        else 
        {
         console.log(response);
         cash = response.data.AccountBalance;
         holdings = response.data.Holdings;
        }
      })
      .catch(function (error) {
        // handle error
        console.log('Error');
      });

  };
  postCall();

    return(
        <center>
        <h1>Welcome, {firstName} {lastName}</h1>
        <br></br>
        <Row>
        <Col>
        <span>Current Cash Balance </span>
        <h2>${cash}</h2>
        </Col>
        <Col>
        <span>Current Holdings </span>
        <h2>${holdings}</h2>
        </Col>
        </Row>
        </center>
    );
};

export default Current;