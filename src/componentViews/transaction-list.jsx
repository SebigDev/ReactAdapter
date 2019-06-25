import React from 'react';
 
export default function TransactionListPage(props){
    const res = props.transListData.map((entry, index) =>   
        <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="" />
          <div className="card-body">
            <h5 className="card-title">{entry.bankDetails}</h5>
            <p className="card-text">{entry.accountType}</p>
            <a href={props.path} className="btn btn-primary" key={index}>
              View Details
            </a>
            &nbsp;
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={e => props.deleteAction(entry.id)}
            >
              Delete Transaction
            </button>
          </div>
        </div>
      </div>
        )
    return (
     <div>
         {res}
     </div>
    );
}

