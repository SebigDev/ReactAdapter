import React, { Component } from 'react';

class Api extends Component {
    state = {
        transactions: [],
    }

    componentDidMount() {
        const url = 'http://localhost:5000/api/AlatPayTransaction/GetAll';

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    transactions: response,
                   
                })
            })
       
    }
    render() {
        const { transactions } = this.state
        const response = transactions.map((entry, index) => {
            return (
                <div>
                    <p className="btn btn-default">Hello</p>

                    <li key={index}>{entry.bankDetails} {entry.accountType} {entry.transactionStatus}</li>
                </div>
                );
        })
        return response;
    }
}
export default Api