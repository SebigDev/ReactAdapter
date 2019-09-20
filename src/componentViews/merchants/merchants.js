import React,{Component} from "react";
import MerchantPage from "./merchantPage";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as merchantsActions from '../../redux/actions/merchantsActions';



class Merchants extends Component {

     componentDidMount = async () =>{ 
         const { loadMerchants } = this.props;

         loadMerchants().catch(error => {
             alert(`${error} occured`)
         })
     };

    addMerchant = () => {
      window.location.href = "/add-merchant";
    }

    render(){
        let dataArray = this.props.merchants;
        return (
            <div>
                 <MerchantPage
                  merchantList={dataArray}
                  addMerchant={this.addMerchant}
                  />
            </div>
        );
    }
}

Merchants.propTypes = {
    loadMerchants: PropTypes.func.isRequired,
   // merchants: PropTypes.array.isRequired
}

function mapStateToProps(state){
   return {
       merchants : state.merchants
   }
}

const mapDispatchToProps = {
       loadMerchants: merchantsActions.loadMerchants,
 }


export default connect(mapStateToProps, mapDispatchToProps)(Merchants);