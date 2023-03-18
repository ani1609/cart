import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component
{
    constructor(){
        super();
        this.state= {
            product: [
                {
                    title: "Samsung Galaxy S23 Ultra",
                    price: 124999,
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    title: "Apple iPhone 14 Pro Max",
                    price: 129999,
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    title: "Google Pixel 7 Pro",
                    price: 89999,
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    render()
    {
        const {product}=this.state;
        return(
            <div> 
                <h2>YOUR CART</h2>
                {product.map((product) =>{
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        );
    }
}

export default Cart;
