import React, { Component, useState } from 'react'; 
import { Button, Nav, Container, Row, Col, Form, Alert} from 'react-bootstrap';
import logo from './../vector-creator.png'; //import image
import {LinkContainer} from 'react-router-bootstrap'
import './PageTitle.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import { lighten, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Settings()
{

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    const handleClickOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = () => {
      setOpen2(false);
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

    const doDelete = async event =>
{
    event.preventDefault();

    const postCall = () => {
     axios
       .post('https://group20-stocksimulatorv2.herokuapp.com/api/user/delete', {
         "Login": login
       })
       .then(function (response) {
         var res = response.data;
         if (res.error) 
         {
           console.log("Cannot Delete Account");
         }
         else 
         {
           console.log("API called");
           console.log(login);
           localStorage.removeItem("user_data");
           window.location.href = '/';
         }
       })
       .catch(function (error) {
         // handle error
         console.log("Cannot execute delete");
       });

   };
   postCall();
};

    const doBankrupt = async event =>
    {
        event.preventDefault();
 
        const postCall = () => {
         axios
           .post('https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/bankrupt', {
             "Login": login
           })
           .then(function (response) {
             var res = response.data;
             if (res.error) 
             {
               console.log("Cannot execute bankrupt");
             }
             else 
             {
               console.log("API called");
               console.log(login);
               window.location.href = '#/Landing';
             }
           })
           .catch(function (error) {
             // handle error
             console.log("Cannot execute bankrupt");
           });
 
       };
       postCall();
    };

    const darkTheme = createMuiTheme({
      palette: {
        type: "dark",
        primary: blue,
        secondary: {
          main: '#67EE5E',
        },
      },
    });

    const styles = {
      root: {
        background: "black"
      },
      input: {
        color: "white"
      }
    };

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


return(

    <div>
      <br></br>
      <br></br>
      <center>
      <Col xs={7}>
      <Container className = "move">
      <br></br>
      <center>
        <Row>
          <Col xs={7}>
        <Link to="/Landing">
         < FontAwesomeIcon icon={faArrowCircleLeft} size="2x"></FontAwesomeIcon>
        </Link>
        </Col>
        </Row>
        <h1 className="color">Settings</h1>
        <Row className="justify-content-md-center">
      <Col xs={5}>
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
 <Row>
    <Col>
    <Button variant="danger" onClick={handleClickOpen}>Bankrupt</Button>
    </Col>
    <Col>
    <Button variant="danger" xs={3} onClick={handleClickOpen2} >Delete</Button>
    </Col>
    </Row>
    </Col>
 </Row>
 </center>
     <br></br>
 </Container>
 </Col>
 </center>


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

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete your account?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking delete you will lose all of your current data and will not be able to log back in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} variant="secondary">
            Cancel
          </Button>
          <Button onClick={doDelete} variant="danger" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
</div>
);

}

export default Settings;