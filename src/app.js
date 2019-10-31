import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { logIn, logOut } from './actions/auth';
import { firebase } from './firebase/firebase';
import { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';

import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let isRendered = false;

const renderApp = () => {
  if (isRendered) {
    return;
  } // No need to rerender if it already was rendered
  ReactDOM.render(jsx, document.querySelector('#App'));
  isRendered = true;
};

ReactDOM.render(<LoadingPage />, document.querySelector('#App'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(logIn(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // If user is on Login Page redirect to Dashboard
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logOut());
    renderApp();
    history.push('/');
  }
});
