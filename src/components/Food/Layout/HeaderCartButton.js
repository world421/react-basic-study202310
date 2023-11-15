import React, { useContext } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  //컴포넌트 나눠져있어야 숫자만 재랜더링됨 ~!
  const { button, icon, badge } = styles;

  const { items } = useContext(CartContext);
  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount;
  }, 0);
  return (
    <button
      className={button}
      onClick={onShow}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
