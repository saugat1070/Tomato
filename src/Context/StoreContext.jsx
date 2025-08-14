import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/frontend_assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId)=>{
        // if(!cartItems[itemId]){
        //     setCartItems((prev)=>({...prev,[itemId]:1}))
        // }else{
        //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}))
        // }
        !cartItems[itemId] ? setCartItems((prev)=>({...prev,[itemId]:1})) : setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev?.itemId -1}));

    }

    const contecxtValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    return (
        <StoreContext.Provider value={contecxtValue}>
            {props.children}
        </StoreContext.Provider>
    )
}