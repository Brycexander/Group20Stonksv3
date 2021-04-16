import React, { Component, useState } from 'react'; 
import { Button, Nav, Container, Row, Col, Form, Modal, Alert} from 'react-bootstrap';
import logo from './../vector-creator.png'; //import image
import {LinkContainer} from 'react-router-bootstrap'
import './PageTitle.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Settings()
{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    //The read in variables
    const storage = require('../tokenStorage.js');  
    const jwt = require("jsonwebtoken");
    var tok = storage.retrieveToken();
    var ud = jwt.decode(tok,{complete:true});
    console.log(ud);
    
    if(ud !== null)
    {
      var userId = ud.payload.id;
      var firstName = ud.payload.FirstName;
      var lastName = ud.payload.LastName;
      var login = ud.payload.Login;
      var email = ud.payload.Email;
    }

    //do Reset
    const [message,setMessage] = useState('');

    const doBankrupt = async event =>
    {
        event.preventDefault();
 
        const postCall = () => {
         axios
           .post('hhttps://group20-stocksimulatorv2.herokuapp.com/api/portfolios/bankrupt', {
             "Login": login.value
           })
           .then(function (response) {
             var res = response.data;
             if (res.error) 
             {
               setMessage("Cannot execute bankrupt");
             }
             else 
             {
               window.location.href = '/Landing';
             }
           })
           .catch(function (error) {
             // handle error
             setMessage("Cannot execute bankrupt");
           });
 
       };
       postCall();
    };

return(
    <div>
<Modal.Dialog>
  <Modal.Header>
    <Link to="/Landing">
    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x"></FontAwesomeIcon>
    </Link>
    <Modal.Title>Settings</Modal.Title>
  </Modal.Header>
  <Modal.Body>
       
  </Modal.Body>
  <Container className="width">
      <center>
      <Col xs={10}>
  <center>
  <TextField
          id="standard-read-only-input"
          label={"ID"}
          fullWidth
          defaultValue= {userId}
          InputProps={{
            readOnly: true,
          }}
        />
    </center>
    <br></br>
  <center>
  <TextField
          id="standard-read-only-input"
          label={"First Name"}
          fullWidth
          defaultValue= {firstName}
          InputProps={{
            readOnly: true,
          }}
        />
    </center>
    <br></br>
    <center>
  <TextField
          id="standard-read-only-input"
          label={"Last Name"}
          fullWidth
          defaultValue= {lastName}
          InputProps={{
            readOnly: true,
          }}
        />
    </center>
    <br></br>
    <center>
    <TextField
          id="standard-read-only-input"
          label="Username"
          fullWidth
          defaultValue={login}
          InputProps={{
            readOnly: true,
          }}
        />
    </center>
    <br></br>
    <center>
    <TextField
          id="standard-read-only-input"
          label="Email"
          fullWidth
          defaultValue= {email}
          InputProps={{
            readOnly: true,
          }}
        />
        </center>


 <br></br>
 </Col>
 </center>
 </Container>
  <Modal.Footer>
    <Button variant="danger" onClick={handleClickOpen}>Bankrupt</Button>
  </Modal.Footer>
   
</Modal.Dialog>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to perform Bankrupt?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking bankrupt you will be resetting your portfolio and lose 
            all of your current stocks. There is no undoing this act.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={doBankrupt} variant="danger" autoFocus>
            Bankrupt
          </Button>
        </DialogActions>
      </Dialog>
</div>

);

}

export default Settings;