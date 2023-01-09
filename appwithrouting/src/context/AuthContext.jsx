import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [isAuth ,setIsAuth] =useState(false);

    const handelChangeAuth =(status)=>{
            setIsAuth(status)
    }

    return <AuthContext.Provider value={{isAuth,handelChangeAuth}}>{children}</AuthContext.Provider>
}
