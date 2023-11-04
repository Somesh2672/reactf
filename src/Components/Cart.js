// Components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, checkout } from '../Redux/Action/actions';


function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
        </div>
      ))}
      <div className="checkout-sidebar">
        <h2>Checkout</h2>
        <p>Total: $X.XX</p>
        <button onClick={() => dispatch(checkout())}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
