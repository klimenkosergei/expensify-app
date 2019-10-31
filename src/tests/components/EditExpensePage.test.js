import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history, editExpense, removeExpense, wrapper;

beforeEach(() => {
  history = { push: jest.fn() };
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[2]);
  expect(history.push).toHaveBeenCalledWith('/');
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenCalledWith('/');
});
