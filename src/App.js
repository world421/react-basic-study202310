import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const App = () => {
  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'>
        <CourseList />
      </section>
    </div>
  );
};

// div 태그 2개 한번에 리턴 안됨 !
export default App;
// 속성의 이름은 정해진게 없다
// APP EXPORT(내보내겠다 import 하는 곳으로 )
