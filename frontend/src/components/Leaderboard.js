import React, { Component, useState, PureComponent, useEffect } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios'
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const columns = [
  { id: 'rank', label: 'Ranking', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'balance',
    label: 'Account Balance',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(rank, name, balance) {
  return { rank, name, balance};
}

var rows = [];

var flag = 0;


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  
  const [stocksTemp, setStocks] = useState([]);

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
  }
  
  //const postCall = () => {  
  useEffect(() =>  {  
   axios
      .post('https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/leaderboard', {
      })
      .then(response => {
        var res = response.data;
        if (res.error) 
        {
          console.log(res.error);
        }
        else 
        {
         console.log(response);
         rows = [];
         const data = response.data;
         
         //loop through and createData
  
         for(var i = 0; i < data.length; i++)
         {
             console.log(data[i]);
             rows.push(createData(i + 1, data[i].Login, data[i].AccountBalance));
         }
         //We already got our data
         setStocks(res);
        }
      })
      .catch(error => {
        // handle error
        console.log('Error');
      });
  
  //};
  }, []);
  //postCall();

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const doLogout = event => 
  {
    event.preventDefault();

      localStorage.removeItem("user_data");
      window.location.href = '/';

  };  

  return (
      <>
  <Navbar className="color-nav" expand="lg">
  <Navbar.Brand className="font">StockHub</Navbar.Brand>
     <Link id="change" className="nav-link" to="/Leaderboard">
      Leaderboard
    </Link>
    <Link id="change" className="nav-link" to="/Landing">Profile</Link>
    <Link id="change" className="nav-link" to="/Search">
      Stocks
    </Link>
    <Link id="change" className="nav-link" to="/Settings">Settings</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>

    <Form inline>
    <Button variant="outline-danger" onClick={doLogout}>Logout</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<br></br>
    <Row className="justify-content-md-center">
    <Col xs={4}>
        <center>
    <Paper>
        <h1>Leaderboard</h1>
    </Paper>
    </center>
    </Col>
    </Row>
    <br></br>
    <Row className="justify-content-md-center">
       <Col sm={10}>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Col>
    </Row>
    </>
  );
}