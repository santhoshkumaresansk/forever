import React from 'react';
import { assets } from '../assets/assets';
const Footer = () => {
    return (
        <div className='bg-black w-full text-white  bottom-0 left-0 py-4   flex flex-col justify-center items-center  mt-24 gap-10 '>
            <div className='flex-col items-center sm:items-start flex sm:flex-row mt-10 justify-around w-full gap-10  bg-black text-white pt-10'>
                <div className='flex justify-center text-center flex-col '>
                    <h1  style={{ fontFamily: "initial" }}>FOREVER</h1>
                    <div className='mt-5  sm:w-72 '>
                        <p className='text-sm'>Welcome to Forever Shopping!
                            Your one-stop destination for all your shopping 
                            needs. Discover amazing deals, endless variety, 
                            and a seamless shopping experience.Shop
                             smart, shop forever—where happiness is just a 
                             click away! </p>
                    </div>
                </div>
                <div>
                    <p className='font-bold' style={{ fontFamily: "initial" }}>COMPANY</p>
                    <div className='mt-5'>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Delivery</p>
                        <p>Privacy policy</p>

                    </div>
                </div>
                <div>
                    <p className='font-bold' style={{ fontFamily: "initial" }}>GET IN TOUGH</p>
                    <div className='mt-5'>
                        <p>+91 9791209488</p>
                        <p className='text-sm'>sk@foreveryou.com</p>
                    </div>
                </div>
            </div>
            <p className='text-white font-semibold mb-2'>copyright2025@forever.com - All Right Reserved.</p>
        </div>
    );
}

export default Footer;
