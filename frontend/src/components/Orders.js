import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'time', label: 'Time', minWidth: 100 },
  {
    id: 'value',
    label: 'Value',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'shares',
    label: 'Shares',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'avg',
    label: 'Purchase',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, time, value, shares) {
    const avg = value*shares;
  return { name, time, value, shares, avg };
}

const rows = [
  createData('Tesla', '11:45am', 124, 22),
  createData('AMC', '1:29pm', 9.50, 30),
  createData('Game Stop', '3:30am', 120, 7),
  createData('Lululemon', '6:20pm', 200, 2),
  createData('Apple', '2:14pm', 167, 10),
  createData('Twitter', '10:29am', 63.90, 28),
  createData('Microsoft', '9:50am', 242.55, 19),
  createData('Disney', '9:00am', 188.90, 10),
  createData('GoPro', '8:48am', 12.50, 8),
  createData('Starbucks', '8:39am', 109.38, 100),
  createData('Chegg', '10:00pm', 88.25, 12),
  createData('Spotify', '12:00pm', 273.50, 2),
  createData('Chase', '6:00pnm', 120.20, 8),
  createData('Square', '8:05pm', 230.29, 1),
  createData('DOW', '3:09pm', 64.60, 7),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
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