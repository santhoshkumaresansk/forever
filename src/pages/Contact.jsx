import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Subscribe from '../components/Subscribe'
const Contact = () => {
  return (
    <div>
      <div>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='w-full mt-10 md:flex-row flex-col p-5 flex justify-center md:items-center gap-5'>
        <div className='md:w-[40%] '>
          <img src={assets.contact_img} alt="" className='w-fit '/>
        </div>
        <div className='text-xl'>
          <p className='mb-5 font-semibold text-2xl'>Our Store</p>
          <address>E-45 mariyamman kovil st <br />
          Manjalar , Periyakulam, Theni
          </address>
          <p className='mt-5 '>Tel: +9791209488</p>
          <p className='mb-5'>Email: santhoshkumaresansk@gmail.com</p>
          <div>
            <p className='font-semibold text-2xl mb-7'>Careers at Forever</p>
            <p>Learn more about our teams and jobs opening.</p>
            <button className='border cursor-pointer border-black p-2 w-35 h-12 text-xl mt-5'>Explore Jobs</button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Subscribe/>
      </div>
    </div>
  );
}

export default Contact;
