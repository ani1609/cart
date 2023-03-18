import React from 'react';

class CartItem extends React.Component
{
    
    inceraseQuantity=()=>{
        // this.setState({
        //     qty: this.state.qty+1
        // });
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, ()=> {
            console.log('this.state', this.state);
        });
    }

    decreaseQuantity=()=>{

        const {qty}=this.state;
        if (qty==0)
            return;
        this.setState((prevState) => {
            return {
                qty: prevState.qty -1
            }
        }, ()=> {
            console.log('this.state', this.state);
        });
    }


    render()
    {
        const { price, title, qty } = this.props.product;
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
                        <img
                            alt="incerase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/10041/10041625.png"
                            onClick={this.inceraseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        />
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

// comment÷