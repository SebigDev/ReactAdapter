import React from 'react';

function AddTransactionPage(props){
    return (
      <div style={{ width: "50%"}}>
        <div className="container-fluid">
          <h4>Create Transaction</h4>
          <form onSubmit={props.handler}>
            <div className="form-group">
              <label htmlFor="bankDetails">Bank Details:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Bank details"
                defaultValue={props.transData.bankDetails}
                onChange={props.setChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountType">Account Type:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Account Type"
                defaultValue={props.transData.accountType}
                onChange={props.setChange}
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
            >
              Make Payment
            </button>
          </form>
        </div>
      </div>
    );
}
export default AddTransactionPage
