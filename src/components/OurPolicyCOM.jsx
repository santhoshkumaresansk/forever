import React from 'react';

const OurPolicyCOM = ({icon,text1,text2}) => {
  return (
    <div className='flex  p-2 flex-col sm:w-96 w-52 items-center justify-center text-center'>
       <img src={icon} alt="" className='w-12 sm:w-12 sm:h-12' />
       <p className='text-xs sm:text-sm font-semibold'>{text1}</p>
       <p className='text-xs sm:flex text-gray-500 sm:text-sm'>{text2}</p>
    </div>
  );
}

export default OurPolicyCOM;
