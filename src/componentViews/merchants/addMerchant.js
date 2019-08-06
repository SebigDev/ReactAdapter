import React, { Component } from 'react'
import { MERCHANT_URL } from '../../route';
import axios from 'axios';
import AddMerchantPage from './addMerchangePage';
import { connect } from 'react-redux';

 class AddMerchant extends Component {
     state = {
        emailAddress: "",
        password: ""
         
     };
     handleFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
      };

     saveMerchant = async (event) =>{
         event.preventDefault();
       const url = MERCHANT_URL + 'RegisterMerchant';
       const data = this.state;
      
       await axios.post(url, data).then(res => {
           if(res.data != null){
               window.location.href = "/merchants";
           }else{
               alert("Error Occured");
           }
       })
     }
  render() {
      const {emailAddress, password} = this.state;
    return (
      <div>
          <AddMerchantPage 
          emailAddress={emailAddress}
          password={password}
          handleFormChange={this.handleFormChange}
          saveMerchant={this.saveMerchant}
          />
      </div>
    )
  }
}
 function mapStateToProps(state, ownProps){

 }

 function mapDispatchToProps(){
     
 }

export default connect(mapStateToProps, mapDispatchToProps) (AddMerchant);