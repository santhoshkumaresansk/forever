import React, { useContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Product from '../pages/Product';
import Title from './Title';
import ProductItem from './ProductItem';
const BestSeller = () => {
    const {products} =useContext(ShopContext)
    const [bestproduct,setbestproduct] =useState([])
   
    useEffect(()=>{
        const best_arr=products.filter((item)=>{
            return item.bestseller;
             
         })
         setbestproduct(best_arr.slice(0,5))
         console.log("bestseller",best_arr.slice(0,5))
      
    
    },[])
    return (
        <div>
            <div  className='m-10 sm:m-6 flex gap-5 flex-col text-xl justify-center items-center '>
                <Title text1={'BEST'} text2={'SELLER'} />
                <span className='text-sm text-center sm:text-2xl ' style={{color:"gray", fontFamily: "cursive" }}>Discover the latest trends and designs, crafted to make every moment stylish!</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "4%", justifyContent: "center", alignItems: "center" }}>
                {
                    bestproduct.map((item,index) => {
                        return <ProductItem key={index} image={item.image} price={item.price} name={item.name} _id={item._id} />
                    })
                }
            </div>
        </div>
    );
}

export default BestSeller;
