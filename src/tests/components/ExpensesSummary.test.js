import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with one visible expense', () => {
  const expensesValue = getTotalExpenses([expenses[0]]);
  const wrapper = shallow(
    <ExpensesSummary
      expensesAmount={[expenses[0]].length}
      expensesValue={expensesValue}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple visible expense', () => {
  const expensesValue = getTotalExpenses(expenses);
  const wrapper = shallow(
    <ExpensesSummary
      expensesAmount={expenses.length}
      expensesValue={expensesValue}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
