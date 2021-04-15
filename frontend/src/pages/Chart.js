import React, {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import axios from 'axios'

function Chart() {
        
        var obj = {Company:'AAPL'};
        var js = JSON.stringify(obj);

        const postCall = () => {
          // Axios code follows
          var config = 
          {
              method: 'post',
              url: 'https://group20-stocksimulatorv2.herokuapp.com/api/stock/getChart',        // or api/addcard or api/searchcards
              headers: 
              {
                  'Content-Type': 'application/json'
              },
              data: js
          };

          axios(config)
          .then(function (response) 
          {
              var res = response.data;
              if (res.error) 
              {
                  console.log(res.error);
              }
              else 
              {;
                   console.log(res);
                  //storage.storeToken(res);
                  //window.location.href = '/cards'
              }
          })
          .catch(function (error) 
          {
              //setMessage(error);
            console.log(error);
          });
        };

        postCall();
        
        const series = [{
          name: 'candle',
          data: [
            {
              x: new Date(1538778600000).toDateString(),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: new Date(1538780400000).toDateString(),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: new Date(1538782200000).toDateString(),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: new Date(1538784000000).toDateString(),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: new Date(1538785800000).toDateString(),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: new Date(1538787600000).toDateString(),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: new Date(1538789400000).toDateString(),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: new Date(1538791200000).toDateString(),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: new Date(1538793000000).toDateString(),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: new Date(1538794800000).toDateString(),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: new Date(1538796600000).toDateString(),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: new Date(1538798400000).toDateString(),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: new Date(1538800200000).toDateString(),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: new Date(1538802000000).toDateString(),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: new Date(1538803800000).toDateString(),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: new Date(1538805600000).toDateString(),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: new Date(1538807400000).toDateString(),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: new Date(1538809200000).toDateString(),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: new Date(1538811000000).toDateString(),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1538812800000).toDateString(),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: new Date(1538814600000).toDateString(),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: new Date(1538816400000).toDateString(),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: new Date(1538818200000).toDateString(),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: new Date(1538820000000).toDateString(),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: new Date(1538821800000).toDateString(),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: new Date(1538823600000).toDateString(),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: new Date(1538825400000).toDateString(),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: new Date(1538827200000).toDateString(),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: new Date(1538829000000).toDateString(),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: new Date(1538830800000).toDateString(),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: new Date(1538832600000).toDateString(),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: new Date(1538834400000).toDateString(),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: new Date(1538836200000).toDateString(),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: new Date(1538838000000).toDateString(),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: new Date(1538839800000).toDateString(),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: new Date(1538841600000).toDateString(),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: new Date(1538843400000).toDateString(),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: new Date(1538845200000).toDateString(),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: new Date(1538847000000).toDateString(),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: new Date(1538848800000).toDateString(),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: new Date(1538850600000).toDateString(),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: new Date(1538852400000).toDateString(),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: new Date(1538854200000).toDateString(),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: new Date(1538856000000).toDateString(),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: new Date(1538857800000).toDateString(),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: new Date(1538859600000).toDateString(),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: new Date(1538861400000).toDateString(),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: new Date(1538863200000).toDateString(),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: new Date(1538865000000).toDateString(),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: new Date(1538866800000).toDateString(),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: new Date(1538868600000).toDateString(),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: new Date(1538870400000).toDateString(),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: new Date(1538872200000).toDateString(),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: new Date(1538874000000).toDateString(),
              y: [6, 6, 6589.14, 6593.01]
            },
            {
              x: new Date(1538875800000).toDateString(),
              y: [6, 6605, 6592, 6603.06]
            },
            {
              x: new Date(1538877600000).toDateString(),
              y: [6, 6604.5, 6599.09, 6603.89]
            },
            {
              x: new Date(1538879400000).toDateString(),
              y: [6, 6604.44, 6600, 6603.5]
            },
            {
              x: new Date(1538881200000).toDateString(),
              y: [6, 6603.99, 6597.5, 6603.86]
            },
            {
              x: new Date(1538883000000).toDateString(),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: new Date(1538884800000).toDateString(),
              y: [6604.98, 6606, 6604.07, 6606]
            },
          ]
        }];

        const options = {
          chart: {
            height: 350,
            offsetY: 0,
            type: 'candlestick',
          },
          title: {
            text: 'AAPL',
            align: 'left'
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: 'fff',
                label: {
                  borderColor: 'fff',
                  style: {
                    fontSize: '12px',
                    color: '#000',
                    background: 'fff'
                  },
                  orientation: 'horizontal',
                  offsetY: 0,
                  text: 'Date'
                }
              }
            ]
          },
          tooltip: {
            enabled: true,
          },
          xaxis: {
            type: 'category',
            labels: {
              formatter: function(val) {
                // return dayjs(val).format('MMM DD HH:mm')
                    return val
                }
            }
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        };
        
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
      margin: "5%",
      marginTop: "2%",
      marginBottom: "0%",
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

    const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs ={12} sm = {8}>
            <Paper className={classes.paper}> 
              <div id="chart">
                  <ReactApexChart options={options} series={series} type="candlestick" height={525} width={"100%"}/>
              </div>
              <ThemeProvider theme={theme}>
              <Button className={classes.margin} mx="auto" variant="contained" color="primary">3 WEEKS</Button>
              <Button className={classes.margin} mx="auto" variant="contained" color="primary">3 MONTHS</Button>
              <Button className={classes.margin} mx="auto" variant="contained" color="primary">1 YEAR</Button>
              </ThemeProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm = {4}>
            <Paper className={classes.paper}>STATS</Paper> 
          </Grid>
        </Grid>

      </div>
      </ThemeProvider>
    );
  }

export default Chart;