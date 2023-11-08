import React from 'react';
import styles from './Input.module.css';
import { type } from '@testing-library/user-event/dist/type';

const Input = (id, label, type, value, isValidm, ...rest) => {
  return (
    <div className={`${styles.control} ${!isValid ? styles.invalid : ''}`}>
      <label htmlFor={id}>{label} </label>
      <input
        type={type}
        id={id}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
