import React from 'react';
import { assets } from '../assets/assets';
const Hero = () => {
    return (
        <div className='flex-col sm:items-center m-16 flex sm:flex-row mt-0' style={{ border: "1px solid gray"}}>
            <div className='flex pl-2 items-center text-center justify-center h-44 sm:h-1/2 sm:w-1/2' >
                <div style={{display:"flex",flexDirection:"column",gap:"5px",justifyContent:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                        <hr style={{width:"40px"}} />
                        <p>OUR BESTSELLERS</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <h1 className='prata-regular text-xl font-bold sm:text-4xl'>Latest Arrivals</h1>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                        <p>SHOP NOW</p>
                        <hr style={{width:"40px"}}/>
                    </div>
                </div>
            </div>
            <div className='h-52 sm:w-1/2 sm:h-1/2'>
                <img src={assets.hero_img} alt="" className='w-full h-full'/>
            </div>
        </div>
    );
}

export default Hero;
