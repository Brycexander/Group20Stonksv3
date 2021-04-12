import React, { Component, useState } from 'react'; 
import './PageTitle.css'
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios'


function Register() {
    
    var firstName;
    var lastName;
    var userName;
    var password;
    var confirm;
    var email;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {
      event.preventDefault();

    const postCall = () => {
    axios
      .post('https://group20-stocksimulatorv2.herokuapp.com/api/auth/register', {
        "FirstName": firstName.value,
        "LastName": lastName.value,
        "Email": email.value,
        "Login": userName.value,
        "Password": password.value,
        "Password2": confirm.value
      })
      .then(function (response) {
        var res = response.data;
        if (res.error) 
        {
          console.log(res.error);
        }
        else 
        {
          console.log("OOOOOOOOOOH! :)");
        }
      })
      .catch(function (error) {
        // handle error
        alert('Not valid');
      });

  };
  postCall();
    };


return(
    <>


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

    <Container>
  <Jumbotron className= {("mx-auto","jumbotron")}>
    <Container>
  <Row className="justify-content-md-center">
    <Col className = "col-5 align-self-center">
            <center>
            <h1 className="display-3">Register</h1>
            </center>
    <Form>

      <Form.Row>
      <Form.Group as={Col} controlid="formGridUser">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="firstname" placeholder="Enter First Name" ref={(c) => firstName = c}/>
    </Form.Group>

    <Form.Group as={Col} controlid="formGridUser">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="lastName" placeholder="Enter Last Name" ref={(c) => lastName = c}/>
    </Form.Group>

      </Form.Row>

    <Form.Group controlid="formGridUser">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter username" ref={(c) => userName = c}/>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="john@email.com" ref={(c) => email = c}/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridUser">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" ref={(c) => password = c}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm password" ref={(c) => confirm = c}/>
    </Form.Group>
  </Form.Row>

  <center>
  <Button className="color-button" type="submit" onClick={doRegister}>
    Submit
  </Button>
  </center>
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