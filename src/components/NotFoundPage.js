import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to='/projects/expensify'>Go Home</Link>
  </div>
);

export default NotFoundPage;
