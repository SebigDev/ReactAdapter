import React, { Component } from 'react';
import axios from 'axios';
import './home.css';
import {Redirect} from 'react-router';


export default class Register extends Component {
    state = {
        emailAddress: '',
        password: '',

        text: 'Register'
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.saveMerchant();
    }
    handleFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
      };
      handleText = (text) =>{
       
        this.setState({text})       
    }

    saveMerchant = async() =>{
        const data = this.state;
        const url = `http://localhost:5000/api/Merchant/RegisterMerchant`;
    
        try {
            var response = await axios.post(url, data);
             window.location.href = '/add-transaction';    
            console.log(response.data);
    
        } catch (error) {
          console.log(error);
        }
      }
     
  render() {
      const {emailAddress, password, text} = this.state;

    const tokenRef = JSON.parse(localStorage.getItem('tokenModel'));
    
    if(tokenRef === null || tokenRef === undefined){
        return (
            <div>
            <h2>Merchant Registration</h2>
    
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="email"
                      id="email"
                      defaultValue={emailAddress}
                      onChange={this.handleFormChange}
                      name="emailAddress"
                      required
                      placeholder="Your email address..."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="password"
                      id="password"
                      defaultValue={password}
                      onChange={this.props.handleFormChange}
                      name="password"
                      required
                      placeholder="Your password..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-default"
                  style={{
                    width: "50%",
                    backgroundColor: "lightgreen",
                    color: "white",
                    marginLeft: '30%',
                    
                  }}
                  onClick={e => {
                    this.handleText("Loading...");
                  }}
                >
                  {text}
                </button>
              </form>
            </div>
          </div>
        )
    }
     else {
         return (
             <Redirect to="/add-transaction" />
         )
     }
  }
}



  