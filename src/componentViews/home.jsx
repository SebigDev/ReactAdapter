import React, { Component } from 'react';



export default class Home extends Component {
   render(){
  
       return (
         <div>
           <div className="jumbotron text-center">
             <h1>Payment Gateway</h1>
             <p>Make your Transaction in a seamless and perfect way possible</p>
           </div>
           <div className="container">
             <div className="row">
               <div className="col-sm-4">
                 <h3>Column 1</h3>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing
                   elit...
                 </p>
                 <p>
                   Ut enim ad minim veniam, quis nostrud exercitation
                   ullamco laboris...
                 </p>
                 <button className="btn btn-success" onClick={this.props.auth.login}>Login</button>
               </div>
               <div className="col-sm-4">
                 <h3>Column 2</h3>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing
                   elit...
                 </p>
                 <p>
                   Ut enim ad minim veniam, quis nostrud exercitation
                   ullamco laboris...
                 </p>
               </div>
               <div className="col-sm-4">
                 <h3>Column 3</h3>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing
                   elit...
                 </p>
                 <p>
                   Ut enim ad minim veniam, quis nostrud exercitation
                   ullamco laboris...
                 </p>
               </div>
             </div>
           </div>
         </div>
       );
   }
 
}


