import React, { Component } from 'react'

export default class CallBack extends Component {
   
    
    componentDidMount = () => {
        
        console.log(this.props.location.hash);

        if (/access_token|id_token|error/.test(this.props.location.hash)){
            this.props.auth.handleAuthentication();

        }else {
            throw new Error("Invalid Callback Url")
        }
    }
  render() {
    return (
      <div>
         <div style={{margin:'20% 0% 0% 40%'}}>
               <img src='cspinner.gif' alt='' height='70' width='70'/>
            </div> 
      </div>
    )
  }
}
