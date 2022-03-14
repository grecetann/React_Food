import React, { Fragment } from 'react'
import AvaibleMeals from './AvaibleMeals';
import MealsSummary from './MealsSummary';
import './MealsSummary.css';
const Meals=()=>{
  return (
    <Fragment>
        <MealsSummary/>
        <AvaibleMeals/>
        
    </Fragment>
  )
}

export default Meals