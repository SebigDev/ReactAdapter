import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './componentViews/home';
import AddTransaction from './componentViews/transaction/add-transaction';
import TransactionList from './componentViews/transaction/transactions';
import NavBarPage from './componentViews/layout/navbar';
import Login from './componentViews/login';
import Logout from './componentViews/logout';
import Register from './componentViews/register';
import TransactionDetails from './componentViews/transaction/transaction-detail';
import Auth from './Auth/Auth';
import CallBack from './callback';
import Merchants from './componentViews/merchants/merchants';
import AddMerchant from './componentViews/merchants/addMerchant';
import PageNotFound from './componentViews/PageNotFound';

export default class App extends Component {
    constructor(props){
        super(props)
        this.auth = new Auth(this.props.history);

    }
  render() {

    return (
     <Fragment>
         <NavBarPage />
         <Switch>
            <Route exact path="/" render={props => <Home auth={this.auth} {...props}/>} />
            <Route  path="/callback" render={props => <CallBack auth={this.auth} {...props}/>} />
            <Route path="/add-transaction" component={AddTransaction} />
            <Route path="/transactions" component={TransactionList} />
            <Route path="/transaction-details/:id" component={TransactionDetails} />
            <Route path="/login" component={Login} />
            <Route path='/merchants' component={Merchants} />
            <Route path='/add-merchant' component={AddMerchant} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route component={PageNotFound} />
         </Switch>
     </Fragment>
    )
  }
}
