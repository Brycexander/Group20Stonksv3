import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PageTitle.css';

function Portfolio()
{

    const data02 = [
        { name: 'Tesla', value: 100 },
        { name: 'Game Stop', value: 300 },
        { name: 'AMC', value: 100 },
        { name: 'Apple', value: 80 },
      ];

    return(
        <div>
          <center>
        <h1 class="display-4 chart1">Portfolio</h1>
        <PieChart width={400} height={300}>
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#A032B6" label />
        </PieChart>
        </center>
        </div>
    );
};

export default Portfolio;