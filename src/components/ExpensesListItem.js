import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
  <div className='list__item'>
    <Link to={`/edit/${id}`} className='list__item-link'>
      <div className='list__item-column'>
        <h3 className='list__item-description'>{description}</h3>
        <span className='list__item-date'>
          {moment(createdAt).format('MMMM Do, Y')}
        </span>
      </div>
      <div className='list__item-column'>
        <span className='list__item-amount'>
          {numeral(amount / 100).format('$0,0.00')}
        </span>
      </div>
    </Link>
  </div>
);

export default ExpensesListItem;
