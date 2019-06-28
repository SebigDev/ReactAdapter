import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';
import Home from './componentViews/home';
import AddTransaction from './componentViews/transaction/add-transaction';
import TransactionList from './componentViews/transaction/transactions';
import NavBarPage from './componentViews/layout/navbar';
import Login from './componentViews/login';
import Logout from './componentViews/logout';
import Register from './componentViews/register';
import TransactionDetails from './componentViews/transaction/transaction-detail';

export default class App extends Component {
  render() {
    return (
     <Fragment>
         <NavBarPage />
         <Route exact path="/" component={Home} />
         <Route path="/add-transaction" component={AddTransaction} />
         <Route path="/transactions" component={TransactionList} />
         <Route path="/transaction-details/:id" component={TransactionDetails} />
         <Route path="/login" component={Login} />
         <Route path="/logout" component={Logout} />
         <Route path="/register" component={Register} />
     </Fragment>
    )
  }
}
