import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth/auth.action";
import classes from "./SignIn.module.scss";
import SignInForm from "../../components/signinform";
import withNonAuth from "../../hoc/withNonAuthentication";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessage: false,
      isValid: true,
    };
  }

  signin = async (request) => {
    let params = {
      email: request.email,
      password: request.password,
      token: this.props.token,
      userid: this.props.userid,
      platform: "crewpizza",
      usertype: "user",
    };
    const signin = await this.props.signin(params);
    if (signin.success) {
      this.props.history.push("/dashboard");
    }
    if (!signin.success) {
      store.addNotification({
        title: "Error",
        message: signin.error,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  render() {
    return (
      <div className={classes.signindiv}>
        <SignInForm
          method={this.signin}
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
    signin: (params) => dispatch(actions.login(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNonAuth(SignIn));
