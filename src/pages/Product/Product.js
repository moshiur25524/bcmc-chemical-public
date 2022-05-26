import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, minimum_Quantity, available_Quantity, price,short_description } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img style={{height: '100'}} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <p>Minimum Quantity: {minimum_Quantity}</p>
                <p>Available Quantity: {available_Quantity}</p>
                <p><small>Price: ${price}</small> (per Unit)</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary"><Link to='/purchase'>Buy Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Product;