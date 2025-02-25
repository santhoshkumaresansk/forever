import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';
const Search = () => {
  const {search,setsearch,showsearch,setshowsearch} =useContext(ShopContext)
  const [vis,setvis] =useState(false)
  const location =useLocation()
  useEffect(()=>{
    if(location.pathname.includes("/collection")){
      setvis(true)
    }else{
      setvis(false)
    }
  },[location])
  return showsearch&&vis ? (
    <div>
      <div className={`flex justify-center w-full h-10 mb-5 gap-2 items-center`}>
        <div className='w-1/2 h-full border rounded-3xl gap-11 border-black flex items-center pl-5'>
          <input type="text" value={search} placeholder='search...' className='w-full mr-3 outline-0' onChange={(e)=>setsearch(e.target.value)} />
        </div>
        <img src={assets.cross_icon} onClick={()=>setshowsearch(false)}  alt="" className='w-5 h-5 cursor-pointer ' />
      </div>
    </div>
  ):null;
}

export default Search;
