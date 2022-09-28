import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let name = [];
    for (const product of cart) {
        name = name + product.strMeal;
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p> Your meal item name:{name}</p>

        </div>
    );
};

export default Cart;