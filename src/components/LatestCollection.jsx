import React, { useContext, useEffect } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} =useContext(ShopContext);
    const product = products.slice(0,15)
    
    useEffect(()=>{
      product
      console.log("Latestcollection",product)
    },[])
    
  return (
    <div>
        <div  className='flex gap-5 flex-col text-xl justify-center items-center'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <span className='text-sm text-center sm:text-2xl 'style={{color:"gray",fontFamily:"cursive"}}>Discover the latest trends and designs, crafted to make every moment stylish!</span>
        </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"30px",marginTop:"4%",justifyContent:"center",alignItems:"center"}}>
        {
            product.map((item,index)=>{
                return <ProductItem key={index} _id={item._id} name={item.name} image={item.image} price={item.price}/>
            })
        }
      </div>
    </div>
  );
}

export default LatestCollection;
