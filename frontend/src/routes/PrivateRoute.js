import React from 'react';
import PrivateLayout from '../components/Layout/PrivateLayout';
import {useSelector} from 'react-redux'

const PrivateRoute = (props) => {
    const token = useSelector(state => state.authReducer.token);
    const userid = useSelector(state => state.authReducer.userId)
     return(
         <PrivateLayout role={"Guest"} isAuth={token && userid} {...props}/>  
     )
}

export default PrivateRoute;