import React,{ useState } from 'react';
import Header from './components/Layout/Header';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

import CartProvider from './components/store/cartProvider';


const App=() =>{
const [cartIsShown,setCartIsShown]=useState(false);

const showCartHnadler=(props)=>{
   setCartIsShown(true)
}
const hideCartHandler=(props)=>{
  setCartIsShown(false)
}
  return (
   <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHnadler}/>
      <main><Meals/></main>
      {/* <Lottie loop={true} className="myAnimation" animationData={myAnimation} /> */}
    </CartProvider>
  );
}

export default App;
