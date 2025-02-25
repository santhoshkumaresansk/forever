import React from 'react';

const Subscribe = () => {
  const handlesubmit = (event)=>{
    event.preventDefault()
  }
  return (
    <div className='flex justify-center mb-2 items-center text-center mt-7  sm:mt-15'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h4 className='sm:text-2xl'>Subscribe now & get 20% off</h4>
        <p className='text-gray-400 text-xs sm:text-xl'>Stay in the loop! Subscribe now for updates, exclusive offers, and more.</p>
        <form onSubmit={handlesubmit}  className='sm:w-170 relative h-10 p-1 border border-black flex justify-between'>
            <input className='pl-2 w-90' required type="email" placeholder='Enter Your Email' style={{border:"none",outline:"none"}} />
            <button  className='bg-black  absolute right-0 top-0 h-10 bottom-0 flex items-center justify-center pl-4 pr-4 cursor-pointer text-white '>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
