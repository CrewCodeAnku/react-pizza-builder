const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = Schema(
   {
    blackOlive: {
        type: Object,
        default:{}
    },
    greenOlive: {
        type:Object,
        default:{}
    },
    redPepper:{
        type: Object,
        default:{}
    },
    salami: {
        type: Object,
        default:{}
    },
    tomato: {
        type: Object,
        default:{}
    },
    yellowPepper:{
        type: Object,
        default:{}
    }
  },
  {
    versionKey: false
  }
)

const Ingredient = module.exports = mongoose.model('Ingredient', ingredientSchema);

module.exports.getIngredient = function(callback) {
    Ingredient.findOne({},callback)
}

module.exports.addIngredient = function (data, callback) {
    data.createdAt = new Date();
    data.updatedAt = new Date();
    Ingredient.create(data,callback);
}