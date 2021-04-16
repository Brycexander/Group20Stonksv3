import React, { Component, useState } from 'react'; 
import { Button, Nav, Container, Row, Col, Form, Modal, Alert} from 'react-bootstrap';
import logo from './../vector-creator.png'; //import image
import {LinkContainer} from 'react-router-bootstrap'
import './PageTitle.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

function Reset()
{
    //The read in variables
    var newPass;
    var confirm;

    const storage = require('../tokenStorage.js');  
    const jwt = require("jsonwebtoken");
    var tok = storage.retrieveToken();
    var ud = jwt.decode(tok,{complete:true});
    console.log(ud);

    //do Reset
    const [message,setMessage] = useState('');

    const doReset = async event =>
    {
        event.preventDefault();
        console.log(newPass);
        console.log(confirm);
 
        const postCall = () => {
         axios
           .post('https://group20-stocksimulatorv2.herokuapp.com/api/auth/reset/' + tok, {
             "Password": newPass.value,
             "ConfirmPassword": confirm.value
           })
           .then(function (response) {
             var res = response.data;
             if (res.error) 
             {
               setMessage("Cannot find user");
             }
             else 
             {
               window.location.href = '/';
             }
           })
           .catch(function (error) {
             // handle error
             setMessage("Cannot find user");
           });
 
       };
       postCall();
    };

return(
<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Password Recovery</Modal.Title>
  </Modal.Header>

  <Modal.Body>
        <br></br>
        <center>
          <h5>Enter new password</h5>
      <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          ref={(c) => newPass = c}/>
        <br></br>

        <br></br> <br></br>
        <h5>Confirm new password</h5>
        <TextField
          id="filled-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          ref={(c) => confirm = c}/>
        <br></br><br></br>
        </center>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={doReset}>Change Password</Button>
  </Modal.Footer>
    <span>{message}</span>
</Modal.Dialog>
);

}

export default Reset;