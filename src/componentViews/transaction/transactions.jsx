import React, { Component } from 'react';
import axios from 'axios';
import * as API_ROUTE  from '../../route';
import { connect } from 'react-redux';
import * as transactionsActions from '../../redux/actions/transactionsActions';
import TransactionPage from './pages/transaction-list-page';
import PropTypes from 'prop-types';


class TransactionList extends Component {
   
    state = {
     // transactions: [],
      loading: true
    };
  
  
     componentDidMount = async () =>{
       const { loadTransactions } = this.props;
       loadTransactions().catch(error =>{
       alert(`Error ${error} occured`);
  })
  }

   
     reloadTransaction = () => {
      this.componentDidMount();
    }
  
     deleteTransaction = async (id) => {
      const url = API_ROUTE.ALAT_TRANSACTION_API +`DeleteTransaction?Id=${id}`;
      await axios.delete(url).then(response => {
        console.log(response.data);
      });
      this.reloadTransaction();
    }
    
  
    transactionDetail = async (id) =>{
        
        const url = API_ROUTE.ALAT_TRANSACTION_API + `GetById?Id=${id}`;
        try {
            await axios.get(url).then(response => {
                let data = response.data;
             
                if(data !== null){
                  this.props.history.push(`/transaction-details/${id}`)
                }
              })

      } catch (error) {
            console.log(error);
        }
    }
  
    render() {

      const keyPath = "";
      let dataString = "";
     let dataArray = this.props.transactions;
     if(dataArray.length === 0){
      
       dataString = (
            <div style={{margin:'20% 0% 0% 40%'}}>
               <img src='cspinner.gif' alt='' height='70' width='70'/>
            </div> 
       )
     }
     else {
        dataString =  
        
            <Transaction
              transListData={dataArray}
              path={keyPath}
              deleteAction={this.deleteTransaction}
              transDetail={this.transactionDetail}
            />
  
     }
     return (
         <div>
             {dataString}
         </div>
     )
    }
    
  }

  
class Transaction extends Component{
    render(){
        return(
            <TransactionPage dataSets={this.props} />
        );
    }

   
}

Transaction.protoTypes = {
  transactions: PropTypes.array.isRequired,
  loadTransactions: PropTypes.func.isRequired
};

const mapDispatchToProps = {
     loadTransactions: transactionsActions.loadTransactions
}

function mapStateToProps(state){

   return {
       transactions : state.transactions
   }
}


 export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);