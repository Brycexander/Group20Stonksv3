import React, {useState, useEffect} from "react";
import './Search.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import axios from 'axios'

function createData(symbol, description, open, high, low, price, pcurrent, percent) {
  symbol = String(symbol);
  description = String(description);
  /*
  open = String(open);
  high = String(high);
  low = String(low);
  price = String(price);
  pcurrent = String(pcurrent);
  percent = String(percent);
  */
  return {symbol, description, open, high, low, price, pcurrent, percent};
}

/*
open: 1243.1, 
high: 1213.2, 
low: 123.4, 
price: 5000, 
pcurrent: 4000,
percent: -30   
*/



/*
const stocks = [
  createData('Cupcake', '305', (3.7), 67, 4.3, 0, 0, 0),
  createData('Donut', 'a', 25.0, 51, 4.9, 0, 0, 0),
  createData('Eclair', 'b', 16.0, 24, 6.0, 0, 0, 0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 0, 0, 0),
  createData('Gingerbread', '356', 16.0, 49, 3.9, 0, 0, 0),
  createData('Honeycomb', '408', 3.2, 87, 6.5, 0, 0, 0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 0, 0, 0),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 0, 0, 0),
  createData('KitKat', 518, 26.0, 65, 7.0, 0, 0, 0),
  createData('Lollipop', 392, 0.2, 98, 0.0, 0, 0, 0),
  createData('Marshmallow', 318, 0, 81, 2.0, 0, 0, 0),
  createData('Nougat', 360, 19.0, 9, 37.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
  createData('Oreo', 437, 18.0, 63, 4.0, 0, 0, 0),
];
*/
var stocks = []
const temp = [
  {symbol:"AAPL", description:"Apple"}, 
  {symbol: "MSFT", description: "Microsoft"}, 
  {symbol: "FB", description: "Facebook"}, 
  {symbol: "TSLA", description: "Tesla"}, 
  {symbol: "BABA", description: "Alibaba Group"},
  {symbol: "TSM", description: "Taiwan Semicounductor Manufacturing Company"},
  {symbol: "JPM", description: "JPMorgan Chase"},
  {symbol: "BAC", description: "Bank of America"},
  {symbol: "WMT", description: "Walmart"},
  {symbol: "INTC", description: "Intel"},
  {symbol: "CMCSA", description: "Comcast"},
  {symbol: "VZ", description: "Verizon"},
  {symbol: "XOM", description: "ExxonMobil"},
  {symbol: "KO", description: "The Coca-Cola Company"},
  {symbol: "CSCO", description: "Cisco Systems"},
  {symbol: "ORCL", description: "Oracle Corporation"},
  {symbol: "T", description: "AT&T"},
  {symbol: "PFE", description: "Pfizer"},
  {symbol: "WFC", description: "Wells Fargo"},
  {symbol: "C", description: "Citigroup"},
  {symbol: "QCOM", description: "Qualcomm"},
  {symbol: "BA", description: "Boeing"},
  {symbol: "AMAT", description: "Applied Materials"},
  {symbol: "JD", description: "JD.com"},
  {symbol: "GE", description: "General Electric"}
]
 
    

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

/*
        symbol
        description
        open: 1243.1, 
        high: 1213.2, 
        low: 123.4, 
        price: 5000, 
        pcurrent: 4000,
        percent: -30   
*/

const headCells = [
  { id: 'symbol', numeric: false, disablePadding: false, label: 'Symbol' },
  { id: 'description', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'open', numeric: true, disablePadding: false, label: 'Open' },
  { id: 'high', numeric: true, disablePadding: false, label: 'High' },
  { id: 'low', numeric: true, disablePadding: false, label: 'Low' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'pcurrent', numeric: true, disablePadding: false, label: 'Previous Price' },
  { id: 'percent', numeric: true, disablePadding: false, label: 'Percent Change' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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

const useStyles = makeStyles((theme) => ({
  aboveRoot: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.secondary,
  },
  root: {
    width: '100%',
    paddingLeft:'0%',
  },
  paper: {
    width: '100%', 
    //paddingLeft: '10px',
    paddingRight: '30px',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
    paddingRight: theme.spacing(100),
    width: '100%',
    
  },
  visuallyHidden: {
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: 1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  // var stocks = []
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('symbol');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }
  var rows = [];
  const [stocksTemp, setStocks] = useState([]);
  const[search, setSearch] = useState('');
  useEffect(() =>  {
    const storage = require('../tokenStorage.js');
    var obj = {Query:""};
    var js = JSON.stringify(obj);

    var config = 
    {
        method: 'post',
        url: 'https://group20-stocksimulatorv2.herokuapp.com/api/stock/search',        // or api/addcard or api/searchcards
        headers: 
        {
            'Content-Type': 'application/json'
        },
        data: js
    };

    axios(config)
      .then(response => {
        var res = response.data;
         // console.log(res);
         stocks = [];
         for (var i = 0; i < res.length; i++){
           var quote = res[i].Quote;
           var open = quote.o;
           var high = quote.h;
           var low = quote.l;
           var price = quote.c;
           var pprice = quote.pc;
           var percent = (((price - pprice) / pprice) * 100);
           var company = res[i].Company;
           for (var j = 0; j < temp.length; j++){
             if (company === temp[j].symbol){
               var description = temp[j].description;
               stocks.push(createData(company, description, open, high, low, price, pprice, percent.toFixed(2)));
               // rows.push(stocks[i]);
              }
           }
         }
         setStocks(res);
         storage.storeList(res);
         // emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        
      })
      .catch(error => {
        // handle error
        console.log("invalid");
      });
  }, []);
  
  // postCall();

  // const forceUpdate = useForceUpdate();


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };


  
  
  // const [stocks, setStocks] = useState([])

  const API_URL = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1f0tcn48v6of5hb7f90";
  const API_URL_1_Pre = "https://finnhub.io/api/v1/quote?symbol=";
  const API_URL_1_POST = "&token=c1f0tcn48v6of5hb7f90";

  /*
  useEffect(() => {
    axios.get(API_URL)
    .then(res => {
      for (var i = 0; i < 30; i++){
        // stocks.push(res.data[i]);
        axios.get(API_URL_1_Pre + res.data[i].symbol + API_URL_1_POST)
        .then(res1 => {
          // console.log(res.data);
          // symbol, description, open, high, low, price, pcurrent, percent
          var percent = (((res1.data.c - res1.data.pc) / res1.data.pc) * 100)
          stocks.push(createData(res.data[i].symbol, res.data[i].description, res1.data.o,  res1.data.h, res1.data.l,  res1.data.c,  res1.data.pc, percent.toFixed(2)))
          // for (var i = 0; i < res.data.length; i++)
          //    console.log(res.data[i]);
        })
        .catch(error => console.log(error));
      }
    })
    .catch(error => console.log(error));
  }, []);  
  */
 
  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredStocks = stocks.filter(stocks => 
    (stocks.symbol.toLowerCase().includes(search.toLowerCase()) || stocks.description.toLowerCase().includes(search.toLowerCase()))
  );
  var emptyRows = 0;
 // var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  rows = []
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className = {classes.aboveRoot}>
    <div className={classes.root}>
        <div className="stock-search">
          <h1 className="stock-text"></h1>
          <form>
            <input type="text" placeholder="Search"
            className="stock-input" onChange={handleChange}/>
          </form>
        </div>

        {filteredStocks.map(stocks => {
          rows.push(stocks);
            console.log(rows);
        })}
    
        
      
      <Paper className={classes.paper}>
        <TableContainer className="chart">
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
        
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.symbol}
                      </TableCell>
                      
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.open}</TableCell>
                      <TableCell align="right">{row.high}</TableCell>
                      <TableCell align="right">{row.low}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.pcurrent}</TableCell>
                      <TableCell align="right">{row.percent}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
    </div>
    </ThemeProvider>
  );
  
}

