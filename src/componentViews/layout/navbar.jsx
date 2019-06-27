import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class NavBarPage extends Component{
    render(){
        
        return (
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/add-transaction">Add Transaction</Link></li>
          </ul>
        );
    }
}
