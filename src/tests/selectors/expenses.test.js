import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter expenses by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1]
  ]);
});

test('should filter expenses by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0]
  ]);
});

test('should filter expenses by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[0],
    expenses[1]
  ]);
});

test('should filter expenses by sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ]);
});

test('should filter expenses by sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ]);
});
