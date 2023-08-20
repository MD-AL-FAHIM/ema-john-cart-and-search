import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product , handleAddToCart}) => {
    // console.log(props.product);
    // const {product , handleAddToCart} =props;
    const {img , seller ,name , price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="pro-info">
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            
            <button onClick={ ()=> handleAddToCart(product)} className="btn-cart">
                   <p> Add to Cart</p>
                   <FontAwesomeIcon 
                        icon={faShoppingCart}>
                   </FontAwesomeIcon>
            </button>
        
        </div>
    );
};

export default Product;