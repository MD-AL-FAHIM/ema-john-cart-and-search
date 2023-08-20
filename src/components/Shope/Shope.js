import React, { useEffect, useState } from 'react';
import './Shope.css'
import Product from '../Product/Product';

const Shope = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) =>{
        const newCart  = [...cart , product];
        setCart(newCart);

    }


    return (
        <div className='shope-container'>
            <div className="products-containe">
        
            {
                products.map(product => <Product
                key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shope;