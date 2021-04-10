import React, { Component, useState } from 'react'; 
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import logo from './../vector-creator.png'; //import image
import {LinkContainer} from 'react-router-bootstrap'


function Login()
{
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {login:loginName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch('http://localhost:5000/api/login',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/Search';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };

const app_name = ''
 /* function buildPath(route)
  {
    if(process.env.)
  }*/

    return(
   <>
    <head>
    <link rel="stylesheet" href="../PageTitle.css"></link>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossorigin="anonymous"></link>
    </head>

    <Row>
    <Col className = "col-5 align-self-left" className = "left-side" noGutters={true}>
      <Col lg={8} md={{ span: 6, offset: 3 }} sm={12} className="LoginBox">
    <Container className= "jumbotron2">    
      <h1 class="display-3" id = "login">Login</h1>
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
  <Col className = "col-8 align-self-right" className = "right-side" noGutters={true}>
  <Container>
  <img src={logo} width="520" alt="space" fluid className="center"/>
  <Row className="justify-content-md-center">
  <h2 className="quote">Take your investments to new heights</h2>
  </Row>
  </Container>
  </Col>
</Row>
</>
    );
    
};

export default Login;