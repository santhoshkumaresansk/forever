import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const { products,search,showsearch } = useContext(ShopContext)
  const [visible, setvisible] = useState(false)
  const [filterproduct, setfilterproduct] = useState(products)
  const [category, setcategory] = useState([])
  const [subCategory, setsubCategory] = useState([])
  const [sorttype,setsorttype] =useState('Relavent')

  const store_val = (e) => {
   
    if (category.includes(e.target.value)){
      const val =category.filter((item)=>{return item !==e.target.value})
      setcategory(val)
    }else{
      setcategory([...category,e.target.value])
    }
    
  }
  const store_val2 =(e)=>{
    if(subCategory.includes(e.target.value)){
      const val2 = subCategory.filter((item)=>item !==e.target.value)
      setsubCategory(val2)
    }else{
      setsubCategory([...subCategory,e.target.value])
    }
  }
  const final_val =()=>{
  
    let copyproduct = products.slice()
    if(showsearch){
      copyproduct = copyproduct.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())) 
    }
    if(category.length>0){
      copyproduct = copyproduct.filter((item)=>category.includes(item.category))
    }
    if (subCategory.length > 0) {
      copyproduct = copyproduct.filter((item) => subCategory.includes(item.subCategory));
    }
    
    setfilterproduct(copyproduct)
  }
  const short =()=>{
    let short_filter = filterproduct.slice()
    switch(sorttype){
      case 'low to high':
        const vals1 = short_filter.sort((a,b)=>a.price - b.price)
        setfilterproduct(vals1)
        break
       case 'high to low' :
        const vals2 =short_filter.sort((a,b)=>b.price - a.price)
         setfilterproduct(vals2)
         break 
        default:
          setfilterproduct(products)
          break
    }
   
  }
  useEffect(()=>{
    short()
  },[sorttype])
  
  useEffect(()=>{
    final_val()
  },[category,subCategory,products,search,showsearch])

  return (
    <div className=' w-full p-5 flex flex-col gap-5 sm:flex md:flex-row '>
      <div className=''>
        <div className='mb-6 flex gap-2 items-center ' >
          <p className='text-xl md:text-sm font-semiboldbold mt-2 font-semibold' >FILTERS</p>
          <img src={assets.dropdown_icon} alt="" className={`w-3 cursor-pointer mt-3  rotate-90 md:hidden  ${visible ? 'rotate-y-180' : ''}`} onClick={() => setvisible(!visible)} />
        </div>
        <div >
          <div className={`md:flex md:flex-col  gap-5 ${visible ? 'flex' : 'hidden'}`}>
            <div className='border border-gray-300 p-5 w-full md:w-52 '>
              <p>CATEGORIES</p>
              <input type="checkbox" value={'Men'} className='mt-6' onChange={store_val} /> Men <br />
              <input type="checkbox" value={'Women'} className='mt-3' onChange={store_val} /> Women<br />
              <input type="checkbox" value={'Kids'} className='mt-3' onChange={store_val} /> Kids<br />
            </div>
            <div className='border border-gray-300 p-5 w-full md:w-52 '>
              <p>TYPE</p>
              <input type="checkbox" value={'Topwear'} className='mt-6'onChange={store_val2} /> Topwear <br />
              <input type="checkbox" value={'Bottomwear'} className='mt-3'onChange={store_val2} /> Bottomwear<br />
              <input type="checkbox" value={'Winterwear'} className='mt-3'onChange={store_val2} /> Winterwear<br />
            </div>
          </div>
        </div>
      </div>
      <div className='w-4/4'>
        <div className='flex justify-between '>
          <div className=''>
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>
          <div className='border border-gray-300 p-2'>
            <select onChange={(event)=>setsorttype(event.target.value)} className='border-none outline-transparent'>
              <option value="Relavent">Sort by Relavent</option>
              <option value="low to high">Low to High</option>
              <option value="high to low">High to Low</option>
            </select>
          </div>
        </div>
        <div className='flex flex-wrap gap-12  justify-around sm:gap-5 mt-3 sm:justify-between'>
          {
            filterproduct.map((item, index) => {
              return <ProductItem key={index} image={item.image} _id={item._id} name={item.name} price={item.price} />
            })
          }
        </div>
      </div>

    </div>
  );
}

export default Collection;
