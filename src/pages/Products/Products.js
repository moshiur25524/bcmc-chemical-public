import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>It contain all Kinds of Products : {products.length}</h1>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
            {
                products.map(product => <Product
                key={product.id}
                product = {product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;