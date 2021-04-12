import React, { Component, useState } from 'react'; 
import { Button, Nav, Container, Row, Col, Form} from 'react-bootstrap';
import logo from './../vector-creator.png'; //import image
import {LinkContainer} from 'react-router-bootstrap'
import './PageTitle.css';
import axios from 'axios'

function Login()
{
  const storage = require('../tokenStorage.js');
  const bp = require('./bp.js');

   var loginName;
   var loginPassword;

   const [message,setMessage] = useState('');

   const doLogin = async event =>
   {
       event.preventDefault();

       var obj = {Login:loginName.value,Password:loginPassword.value};
       var js = JSON.stringify(obj);

       console.log(loginName.value + " " + loginPassword.value);


       const postCall = () => {
        axios
          .post('https://group20-stocksimulatorv2.herokuapp.com/api/auth/login', {
            "Login": loginName.value,
            "Password": loginPassword.value
          })
          .then(function (response) {
            var res = response.data;
            if (res.error) 
            {
              setMessage(res.error);
            }
            else 
            {
              window.location.href = '#/Landing';
            }
          })
          .catch(function (error) {
            // handle error
            setMessage('User/Password is invalid');
          });

      };
      postCall();
   };

    return(
  
    <Row>
    <Col className = {("col-5 align-self-left","left-side")} nogutters="true">
      <Col lg={8} md={{ span: 6, offset: 3 }} sm={12} className="LoginBox">
    <Container className= "jumbotron2">    
      <h1 className="display-3" id = "login">Login</h1>
      <Form onSubmit={doLogin}>
      <Form.Group controlId="formBasicText">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" ref={(c) => loginName = c}/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={(c) => loginPassword = c} />
    <Form.Text className="text-muted">
      Never share your username or password with anyone!
    </Form.Text>
    <LinkContainer to="/about">
      <Nav.Link>Forgot Password?</Nav.Link>
  </LinkContainer>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={doLogin} className="color-button">
    Launch
  </Button>
  
</Form>
<span id="loginResult">{message}</span>
</Container>  
</Col>
</Col>
  <Col className = {("col-5 align-self-right", "right-side")} nogutters="true">
  <Container>
  <img src={logo} width="520" alt="space" fluid="true" className="center"/>
  <Row className="justify-content-md-center">
  <h2 className="quote">Take your investments to new heights</h2>
  </Row>
  </Container>
  </Col>
</Row>
    );
    
};

export default Login;
