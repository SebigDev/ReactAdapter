import React, { Component } from 'react';
import axios from 'axios';
import * as API_ROUTE  from '../route';
export default class Login extends Component {

        state = {
            emailAddress: '',
            password: '',
    
            text: 'Login'
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
            const url =  API_ROUTE.MERCHANT_API +`MerchantLogin?emailAddress=${this.state.emailAddress}&password=${this.state.password}`;
        
            try {
                var response = await axios.post(url, data);
                
                if(response){
                  
                  window.location.href = '/transactions';
                  localStorage.setItem('tokenModel', JSON.stringify(response.data));
                }
        
            } catch (error) {
              if(response === undefined){
                  alert(`Authenticating ${this.state.emailAddress} failed!!!` )
              }
              console.log(error);
              this.setState({
                  text : 'Login'
              })
            }
          }
      render() {
          const {emailAddress,password, text} = this.state
        return (
          <div>
            <h2>Merchant Login</h2>
    
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
                      onChange={this.handleFormChange}
                      name="password"
                      required
                      placeholder="Your password..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-default"
                  style={{
                    width: "50%",
                    backgroundColor: "lightgreen",
                    color: "white",
                    marginLeft: '30%',
                    
                  }}
                  onClick={e => {
                    this.handleText("Processing...");
                  }}
                >
                  {text}
                </button>
              </form>
            </div>
          </div>
    )
  }
}
