import React, { Component } from 'react';
import axios from 'axios';
import TransactionPage from './pages/transaction-list-page';


class TransactionList extends Component {
   
    state = {
      transactions: []
    };
  
     componentDidMount = async () =>{
  
      const url = `http://localhost:5000/api/AlatPayTransaction/GetAll`;
     
  
      await axios.get(url).then(response => {
        this.setState({
          transactions: response.data
        });
      });
    }
     reloadTransaction = () => {
      this.componentDidMount();
    }
  
     deleteTransaction = async (id) => {
      const url = `http://localhost:5000/api/AlatPayTransaction/DeleteTransaction?Id=${id}`;
      await axios.delete(url).then(response => {
        console.log(response.data);
      });
      this.reloadTransaction();
    }
  
    render() {
       
      const { transactions } = this.state;
      const keyPath = "";
      return (
        <div>
          <Transaction
            transListData={transactions}
            path={keyPath}
            deleteAction={this.deleteTransaction}
          />
        </div>
      );
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