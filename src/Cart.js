import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component
{
    constructor(){
        super();
        this.state= {
            products: [
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
    handleIncreaseQuantity=(product)=>
    {
        console.log("hey increase the quantity of ", product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        })
    }

    handelDecreaseQuantity=(product)=>
    {
        console.log(product);
        const{products}=this.state;
        const index=products.indexOf(product);
        if (products[index].qty==0)
            return;
        products[index].qty -= 1;;
        this.setState({
            products: products
        })
    }

    handelDeleteProduct=(id)=>
    {
        const {products}=this.state;
        const items=products.filter((item)=> item.id!==id);
        this.setState(
        {
            products: items
        })
    }

    render()
    {
        const {products}=this.state;
        return(
            <div> 
                <h2>YOUR CART</h2>
                {products.map((product) =>{
                    return (
                        <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handelDecreaseQuantity}
                        onDeleteProduct={this.handelDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;
