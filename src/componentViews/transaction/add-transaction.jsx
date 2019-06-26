import React, { Component } from 'react';
import axios from 'axios';
import AddTransactionPage from './pages/add-transaction-page'

class AddTransaction extends Component {
    state = {
      bankDetails: '',
      accountType: '',
      dateOfTransaction: new Date(),
      transactionStatus: 'pending'
    };
    
    handleFormChange = (event) => {
      this.setState({[event.target.name]: event.target.value });
    };
  
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      this.saveTransaction();
    }

     saveTransaction = async() =>{
      const data = this.state;
      const url = `http://localhost:5000/api/AlatPayTransaction/CreateAlatPayTransaction`;
  
      try {
           await axios.post(url, data);
           this.props.history.push('/transactions');
          console.log("Created Successfully");
  
      } catch (error) {
        console.log(error);
      }
    }
    render() {
        const {bankDetails, accountType} = this.state
      return (
        <div>
          <AddTransactionPage
            handler={this.handleSubmit}
            bankDetails={bankDetails}
            accountType={accountType}
            handleFormChange={this.handleFormChange}
          />
        </div>
      );
    }
  }

  export default AddTransaction