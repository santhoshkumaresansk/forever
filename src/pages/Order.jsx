import React, { useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
const Order = () => {
  const { currency, products } = useContext(ShopContext)
  let product = products.slice(1, 4)
  console.log(product)
  return (
    <div className='p-7'>
      <div className='flex justify-normal flex-col items-start w-full '>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className='flex flex-col gap-6 mt-10 md:mt-10  '>
        {
          product.map((item) => {
            return (
              <div className='flex md:flex-row flex-col md:gap-1 gap-3  justify-between items-center  border-b-1 w-full border-gray-300'>
                <div className='w-20'>
                  <img src={item.image[0]} alt="" />
                </div>
                <div>
                  <p className='mb-2 font-semibold'>{item.name}</p>
                  <div className='flex gap-10'>
                    <p>{currency} {item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: {item.sizes[0]}</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 '>
                  <p className={`border-1 w-3 h-3 bg-green-400  cursor-pointer border-gray-300 rounded-full`}></p>
                  <p>Ready to ship</p>
                </div>
                <div>
                  <button className='border cursor-pointer mb-2 font-semibold border-gray-300 w-30 h-9'>Track Order</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Order;
