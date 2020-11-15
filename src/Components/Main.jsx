import React from 'react';
import '../styles/general.scss'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import FirstForm from './firstForm/FirstForm'
import SecondForm from './secondForm/SecondForm'

const mapStateToProps = (state) => ({
    isFirstFormSubmitted: state.firstFormReducer.isSubmitted
})

function Main({isFirstFormSubmitted}) {
    return(
        <Router>
                <Route path='/'>
                    <Redirect from='/' to='/first-form' />
                </Route>
                <Route path='/first-form'>
                    <FirstForm />
                </Route>
                <Route path='/second-form'>
                    {isFirstFormSubmitted ? <SecondForm /> : <Redirect to='/first-form' />}
                </Route>
        </Router>
    )
}


export default connect(
    mapStateToProps,
    null
)(Main)