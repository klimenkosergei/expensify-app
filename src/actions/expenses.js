import database from '../firebase/firebase';

const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

const startAddExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
});

const startRemoveExpense = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // Return promise so that we can chain .then in test case
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      });
  };
};

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .set({
        ...updates
      })
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenses = [];

    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

export {
  startAddExpense,
  addExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses
};
