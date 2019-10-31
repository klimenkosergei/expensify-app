import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogOut } from '../actions/auth';

const Header = ({ logOut }) => (
  <header className='header'>
    <div className='header__wrapper'>
      <h1 className='header__title'>BudgetApp</h1>
      <NavLink
        to='/dashboard'
        className='header__link'
        activeClassName='is-active'
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/create'
        className='header__link'
        activeClassName='is-active'
      >
        Create Expense
      </NavLink>
      <button className='header__btn' onClick={logOut}>
        Log Out
      </button>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(startLogOut());
  }
});

const ConnectedHeader = connect(
  null,
  mapDispatchToProps
)(Header);

export { Header, ConnectedHeader as default };
