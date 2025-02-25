import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, cartItem, currency, del, gettotalcartcount } = useContext(ShopContext);
  const [cartArr, setCartArr] = useState([]);
  const navi = useNavigate()
  useEffect(() => {
    const cartProductList = [];
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        if (cartItem[productId][size] > 0) {
          cartProductList.push({
            id: productId,
            size: size,
            quantity: cartItem[productId][size],
          });
        }
      }
    }
    setCartArr(cartProductList);
  }, [cartItem]);


  return (
    <div className="flex ml-5 flex-col">
      <div className='flex items-start'><Title text1="YOUR" text2="CART" /></div>

      <div>
        {
          cartArr.map((item, idx) => {
            const savedProduct = products.find((product) => product._id === item.id);
            return (
              <div key={idx} className="flex mt-5 gap-5 w-full items-center p-4 border-b-1 border-gray-400">
                <img src={savedProduct.image[0]} alt={savedProduct.name} className="w-20 h-20 mr-4" />
                <div className=''>
                  <p className="font-semibold mb-8">{savedProduct.name}</p>
                  <div className="flex items-center justify-between gap-10">
                    <p>
                      {currency}
                      {savedProduct.price}
                    </p>
                    <p>Size: {item.size}</p>
                    <p className='inline'>Quantity : <input onChange={(e) => e.target.value === '' || e.target.value == '0' ? null : del(savedProduct._id, item.size,
                       Number(e.target.value))} className='w-10 text-center border-1 border-gray-400' type='number' min={1} defaultValue={item.quantity} /></p>
                    <div className='ml-10 cursor-pointer' onClick={() => del(savedProduct._id, item.size, 0)} > <img className='w-4 h-4' src={assets.bin_icon} alt="" /></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='w-full flex justify-end '>
      <div className='md:w-170 w-100k border  border-gray-400  p-3 mt-20'>
        <div>
          <Title text1={'CART'} text2={'TOTALS'} />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {gettotalcartcount()}</p>
          </div>
          <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {10}</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Total</p>
            <p>{currency} {gettotalcartcount() + 10}</p>
          </div>
          <div className='flex justify-end'>
          <button onClick={()=>navi('/place-order')} className='bg-black cursor-pointer text-white p-2'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Cart;
