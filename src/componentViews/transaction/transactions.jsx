import React, { Component } from 'react';
import axios from 'axios';
import {ALAT_TRANSACTION_URL}  from '../../route';
import TransactionPage from './pages/transaction-list-page';


class TransactionList extends Component {
   
    state = {
      transactions: [],
      loading: true
    };
  
     componentDidMount = async () =>{
  
      const url = ALAT_TRANSACTION_URL + `GetAll`;
     
  
      await axios.get(url).then(response => {
        this.setState({
          transactions: response.data,
          loading: false
        });
      });
    }
     reloadTransaction = () => {
      this.componentDidMount();
    }
  
     deleteTransaction = async (id) => {
      const url = ALAT_TRANSACTION_URL +`DeleteTransaction?Id=${id}`;
      await axios.delete(url).then(response => {
        console.log(response.data);
      });
      this.reloadTransaction();
    }
    
  
    transactionDetail = async (id) =>{
        
        const url = ALAT_TRANSACTION_URL + `GetById?Id=${id}`;
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
       
      const { transactions } = this.state;
      const keyPath = "";
      let data;

     if(this.state.loading){
      
       data = (
            <div style={{margin:'20% 0% 0% 40%'}}>
               <img src='cspinner.gif' alt='' height='70' width='70'/>
            </div> 
       )
     }
     else {
        data =  
            <div>
              <Transaction
                transListData={transactions}
                path={keyPath}
                deleteAction={this.deleteTransaction}
                transDetail={this.transactionDetail}
              />
            </div>
        
     }
     return (
         <div>
             {data}
             
         </div>
     )
    }
    
  }

  
class Transaction extends Component{
    render(){
       
        return(
            <TransactionPage data={this.props} />
        );
    }
}


  export default TransactionList