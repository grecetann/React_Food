import React,{useContext} from 'react'
import Modal from '../UI/Modal';
import CartItem from './CartItem'
import './Cart.css';
import CartContext from '../store/cart-store';

const Cart=(props)=> {
   const CartCtx=useContext(CartContext);
   const hasItems=CartCtx.items.length>0;
   const CartItemRemoveHandler=(id)=>{
    CartCtx.removeItem(id);
   }
   const CartItemAddHandler=(item)=>{
    CartCtx.addItem(item);
   }

   const totalAmount=`$${CartCtx.totalAmount.toFixed(2)}`;
    const cartItems=(
        <ul className='cart-items'>
        {CartCtx.items.map((item)=>(
        <CartItem
         KEY={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={CartItemRemoveHandler.bind(null,item.id)}
        onAdd={CartItemAddHandler.bind(null,item)}
        />
        ))}
        </ul>
        
    );
  return (
    <Modal onClose={props.onClose}>
    {cartItems}
    <div className='total'>
        <span>Total amont</span>
        <span>{totalAmount}</span>
    </div>
    <div className='actions'>
        <button className='button--alt ' onClick={props.onClose}>Close</button>
        {hasItems && <button className='button'>Order</button>}
    </div>
    </Modal>
  )
}

export default Cart