import React,  { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router';
import 'react-notifications/lib/notifications.css';
import * as ROUTE from '../../routes/routesConstant';
import {useDispatch} from 'react-redux';
import { logout } from "../../store/actions/auth/auth.action";

const Header = (props)=>{
     if(props.isAuth){
          return (
              <AuthHeader/>
          )
     }else{
         return(
             <NonAuthHeader/>
         )
     }
}

const AuthHeader = ()=>{
  const dispatch = useDispatch()
  let location = useLocation()
  const [isToggle, toggle] = useState(false);
  const toggleMenu = () => toggle(!isToggle);

  useEffect(() => {
      toggle(isToggle=>!isToggle)
    },
    [location]
   );

   return(
        <nav className="navbar navbar-expand-md fixed-top navbar-dark navtop">
            <div className="container">
            <Link className="navbar-brand" to="/">Crew Pizza</Link>
            <button onClick={toggleMenu} className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse offcanvas-collapse ${isToggle?'open':''}`} id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={ROUTE.PIZZABUILDER}>Pizza Builder</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTE.PROFILE}>My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={()=>dispatch(logout())} className="nav-link" to="/">Signout</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
   )
}

const NonAuthHeader = () => {
    let location = useLocation()
    const [isToggle, toggle] = useState(false);
    const toggleMenu = () => toggle(!isToggle);
  
    useEffect(() => {
        toggle(isToggle=>!isToggle)
      },
      [location]
     );
  
     return(
       
       <nav className="navbar navbar-expand-md fixed-top navbar-dark navtop">
          <div className="container">
          <Link className="navbar-brand" to="/">Crew Pizza</Link>
          <button onClick={toggleMenu} className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className={`navbar-collapse offcanvas-collapse ${isToggle?'open':''}`} id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={ROUTE.PIZZABUILDER}>Pizza Builder</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ROUTE.SIGN_IN}>Signin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ROUTE.SIGN_UP}>Signup</Link>
              </li>
            </ul>
          </div>
        </div>
       </nav>
     )
}

export default Header