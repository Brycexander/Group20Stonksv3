import React from 'react';
import './PageTitle.css';
import Register from "./Register.js";
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PageTitle()
{
  return(
    <>
    <head>
      <link rel="stylesheet" href="../PageTitle.css"></link>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
      crossorigin="anonymous"></link>
    </head>

  <Navbar collapseOnSelect expand="lg" className="color-nav" fixed="top">
  <Navbar.Brand id="change" href="#home">StockHub</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link id="change" className="nav-link" to="/Home">Home</Link>
      <Nav.Link id="change" href="#pricing">Pictures</Nav.Link>
      <NavDropdown title="More Information" className="title" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Our mission</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Progress</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">Github</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>

      <Link id="change" className="nav-link" to="/Register">
      Register
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </>
  )  ;
};

export default PageTitle;