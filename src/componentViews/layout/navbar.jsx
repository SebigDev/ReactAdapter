import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class NavBarPage extends Component{

   
    render(){
        
        const tokenRef = JSON.parse(localStorage.getItem('tokenModel'));

        const UserLogin = () => {
        
           if(tokenRef === null){
            return (
              <div>
                <li style={{ float: "right" }}>
                  <Link to="/login">Login</Link>
                </li>
                <li style={{ float: "right" }}>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            );
           }else{
              return (
                <li style={{ float: "right" }}>
                  <Link to="/logout">Logout</Link>
                </li>
              ); 
           }
        }
        
        return (
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/add-transaction">Add Transaction</Link></li>
            <UserLogin />
          </ul>
        );
    }
}
