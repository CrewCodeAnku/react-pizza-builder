import * as actionTypes from '../../actions/pizzabuilder/pizzabuilder.actiontype';

const initialState = {
    ingredients: {
      tomato: 0,
      salami: 0,
      blackOlive: 0,
      greenOlive: 0,
      redPepper: 0,
      yellowPepper: 0,
    },
    price: 200,
    error: null,
    loading: false,
    message:null,
    information:{
      "blackOlive":{
        "price":10,
        "title":"Black Olive"
      },
      "greenOlive":{
        "price":10,
        "title":"Green Olive"
      },
      "redPepper":{
        "price":20,
        "title":"Red Pepper"
      },
      "salami":{
        "price":30,
        "title":"Salami"
      },
      "tomato":{
        "price":20,
        "title":"Tomato"
      },
      "yellowPepper":{
        "price":20,
        "title":"Yellow Pepper"
      }
    }
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_INGREDIENT:
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredient]: state.ingredients[action.ingredient] + 1
          },
          price: state.price + action.information[action.ingredient].price
        };
      case actionTypes.REMOVE_INGREDIENT:
        const newState = { ...state };
        newState.ingredients = { ...state.ingredients };
        newState.ingredients[action.ingredient] = state.ingredients[action.ingredient] - 1;
        newState.price = state.price - action.information[action.ingredient].price;
        return newState;
      case actionTypes.PLACE_ORDER_START:
        return {...state, error:null, loading:true};
      case actionTypes.PLACE_ORDER_SUCCESS: 
        return {
          ...state, 
          error:null, 
          loading:false, 
          ingredients:{
            tomato: 0,
            salami: 0,
            blackOlive: 0,
            greenOlive: 0,
            redPepper: 0,
            yellowPepper: 0,
          },
          price:200, 
          message:action.message
        };
      case actionTypes.PLACE_ORDER_FAIL:
        return {...state,error:action.message, loading:false, message:null} 
      default:
        return { ...state };
    }
  }
  
  export default reducer;