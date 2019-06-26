import React, { Component, Fragment} from 'react';
import AddTransaction from './transaction/add-transaction';
import TransactionList from './transaction/transactions';


function Header(){
    const title = 'Payment Platform'
    return (
        <div className="jumbotron">
             <h2 style={{ color: 'darkred', padding: '5px', textAlign: 'center'}}>
             {title}
             </h2>
        </div>
    )
}

export default class AlatPay extends Component{
  
    render(){

        return (
          <Fragment>
            <Header />
            <AddTransaction />
            <TransactionList />
          </Fragment>
        );
    }
}