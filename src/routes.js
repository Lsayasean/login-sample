import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/login/Login';

export default (
    <Route>
        <Switch component={Login} exact path = '/' />
    </Route>
)