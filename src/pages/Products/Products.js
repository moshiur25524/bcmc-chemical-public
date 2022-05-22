import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Products;