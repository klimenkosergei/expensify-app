import { firebase, googleAuthProvider } from '../firebase/firebase';

const logIn = uid => ({
  type: 'LOGIN',
  uid
});

const startLogIn = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

const logOut = () => ({
  type: 'LOGOUT'
});

const startLogOut = () => {
  return dispatch => {
    return firebase.auth().signOut();
  };
};

export { logIn, startLogIn, logOut, startLogOut };
