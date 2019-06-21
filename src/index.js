import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Apps from './Components/Test';
import Transaction from './Components/User';

class App extends Component {
    render() {

        return(
            <div className="App">
                  <Transaction /> 
            </div>
        )
    }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

