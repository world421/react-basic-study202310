import React, { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  //컴포넌트 나눠져있어야 숫자만 재랜더링됨 ~!

  // bump 애니메이션을 제어하는 상태변수
  const [isBump, setisBump] = useState(false);

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);
  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    console.log('useEffect in CartBtn!');
    setisBump(true);

    //애니메이션 시간이 300밀리초니까 그 시간이 지나면 클래스를 제거.
    const timer = setTimeout(() => {
      setisBump(false);
    }, 300);
    // 0.3 초 이내에 setisBump 상태가 변경한다면
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  //items 변화 할 때마다 set true ㄹ로바꾸겠다
  return (
    <button
      //  isBump
      className={`${button} ${isBump ? bump : ''}`}
      onClick={onShow}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
