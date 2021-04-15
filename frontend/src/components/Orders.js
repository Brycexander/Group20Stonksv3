import React, { Component, useState, PureComponent } from 'react'; 
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

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'time', label: 'Time', minWidth: 100 },
  {
    id: 'value',
    label: 'Value',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'shares',
    label: 'Shares',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'avg',
    label: 'Purchase',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, time, value, shares, avg) {
  return { name, time, value, shares, avg };
}

const rows = [];

function get(){

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

const postCall = () => {  
  axios
    .post('https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/getPortfolio', {
      "Login": login
    })
    .then(function (response) {
      var res = response.data;
      if (res.error) 
      {
        console.log(res.error);
      }
      else 
      {
       console.log(response);
       const data = response.data.StocksOwned;
       
       //loop through and createData
       for(var i = 0; i < data.length; i++)
       {
           console.log(data[i]);
           rows.push(createData(data[i].Company, data[i].Date, data[i].StockValue, data[i].Amount, data[i].TotalValue));
       }
      }
    })
    .catch(function (error) {
      // handle error
      console.log('Error');
    });

};
postCall();
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  
  get();

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

  return (
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
  );
}