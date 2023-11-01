import React from 'react';
import Card from './components/UI/Card';

function Hello(props) {
  console.log('Hello Component!');
  console.log(props);
  return (
    <Card className={'rectangle'}>
      <div>
        {props.children}
        Hello React!
      </div>
    </Card>
  );
}

export default Hello;
