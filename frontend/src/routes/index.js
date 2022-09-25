import React, { lazy } from 'react';
import * as ROUTE from './routesConstant';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Switch } from 'react-router-dom';
const SignIn = lazy(() => import('../pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const VerifyEmail = lazy(() => import('../pages/VerifyEmail/VerifyEmail'));
const ResetPass = lazy(() => import('../pages/ResetPass/ResetPass'));
const Pagenotfound = lazy(() => import('../pages/PageNotFound/Pagenotfound'));
const ForgetPassword = lazy(() => import('../pages/ForgetPassword/ForgetPassword'));
const Profile = lazy(()=>import('../pages/Profile/Profile'));
const PizzaBuilder = lazy(()=>import('../pages/PizzaBuilder/PizzaBuilder'));
const Checkout =  lazy(()=>import('../pages/Checkout/Checkout'));
const Home = lazy(()=>import('../pages/Home/Home'));

const Router = () => {
    return (
        <Switch>
            <PublicRoute exact  path={ROUTE.HOME} component={Home}/>
            <PublicRoute exact  path={ROUTE.PIZZABUILDER} component={PizzaBuilder}/>
            <PublicRoute exact  path={ROUTE.SIGN_IN} component={SignIn}/>
            <PublicRoute exact  path={ROUTE.SIGN_UP} component={SignUp}/>
            <PublicRoute exact  path={ROUTE.VERIFYEMAIL} component={VerifyEmail}/>
            <PublicRoute exact  path={ROUTE.RESETPASSWORD} component={ResetPass}/>
            <PublicRoute exact  path={ROUTE.FORGETPASS} component={ForgetPassword}/>
            <PublicRoute exact  path={ROUTE.RESETPASS} component={ResetPass}/>
            <PrivateRoute exact path={ROUTE.DASHBOARD} component={PizzaBuilder}/>
            <PrivateRoute exact path={ROUTE.PROFILE} component={Profile}/>
            <PrivateRoute exact path={ROUTE.CHECKOUT} component={Checkout}/>
            <PublicRoute path='*' exact={true} component={Pagenotfound} />
        </Switch>
    )
}

export default Router;