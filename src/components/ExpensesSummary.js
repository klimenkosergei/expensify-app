import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getVisibleExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';

const ExpensesSummary = props => (
  <div className='summary__wrapper'>
    <p className='summary__text'>
      Viewing{' '}
      <span className='summary__text summary__text--bold'>
        {props.expensesAmount}
      </span>{' '}
      expenses totalling{' '}
      <span className='summary__text summary__text--bold'>
        {numeral(props.expensesValue / 100).format('$0,0.00')}
      </span>
    </p>
  </div>
);

const mapStateToPros = state => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  const expensesValue = getTotalExpenses(expenses);

  return {
    expensesAmount: expenses.length,
    expensesValue
  };
};

const ConnectedExpensesSummary = connect(mapStateToPros)(ExpensesSummary);

export { ExpensesSummary, ConnectedExpensesSummary as default };
