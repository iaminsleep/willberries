import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import setModalVisibility from '../../.store/actions/setModalVisibility';

import CartTable from './cartTable';

function CartModal({API}) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  let totalPrice = 0;
  cart.forEach(good => {
    const totalItemPrice = +good.price * +good.count;
    totalPrice += totalItemPrice;
  })

  const submitOrder = function() {
    const cartModal = document.querySelector('#modal-cart');
    const nameField = document.querySelector('.modal-input[name="nameCustomer"]');
    const phoneField = document.querySelector('.modal-input[name="phoneCustomer"]');
    const emailField = document.querySelector('.modal-input[name="emailCustomer"]');

    const formData = new FormData();

    formData.append(cart);
    formData.append(nameField.value);
    formData.append(phoneField.value);
    formData.append(emailField.value);

    fetch(`${API}/orders`, {
      method: 'POST',
      body: formData,
    }).then(() => {
      cartModal.classList.remove('show');
      this.setState({cart: []})
    })
  }

  return (
    <div className="overlay show" id="modal-cart">
      <div className="modal">
        <header className="modal-header">
          <h2 className="modal-title">Cart</h2>
          <button className="modal-close" onClick={() => dispatch(setModalVisibility(false))}>x</button>
        </header>
        <div className="cart-wrapper">
          {cart.length > 0 ? 
            <CartTable API={API} cart={cart} /> 
            : <div id="cart-empty">There is nothing in the cart yet.</div>
          }
        </div>
        {cart.length > 0 ?
          <form className="modal-form" action="" onSubmit={submitOrder}>
            <input
              className="modal-input"
              type="text"
              placeholder="Your Name"
              name="nameCustomer"
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Phone"
              name="phoneCustomer"
            />
            <div className="total">Total:&nbsp;&nbsp;&nbsp;${totalPrice}</div>
            <button className="button cart-buy" type="submit">
              <span className="button-text">Checkout</span>
            </button>
          </form> : ''
        }
      </div>
    </div>
  );
}

export default CartModal;