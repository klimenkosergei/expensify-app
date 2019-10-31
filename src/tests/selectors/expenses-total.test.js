import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const totalAmount = getTotalExpenses([]);
  expect(totalAmount).toBe(0);
});

test('should add up single expense', () => {
  const totalAmount = getTotalExpenses([expenses[0]]);
  expect(totalAmount).toBe(expenses[0].amount);
});

test('should add up multiple expenses', () => {
  const totalAmount = getTotalExpenses(expenses);
  expect(totalAmount).toBe(
    expenses[0].amount + expenses[1].amount + expenses[2].amount
  );
});
