import React from 'react';
import classes from './PizzaBuilder.module.scss';

function PizzaOrder(props) {
  const ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return (
        <li className="text-white" style={{listStyle:"none"}} key={ingredient}>
          <strong className="text-white mr-2">{props.information[ingredient].title}</strong>: {props.ingredients[ingredient]}
        </li>
      );
    });

  return (
    <div className={` w-100 ${classes.PizzaOrder}`}>
      <div className="w-100">
          <div className="d-flex justify-content-center align-items-center">
            <ul style={{margin:0, padding:0}}>
              {ingredients}
            </ul> 
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
              <h3 className="text-white">Total Price:</h3>
              <h5 className="ml-2 text-white">{props.price}</h5>
          </div>
         <div className="d-flex justify-content-center align-items-center mt-3">
            <button onClick={props.checkoutHandler}>Checkout</button>
            <button className="ml-2" onClick={props.cancelHandler}>Cancel</button>
         </div>
      </div>
     
    </div>
  );
}

export default PizzaOrder;