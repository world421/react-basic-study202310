import React, { useContext } from 'react';

import styles from './CartItem.module.scss';
import CartContext from '../../../store/cart-context';

const CartItem = ({ cart }) => {
  const { name, price, amount, id } = cart;

  const { addItem, removeItem } = useContext(CartContext);

  console.log(cart);
  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);
  const cartAddItemHandler = () => {
    // + 버튼 누르면 무적권  amount 하나다
    addItem({ ...cart, amount: 1 });
  };
  const cartremoveItemHandler = () => {
    removeItem(id);
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartremoveItemHandler}>−</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
