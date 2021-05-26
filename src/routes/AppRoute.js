import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import Dashboard from '../components/App/Dashboard'
import { AuthRoute } from './authRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {loginSuccess, logOut} from '../actions/authAction'
import { startLoadingProducts } from '../actions/productActions';
import { auth } from '../firebases/firebase';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.auth)

    useEffect(() => {
        
        auth.onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( loginSuccess(user));
                dispatch( startLoadingProducts( user.uid ) );

            } else {
                dispatch( logOut());
            }
        });
        
    }, [dispatch])

   
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRoute }
                        isAuthenticated={ isAuth }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={isAuth}
                        path="/"
                        component={ Dashboard }
                    />

                    <Redirect to="auth/login" />


                </Switch>
            </div>
        </Router>
    )
}