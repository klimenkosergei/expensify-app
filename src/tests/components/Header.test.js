import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let wrapper, logOut;

beforeEach(() => {
  logOut = jest.fn();
  wrapper = shallow(<Header logOut={logOut} />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick for logOut', () => {
  wrapper.find('button').simulate('click');
  expect(logOut).toHaveBeenCalled();
});
