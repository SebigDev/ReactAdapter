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
             this.props.history.push('/add-transaction');
            console.log(response.data);
    
        } catch (error) {
          console.log(error);
        }
      }

       redirectToLogin(){
           const path = this.props.history.push('/login');
           console.log(path);
          return path;
      }
     
  render() {
    const handC = this.handleFormChange;
    const handS = this.handleSubmit;
    const handT = this.handleText;
    
    function UserLoggedIn(){
        const tokenRef = JSON.parse(localStorage.getItem('tokenModel'));
        const nowDate = new Date();
        const now = nowDate.toDateString();
    
        if(tokenRef === null || tokenRef === undefined){
            return (
                <RegisterPage
                emailAddress={emailAddress}
                password={password}
                text={text}
                handleFormChange={handC}
                handleSubmit={handS}
                handleText={handT}
              />
            )
        }
        if(tokenRef.expiresOn <= now){
            return(
            
                <Redirect to="/add-transaction" />
            )
        }else {
            return(
                <Redirect to="/login" />
            )
        }
        
      
        
    }
      const {emailAddress,password, text} = this.state
    return (
      <UserLoggedIn />
    );
  }
}

 class RegisterPage extends Component {
  render() {
    return (
        <div>
        <h2>Merchant Registration</h2>

        <div className="container">
          <form onSubmit={this.props.handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  id="email"
                  defaultValue={this.props.emailAddress}
                  onChange={this.props.handleFormChange}
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
                  defaultValue={this.props.password}
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
              {this.props.text}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

