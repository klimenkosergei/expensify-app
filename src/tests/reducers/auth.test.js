import authReducer from '../../reducers/auth';

test('should add uid on Log In', () => {
  const state = authReducer(null, { type: 'LOGIN', uid: '123abc' });
  expect(state.uid).toBe('123abc');
});

test('should remove uid on Log Out', () => {
  const state = authReducer({ uid: 'abc123' }, { type: 'LOGOUT' });
  expect(state.uid).toBeFalsy();
});
