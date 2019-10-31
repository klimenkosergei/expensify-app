import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should setup set text filter action object with provided argument', () => {
  expect(setTextFilter('rent')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('should setup set text filter action object with default argument', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup set start date action object', () => {
  expect(setStartDate(moment(0))).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should setup set end date action object', () => {
  expect(setEndDate(moment(0))).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});
