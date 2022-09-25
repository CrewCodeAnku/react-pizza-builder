import React, { Component } from "react";
import classes from "./VerifyEmail.module.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/auth/auth.action";
import withNonAuth from "../../hoc/withNonAuthentication";

class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  componentDidMount() {
    let params = {
      email: this.props.match.params.email,
      verifytoken: this.props.match.params.token,
      token: this.props.token,
      userid: this.props.userid,
      frontendurl: process.env.REACT_APP_URL,
      websitename: process.env.REACT_APP_NAME,
    };
    this.props.verifyemail(params);
  }

  render() {
    const verifywait = this.props.loading;
    const error =
      !this.props.loading && this.props.error && !this.props.message;
    const message =
      !this.props.loading && !this.props.error && this.props.message;
    const verify = (
      <h6>
        Please wait verifying...
        <i className="fa fa-circle-o-notch fa-spin ml-3"></i>
      </h6>
    );
    const errormsg = <h6>{this.props.error}</h6>;
    const successmsg = <h6>{this.props.message}</h6>;
    return (
      <div className={classes.verifydiv}>
        <div className={classes.verify}>
          <div className="bg-white rounded box-shadow p-5 h-100 justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="h3 mb-3 font-weight-normal">Email Verification</h1>
            </div>
            <div className="text-center mt-5">
              {verifywait ? verify : null}
              {error ? errormsg : null}
              {message ? successmsg : null}
            </div>
            <div className="text-center mt-4">
              <Link className="btn btn-primary" to="/signin">
                Login with your credentials
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    message: state.authReducer.message,
    token: state.authReducer.token,
    userid: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyemail: (params) => dispatch(actions.verifyemail(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNonAuth(VerifyEmail));
