import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  const [sortKey, setSortKey] = useState('date');

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortKey === 'amount') {
      return a.amount - b.amount;
    }
    if (sortKey === 'category') {
      return a.category.localeCompare(b.category);
    }
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div>
      
      <ul className="expense-list">
        {sortedExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
      
      <div className="sort-controls">
        <button onClick={() => setSortKey('date')}>Sort by Date</button>
        <button onClick={() => setSortKey('amount')}>Sort by Amount</button>
        <button onClick={() => setSortKey('category')}>Sort by Category</button>
      </div>

    </div>
  );
};

export default ExpenseList;
