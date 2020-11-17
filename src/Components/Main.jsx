import React from 'react';
import '../styles/general.scss'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import FirstForm from '../FirstForm/FirstForm'
import SecondForm from './secondForm/SecondForm'

function Main() {
    return(
        <Router>
                <Route path='/'>
                    <Redirect from='/' to='/first-form' />
                </Route>
                <Route path='/first-form'>
                    <FirstForm />
                </Route>
                <Route path='/second-form'>
                    <SecondForm />
                </Route>
        </Router>
    )
}

export default Main