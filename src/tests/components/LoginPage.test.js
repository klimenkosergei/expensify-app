import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

let wrapper, logIn;

beforeEach(() => {
  logIn = jest.fn();
  wrapper = shallow(<LoginPage logIn={logIn} />);
});

test('should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick for logIn', () => {
  wrapper.find('button').simulate('click');
  expect(logIn).toHaveBeenCalled();
});
