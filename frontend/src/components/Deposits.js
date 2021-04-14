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

function Deposits()
{
    const storage = require('../tokenStorage.js');  
    const jwt = require("jsonwebtoken");
    var tok = storage.retrieveToken();
    var ud = jwt.decode(tok,{complete:true});
    console.log(ud);

    console.log(ud.payload.id);

    var userId = ud.payload.id;
    var firstName = ud.payload.FirstName;
    var lastName = ud.payload.LastName;

  /*function preventDefault(event) {
    event.preventDefault();
  };*/

  const doLogout = event => 
  {
    event.preventDefault();

      localStorage.removeItem("user_data");
      window.location.href = '/';

  };  

    return(
      <div>
        <Navbar className="color-nav" expand="lg">
  <Navbar.Brand className="font">Welcome, {firstName} {lastName} </Navbar.Brand>
  <Nav.Link className="font">Learderboard</Nav.Link>
  <Link className="nav-link" to="/Search">
      Stocks
    </Link>
  <Nav.Link className="font">Settings</Nav.Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>

    <Form inline>
    <Button variant="outline-danger" onClick={doLogout}>Logout</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<br></br>

      <Row className="justify-content-md-center">
        <Col md="auto">
          <Paper>
         <Chart/>
         </Paper>
        </Col>
      <Col md="auto">
      <Paper>
        <Pie/>
      </Paper>
      </Col>
     </Row>
      <br></br>
     <Row className="justify-content-md-center">
       <Col sm={10}>
      <Orders/>
      </Col>
     </Row>
     <br></br>
      </div>
    );

};

export default Deposits;