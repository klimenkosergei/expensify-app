import { logIn, logOut } from '../../actions/auth';

test('should setup logIn action object', () => {
  const uid = '123abc';
  expect(logIn(uid)).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logOut action object', () => {
  expect(logOut()).toEqual({
    type: 'LOGOUT'
  });
});
