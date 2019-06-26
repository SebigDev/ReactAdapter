import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import AlatPay from './componentViews/alatpay';
import AddTransaction from './componentViews/transaction/add-transaction';
import TransactionList from './componentViews/transaction/transactions';


class App extends Component {
    render() {

        return(
            <div className="App">
                  <AlatPay /> 
            </div>
        )
    }
}

const routing = (
   
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={App} />
          <Route exact path="/add-transaction" component={AddTransaction} />
          <Route exact path="/transactions" component={TransactionList} />
        </React.Fragment>
      </BrowserRouter>
    
)
const rootElement = document.getElementById('root');

ReactDOM.render(routing,rootElement);

