import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/projects/expensify' component={LoginPage} />
        <PrivateRoute
          path='/projects/expensify/dashboard'
          component={ExpenseDashboardPage}
        />
        <PrivateRoute
          path='/projects/expensify/create'
          component={AddExpensePage}
        />
        <PrivateRoute
          path='/projects/expensify/edit/:id'
          component={EditExpensePage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export { history, AppRouter as default };
