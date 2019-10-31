import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

const uid = 'thisistestuid';
const defaultAuthState = { auth: { uid } };

const mockStore = configureStore([ReduxThunk]);

beforeEach(done => {
  const expensesData = [];
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test('should setup remove expense action object', () => {
  expect(removeExpense('123-abc')).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123-abc'
  });
});

test('should setup edit expense action object', () => {
  expect(editExpense('123-abc', { description: 'new', amount: 200 })).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123-abc',
    updates: {
      description: 'new',
      amount: 200
    }
  });
});

test('should setup add expense action object with provided arguments', () => {
  expect(addExpense(expenses[2])).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense with provided values to database and store', done => {
  const expense = {
    description: 'Coffee',
    note: '',
    amount: 400,
    createdAt: 103455
  };
  const store = mockStore(defaultAuthState);
  store
    .dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expense
        }
      });
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });
});

test('should add expense with default values to database and store', done => {
  const expense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const store = mockStore(defaultAuthState);
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expense
        }
      });
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });
});

test('should setup set expenses action object', () => {
  expect(setExpenses(expenses)).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from database', done => {
  const store = mockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('should remove expense from database', done => {
  const store = mockStore(defaultAuthState);
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    database
      .ref(`users/${uid}/expenses/${id}`)
      .once('value')
      .then(snapshot => {
        expect(snapshot.val()).toBeNull();
        done();
      });
  });
});

test('should edit expense in database', done => {
  const store = mockStore(defaultAuthState);
  const id = expenses[0].id;
  const newExpense = {
    description: 'Updated Value',
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  };
  store.dispatch(startEditExpense(id, newExpense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates: newExpense
    });
    database
      .ref(`users/${uid}/expenses/${id}`)
      .once('value')
      .then(snapshot => {
        expect(snapshot.val()).toEqual(newExpense);
        done();
      });
  });
});
