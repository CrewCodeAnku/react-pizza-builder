const Ingredient = require('../model/ingredient');

class IngredientController{

    getIngredient = (req, res) => {
        try{
            Ingredient.getIngredient(async (err, resdata)=>{
                  if(err){
                    return res.json(helper.showDatabaseErrorResponse("Internal db error!", err));
                  }else{
                      if(resdata){
                        return res.json(helper.showSuccessResponse('Ingredient data!', resdata));
                      }else{
                          let data = {
                            blackOlive:{
                                price: 10,
                                title: "Black Olive"
                            },
                            greenOlive:{
                                price: 10,
                                title: "Green Olive"
                            },
                            redPepper:{
                                price: 20,
                                title: "Red Pepper"
                            },
                            salami:{
                                price: 30,
                                title: "Salami"
                            },
                            tomato:{
                                price: 20,
                                title: "Tomato"
                            },
                            yellowPepper:{
                                price: 20,
                                title: "Yellow Pepper"
                            }
                          }
                          Ingredient.addIngredient(data,(err, resdata1)=>{
                               if(err){
                                 return res.json(helper.showDatabaseErrorResponse("Internal db error!", err));
                               }else{
                                return res.json(helper.showSuccessResponse('Ingredient data!', resdata1));  
                               }
                          })
                      }
                  }
            })
        }catch(error){
            res.json(helper.showInternalServerErrorResponse('Internal server error!'));
        }
    }
}

module.exports = IngredientController;