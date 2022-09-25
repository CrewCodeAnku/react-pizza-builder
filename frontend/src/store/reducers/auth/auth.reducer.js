import * as actionTypes from '../../actions/auth/auth.actiontype';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    message:null,
    time:null,
    isAuthenticated:false,
    profile:{}
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_START: 
             return {...state, error:null, loading:true};
        case actionTypes.LOGIN_SUCCESS: 
             console.log("Action", action);
             return {
               ...state, 
               error:null, 
               loading:false, 
               message:action.message,
               token:action.idToken,
               userId:action.userId,
               isAuthenticated:true
          };
        case actionTypes.LOGIN_FAIL: 
             return {
               ...state,
               error:action.message, 
               loading:false, 
               message:null
            }
        case actionTypes.FORGET_START: 
             return {...state, error:null, loading:true};
        case actionTypes.FORGET_SUCCESS: 
             return {...state, error:null, loading:false, message:action.message};
        case actionTypes.FORGET_FAIL: 
             return {...state,error:action.message, loading:false, message:null}
        case actionTypes.VERIFY_START: 
             return {...state, error:null, loading:true};
        case actionTypes.VERIFY_SUCCESS: 
             return {...state, error:null, loading:false, message:action.message};
        case actionTypes.VERIFY_FAIL: 
             return {...state,error:action.message, loading:false, message:null}
        case actionTypes.RESET_START: 
             return {...state, error:null, loading:true};
        case actionTypes.RESET_SUCCESS: 
             return {...state, error:null, loading:false, message:action.message};
        case actionTypes.RESET_FAIL: 
             return {...state,error:action.message, loading:false, message:null}
        case actionTypes.SIGNUP_START: 
             return {...state, error:null, loading:true};
        case actionTypes.SIGNUP_SUCCESS: 
             return {...state, error:null, loading:false, message:action.message};
        case actionTypes.SIGNUP_FAIL: 
             return {...state,error:action.message, loading:false, message:null};
        case actionTypes.CHANGE_PASSWORD_START: 
             return {...state, error:null, loading:true};
        case actionTypes.CHANGE_PASSWORD_SUCCESS: 
             return {...state, error:null, loading:false, message:action.message};
        case actionTypes.CHANGE_PASSWORD_FAIL: 
             return {...state,error:action.message, loading:false, message:null}
        case actionTypes.CHECK_AUTH_START:
             return {...state, error:null};
        case actionTypes.CHECK_AUTH_SUCCESS:
             return {...state, error:null, message:action.message, isAuthenticated:true};
        case actionTypes.CHECK_AUTH_FAIL:
             return {
               ...initialState
             }
        case actionTypes.GET_PROFILE_START:
             return {...state, error:null, loading:true};
        case actionTypes.GET_PROFILE_SUCCESS:
             return {...state, error:null, loading:false, message:action.message, profile:action.profiledata};
        case actionTypes.GET_PROFILE_FAIL:
             return {...state,error:action.message, loading:false, message:null}
        case actionTypes.LOGOUT:
             console.log("Inside reducer");
            return {
               ...initialState
            }
        default:
            return state;
    }
}

export default reducer;

