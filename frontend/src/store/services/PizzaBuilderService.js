import API from "./Api";

class PizzaBuilderService {
    placeOrder = (reqdata)=> {
        const headers = {
           'Authorization': reqdata.token
        }
        let params = {
            ingredients: reqdata.ingredients,
            price: reqdata.price, 
            customer: {
                name:reqdata.name,
                phone:reqdata.phone,
                address:reqdata.address
            }
        }
       
        return API.post("/order",params,{headers: headers})
    }
}

export default PizzaBuilderService;