import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Auth } from '../authentication/authentication'

const PrivateRouter = ({children}) => {
    const {islogin}=useContext(Auth)
    if(!islogin){
        return <Navigate to="/"/>
    }
    return children;
}

export default PrivateRouter