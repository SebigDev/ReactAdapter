import React, { Component } from 'react';
import axios from 'axios';
import {ALAT_TRANSACTION_URL} from '../../route';

class TransactionDetails extends Component{
    
     state = {
        bankDetails: '',
        accountType: '',
        dateOfTransaction: '',
        transactionStatus: ''
     }

     componentWillMount = async () =>{

        const transactionId = this.props.match.params.id;
        if(JSON.parse(localStorage.getItem("tokenModel")) === null){
           window.location.href = "/login";
        }
        
        else{
          const url = ALAT_TRANSACTION_URL + `GetById?Id=${transactionId}`;
          try {
              await axios.get(url).then(response => {
                  let data = response.data;
               
                  if(data !== null){
                   this.setState({
                       bankDetails : data.bankDetails,
                       accountType : data.accountType,
                       dateOfTransaction: data.dateOfTransaction,
                       transactionStatus : data.transactionStatus
                   })
                  }
                })
  
          } catch (error) {
              console.log(error);
          }
        }
        
          
    }
       
    render(){
       const {bankDetails,accountType,dateOfTransaction,transactionStatus} = this.state
        return (
          <TransactionDetailPage
            bankDetails={bankDetails}
            accountType={accountType}
            dateOfTransaction={dateOfTransaction}
            transactionStatus={transactionStatus}
          />
        );
        
}
}


function TransactionDetailPage(props){

    return (
        <div>
        <div className="jumbotron text-center">
          <h1>{props.bankDetails}</h1>
          <p>Make your Transaction in a seamless and perfect way possible</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h3>{props.bankDetails}</h3>
              <p>
                <b> {props.bankDetails} </b> operating on <b>{props.accountType}</b> offers flexible transaction rate and secure payment
              </p>
              <p>
                The <b> {props.bankDetails}</b> created on <b>{props.dateOfTransaction}</b> has transaction 
                status of <b>{props.transactionStatus}</b>
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Column 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit...
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TransactionDetails