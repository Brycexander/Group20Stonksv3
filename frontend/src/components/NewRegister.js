import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import './PageTitle.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios'
  import Dialog from '@material-ui/core/Dialog';
  import DialogActions from '@material-ui/core/DialogActions';
  import DialogContent from '@material-ui/core/DialogContent';
  import DialogContentText from '@material-ui/core/DialogContentText';
  import DialogTitle from '@material-ui/core/DialogTitle';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        StockHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [message,setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
     setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  
  const firstNameChange = e => {
    setFirstName(e.target.value);
    console.log(firstName);
  }

  const lastNameChange = e => {
    setLastName(e.target.value);
    console.log(lastName);
  }

  const emailChange = e => {
    setEmail(e.target.value);
    console.log(email);
  }

  const usernameChange = e => {
    setUserName(e.target.value);
    console.log(username);
  }

  const passwordChange = e => {
    setPassword(e.target.value);
    console.log(password);
  }

  const confirmChange = e => {
    setConfirm(e.target.value);
    console.log(confirm);
  }

  const doRegister = async event => 
  {
    event.preventDefault();
    setMessage("");
    const postCall = () => {
   
  axios
    .post('https://group20-stocksimulatorv2.herokuapp.com/api/auth/register', {
      "FirstName": firstName,
      "LastName": lastName,
      "Email": email,
      "Login": username,
      "Password": password,
      "Password2": confirm
    })
    .then(function (response) {
      var res = response.data;
      if (res.error) 
      {
        setMessage(res.error);
      }
      else 
      {
        setOpen(true);
      }
    })
    .catch(function (error) {
    if (typeof(error.response) !== 'undefined')
    {
      // setMessage(error.response.data);
      if (typeof(error.response) !== 'undefined'){
          var res = error.response.data;
          console.log(res.FirstName);
      /*
       error.Email
      error.Password 
      error.Password2
      error.FirstName 
      error.LastName
      error.Login
      */
          if (typeof(res.FirstName) !== 'undefined'){
              setMessage(res.FirstName);     
          }
          else if (typeof(res.LastName) !== 'undefined'){
              setMessage(res.LastName);     
          }
          else if (typeof(res.Email) !== 'undefined'){
              setMessage(res.Email);     
          }
          else if (typeof(res.Login) !== 'undefined'){
              setMessage(res.Login);     
          }
          else if (typeof(res.Password) !== 'undefined'){
              setMessage(res.Password);     
          }
          else if (typeof(res.Password2) !== 'undefined'){
              setMessage(res.Password2);     
          }
          else{
              setMessage('Not Valid Account');
          }
      }
      else{
          setMessage('Not Valid Account');
      }
    } 
    else
    {
      // handle error
      setMessage('Not Valid Account');
    }
    
    });
  
  };
  postCall();
};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MonetizationOnIcon />
        </Avatar>
        <Typography component="h1" color="textSecondary" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={firstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={lastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={emailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                autoComplete="username"
                value={username}
                onChange={usernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={passwordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="confirm-password"
                value={confirm}
                onChange={confirmChange}
              />
            </Grid>
            <Grid item xs={12}>
              <center>
                <span id="loginResult">{message}</span>
                </center>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={doRegister}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Verification Email"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            A verification link has been sent to your email. Please go verify your new account before logging in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    
  );
}