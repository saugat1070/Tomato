import React, { createContext } from 'react'
import { food_list } from '../assets/frontend_assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props)=>{

    const contecxtValue = {
        food_list
    }
    return (
        <StoreContext.Provider value={contecxtValue}>
            {props.children}
        </StoreContext.Provider>
    )
}