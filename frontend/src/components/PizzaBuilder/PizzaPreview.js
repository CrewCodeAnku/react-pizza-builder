import React from 'react';
import classes from './PizzaBuilder.module.scss';
import PizzaIngredient from './PizzaIngredient';
import cheeseSvg from '../../images/cheese.png';

function PizzaPreview(props) {
  var ingredients;
  if(props.ingredients){
    ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <PizzaIngredient
          key={ingredient + i}
          type={ingredient}
          randomPosition />;
      });
    });  
  }
  

  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.Pizza}>
        <img
          className={classes.PizzaCheese}
          src={cheeseSvg}
          alt="Pizza" />
        <div className={classes.PizzaIngredients}>
          {ingredients}
        </div>
      </div>
    </div>
  );
}

export default PizzaPreview;