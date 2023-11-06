import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    //prev 는 가장 최신의 값을 줌
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
