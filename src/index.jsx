import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './Store/index'
import './styles/general.scss'

import {BrowserRouter as Router, Route, Redirect ,Switch} from 'react-router-dom'

import FirstForm from './Components/firstForm/FirstForm'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router path='/'>
              <Redirect from='/' to='/first-form' />
          </Router>
          <Router path='/first-form'>
              <FirstForm />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
