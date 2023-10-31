import React from 'react';
import './App.css';
import Expenseltem from './components/Expenseltem';

const App = () => {
  //지출 항목 객체 배열

  const expense = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3, 23),
    },
    {
      title: 'BBQ 치킨',
      price: 20000,
      date: new Date(2023, 5, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7, 4),
    },
  ];
  return (
    <>
      <Expenseltem
        title={expenses[0].title}
        price={expense[0].price}
        date={expense[0].date}
      />
      <Expenseltem
        title={expenses[1].title}
        price={expense[1].price}
        date={expense[1].date}
      />
      <Expenseltem
        title={expenses[2].title}
        price={expense[2].price}
        date={expense[2].date}
      />
    </>
  );
};

// div 태그 2개 한번에 리턴 안됨 !
export default App;
// 속성의 이름은 정해진게 없다
// APP EXPORT(내보내겠다 import 하는 곳으로 )
