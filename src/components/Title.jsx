import React from 'react';

const Title = ({text1,text2}) => {
  return (
    <div  className=' flex  justify-center gap-3 items-center  '>
      <p className='text-xl md:text-3xl text-gray-600'>{text1}</p>
      <p className='text-xl md:text-3xl text-black-600'>{text2}</p>
      <hr className='w-6 md:w-20'/>
    </div>
  );
}

export default Title;
