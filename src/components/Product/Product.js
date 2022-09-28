import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCard }) => {
    // const {product, handleAddToCard }= props;
    // console.log(props.product)
    const { strMeal, strMealThumb, strCategory, strArea } = product;
    // console.log(props);

    return (
        <div className='product'>
            <img src={strMealThumb} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{strMeal}</p>
                <p>Category: {strCategory}</p>
                <p> Area: {strArea}</p>
            </div>
            <button onClick={() => handleAddToCard(product)} className='btn-cart'>
                <p className='btn-text'>Add to meals</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;