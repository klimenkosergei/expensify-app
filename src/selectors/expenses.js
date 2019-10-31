import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) =>
  expenses
    .filter(expense => {
      const createdAt = moment(expense.createdAt);
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAt, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAt, 'day')
        : true;

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      // Chain sorting to a filtered array
      switch (sortBy) {
        case 'date':
          return a.createdAt > b.createdAt ? -1 : 1;
        case 'amount':
          return a.amount > b.amount ? -1 : 1;
        default:
          return;
      }
    });

export default getVisibleExpenses;
