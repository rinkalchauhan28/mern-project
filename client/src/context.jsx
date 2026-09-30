import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const TokenContext = createContext()

export const ProviderFunc = ({children})=>{
    const [token,setToken] = useState('')
    return(
        <TokenContext.Provider value={{token,setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export const useToken = ()=>{
    return useContext(TokenContext)
}