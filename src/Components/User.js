import React, {Component, Fragment} from 'react';
import axios from 'axios';

class Transaction extends Component{

    title = 'Alat Pay Transaction'
   render(){
    return (
        <Fragment>
            <h2 className="container" style={
                { color: 'darkred',}
                }>{this.title}</h2>
            <AddTranasction  />
            <TransactionList />
        </Fragment>
    );
   }
}

class TransactionList extends Component {

    state = {
        transactions: [],
    }

    async componentDidMount() {
        const url = 'http://localhost:5000/api/AlatPayTransaction/GetAll';

        await axios.get(url)
            .then(response => {
                this.setState({
                    transactions: response.data,
                })
            })
       
    }
    render() {
        const { transactions } = this.state
        const response = transactions.map((entry, index) => {
            return (
                <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="..." alt='' />
                                <div className="card-body">
                                    <h5 className="card-title">{entry.bankDetails}</h5>
                                    <p className="card-text">{entry.accountType}</p>
                                    <a href='https://api,github.com' className="btn btn-primary" key={index}>View Details</a>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                );
        })
        return response;
    }
    
}



class AddTranasction extends Component{
    state = {
         bankDetails: '',
         accountType: '',
         dateOfTransaction: new Date(),
         traansactionStatus: false
    }
   
    
    handleSubmit = (event) => {
       event.preventDefault(); 
       
       this.saveTransaction();
     
    }

    saveTransaction = () => {
        const data = this.state;
       const url = 'http://localhost:5000/api/AlatPayTransaction/CreateAlatPayTransaction';
       try {
           axios.post(url,data);
       } catch (error) {
           console.log(error)
       }
   }

   render(){
       
    return(
        <div style={{width: '50%'}}>
          
            <div className="container">
            <h4>Create Transaction</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bankDetails">Bank Details:</label>
                    <input type="text" 
                        className="form-control"
                        placeholder="Enter Bank details" 
                        defaultValue={this.state.bankDetails}
                        onChange={event => this.setState({bankDetails : event.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountType">Account Type:</label>
                    <input type="text" 
                        className="form-control"
                        placeholder="Enter Account Type" 
                        defaultValue={this.state.accountType}
                        onChange={event => this.setState({accountType : event.target.value})}
                        required
                        />
                </div>
                <button type="submit" className="btn btn-default" style={
                    {
                        width: '50%', 
                        backgroundColor: 'darkred',
                        color: 'white'}
                    }
                    >Make Payment</button>
            </form>
            </div>
        </div>
    );
   }
}

export default Transaction