import React, {Component} from 'react';
var Redirect = require("react-router").Redirect;


export default class TransactionPage extends Component{
  
   render(){
     const token = JSON.parse(localStorage.getItem("tokenModel"));
     
    if(token === null){
      return (<Redirect to="/login" />);
   } else{
    const res = this.props.dataSets.transListData.data;
   
    const disData = res.map(entry => (
      <TransactionDetail
        entry={entry}
        key={entry.id}
        path={this.props.dataSets.path}
        deleteBtn={this.props.dataSets.deleteAction}
        viewDetail={this.props.dataSets.transDetail}
      />
    ));
    return (
     <div>
         {disData}
     </div>
    );
}}
}


function TransactionDetail(props) {
  return(
    <div className="col-lg-4" style={{padding:'5px'}}>
    <div className="card">
      <img className="card-img-top" src="..." alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.entry.bankDetails}</h5>
        <p className="card-text">{props.entry.accountType}</p>
        <button onClick={() => props.viewDetail(props.entry.id)} className="btn btn-primary outline">
          View Details
        </button>
        &nbsp;
        &nbsp;
        <button
          className="btn btn-outline-danger"
          onClick={() => props.deleteBtn(props.entry.id)}
        >
          Delete Transaction
        </button>
      </div>
    </div>
  </div>
  )
}


