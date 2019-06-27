import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';
import Home from './componentViews/home';
import AddTransaction from './componentViews/transaction/add-transaction';
import TransactionList from './componentViews/transaction/transactions';
import NavBarPage from './componentViews/layout/navbar';
import Login from './componentViews/login';

export default class App extends Component {
  render() {
    return (
     <Fragment>
         <NavBarPage />
         <Route exact path="/" component={Home} />
         <Route path="/add-transaction" component={AddTransaction} />
         <Route path="/transactions" component={TransactionList} />
         <Route path="/login" component={Login} />
     </Fragment>
    )
  }
}
