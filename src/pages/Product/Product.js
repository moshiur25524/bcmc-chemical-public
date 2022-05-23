import React from 'react';

const Product = ({ product }) => {
    const { img, name, minimum_Quantity, available_Quantity, price,short_description } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img style={{height: '100'}} src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{short_description}</p>
                <p>Minimum Quantity: {minimum_Quantity}</p>
                <p>Available Quantity: {available_Quantity}</p>
                <p><small>Price: ${price}</small> (per Unit)</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;