import React from 'react';

class CartItem extends React.Component
{
    constructor(){
        super();
        this.state= {
            price: 124999,
            title: "Samsung S23 Ultra",
            qty: 1,
            img: ''
        }
    }
    render()
    {
        const { price, title, qty } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div> 
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs. {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="incerase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/43/43625.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;

// comment÷jwhbf