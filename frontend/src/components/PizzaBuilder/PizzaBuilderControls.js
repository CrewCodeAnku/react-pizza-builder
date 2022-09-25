import React from 'react';
import classes from './PizzaBuilder.module.scss';
import PizzaControl from './PizzaControl';

function PizzaControls(props) {
  var ingredients;
  var ingredientCount;
  if(props.ingredients){
    ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return <PizzaControl
        key={ingredient}
        information={props.information}
        ingredient={ingredient}
        count={props.ingredients[ingredient]} />;
    }); 

    ingredientCount = Object
    .values(props.ingredients)
    .reduce((a, b) => a + b);
  }
  
  return (
    <div className={classes.PizzaControls}>
      {ingredients}
      <div className={classes.PizzaOrder}>
        <button
          disabled={!ingredientCount}
          onClick={props.orderingToggleHandler}>Order</button>
      </div>
    </div>
  );
}

export default PizzaControls;