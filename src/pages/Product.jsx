import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import RelatedProduct from '../components/RelatedProduct';
const Product = () => {
  const { id } = useParams()
  const { products, currency,addtocart,getcart } = useContext(ShopContext)
  const [parent_img, setparent_img] = useState("")
  const [modify_products, setmodify_products] = useState("")
  const [size, setsize] = useState("")
  const [pic_border, setpic_border] = useState(null)
  const [reviewbox, setreviewbox] = useState(true)
  const pro_fun = async () => {
    const p =  products.map((item) => {
      if (item._id == id) {
        setparent_img(item.image[0])
        setmodify_products(item)

        console.log(modify_products)
      }
    })

  }
  const handle = (image, idx) => {
    setparent_img(image)
    setpic_border(idx)
  }
  const handle_cart =()=>{
    addtocart(modify_products._id,size)
    getcart()
    
  }
  useEffect(() => {
    pro_fun()
  }, [id, products])
  return modify_products ? (
    <div>
      <div className='md:flex w-[90%]  m-10 md:h-fit h-full md:gap-30 '>{/*common div */}
        {/*left side*/}
        <div className='flex md:w-[50%] h-full gap-3 '>
          <div className='md:w-40 md:h-29  w-1/4 h-1/4 flex flex-col gap-1 '>{/*small image*/}
            {
              modify_products.image.map((item, idx) => {
                return <img className={`w-full h-full ${idx == pic_border ? "border border-black" : ''}`} key={idx} src={item} alt="" onClick={() => handle(item, idx)} />

              })
            }
          </div>

          <div className='w-full border border-black'>{/*big image */}
            <img src={parent_img} alt="" className='h-full w-full' />
          </div>
        </div>
        {/*right side */}
        <div className='md:w-[40%]'>
          <h1 className='font-semibold text-xl mt-3 md:mt-0'>{modify_products.name}</h1>
          <div className='flex items-center mt-3'>
            <img className='w-4 h-4' src={assets.star_icon} alt="" />
            <img className='w-4 h-4' src={assets.star_icon} alt="" />
            <img className='w-4 h-4' src={assets.star_icon} alt="" />
            <img className='w-4 h-4' src={assets.star_icon} alt="" />
            <img className='w-4 h-4' src={assets.star_dull_icon} alt="" />
            <p className='ml-2'>(122)</p>
          </div>
          <p className='font-bold mt-3'>{currency} {modify_products.price}</p>
          <p className=' mt-3'>{modify_products.description}</p>
          <p className='mb-4 font-semibold mt-3'>Select size</p>
          <div className='flex gap-5 '>
            {
              modify_products.sizes.map((item, idx) => {
                return <div key={idx} onClick={() => setsize(item)} className={`border cursor-pointer border-black w-10 text-center ${item == size ? 'bg-black text-white' : ''}`}>{item}</div>
              })
            }
          </div>
          {/*ADD TO CART SECTION*/}
          <button onClick={()=>handle_cart()} className='cursor-pointer bg-black p-2 w-40 text-white text-center mt-5'>ADD TO CART</button>
          <div className='mt-10 md:mt-22'>
            <p>100% Original Cotton Product</p>
            <p>Cash on delivery is available on this product .</p>
            <p>Easy return and exchange policy within 7 days .</p>
          </div>
          <div className='mt-8 border border-black p-2 h-fit md:w-110 '>
            <div className='flex gap-2 mb-4'>
              <div className={`border border-black p-1 ${reviewbox ? "bg-black text-white" : ""}`} onClick={() => setreviewbox(true)}>Description</div>
              <div className={`border border-black p-1 ${reviewbox ? "" : "bg-black text-white"}`} onClick={() => setreviewbox(false)}>Product Review</div>
            </div>
            {reviewbox ? (
              <div>Forever is a user-friendly e-commerce
                platform offering a wide range of
                products with personalized discounts.
                It ensures secure payments, fast delivery,
                and easy returns for a hassle-free shopping experience.
                Dedicated
                24/7 support makes every purchase seamless and satisfying.</div>
            ) : <div>
              This product has received 122 reviews,
              eflecting its popularity and customer satisfaction.
              Shoppers appreciate its quality, reliability, and
              value for money, making it a top choice in its category.
              With detailed feedback from users,
              you can confidently make an informed purchase decision.</div>}

          </div>
        </div>

      </div>
      <div>{/*related product */}
        <Title text1={"Related"} text2={"product"} />
        <div>
          <RelatedProduct category={modify_products.category} subCategory={modify_products.subCategory}/>
        </div>
      </div>
    </div>

  ) : ""
}
export default Product;
