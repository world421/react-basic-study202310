import React from 'react';
import Expenseltem from './Expenseltem';
import './Expenses.css';

const Expenses = ({ items: expenses }) => {
  return (
    <div className='expenses'>
      <Expenseltem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <Expenseltem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <Expenseltem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  );
};

export default Expenses;
