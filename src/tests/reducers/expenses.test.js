import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default expenses', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
});

test('should add expense to expenses', () => {
  const expense = {
    id: '4',
    description: 'Car payment',
    note: '',
    amount: 207000,
    createdAt: 2500
  };
  const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
  expect(state).toEqual([...expenses, expense]);
});

test('should remove expense with a valid id', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '2' });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense with invalid id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: 'invalidId'
  });
  expect(state).toEqual(expenses);
});

test('should edit expense with a valid id', () => {
  const updates = {
    description: 'Gym membership',
    amount: 2500
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates
  });
  expect(state).toEqual([
    expenses[0],
    { ...expenses[1], ...updates },
    expenses[2]
  ]);
});

test('should not edit expense with invalid id', () => {
  const updates = {
    description: 'Gym membership',
    amount: 2500
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: 'invalidId',
    updates
  });
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  expect(
    expensesReducer(undefined, { type: 'SET_EXPENSES', expenses })
  ).toEqual(expenses);
});
