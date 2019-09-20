 import axios from 'axios';
   export const BASE_URL = "http://localhost:5000";

   export const  MERCHANT_API = BASE_URL + "/api/Merchant/";

   export const  ALAT_TRANSACTION_API =  BASE_URL + "/api/AlatPayTransaction/";



   //endpoint functions

   //transactions
   export const  getTransactions = async() =>{
      const url = ALAT_TRANSACTION_API + `GetAll`;
      return await axios.get(url);
   };

   export const createAlatTransaction = async(data) =>{
      const url = ALAT_TRANSACTION_API + `CreateAlatPayTransaction`;
  
      try {
           await axios.post(url, data);
           window.location.href = '/transactions';
  
      } catch (error) {
        console.log(error);
      }
   }




   //merchants
  export const getMerchants = async () => {
    const url = MERCHANT_API + "Merchants";
     return await axios.get(url);
 };

export const saveMerchant = async (data) =>{
  
  const url = MERCHANT_API + 'RegisterMerchant';

 await axios.post(url, data).then(res => {
     if(res.data != null){
         window.location.href = "/merchants";
     }else{
         alert("Error Occured");
     } 
 })
}
