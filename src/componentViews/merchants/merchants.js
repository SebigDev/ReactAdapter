import React,{Component} from "react";
import {MERCHANT_URL}  from '../../route';
import axios from 'axios';
import MerchantPage from "./merchantPage";
import { connect } from 'react-redux';

class Merchants extends Component {

     state = {
         merchants: []
     };

     componentDidMount = () =>{
        this.fetchMerchants();
     };

    fetchMerchants = async () => {
       const url = MERCHANT_URL + "Merchants";
        await axios.get(url).then(res =>{
           this.setState({
               merchants : res.data,
           })
       })

    };

    addMerchant = () => {
      window.location.href = "/add-merchant";
    }

    render(){
        const {merchants} = this.state;
        return (
            <div>
                 <MerchantPage
                  merchants={merchants}
                  addMerchant={this.addMerchant}
                  />
            </div>
        );
    }
}

function mapStateToProps(state){
   return {
       merchants : state.merchants
   }
}

function mapDispatchToProps(){

}

export default connect(mapStateToProps, mapDispatchToProps) (Merchants);