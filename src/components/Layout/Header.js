import React, { Fragment } from 'react';
import './Header.css';
import ImgMeals from '../../components/assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=> {
  return (
    <Fragment>
        <header className='header'>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className='main-image'>
            <img src={ImgMeals} alt="A table full of delicious food"/>
        </div>
    </Fragment>
  )
}

export default Header