import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './app';
import  configureStore from './redux/configureStore';
import { Provider as ReduxProvider} from 'react-redux';



const store = configureStore();

const routing = (

  <ReduxProvider store={store}>
      <Router>
          <Route component={App} />
      </Router>
   </ReduxProvider>
   
    
)
const rootElement = document.getElementById('root');

ReactDOM.render(routing,rootElement);
