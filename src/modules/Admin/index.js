import React from 'react';

import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import { Login, Signup, ForgotPassword } from './Auth';
import ProtectedRoute from '../../components/ProtectedRoute';   
import Home from './Dashboard/Home';
import PublicResources from './Dashboard/Resources/PublicResource';
import PrivateResources from './Dashboard/Resources/PrivateResource';
import Resources from './Dashboard/Resources';

export default function AdminModule({routes}) { 
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={LandingPage} />
            <Route exact path={`${match.path}login`} component={Login} />
            <Route exact path={`${match.path}signup`} component={Signup} />
            <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
            {/* <Route path="*" > <Redirect to="/   " /></Route> */}
            <ProtectedRoute exact path={`${match.path}dashboard`} component={Home} />
            <Resources>
                <ProtectedRoute exact path={`${match.path}resources/public`} component={PublicResources} />
                <ProtectedRoute exact path={`${match.path}resources/private`} component={PrivateResources} />
            </Resources>
            <Route path={`${match.path}`} ><Redirect to="/dashboard" /></Route>
            <Route path="*" ><Redirect to="/dashboard" /></Route>
        </Switch>
    )
}
