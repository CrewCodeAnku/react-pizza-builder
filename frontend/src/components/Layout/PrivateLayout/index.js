import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Redirect, Route } from 'react-router-dom';
import * as ROUTE from '../../../routes/routesConstant';

const PrivateLayout = ({component: Component,role, isAuth, ...rest}) => {
     return(
         <React.Fragment>
              <Header role={role} isAuth={isAuth}/>
                <main role="main" className="container-fluid p-0" style={{minHeight:"100vh"}}>
                    <Route
                         {...rest}
                         render={
                            (props) => isAuth
                            ? <Component {...props} />
                            : <Redirect to={{pathname: ROUTE.SIGN_IN, state: {from: props.location}}} />
                          }
                    />
                 </main>
              <Footer/>
         </React.Fragment>
     )
}

export default PrivateLayout;