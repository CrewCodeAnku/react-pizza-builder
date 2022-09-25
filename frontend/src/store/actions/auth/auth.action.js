import * as actionTypes from './auth.actiontype';
import AuthService from '../../services/AuthService';

export const login = (params) => {
    return async dispatch => {
        function loginFail(message) {
            dispatch({ 
                type: actionTypes.LOGIN_FAIL,
                message:message
            });
            return {success:false,error:message}
        }
        function loginSuccess(token, userId, message) {
            dispatch({ 
                type:actionTypes.LOGIN_SUCCESS,
                idToken:token,
                userId:userId,
                message:message
            })
            return {success:true,message:message};
        }
        try {
            dispatch({ 
                type: actionTypes.LOGIN_START 
            });
            let authservice = new AuthService();
            const data = await authservice.login(params).then((res)=>{
                if(res.data.success){
                    return loginSuccess(res.data.data.token,res.data.data._id,res.data.message);
                }else{
                    return loginFail(res.data.message); 
                }
            });
            return data;
        } catch (error) {
            if(error.response){
                return loginFail(error.response.data.message);
            }else{
                return loginFail("Something went wrong!");
            }
        }
      }
}

export const logout = () => {
    console.log("Hello");
    return async dispatch => {
        dispatch({ 
            type: actionTypes.LOGOUT 
        });
    }
}

export const forgetpassword = (params) => {
    return async dispatch => {
        function forgetpasswordFail(message) {
            dispatch({ 
                type: actionTypes.FORGET_FAIL,
                message:message,
                loading:false 
            });
            return {success:false,error:message}
        }
        function forgetpasswordSuccess(message) {
            dispatch({ 
                type: actionTypes.FORGET_SUCCESS,
                message: message,
                loading:false
            })
            return {success:true,message:message};
        }
        try {
            dispatch({ 
                type: actionTypes.FORGET_START 
            });
            let authservice = new AuthService();
            const data = await authservice.forgetPass(params).then((res)=>{
                return forgetpasswordSuccess(res.data.message);
            });
            return data;
        } catch (error) {
            if(error.response){
                return forgetpasswordFail(error.response.data.message);
            }else{
                return forgetpasswordFail("Something went wrong!");
            }
        }
    }
}

export const resetpassword = (params) => {
    return async dispatch => {
        function resetpasswordFail(message) {
            dispatch({ 
                type: actionTypes.RESET_FAIL,
                message:message,
                loading:false 
            });
            return {success:false,error:message}
        }
        function resetpasswordSuccess(message) {
            dispatch({ 
                type: actionTypes.RESET_SUCCESS,
                message: message,
                loading:false
            })
            return {success:true,message:message};
        }
        try {
            dispatch({ 
                type: actionTypes.RESET_START 
            });
            let authservice = new AuthService();
            const data = await authservice.resetPass(params).then((res)=>{
                return resetpasswordSuccess(res.data.message);
            });
            return data;
        } catch (error) {
            if(error.response){
                return resetpasswordFail(error.response.data.message);
            }else{
                return resetpasswordFail("Something went wrong!");
            }
        }
      }
}

export const verifyemail = (params) => {
    return async dispatch => {
        function verifyFail(message) {
            dispatch({ 
                type: actionTypes.VERIFY_FAIL,
                message:message,
                loading:false 
            });
            return {success:false,error:message}
        }
        function verifySuccess(message) {
            dispatch({ 
                type: actionTypes.VERIFY_SUCCESS,
                message: message,
                loading:false
            })
            return {success:true,message:message};
        }
        try {
            dispatch({ 
                type: actionTypes.VERIFY_START 
            });
            let authservice = new AuthService();
            const data = await authservice.verify(params).then((res)=>{
                return verifySuccess(res.data.message);
            });
            return data;
        } catch (error) {
            if(error.response){
                return verifyFail(error.response.data.message);
            }else{
                return verifyFail("Something went wrong!");
            }
            
        }
      }
}

export const signup = (params) => {
    return async dispatch => {
        function signupFail(message) {
            dispatch({ 
                type: actionTypes.SIGNUP_FAIL,
                message:message,
                loading:false 
            });
            return {success:false,error:message}
        }

        function signupSuccess(message) {
            dispatch({ 
                type: actionTypes.SIGNUP_SUCCESS,
                message: message,
                loading:false
            })
            return {success:true,message:message};
        }

        try{
            dispatch({ 
                type: actionTypes.SIGNUP_START 
            });
            let authservice = new AuthService();
            const data = await authservice.signup(params).then((res)=>{
                return signupSuccess(res.data.message);
            });
            return data;
        }catch(error){
            if(error.response){
                return signupFail(error.response.data.data && error.response.data.data.length>0 ? error.response.data.data[0].msg:error.response.data.message);
            }else{
                return signupFail("Something went wrong!");
            }
        }
    }
}

