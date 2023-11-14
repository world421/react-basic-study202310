import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealItem from './MealItem/MealItem';

function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
      <MealItem />
    </>
  );
}

export default Meals;
