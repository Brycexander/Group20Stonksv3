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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavigationBar()
{

  const doLogout = event => 
  {
    event.preventDefault();

      localStorage.removeItem("user_data");
      window.location.href = '/';

  };
  
    return(
      <div>
        <Navbar className="color-nav" expand="lg">
        <Navbar.Brand className="font">StockHub</Navbar.Brand>
        <Nav.Link className="font">Leaderboard</Nav.Link>
        <Link id="change" className="nav-link" to="/Landing">Profile</Link>
        <Link id="change" className="nav-link" to="/Search">Stocks</Link>
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
   </div>
  );
}

export default NavigationBar;