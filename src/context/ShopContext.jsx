import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
export const ShopContext = createContext();
const ShopContextProvider = (probs) => {
    const currency = '$'
    const deleviry_free = '10'
    const [search, setsearch] = useState("")
    const [showsearch, setshowsearch] = useState(false)
    const [cartItem, setcartItem] = useState([])
                                                                           
    const addtocart = async (itemID, size) => {
        let clonecart = structuredClone(cartItem)
        console.log(clonecart);
        
        if (!size) {
            toast.error("please select a size !")
            return
        }
         {/*[{1:{M:1}},{2:{S:1}}]*/}  /*example*/
         {/*clonecart =[] , itemId= abaac => clonecart[itemId] */}
        if (clonecart[itemID]) {
            {/*clonecart[abaac][M] */}
            if (clonecart[itemID][size]) {
                clonecart[itemID][size] += 1;
                toast(`${clonecart[itemID][size]} Product added to your cart !`)
            } else {
                clonecart[itemID][size] = 1
                toast(`${clonecart[itemID][size]} Product added to your cart !`)
            }
        } else {
            {/*clonecart[abaac] ={}=>    [abaac:{}] */}
            clonecart[itemID] = {}
            {/*clonecart[abaac][M]=>      [abaac:{M:1}] */}
            clonecart[itemID][size] = 1
            toast(`${clonecart[itemID][size]} Product added to your cart !`)
        }
        setcartItem(clonecart)
        console.log(clonecart);
        
    }
    const del =async(itemID,size,quality) =>{
        let delclone = structuredClone(cartItem)
        console.log('delarr',cartItem);
        delclone[itemID][size] =quality
        setcartItem(delclone)
       
    }
    const gettotalcartcount =()=>{
        let totalcartcount = 0
        for(const items in cartItem){
            const product_cart = products.find((product)=>items == product._id)
            for(const item in cartItem[items]){
                if(cartItem[items][item]>0){
                    totalcartcount += product_cart.price * cartItem[items][item]
                }
            }
        }
        return totalcartcount ;
    }
    console.log('delarr',cartItem);
    const getcart = () => {
        var totalcount = 0;
        {/*cartItem=> [{123:{L:1}},{124:{s:1}}]*/}
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalcount += cartItem[items][item]
                    }  
                } catch (error) {
                    
                }  
            }  
        }
        return totalcount;
    }
  

    const value = {
    
        products,
        currency,
        deleviry_free,
        search,
        setsearch,
        showsearch,
        setshowsearch,
        cartItem,
        setcartItem,
        addtocart,
        getcart,
        del,
        gettotalcartcount
    }
    return (
        <ShopContext.Provider value={value}>
            {probs.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;