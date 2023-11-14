import React from 'react';
import styles from './Input.module.scss';

const Input = ({ input, label, onadd }) => {
  const amountChangeadke = (e) => {
    //const amountChangeadke
  };
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input
        {...input}
        onChange={onadd}
      />
    </div>
  );
};

export default Input;
