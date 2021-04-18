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
import axios from 'axios'
import Forgot from './Forgot';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    color: theme.palette.primary.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: theme.palette.primary,
    borderColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [password, setPass] = useState('');
  const [message,setMessage] = useState('');

  const storage = require('../tokenStorage.js');
  const bp = require('./bp.js');

  const doLogin = async event =>
  {
      event.preventDefault();

      console.log(value + " " + password);

      const postCall = () => {
       axios
         .post('https://group20-stocksimulatorv2.herokuapp.com/api/auth/login', {
           "Login": value,
           "Password": password
         })
         .then(function (response) {
           var res = response.data;
           if (res.error) 
           {
             setMessage("Incorrect user/password combination");
             //setShow(true);
           }
           else 
           {
             storage.storeToken(res);
             window.location.href = '#/Landing';
           }
         })
         .catch(function (error) {
           // handle error
           setMessage("Login invalid");
           //setShow(true);
         });

     };
     postCall();
  };

  const handleChange = e => {
      setValue(e.target.value);
      console.log(value);
  }

  const handleChange2 = e => {
    setPass(e.target.value);
    console.log(password);
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MonetizationOnIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          StockHub
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            value = {value}
            onChange = {handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {password}
            onChange = {handleChange2}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {doLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Forgot/>
            </Grid>
            <Grid item>
              <Link to="/Register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
