import React from 'react';
import { connect } from 'react-redux';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  editExpense = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/projects/expensify');
  };
  removeExpense = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/projects/expensify');
  };
  render() {
    return (
      <div className='create'>
        <div className='create__wrapper'>
          <h2 className='create__title'>Edit Expense</h2>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.editExpense}
          />
          <button onClick={this.removeExpense} className='create__btn'>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editExpense: (expenseId, expense) => {
    dispatch(startEditExpense(expenseId, expense));
  },
  removeExpense: expenseId => {
    dispatch(startRemoveExpense(expenseId));
  }
});

const ConnectedEditExpensePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);

export { EditExpensePage, ConnectedEditExpensePage as default };
