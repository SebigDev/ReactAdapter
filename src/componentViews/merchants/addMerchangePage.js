import React from 'react'

function AddMerchantPage(props){
    return(
        <div>
        <form 
             style={{width: "50%", marginLeft: "5px"}} 
             onSubmit={props.saveMerchant}>
            <div>
                <h3>Add Merchant</h3>
            </div>
         <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input
              type="email"
              className="form-control" 
              name="emailAddress"
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              placeholder="Enter email" 
              defaultValue={props.emailAddress}
              onChange={props.handleFormChange}
              required
               />
             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>
         <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input 
             type="password" 
             className="form-control" 
             name="password"
             id="exampleInputPassword1" 
             placeholder="Password"
             defaultValue={props.password}
             onChange={props.handleFormChange}
             required
              />
         </div>
         <div className="form-group form-check">
             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
         </div>
         <button 
         type="submit" 
         className="btn btn-outline-primary" 
         >ADD</button>
         </form>
 
       </div>
    );
   
}
export default AddMerchantPage;