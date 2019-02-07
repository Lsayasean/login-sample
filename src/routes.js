import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/login/Login';
import Home from './components/home/Home';

export default (
    <Switch>
        <Route component={Login} exact path = '/' />
        <Route component={Home} exact path = '/home' />
    </Switch>
)