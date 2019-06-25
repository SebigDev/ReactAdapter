import React, { Component, Fragment} from 'react';
import axios from 'axios';
import AddTransactionPage from './add-transaction';
import TransactionListPage from './transaction-list';


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
    bankDetails: "",
    accountType: "",
    dateOfTransaction: new Date(),
    traansactionStatus: false
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.saveTransaction();
  }

  async saveTransaction() {
    const data = this.state;
    const url = `http://localhost:5000/api/AlatPayTransaction/CreateAlatPayTransaction`;

    try {
      var response = await axios.post(url, data);
      const bool = response.data;
      if (bool === true) {
        console.log("Created Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div style={{ marginLeft: "30%" }}>
        <AddTransactionPage
          handler={this.handleSubmit}
          transData={this.state}
          setChange={this.handleChange}
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

  async componentDidMount() {
    const url = `http://localhost:5000/api/AlatPayTransaction/GetAll`;
   

    await axios.get(url).then(response => {
      this.setState({
        transactions: response.data
      });
    });
  }
  async reloadTransaction() {
    this.componentDidMount();
  }

  async deleteTransaction(id) {
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
        <TransactionListPage
          transListData={transactions}
          path={keyPath}
          deleteAction={this.deleteTransaction}
        />
      </div>
    );
  }
}


export default class AlatPay extends Component{
    render(){
        return (
          <Fragment>
            <Header />
            <AddTransaction />
            <TransactionList />
            <br />
            <br />
  
          </Fragment>
        );
    }
}