const { validationResult } = require('express-validator/check');
const Order = require('../model/order');

class OrderController{

    placeOrder = (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           return res.status(200).send({success:false,message:"Validation Failed",data:errors.array()});
        }
        try{
            const data = req.body;
            Order.placeOrder(data,async (err, resdata)=>{
                  if(err){
                    return res.json(helper.showDatabaseErrorResponse("Internal db error!", err));
                  }else{
                    return res.json(helper.showSuccessResponse('Order placed!', resdata));
                  }
            })
        }catch(error){
            res.json(helper.showInternalServerErrorResponse('Internal server error!'));
        }
    }
}

module.exports = OrderController;