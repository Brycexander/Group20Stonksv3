import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PageTitle.css';
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form, FormControl} from 'react-bootstrap';

function Chart(){
const data = [
  {
    name: '00:00',
    uv: 4000,
    investment: 2400,
    amt: 2400,
  },
  {
    name: '03:00',
    uv: 3000,
    investment: 1398,
    amt: 2210,
  },
  {
    name: '06:00',
    uv: 2000,
    investment: 9800,
    amt: 2290,
  },
  {
    name: '09:00',
    uv: 2780,
    investment: 3908,
    amt: 2000,
  },
  {
    name: '12:00',
    uv: 1890,
    investment: 4800,
    amt: 2181,
  },
  {
    name: '15:00',
    uv: 2390,
    investment: 3800,
    amt: 2500,
  },
  {
    name: '18:00',
    investment: 2000,
    amt: 2100,
  },
  {
    name: '21:00',
    investment: 6000,
    amt: 2100,
  },
  {
    name: '24:00',
    investment: 1000,
    amt: 2100,
  },
];

    return (
      <div> 
          <h1 class="display-4 chart">Today</h1>
          <br></br>
        <LineChart className="move1"
          width={700}
          height={298}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#6AC94C " activeDot={{ r: 8 }} />
        </LineChart>
        </div>
    );
}

export default Chart;