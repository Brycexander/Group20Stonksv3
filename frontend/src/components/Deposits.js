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
import Current from './Current';
import BarChart from './BarChart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'

function Deposits()
{
  const useStyles = makeStyles({
    root: {
      width: '100%',
      marginLeft: 10,
    },
    container: {
      maxHeight: 440,
    },
  });

    const storage = require('../tokenStorage.js');  
    const jwt = require("jsonwebtoken");
    var tok = storage.retrieveToken();
    var ud = jwt.decode(tok,{complete:true});
    console.log(ud);

    /*var userId = ud.payload.id;
    var firstName = ud.payload.FirstName;
    var lastName = ud.payload.LastName;*/

  /*function preventDefault(event) {
    event.preventDefault();
  };*/

  const doLogout = event => 
  {
    event.preventDefault();

      localStorage.removeItem("user_data");
      window.location.href = '/';

  };  

  const classes = useStyles;

    return(
      <div className={classes.root}>
        <Navbar className="color-nav" expand="lg">
  <Navbar.Brand className="font">StockHub</Navbar.Brand>
  <Link id="change" className="nav-link" to="/Leaderboard">
      Leaderboard
    </Link>
  <Link id="change" className="nav-link" to="/Search">
      Stocks
    </Link>
    <Link id="change" className="nav-link" to="/Settings">Settings</Link>
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
        <Col xs={6}>
          <Paper>
            <Current/>
          </Paper>
        </Col>
      </Row>
      <br></br>

      <Row className="justify-content-md-center">
        <Col md="auto">
          <Paper>
           <BarChart/>
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