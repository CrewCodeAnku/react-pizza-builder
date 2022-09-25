const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema(
   {
    ingredients: {
        type: Object,
        default:{}
    },
    price: {
        type:Number,
        default:0
    },
    customer:{
        type: Object,
        default:{}
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
  },
  {
    versionKey: false
  }
)

const Order = module.exports = mongoose.model('Order', orderSchema);

module.exports.placeOrder = function (data, callback) {
    data.createdAt = new Date();
    data.updatedAt = new Date();
    Order.create(data,callback);
}