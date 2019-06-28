import React, { Component } from 'react';
import axios from 'axios';

class TransactionDetails extends Component{
    
     state = {
        bankDetails: '',
        accountType: '',
        dateOfTransaction: '',
        transactionStatus: ''
     }

     componentDidMount = async () =>{
        const transactionId = this.props.match.params.id;
        
        console.log(transactionId)
            const url = `http://localhost:5000/api/AlatPayTransaction/GetById?Id=${transactionId}`;
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
        
}}

function TransactionDetailPage(props){

    return (
      <div className="card" style={{ width: "50%", marginLeft:'5%' }}>
        <img className="card-img-top" src="..." alt="" />
        <div className="card-body">
          <h3 className="card-title">{props.bankDetails}</h3>
          <p className="card-text">{props.accountType}</p>
          <p className="card-text">{props.dateOfTransaction.toLocaleDateString()}</p>
          <p className="card-text">{props.transactionStatus}</p>
          <button href="#" className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    );
}

export default TransactionDetails