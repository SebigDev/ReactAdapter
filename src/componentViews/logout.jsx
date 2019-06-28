import React, { Component } from 'react';
import {Redirect} from 'react-router';


export default class Logout extends Component {
    ReRoute(){
       localStorage.removeItem('tokenModel');
       
    }
  render() {
      
    return (
      <div>
        {this.ReRoute()};
        <Redirect to="/login" />
      </div>
    )
  }
}
