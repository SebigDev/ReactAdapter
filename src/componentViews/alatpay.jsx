import React, { Component, Fragment} from 'react';
import axios from 'axios';
import AddTransactionPage from './add-transaction';
import TransactionPage from './transaction';


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

class AddTransaction extends Component {
  state = {
    bankDetails: '',
    accountType: '',
    dateOfTransaction: new Date(),
    transactionStatus: 'pending'
  };
  
  handleBankDetailChange = (event) => {
    this.setState({bankDetails: event.target.value });
  };

  handleAccountTypeChange = event => {
    this.setState({ accountType: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.saveTransaction();
  }

   saveTransaction = async() =>{
    const data = this.state;
    const url = `http://localhost:5000/api/AlatPayTransaction/CreateAlatPayTransaction`;

    try {
         await axios.post(url, data);
         
        console.log("Created Successfully");

    } catch (error) {
      console.log(error);
    }
  }
  render() {
      const {bankDetails, accountType} = this.state
    return (
      <div>
        <AddTransactionPage
          handler={this.handleSubmit}
          bankDetails={bankDetails}
          accountType={accountType}
          setBankChange={this.handleBankDetailChange}
          setAccountChange={this.handleAccountTypeChange}
        />
      </div>
    );
  }
}

//
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
        let trans =
          this.props.transListData &&
          this.props.transListData.length > 0 ? (
            <TransactionPage data={this.props} />
          ) : (
            <ErrorPage />
          );
        return <div>{trans}</div>;
    }
}
function ErrorPage(){
    return(
        <div className="card">
             <h3 style={{color:'darkred'}}>
                 No Transaction lists
             </h3>
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