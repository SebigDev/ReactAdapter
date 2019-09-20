import React, { Component } from 'react'
import AddMerchantPage from './addMerchangePage';
import { connect } from 'react-redux';
import * as merchantActions from '../../redux/actions/merchantsActions';
import PropTypes from 'prop-types';

 class AddMerchant extends Component {
     state = {
        emailAddress: "",
        password: ""
         
     };
     handleFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
      };

    saveMerchant = (event) =>{
        event.preventDefault();
        const { createMerchant } = this.props;
        const _data = this.state;
        createMerchant(_data).catch(err => {
            alert(`Error: ${err} occured`);
        })
    }
  render() {
      const {emailAddress, password} = this.state;
    return (
      <div>
          <AddMerchantPage 
          emailAddress={emailAddress}
          password={password}
          handleFormChange={this.handleFormChange}
          saveMerchant={this.saveMerchant}
          />
      </div>
    )
  }
}

AddMerchant.protoTypes = {
   createMerchant: PropTypes.func.isRequired,
   merchant: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  
  createMerchant : merchantActions.createMerchant
}

function mapStateToProps(state){

    return {
        merchants : state.merchants
    }
 }


export default connect(mapStateToProps, mapDispatchToProps) (AddMerchant);