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
}

/*function preventDefault(event) {
event.preventDefault();
};*/

function Current()
{
    return(
        <center>
        <h1>Welcome, User</h1>
        <br></br>
        <Row>
        <Col>
        <span>Current Cash Balance </span>
        <h2>$10000</h2>
        </Col>
        <Col>
        <span>Current Holdings </span>
        <h2>$10000</h2>
        </Col>
        </Row>
        </center>
    );
};

export default Current;