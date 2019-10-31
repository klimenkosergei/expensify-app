const getTotalExpenses = expenses => {
  if (expenses.length > 0) {
    return expenses
      .map(expense => expense.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  } else {
    return 0;
  } // Return 0 for empty array
};

export default getTotalExpenses;
