import React from 'react';
import { connect } from 'react-redux';

import getVisibleExpenses from '../selectors/expenses';
import ExpensesListItem from './ExpensesListItem';

const ExpensesList = props => (
  <div className='list'>
    <div className='list__wrapper'>
      <div className='list__header'>
        <span className='list__header-item'>Expenses</span>
        <span className='list__header-item'>Amount</span>
      </div>
      {props.expenses.length !== 0 ? (
        props.expenses.map(expense => (
          <ExpensesListItem key={expense.id} {...expense} />
        ))
      ) : (
        <p className='list__item list__item--empty'>No expenses found</p>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList);

export { ExpensesList, ConnectedExpensesList as default };
