import React, {Component, Fragment} from 'react';
import axios from 'axios';

export default class Transaction extends Component{

    title = 'Alat Pay Transaction'
   render(){
    return (
        <Fragment>
            <h2 className="container" style={
                { color: 'darkred',}
                }>{this.title}</h2>
            <AddTranasction  />
            <TransactionList  />
        </Fragment>
    );
   }
}

class TransactionList extends Component {

    deleteTransaction = async (id) =>{
        const url = `http://localhost:5000/api/AlatPayTransaction/DeleteTransaction?Id=${id}`;
         await axios.delete(url)
         .then(response => {
            console.log(response.data) ;
         });
         this.reloadTransaction();
         
    }

    reloadTransaction = async () => {
       this.componentDidMount();
    }
   

    state = {
        transactions: [],
    }

 
     componentDidMount = async () => {
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
         const keyPath = '';
        let response = transactions.map((entry, index) => 
            
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="..." alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">{entry.bankDetails}</h5>
                                        <p className="card-text">{entry.accountType}</p>
                                        <a href={keyPath} className="btn btn-primary" key={index}>View Details</a>
                                        <button className="btn btn-primary" onClick={e => this.deleteTransaction(entry.id)}>Delete Transaction</button>
                                    </div>
                                </div>
                                </div>
            );
        return (
             <div>
                 <div className="container">
                        <div className="row">
                            {response}
                        </div>
                    </div>
             </div>
             
        );
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

    saveTransaction = async () => {
        const data = this.state;
       const url = 'http://localhost:5000/api/AlatPayTransaction/CreateAlatPayTransaction';

       try {
          var response = await axios.post(url,data);
          const bool = response.data;
          if(bool === true){

          }
          
       } catch (error) {
           console.log(error)
       }
   }

   render(){
       
    return(
        <div style={{width: '50%'}}>
          
            <div className="container-fluid">
            <h4>Create Transaction</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bankDetails">Bank Details:</label>
                    <input type="text" 
                        className="form-control"
                        name="bankDetails"
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
                        name="accountType"
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
