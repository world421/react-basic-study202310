import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATE = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 삽고수 되기',
  },
];
const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATE);

  //input 에게 전달할 함수
  const addGoalHandler = (text) => {
    //console.log('전달받은 텍스트', text);
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);

    //상태변수 (배열) 수정
    //goals.push(newGoal); -> 안댐
    //setGoals([...goals, newGoal]); // 기존골, 추가 `!
  };

  // 삭제 이벤트 핸들러를 CourseItem 까지 내려보내야됨..
  const deleteGoalHandler = (id) => {
    //console.log('전달된 id: ', id);
    // const updateGoals = [...goals]; //상태배열 그대로 복사해서 가져옴.
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // // 배열삭제하기 ( index 부터 , 몇 개), splice 지우는것과 추가하는거 가능
    // updateGoals.splice(index, 1);
    // ============================================================
    //const updateGoals = goals.filter((goal) => goal.id !== id);

    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // CourseList 조건부 렌더링
  // {바깥쪽  style - props전달 } {안쪽 객체 전달}
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '2em',
        textAlign: 'center',
      }}
    >
      목표를 등록해주세요 !!{' '}
    </p>
  );
  if (goals.length > 0) {
    listContent = (
      <CourseList
        items={goals}
        onDelete={deleteGoalHandler}
      />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id='goals'>{listContent} </section>
    </div>
  );
};

// div 태그 2개 한번에 리턴 안됨 !
export default App;
// 속성의 이름은 정해진게 없다
// APP EXPORT(내보내겠다 import 하는 곳으로 )
