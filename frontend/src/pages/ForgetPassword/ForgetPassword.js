import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth/auth.action";
import classes from "./ForgetPassword.module.scss";
import ForgetPassForm from "../../components/forgetpassform";
import withNonAuth from "../../hoc/withNonAuthentication";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessage: false,
      isValid: true,
    };
  }

  forgetPassword = async (params) => {
    let paramsdata = {
      email: params.email,
      token: this.props.token,
      userid: this.props.userid,
      frontendurl: process.env.REACT_APP_URL,
      websitename: process.env.REACT_APP_NAME,
    };
    const forgetpass = await this.props.forgetpass(paramsdata);
    if (forgetpass.success) {
      store.addNotification({
        title: "Success",
        message: forgetpass.message,
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
    }
    if (!forgetpass.success) {
      store.addNotification({
        title: "Error",
        message: forgetpass.error,
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
      <div className={classes.forgetdiv}>
        <ForgetPassForm
          method={this.forgetPassword}
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
    forgetpass: (params) => dispatch(actions.forgetpassword(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNonAuth(ForgetPassword));
