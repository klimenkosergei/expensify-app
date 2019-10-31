import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpensesListFilters } from '../../components/ExpensesListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpensesListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpensesListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesListFiltes with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'Test value';
  wrapper.find('input').simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates change', () => {
  const startDate = moment().subtract(7, 'days');
  const endDate = moment().add(7, 'days');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle calendar focus change', () => {
  expect(wrapper.state('calendarFocused')).toBeNull(); // Initial state should be null
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(
    'startDate'
  );
  expect(wrapper.state('calendarFocused')).toBe('startDate');
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate');
  expect(wrapper.state('calendarFocused')).toBe('endDate');
});
