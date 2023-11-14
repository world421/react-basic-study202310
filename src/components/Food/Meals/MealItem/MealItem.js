import React from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import CartContext from '../../../../store/cart-context';

const MealItem = ({ id, price, description, name }) => {
  // context 에서 필요한 데이터 or 함수를 소비하기 위해 꺼내기
  // addItem -> 장바구니 에 상품을 추가하는 함수를 얻어옴.
  const { addItem } = useContent(CartContext);
  const addToCartHandler = (amonut) => {
    addItem({
      id: id,
      name: name,
      prve: price,
      amount: +amonut,
    });
    addItem(itme);
  };
  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm
          id={id}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
