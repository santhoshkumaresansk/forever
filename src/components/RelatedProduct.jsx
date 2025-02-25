import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext)
    const [arr, setarr] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productcopy = products.slice()
            productcopy = productcopy.filter((item)=>item.category==category)
            productcopy = productcopy.filter((item)=>item.subCategory==subCategory)
            setarr(productcopy.slice(0,5))
        }
    }, [ products])
    return (
        <div className='flex flex-wrap gap-10 justify-center mt-10'>
            {
                arr.map((item,idx)=>{
                    return <ProductItem key={idx} name={item.name} image={item.image} _id={item._id} price={item.price} />
                })
            }
        </div>
    );
}

export default RelatedProduct;
