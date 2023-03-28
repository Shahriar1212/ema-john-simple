import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img, name, seller, quantity, rating, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className='product-name'>{name}</h4>
                <p>${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {rating} stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;