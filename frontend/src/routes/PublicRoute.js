import React from 'react';
import PublicLayout from '../components/Layout/PublicLayout';
import {useSelector} from 'react-redux';

const PublicRoute = (props) => {
     const token = useSelector(state => state.authReducer.token);
     const userid = useSelector(state => state.authReducer.userId)
     return(
         <PublicLayout role={"Guest"} isAuth={token && userid} {...props}/>  
     )
}

export default PublicRoute;