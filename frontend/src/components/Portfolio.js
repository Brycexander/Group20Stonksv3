import React, { PureComponent, useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PageTitle.css';
import axios from 'axios'

function createData(name,  value ) {
  return { name, value };
}

var rows = [];

function Portfolio()
{
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
             rows.push(createData(data[i].Company, data[i].TotalValue));
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

    return(
        <div>
          <center>
        <h1 className="display-4 chart1">Portfolio</h1>
        <PieChart width={400} height={300}>
          <Pie data={rows} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#A032B6" label />
        </PieChart>
        </center>
        </div>
    );
};

export default Portfolio;