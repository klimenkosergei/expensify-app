import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import ExpensesListFilters from './ExpensesListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpensesListFilters />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
