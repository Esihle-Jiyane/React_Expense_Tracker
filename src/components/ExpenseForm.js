import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && date && category) {
      onAddExpense({
        description,
        amount: parseFloat(amount),
        date,
        category,
      });
      setDescription('');
      setAmount('');
      setDate('');
      setCategory('');
    }
  };

  return (
<form onSubmit={handleSubmit} className="expense-form">
      <input
        className="input"
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

    <div className="input-group">
        <input
        className="input"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />
        <input
            className="input"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <input
            className="input"
            type="date"
            placeholder= " "
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
    </div>
     
    <button type="submit"><strong>Add Expense</strong></button>
</form>
  );
};

export default ExpenseForm;
