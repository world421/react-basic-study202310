import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 20000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: 'BBQ 치킨',
      price: 20000,
      date: new Date(2022, 5 - 1, 21),
    },
    {
      id: 3,
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
    {
      id: 4,
      title: '엽기떡볶이',
      price: 17000,
      date: new Date(2021, 3 - 1, 28),
    },
  ];

  // 지출 객체 배열을 상태 변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  //ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');

    const modifyExpense = {
      ...newExpense,
      id: expenseList[expenseList.length - 1].id + 1, //pk 지정 가넝 !
    };

    setExpenseList([...expenseList, newExpense]);
    console.log(expenseList);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
      {/* 상태변수로 관리하는 expenseList 화면에 뿌려줌 ! */}
    </>
  );
};

// div 태그 2개 한번에 리턴 안됨 !
export default App;
// 속성의 이름은 정해진게 없다
// APP EXPORT(내보내겠다 import 하는 곳으로 )
