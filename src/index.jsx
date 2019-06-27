import React, {Fragment}from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './app'



const routing = (
   
      <Router>
        <Fragment>
          <Route component={App} />
        </Fragment>
      </Router>
    
)
const rootElement = document.getElementById('root');

ReactDOM.render(routing,rootElement);
