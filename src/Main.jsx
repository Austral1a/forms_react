import React from 'react';
import './styles/general.scss'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {FirstForm} from './FirstForm'
import SecondForm from './SecondForm/SecondForm'
import {routes} from './routes'

function Main() {
    return(
        <Router>
                <Route path='/'>
                    <Redirect from='/' to={routes.firstForm} />
                </Route>
                <Route path={routes.firstForm}>
                    <FirstForm />
                </Route>
                <Route path={routes.secondForm}>
                    <SecondForm />
                </Route>
        </Router>
    )
}

export default Main