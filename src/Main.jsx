import React from 'react';
import './styles/general.scss';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {FirstForm} from './FirstForm';
import {SecondForm} from './SecondForm';
import {routes} from './routes';

export function Main() {
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
    );
}
