import React, { Component, useState } from 'react'; 
import { Button, Nav, Container, Row, Col, Form, Modal, Alert} from 'react-bootstrap';
import logo from './../vector-creator.png'; //import image
import {LinkContainer} from 'react-router-bootstrap'
import './PageTitle.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

function Token()
{
    var token;
    const storage = require('../tokenStorage.js');

    //do Reset
    const [message,setMessage] = useState('');

    const goReset = async event =>
    {
        event.preventDefault();
        //var obj = {Token:token.value};
        //var js = JSON.stringify(obj);

       // console.log(js);
        if(token !== null)
        {
            window.localStorage.setItem("token", token.value);
            window.location.href = '#/Reset';
        } else
        {
            console.log("no token provided");
        }
    };


return(
<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Password Recovery</Modal.Title>
  </Modal.Header>

  <Modal.Body>
        <br></br>
        <center>
          <h5>A token has been sent to your email</h5>
          <Form.Control type="text" placeholder="Enter token" ref={(c) => token = c}/>
        <br></br>

        <br></br> <br></br>
        </center>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={goReset}>Confirm</Button>
  </Modal.Footer>
</Modal.Dialog>
);

}

export default Token;