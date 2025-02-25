import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <Title text1={"ABOUT"} text2={"US"}/>
      <div className='flex md:flex-row flex-col gap-5 p-5 mt-10 justify-around items-center w-full'>
        <div className='md:w-1/4'>
          <img src={assets.about_img} alt="" className='h-100'/>
        </div>
        <div className='prata-regular text-justify md:w-1/2 flex flex-col gap-5 justify-center '>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the qay people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, expore, ans purchase a wide range of products from the comfort of theri homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers</p>
          <p className='font-semibold'>Our Mission</p>
          <p>Our mission at Forever is to empower customers with choice, convenience, and cofidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery beyond.</p>
        </div>
      </div>
      <div className='md:pl-15 p-5'>
        <div className='flex justify-around '><Title text1={'WHY'} text2={'CHOOSE US'}/></div>
        
        <div className='flex  md:flex-row flex-col justify-center items-center mt-10 '>
          <div className='md:w-115  md:h-70 border border-gray-200 p-5 flex flex-col justify-center'>
            <p className='font-semibold'>Quality Assurance:</p>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='md:w-115 md:h-70 border border-gray-200 p-5  flex flex-col justify-center'>
            <p className='font-semibold'>Convenience:</p>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has ever been easier.</p>
          </div>
          <div className='md:w-115 md:h-70 border border-gray-200 p-5  flex flex-col justify-center'>
            <p className='font-semibold'>Exceptional Customer Service:</p>
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
