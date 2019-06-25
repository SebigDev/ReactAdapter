import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Apps from './Components/Test';
import AlatPay from './componentViews/alatpay';

class App extends Component {
    render() {

        return(
            <div className="App">
                  <AlatPay /> 
            </div>
        )
    }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

