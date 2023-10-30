import React from 'react';
import './App.css';
import Expenseltem from './components/Expenseltem';
import NoName from './noname';

function App() {
  const $h2 = <h2> 반가워용 ! </h2>;

  return (
    <>
      <NoName />
      <NoName />
      <NoName />
      <NoName />
      <div className='App'>
        <h1> 메롱메롱 </h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 월요일 입니다. <br />
          그래서 공부하기 정말정말정말 시러용
        </p>
      </div>
    </>
  );
}

// div 태그 2개 한번에 리턴 안됨 !
export default App;
// APP EXPORT(내보내겠다 import 하는 곳으로 )
