import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth/auth.action';
import classes from './ResetPass.module.scss';
import ResetPassForm from '../../components/resetpassform';
import withNonAuth from '../../hoc/withNonAuthentication';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css'


class ResetPass extends Component{
    constructor(props){
        super(props);
        this.state = {
            isMessage:false,
            isValid:true,
        }
    }

    resetpass = async (request) =>{
        let params = {
            resettoken:this.props.match.params.token,
            password:request.password,
            token:this.props.token
        }
        const resetpass = await this.props.resetpass(params);
        if(resetpass.success){
            store.addNotification({
                title: 'Success',
                message: resetpass.message,
                type: 'default',
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
        if(!resetpass.success){
            store.addNotification({
                title: 'Error',
                message: resetpass.error,
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
    }

    render(){
        return(
            <div className={classes.resetdiv}>
                  <ResetPassForm method={this.resetpass} loading={this.props.loading} classes={classes}/>
            </div>
        )
       
    }
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        message:state.authReducer.message,
        userid:state.authReducer.userId,
        token:state.authReducer.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        resetpass:(params)=>dispatch(actions.resetpassword(params))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withNonAuth(ResetPass))