import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth/auth.action';
import classes from './Profile.module.scss';
import withAuth from '../../hoc/withAuthentication';
import ChangePassForm from '../../components/changepassform';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
//import {NotificationManager,NotificationContainer} from 'react-notifications';
//import * as ROUTE from '../../routes/routesConstant';


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            oldpassword:"",
            newpassword:"",
        }
    }

    getProfile = async() =>{
        let params = {
            token: this.props.token,
            userid: this.props.userid
        }
        await this.props.getProfile(params);
        this.setState({
           data:this.props.profile
        })
     }

     componentDidMount(){
        let params = {
            token: this.props.token,
            userid: this.props.userid
        }
        this.getProfile(params);
     }

    changePassword = async(params) =>{
        let paramsdata = {
            oldpassword: params.oldpassword,
            newpassword: params.newpassword,
            token: this.props.token,
            userid: this.props.userid
        }
        const changepass = await this.props.changepassword(paramsdata);
        if(changepass.success){
            store.addNotification({
                title: 'Success',
                message: changepass.message,
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
            setTimeout(()=>{
                this.props.history.push("/dashboard")
            },1000)
            
        }
        if(!changepass.success){
            store.addNotification({
                title: 'Error',
                message: changepass.error,
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
            <div className={`container mb-5 app-bg-color rounded p-5 mt-5`}>
                <div className="mt-5">
                    <h3>My Profile</h3>
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" readOnly={true} className="form-control" id="name" value={this.props.profile?this.props.profile.name:"" || ""}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" readOnly={true} className="form-control" id="email" value={this.props.profile?this.props.profile.email:"" || ""}/>
                        </div>
                    </div>
                    <h3>Change Password</h3>
                    <div>
                       <ChangePassForm method={this.changePassword} loading={this.props.loading} classes={classes}/>
                    </div>
                </div>
            </div>
         )
    } 
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        message:state.authReducer.message,
        profile:state.authReducer.profile,
        userid:state.authReducer.userId,
        token:state.authReducer.token
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        changepassword:(params)=>dispatch(actions.changepassword(params)),
        getProfile:(params)=>dispatch(actions.getProfile(params))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withAuth(Profile))