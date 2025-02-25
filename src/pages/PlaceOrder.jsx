import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const PlaceOrder = () => {
   const [greenstate,setgreenstate] =useState(null)
    const { currency, gettotalcartcount } = useContext(ShopContext);
    const navi = useNavigate()
    return (
        <div className='flex md:flex-row items-center flex-col md:justify-around md:p-5 w-full '>
            {/*Left Side */}
            <div className='flex flex-col  sm:gap-10 w-fit border border-gray-400 p-3'  >
                <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                <div className='flex mt-3 flex-col gap-5'>
                    <div className='gap-3 flex '>
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='First name' />
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='Last name' />
                    </div>
                    <div>
                        <input type="email" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='Email address' />
                    </div>
                    <div>
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='Street' />
                    </div>
                    <div className='gap-3 flex '>
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='City' />
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='State' />
                    </div>
                    <div className='gap-3 flex '>
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='Pincode' />
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='Country' />
                    </div>
                    <div>
                        <input type="text" className='md:w-60 h-13 border border-gray-400 pl-2' placeholder='Phone' />
                    </div>
                </div>
            </div>
            {/*RIght Side */}
            <div className='flex-col flex'>
                <div className='w-full flex mt-10  '>
                    <div className='w-100 md:w-150 border   border-gray-400  p-3 '>
                        <div>
                            <Title text1={'CART'} text2={'TOTALS'} />
                        </div>
                        <div className='flex flex-col gap-4 md:mt-3 mt-6'>
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
                        </div>

                    </div>
                </div>

                <div className='w-full flex mt-10  '>
                    <div className='w-100 md:w-150 border  border-gray-400  p-3 '>
                        <Title text1={'PAYMENT'} text2={'METHOD'} />
                        <div className='flex md:flex-row md:justify-center flex-col mt-6 md:mt-3 gap-3'  >
                            <div className='flex items-center gap-x-3'>
                                <p onClick={()=>setgreenstate('stripe')} className={`border-1 w-3 h-3 cursor-pointer border-black rounded-full ${greenstate=='stripe'?'bg-green-400 border-gray-300':''}`}></p>
                                <img src={assets.stripe_logo} alt="stripe payment" className='w-14' />
                            </div>
                            <div className='flex items-center gap-x-3'>
                            <p onClick={()=>setgreenstate('razo')} className={`border-1 w-3 h-3 cursor-pointer border-black rounded-full ${greenstate=='razo'?'bg-green-400 border-gray-300':''}`}></p>
                                <img src={assets.razorpay_logo} alt="razorpay payment" />
                            </div>
                            <div className='flex items-center gap-x-3'>
                            <p onClick={()=>setgreenstate('cash')} className={`border-1 w-3 h-3 cursor-pointer border-black rounded-full ${greenstate=='cash'?'bg-green-400 border-gray-300':''}`}></p>
                                <p className='font-semibold'>CASH ON DELIVERY</p>
                            </div>

                        </div>
                        <div className='flex justify-end '>
                            <button className='p-1 border cursor-pointer mt-3 w-40 h-10 bg-black text-white' onClick={()=>`${greenstate?navi('/Order'):toast.error("PLEASE SELECT ORDER TYPE !")}`}>PLACE ORDER</button>
                        </div>
                    </div>


                </div>
            </div> </div>
    );
}

export default PlaceOrder;
