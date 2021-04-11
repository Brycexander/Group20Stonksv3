import React from 'react';
import './PageTitle.css';
import Register from "./Register.js";
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PageTitle()
{
  return(
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

      <Link id="change" className="nav-link" to="/Landing">
      Register
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )  ;
};

export default PageTitle;