import React from 'react';
import {Link} from 'react-router-dom';

export default function MerchantPage(props){
        var data = props.merchants.map(( entry) => {
            return (
                
                <tr key={entry.id}>
                    <td><Link to=''>{entry.emailAddress}</Link></td>
                    <td>{entry.registrationDate}</td>
                </tr>
              
            )
         })
    return (
        <div>
             <div>
                   <button 
                    style={{marginTop: "10px", marginLeft: "5px"}}
                    className="btn btn-outline-primary" 
                    onClick={props.addMerchant}
                    >
                       Add Merchant
                   </button>
               </div>

          <h3>Merchant Lists with {props.merchants.length} records</h3>
          <div className="container">
                <h2>Merchant List</h2>
                          
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Email Address</th>
                        <th>Date Registered</th>
                    </tr>
                    </thead>
                    <tbody>
                      {data}
                    </tbody>
                </table>
                </div>
        </div>
      )
}
  