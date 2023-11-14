import React from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () => {
  //컴포넌트 나눠져있어야 숫자만 재랜더링됨 ~!
  const { button, icon, badge } = styles;
  return (
    <button className={button}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
