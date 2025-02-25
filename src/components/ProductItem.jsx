import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ image, price, name, _id }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div >
            <Link to={`/product/${_id}`}>
                <div  className='product w-40 h-52 sm:w-62 sm:h-96 hover:scale-105 transition-all duration-500'>
                    <img src={image[0]} alt="" style={{width:"100%",height:"75%"}} />
                    <p>{name}</p>
                    <p>{currency} {price}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
