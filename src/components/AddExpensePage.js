import React from 'react';
import { connect } from 'react-redux';

import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  addExpense = expense => {
    this.props.addExpense(expense);
    this.props.history.push('/projects/expensify');
  };
  render() {
    return (
      <div className='create'>
        <div className='create__wrapper'>
          <h2 className='create__title'>Create Expense</h2>
          <ExpenseForm onSubmit={this.addExpense} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => {
    dispatch(startAddExpense(expense));
  }
});

const ConnectedAddExpensePage = connect(
  null,
  mapDispatchToProps
)(AddExpensePage); // Pass null for the mapStateToProps

export { AddExpensePage, ConnectedAddExpensePage as default };