export const updateprofile = (params) => {
    return async dispatch => {
        function updateProfileFail(message) {
            dispatch({ 
                type: actionTypes.UPDATE_PROFILE_FAIL,
                message:message
            });
            return {success:false,error:message}
        }
        function updateProfileSuccess(message) {
            dispatch({ 
                type:actionTypes.UPDATE_PROFILE_SUCCESS,
                message:message
            })
            return {success:true,message:message};
        }
        try{
            dispatch({ 
                type: actionTypes.UPDATE_PROFILE_START
            });
            let authservice = new AuthService();
            const data = await authservice.updateProfile(params).then((res)=>{
                if(res.data.success){
                    return updateProfileSuccess(res.data.message);
                }else{
                    return updateProfileFail(res.data.message); 
                }
            });
            return data;
        }catch(error){
            if(error.response){
                return updateProfileFail(error.response.data.data && error.response.data.data.length>0 ? error.response.data.data[0].msg:error.response.data.message);
            }else{
                return updateProfileFail("Something went wrong!");
            }
        }
    }
}

export const getProfile = (params) => {
    return async dispatch => {
        function getProfileFail(message){
            dispatch({ 
                type: actionTypes.GET_PROFILE_FAIL,
                message:message
            });
            return {success:false,error:message}
        }

        function getProfileSuccess(message, data){
            dispatch({ 
                type: actionTypes.GET_PROFILE_SUCCESS,
                message:message,
                profiledata:data
            });
            return {success:false,error:message}
        }
        try{
            dispatch({ 
                type: actionTypes.GET_PROFILE_START
            });
            let authservice = new AuthService();
            const data = await authservice.getProfile(params).then((res)=>{
                if(res.data.success){
                    return getProfileSuccess(res.data.message, res.data.data);
                }else{
                    return getProfileFail(res.data.message); 
                }
            });
            return data;
        }catch(error){
            if(error.response){
                return getProfileFail(error.response.data.data && error.response.data.data.length>0 ? error.response.data.data[0].msg:error.response.data.message);
            }else{
                return getProfileFail("Something went wrong!");
            }
        }
    }
}

export const changepassword = (params) => {
    console.log("Params", params);
    return async dispatch => {
        function changePasswordFail(message) {
            dispatch({ 
                type: actionTypes.CHANGE_PASSWORD_FAIL,
                message:message
            });
            return {success:false,error:message}
        }
        function changePasswordSuccess(message) {
            dispatch({ 
                type:actionTypes.CHANGE_PASSWORD_SUCCESS,
                message:message
            })
            return {success:true,message:message};
        }
        try{
            dispatch({ 
                type: actionTypes.CHANGE_PASSWORD_START
            });
            let authservice = new AuthService();
            const data = await authservice.changePassword(params).then((res)=>{
                if(res.data.success){
                    return changePasswordSuccess(res.data.message);
                }else{
                    return changePasswordFail(res.data.message); 
                }
            });
            return data;
        }catch(error){
            if(error.response){
                return changePasswordFail(error.response.data.data && error.response.data.data.length>0 ? error.response.data.data[0].msg:error.response.data.message);
            }else{
                return changePasswordFail("Something went wrong!");
            }
        }
    }
}

export const checkAuth = (token) => {
    return async dispatch => {
        function checkAuthFail(message) {
            dispatch({ 
                type: actionTypes.CHECK_AUTH_FAIL,
                message:message
            });
            return {success:false,error:message}
        }
        function checkAuthSuccess(message) {
            dispatch({ 
                type:actionTypes.CHECK_AUTH_SUCCESS,
                message:message
            })
            return {success:true,message:message};
        }
        try{
            dispatch({ 
                type: actionTypes.CHECK_AUTH_START
            });
            let authservice = new AuthService();
            const data = await authservice.checkAuth(token).then((res)=>{
                if(res.data.success){
                    return checkAuthSuccess(res.data.message);
                }else{
                    return checkAuthFail(res.data.message); 
                }
            });
            return data;
        }catch(error){
            if(error.response){
                return checkAuthFail(error.response.data.data && error.response.data.data.length>0 ? error.response.data.data[0].msg:error.response.data.message);
            }else{
                return checkAuthFail("Something went wrong!");
            }
        }
    }
}