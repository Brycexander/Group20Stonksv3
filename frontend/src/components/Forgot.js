import React, { Component, useState, PureComponent } from 'react'; 
import { Button, Modal,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form, FormControl} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Forgot()
{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const doReset = async event =>{
  
    event.preventDefault();
      
      window.location.href = '/Reset';
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
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doReset}>
            OK
          </Button>
        </Modal.Footer>
        <Modal.Body> <Form.Group controlId="formPassword">
    <Form.Label>Enter new password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
    <Form.Label>Confirm new password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
    <Form.Text className="text-muted">
      Please allow some time after clicking Reset
    </Form.Text>
  </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Forgot;