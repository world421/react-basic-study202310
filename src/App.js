import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import Hello from './Hello';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ 치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
  ];

  console.log('App 실행!');
  return (
    <>
      <Expenses items={expenses} />
    </>
  );
};

// div 태그 2개 한번에 리턴 안됨 !
export default App;
// 속성의 이름은 정해진게 없다
// APP EXPORT(내보내겠다 import 하는 곳으로 )
