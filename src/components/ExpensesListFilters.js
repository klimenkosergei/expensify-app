import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpensesListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocused: null
    };
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(prevState => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className='filters'>
        <div className='filters__wrapper'>
          <input
            type='text'
            value={this.props.filters.text}
            onChange={this.onTextChange}
            className='filters__text-filter'
            placeholder='Search expenses'
          />
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
            className='filters__sort-filter'
          >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId='startDateId'
            endDate={this.props.filters.endDate}
            endDateId='endDateId'
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            isOutsideRange={() => false}
            firstDayOfWeek={1}
            displayFormat={() => 'DD/MM/Y'}
            numberOfMonths={1}
            hideKeyboardShortcutsPanel={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => {
    dispatch(setStartDate(startDate));
  },
  setEndDate: endDate => {
    dispatch(setEndDate(endDate));
  },
  setTextFilter: value => {
    dispatch(setTextFilter(value));
  },
  sortByDate: () => {
    dispatch(sortByDate());
  },
  sortByAmount: () => {
    dispatch(sortByAmount());
  }
});

const ConnectedExpensesListFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesListFilters);

export { ExpensesListFilters, ConnectedExpensesListFilters as default };
