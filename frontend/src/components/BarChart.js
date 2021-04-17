import React, { PureComponent, useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios'

function createData(name,  amt ) {
  return { name, amt };
}

var rows = [];

/*const data = [
  {
    name: 'Page A',
    amt: 100,
  },
  {
    name: 'Page B',
    amt: 1506,
  },
  {
    name: 'Page C',
    amt: 989,
  },
  {
    name: 'Page D',
    amt: 1228,
  },
  {
    name: 'Page E',
    amt: 1100,
  },
  {
    name: 'Page F',
    amt: 1700,
  },
];*/

//rows.push(createData("TSLA", 345));

function BarChart() {

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
      .post('https://group20-stocksimulatorv2.herokuapp.com/api/portfolios/getPortfolio', {
        "Login": login
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
         const data = response.data.StocksOwned;
         
         //loop through and createData
         for(var i = 0; i < data.length; i++)
         {
             console.log(data[i]);
             rows.push(createData(data[i].Company, data[i].Amount));
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

  //static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

    return (
      <div>
        <ComposedChart
          width={500}
          height={400}
          data={rows}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="amt" stroke="#ff7300" />
        </ComposedChart>
      </div>
    );
};

export default BarChart;