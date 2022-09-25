import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Route } from 'react-router-dom';

const PublicLayout = ({component: Component, role, isAuth, ...rest}) => {
     return(
         <React.Fragment>
              <Header role={role} isAuth={isAuth}/>
                <main role="main" className="container-fluid p-0" style={{minHeight:"100vh"}}>
                    <Route {...rest} render={
                         (props) =><Component {...props} />
                       }
                    />
                </main>
              <Footer/>
         </React.Fragment>
     )
}

export default PublicLayout;