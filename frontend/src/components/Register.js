import React, { Component, useState } from 'react'; 
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Register() {
    var userName;
    var password;
    var confirm;
    var email;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {
        event.preventDefault();

        alert('doIt()'+ 'Username: '+ userName.value + ' Password: ' + password.value + ' Email: ' +email.value);
    };


return(
    <>
    <head>
    <link rel="stylesheet" href="../PageTitle.css"></link>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossorigin="anonymous"></link>
    </head>

<Navbar collapseOnSelect expand="lg" className="color-nav">
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

      <Link id="change" className="nav-link" to="/LoginPage">
      Login
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    <Container class="d-flex align-content-bottom">
  <Jumbotron class= "mx-auto" className="jumbotron">
    <Container>
  <Row className="justify-content-md-center">
    <Col className = "col-5 align-self-center">
            <h1 class="display-3">Register</h1>
    <Form>

    <Form.Group controlID="formGridUser">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter username" ref={(c) => confirm = c}/>
    </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridUser">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" ref={(c) => confirm = c}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm password" ref={(c) => password = c}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="john@email.com" ref={(c) => email = c}/>
  </Form.Group>


  <Button className="color-button" type="submit" onClick={doRegister}>
    Submit
  </Button>
</Form>
</Col>
</Row>
</Container>
</Jumbotron>
</Container>

</>
);
};

export default Register;