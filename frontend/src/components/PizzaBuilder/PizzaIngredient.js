import React, { Component } from 'react';
import classes from './PizzaBuilder.module.scss';

import tomatoSvg from '../../images/tomato.svg';
import salamiSvg from '../../images/salami.svg';
import blackOliveSvg from '../../images/blackOlive.svg';
import greenOliveSvg from '../../images/greenOlive.svg';
import redPepperSvg from '../../images/redPepper.svg';
import yellowPepperSvg from '../../images/yellowPepper.svg';
import unknownSvg from '../../images/unknown.svg';

class PizzaIngredient extends Component {
  
  shouldComponentUpdate() {
    return false;
  }

  getPosition = (ir) => {
    const pd = 270;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance = Math.sqrt(
      Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)
    ) + ir;

    return distance < pr
      ? { x: ix - ir, y: iy - ir }
      : this.getPosition(ir);
  }

  render() {
    let ingredient = null;

    switch(this.props.type) {
      case 'tomato':
        ingredient = { width: 35, height: 35, src: tomatoSvg };
        break;
      case 'salami':
        ingredient = { width: 30, height: 30, src: salamiSvg };
        break;
      case 'blackOlive':
        ingredient = { width: 10, height: 10, src: blackOliveSvg
        };
        break;
      case 'greenOlive':
        ingredient = { width: 10, height: 10, src: greenOliveSvg };
        break;
      case 'redPepper':
        ingredient = { width: 20, height: 20, src: redPepperSvg };
        break;
      case 'yellowPepper':
        ingredient = { width: 40, height: 40, src: yellowPepperSvg };
        break;
      default:
        ingredient = { width: 10, height: 10, src: unknownSvg };    
        break;
    }
  
    if (this.props.randomPosition) {
      const position = this.getPosition(ingredient.width / 2);
  
      ingredient.style = {
        position: 'absolute',
        top: position.y + 'px',
        left: position.x + 'px'
      }
    }
  
    return <img
      {...ingredient}
      className={classes.PizzaIngredient}
      alt={this.props.type} />;
  }
}

export default PizzaIngredient;