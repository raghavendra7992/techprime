import { createContext,useState } from "react";
export const Auth=createContext();
export const AuthProvider=({children})=>{
    let message=localStorage.getItem("msg");

    const [login,,setlogin]=useState(message?true:false)

    const log=(message)=>{
        setlogin(true)
    }
    const logout=()=>{
        localStorage.removeItem("msg")
        setlogin(false)
    }
    return<Auth.Provider value={{login,log,logout}} >
        {children}
        </Auth.Provider>
}