import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth/auth.action';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../routes/routesConstant'; 
import {compose} from 'recompose';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component{
        componentDidMount(){
            if(!this.props.userId && !this.props.token){
                this.props.history.push(ROUTES.SIGN_IN);
            }
            if(this.props.token){
                this.props.checkAuth(this.props.token);
            }
        }

        componentDidUpdate(prevProps, prevState){
            if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
                console.log(this.props.isAuthenticated);
                if(!this.props.isAuthenticated){
                    this.props.history.push(ROUTES.SIGN_IN);
                }
            }
        }

        render() {
            return <Component {...this.props}/>;
        } 
    }

    const mapStateToProps = state => {
        return {
            isAuthenticated: state.authReducer.isAuthenticated,
            userId: state.authReducer.userId,
            token: state.authReducer.token
        };
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            checkAuth:(token)=>dispatch(actions.checkAuth(token))
        }
    }

    return compose(
        connect(mapStateToProps,mapDispatchToProps),
        withRouter
    )(WithAuthentication);
}

export default withAuthentication;