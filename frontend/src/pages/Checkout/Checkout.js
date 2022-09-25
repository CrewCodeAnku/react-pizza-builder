import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/pizzabuilder/pizzabuilder.action';
import classes from "./Checkout.module.scss";
import PizzaPreview from "../../components/PizzaBuilder/PizzaPreview";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";
import withAuth from "../../hoc/withAuthentication";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0,
    customer: {
      name: "",
      phone: "",
      address: ""
    }
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let parameter of query.entries()) {
      if (parameter[0] === "price") {
        price = +parameter[1];
      } else {
        ingredients[parameter[0]] = +parameter[1];
      }
    }

    this.setState({ ingredients, price });
  }

  submitHandler =  async (request) =>{
    console.log("Hello World", request);
    let paramsdata = {
      name: request.name,
      phone: request.phone,
      address: request.address,
      ingredients: this.state.ingredients,
      price:this.state.price,
      token:this.props.token,
      userid:this.props.userid
    }
    const checkout = await this.props.placeOrder(paramsdata);
    if(checkout.success){
      store.addNotification({
        title: 'Success',
        message: checkout.message,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn:  ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        }
      })
      this.props.history.push("/pizzabuilder")
    }
    if(!checkout.success){
      store.addNotification({
        title: 'Error',
        message: checkout.error,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
       })
    }
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };


  render() {
    return (
      <div className={`${classes.Checkout} justify-content-center`}>
        <div className="row">
           <div className="col-md-12 mt-3">
              <PizzaPreview
                  ingredients={this.state.ingredients}
                  price={this.state.price}
              />
           </div>
           <div className="col-md-10 mr-auto ml-auto mt-2 mb-3">
              <CheckoutForm
                loading={this.props.loading}
                submitHandler={this.submitHandler}
                cancelHandler={this.cancelHandler}
              />
           </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.pizzabuilder.loading,
    error: state.pizzabuilder.error,
    message:state.pizzabuilder.message,
    userid:state.authReducer.userId,
    token:state.authReducer.token
  };
}

const mapDispatchToProps = dispatch => {
  return {
      placeOrder:(paramsdata)=>dispatch(actions.placeOrder(paramsdata)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withAuth(Checkout));
