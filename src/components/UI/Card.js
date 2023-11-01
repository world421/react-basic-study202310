import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
  const madeClass = 'card' + className;
  return <div className={madeClass}>{children}</div>;
};
//card 사이에 낀 children 이 전달됨 ;
export default Card;
