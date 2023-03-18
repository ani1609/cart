import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component
{
    render()
    {
        return(
            <div> 
                <h2>YOUR CART</h2>

                <div><CartItem /></div>
                <div><CartItem /></div>
                <div><CartItem /></div>
                
            </div>
        );
    }
}

export default Cart;
