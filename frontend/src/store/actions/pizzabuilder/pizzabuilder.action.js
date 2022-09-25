import * as actionTypes from './pizzabuilder.actiontype';
import PizzaBuilderService from '../../services/PizzaBuilderService';

export const placeOrder = (params) => {
    return async dispatch => {
        function placeOrderFail(message) {
            dispatch({ 
                type: actionTypes.PLACE_ORDER_FAIL,
                message:message
            });
            return {success:false,error:message}
        }
        function placeOrderSuccess(message) {
            dispatch({ 
                type:actionTypes.PLACE_ORDER_SUCCESS,
                message:message
            })
            return {success:true,message:message};
        }
        try {
            dispatch({ 
                type: actionTypes.PLACE_ORDER_START 
            });
            let pizzaservice = new PizzaBuilderService();
            const data = await pizzaservice.placeOrder(params).then((res)=>{
               if(res.data.success){
                   return placeOrderSuccess(res.data.message);
               }else{
                   return placeOrderFail(res.data.message); 
               }
           });
           return data;
        }catch(error){
            if(error.response){
                return placeOrderFail(error.response.data.message);
            }else{
                return placeOrderFail("Something went wrong!");
            }
        }
    }
}
