import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import Register from '../components/login/Register';


export const AuthRoute = () => {
    return (
        <div >
            <div >
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ Register }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>

        </div>
    )
}