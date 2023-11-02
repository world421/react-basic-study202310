import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle, setExpenseToggle] = useState(fasle);

  const startInsertModeHandler = () => setExpenseToggle(true);
  const stopInsertModeHandler = () => setExpenseToggle(false);

  let NewExpenseContent = (
    <button onClick={startInsertModeHandler}> 새로운 지출 추가하기 </button>
  );
  if (expenseToggle) {
    NewExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInsertModeHandler}
      />
    );
  }

  return <div className='new-expense'>{NewExpenseContent}</div>;
};

export default NewExpense;
