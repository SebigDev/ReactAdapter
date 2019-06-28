import React, {Component} from 'react';


export default class TransactionPage extends Component{
   render(){
    const res = this.props.data.transListData.map(entry => (
      <TransactionDetail
        entry={entry}
        key={entry.id}
        path={this.props.data.path}
        deleteBtn={this.props.data.deleteAction}
        viewDetail={this.props.data.transDetail}
      />
    ));
    return (
     <div>
         {res}
     </div>
    );
}
}


function TransactionDetail(props) {
  return(
    <div className="col-lg-4" style={{padding:'5px'}}>
    <div className="card">
      <img className="card-img-top" src="..." alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.entry.bankDetails}</h5>
        <p className="card-text">{props.entry.accountType}</p>
        <button onClick={e => props.viewDetail(props.entry.id)} className="btn btn-primary">
          View Details
        </button>
        &nbsp;
        &nbsp;
        <button
          className="btn btn-danger"
          onClick={e => props.deleteBtn(props.entry.id)}
        >
          Delete Transaction
        </button>
      </div>
    </div>
  </div>
  )
}