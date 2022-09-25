import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../routes/routesConstant'; 
import {compose} from 'recompose';

const withNonAuthentication = Component => {
    class WithNonAuthentication extends React.Component{

        componentDidMount(){
            if(this.props.userId && this.props.token){
                this.props.history.push(ROUTES.DASHBOARD);
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
    

    return compose(
        connect(mapStateToProps,{}),
        withRouter
    )(WithNonAuthentication);
}

export default withNonAuthentication;