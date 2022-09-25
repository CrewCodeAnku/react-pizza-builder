import React from 'react';
import { connect } from 'react-redux';
import classes from './PizzaBuilder.module.scss';

import PizzaIngredient from './PizzaIngredient';

function PizzaControl(props) {
  return (
    <div className={` w-100 ${classes.PizzaControl}`}>
      <div className="d-flex align-items-center justify-content-center w-25">
         <h5 className="mt-2 text-white">{props.ingredient.charAt(0).toUpperCase() + props.ingredient.slice(1)}</h5> 
      </div>
      <div className="d-flex flex-column justify-conent-center align-items-center ml-2 w-25">
          <PizzaIngredient type={props.ingredient} />
      </div>
      <div className="d-flex justify-content-center align-items-center w-50">
        <div className="d-flex justify-content-center align-items-center w-50">
          <button
            className={classes.Less}
            disabled={!props.count}
            onClick={() => props.onRemoveIngredient(props.ingredient, props.information)}><i className="fa fa-minus mr-2 mt-1"></i>Remove</button>
        </div>
        <div className="d-flex justify-content-center align-items-center w-50">
          <button
            className={classes.More}
            disabled={props.count >= 20}
            onClick={() => props.onAddIngredient(props.ingredient, props.information)}><i className="fa fa-plus mr-2 mt-1"></i>Add</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingredient, information) => dispatch({ type: 'ADD_INGREDIENT', ingredient, information }),
    onRemoveIngredient: (ingredient, information) => dispatch({ type: 'REMOVE_INGREDIENT', ingredient, information })
  }
}

export default connect(null, mapDispatchToProps)(PizzaControl);