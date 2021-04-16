import React, { Component, useState, PureComponent } from 'react'; 
import './PageTitle.css';
import { Button, Modal,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form, FormControl} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios'


function Forgot()
{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message,setMessage] = useState('');
  var email;

  const doReset = async event =>
  {
      event.preventDefault();

      const postCall = () => {
       axios
         .post('https://group20-stocksimulatorv2.herokuapp.com/api/auth/recover', {
           "Email": email.value,
         })
         .then(function (response) {
           var res = response.data;
           if (res.error) 
           {
             setMessage("Cannot find user");
           }
           else 
           {
             setMessage("Check email for password reset");
             window.location.href = '#/Token';
           }
         })
         .catch(function (error) {
           // handle error
           setMessage("Cannot find user email");
         });

     };
     postCall();
  };

  return (
    <>
      <Link onClick={handleShow}>
        Forgot Password?
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password Recovery</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Group controlId="formBasicEmail">
    <Form.Label>Please Enter Your Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" ref={(c) => email = c}/>
  </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doReset}>
            OK
          </Button>
        </Modal.Footer>
        <span className="error">{message}</span>
        <br></br>
      </Modal>
    </>
  );
}

export default Forgot;