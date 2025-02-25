import React from 'react';
import OurPolicyCOM from './OurPolicyCOM';
import { assets } from '../assets/assets';
const OurPolicy = () => {
  return (
    <div className='flex gap-1 justify-around mt-10 items-center'>
      <OurPolicyCOM icon={assets.exchange_icon} text1={"Easy Exchange Policy"} text2={"We offer hassle free exchange policy"} />
      <OurPolicyCOM icon={assets.quality_icon} text1={"7 Days Return Policy"} text2={"We provide 7 days return policy"} />
      <OurPolicyCOM icon={assets.support_img} text1={"Best customer support"} text2={"We provide 24/7 customer support"}/>
    </div>
  );
}

export default OurPolicy;
