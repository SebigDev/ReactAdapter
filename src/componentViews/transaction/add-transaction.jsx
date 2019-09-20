import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTransactionPage from './pages/add-transaction-page';
import * as transactionsActions from '../../redux/actions/transactionsActions';
import PropTypes from 'prop-types';



class AddTransaction extends Component {
 state = {
  bankDetails : "",
  accountType : "",
  dateOfTransaction : new Date(),
  transactionStatus : 'pending'
 }
    
    handleFormChange = (event) => {
      this.setState({[event.target.name]: event.target.value });
    };

  
    handleSubmit = (event) => {
      event.preventDefault();
      const { createTransaction} = this.props;
      createTransaction(this.state).catch(err =>{
        alert(`Error ${err} occured creating transaction`);
      })
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

  AddTransaction.protoTypes = {
    createTransaction: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
  }

  function mapStateToProps(state){
    return {
       state : state
    }
  }

  const mapDispatchToProps = {
    createTransaction: transactionsActions.createTransaction
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction)