import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PageTitle.css';
import { Button,  ButtonGroup, DropdownButton, MenuItem,Navbar, Nav, NavItem, NavDropdown, Jumbotron, Container, Row, Col, InputGroup, Form, FormControl} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'

function Recent()
{

    return(
        <div>
            <Paper>
                <center>
            <h1 class="display-3">Investing</h1>
            <h2 class="display-7" className="size">$3,270</h2>
            <h3 class="display-5">On April 4, 2021</h3>
            <br>
            </br>
            <h4>Recent Deposits</h4>
            </center>
            </Paper>
        </div>
    );

};

export default Recent;