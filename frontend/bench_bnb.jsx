import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <h1>
      Welcome to BenchBnB!
    </h1>,
    root
  );

  window.store = configureStore(); //for this commit only, for testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
