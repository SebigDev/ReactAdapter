import React, {Component} from 'react';

class AddTransactionPage extends Component{
      state = {
        text : 'Make Payment'
      }
      handleText = (text) =>{
       
          this.setState({text})       
      }
   render(){
     const {text} = this.state
    return (
      <div style={{ width: "40%" }}>
        <div className="container-fluid">
          <h4>Create Transaction</h4>
          <form onSubmit={this.props.handler}>
            <div className="form-group">
              <label htmlFor="bankDetails">Bank Details:</label>
              <input
                type="text"
                className="form-control"
                name="bankDetails"
                placeholder="Enter Bank details"
                defaultValue={this.props.bankDetails}
                onChange={this.props.handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountType">Account Type:</label>
              <input
                type="text"
                className="form-control"
                name="accountType"
                placeholder="Enter Account Type"
                defaultValue={this.props.accountType}
                onChange={this.props.handleFormChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-default"
              style={{
                width: "50%",
                backgroundColor: "darkred",
                color: "white"
              }}
              onClick={e => {
                this.handleText("Processing...");
              }}
            >
              {text}
            </button>
          </form>
        </div>
      </div>
    );
   }
}
export default AddTransactionPage
