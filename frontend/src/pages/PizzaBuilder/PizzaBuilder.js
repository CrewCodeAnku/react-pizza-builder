import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaPreview from '../../components/PizzaBuilder/PizzaPreview';
import PizzaControls from '../../components/PizzaBuilder/PizzaBuilderControls';
import PizzaOrder from '../../components/PizzaBuilder/PizzaOrder';
import classes from './PizzaBuilder.module.scss';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class PizzaBuilder extends Component {
  state = {
    information: null,
    ordering: false,
    loading: false,
  }

  orderingToggleHandler = () => {
    this.setState({
      ordering: !this.state.ordering
    });
  }
  
  checkoutHandler = () => {
    const query = [];

    for (let ingredient in this.props.ingredients) {
      if (this.props.ingredients[ingredient] > 0) {
        const name = encodeURIComponent(ingredient);
        const value = encodeURIComponent(this.props.ingredients[ingredient]);
        query.push(`${name}=${value}`);
      }
    }
    query.push(`price=${encodeURIComponent(this.props.price)}`);

    this.props.history.push({
      pathname: '/checkout',
      search: `?${query.join('&')}`
    });
  }


  render() {

    let content = <div className="col-md-12 row mr-auto-ml-auto align-items-center justify-content-center mt-5">
          <Loader type="Puff" color="#c38358" height={100} width={100}/>
      </div>
    if (this.props.information) {
      content = (
        <div className={`${classes.PizzaBuilder} justify-content-center`}>
          <div className="row">
            <div className="col-md-12 mt-3">
              <PizzaPreview
                price={this.props.price}
                ingredients={this.props.ingredients} />
            </div>
            {!this.state.ordering&&<div className="col-md-6 mr-auto ml-auto mt-2 mb-3">
              <PizzaControls
              ingredients={this.props.ingredients}
              information={this.props.information}
              orderingToggleHandler={this.orderingToggleHandler} />
            </div>} 
            {this.state.ordering?(<div className="col-md-6 mr-auto ml-auto mt-2 mb-3">
               <PizzaOrder
                information={this.props.information}
                ingredients={this.props.ingredients}
                price={this.props.price}
                checkoutHandler={this.checkoutHandler}
                cancelHandler={this.orderingToggleHandler} />
            </div>):null} 
          </div>
        </div>
      );
    }
    return content;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.pizzabuilder.ingredients,
    price: state.pizzabuilder.price,
    information: state.pizzabuilder.information
  };
}

export default connect(
  mapStateToProps, {}
)(PizzaBuilder);