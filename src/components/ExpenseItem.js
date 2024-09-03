import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li className="expense-item">
      <span>{expense.date}</span>
      <span className='description'>{expense.description}</span>
      <span className='category'>{expense.category}</span>
      <span className='amounts'>R{expense.amount.toFixed(2)}</span>
    </li>
  );
};

export default ExpenseItem;
