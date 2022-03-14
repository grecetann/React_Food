import React,{useContext} from 'react'
import './MealItem.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-store';
const MealItem=(props)=> {
   const CartCtx= useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;
    const onAddToCartHandler=(amount)=>{
        CartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price

        });
    }
  return (
    <li className='meal'>
        <div>
        <h3>{props.name}</h3>
        <div className='description'>{props.description}</div>
        <div className='price'>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem