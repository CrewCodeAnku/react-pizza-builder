import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth/auth.action";
import classes from "./SignUp.module.scss";
import SignUpForm from "../../components/signupform";
import withNonAuth from "../../hoc/withNonAuthentication";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessage: false,
      isValid: true,
    };
  }

  signup = async (request) => {
    let params = {
      name: request.name,
      email: request.email,
      password: request.password,
      platform: "crewpizza",
      usertype: "user",
      frontendurl: `${process.env.REACT_APP_URL}/verify`,
      websitename: process.env.REACT_APP_NAME,
      token: this.props.token,
      userid: this.props.userid,
    };
    const signup = await this.props.signup(params);
    if (signup.success) {
      store.addNotification({
        title: "Success",
        message: signup.message,
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      this.props.history.push("/signin");
    }
    if (!signup.success) {
      store.addNotification({
        title: "Error",
        message: signup.error,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  render() {
    return (
      <div className={classes.signupdiv}>
        <SignUpForm
          method={this.signup}
          loading={this.props.loading}
          classes={classes}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    message: state.authReducer.message,
    userid: state.authReducer.userId,
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (params) => dispatch(actions.signup(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNonAuth(SignUp));
