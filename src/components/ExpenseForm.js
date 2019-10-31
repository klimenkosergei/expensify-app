import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(prevState => ({ description }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(prevState => ({ amount }));
    }
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(prevState => ({ note }));
  };
  onDateChange = date => {
    if (date) {
      this.setState(prevState => ({ createdAt: date }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(prevState => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(prevState => ({
        error: 'Please provide description and amount.'
      }));
    } else {
      // Clear error state
      this.setState(prevState => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount) * 100, // Times 100 since our format is in pennies
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className='form__input'
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
            className='form__input'
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat={() => 'DD/MM/Y'}
            firstDayOfWeek={1}
            hideKeyboardShortcutsPanel={true}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a note to expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
            rows='4'
            className='form__textarea'
          ></textarea>
          <button type='submit' className='form__submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
