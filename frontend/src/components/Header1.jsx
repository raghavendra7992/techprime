import React from 'react'
import './dashboard.css'
import header from "../assigment-assest/Header-bg.svg"
import logo from "../assigment-assest/Logo.svg"


const Header1 = () => {
  return (
    <div style={{width:"100%"}}>
            <img style={{width:"100%"}} src={header} alt={header} />
            <p >{"<  Create Project"}</p>
            <div id="logoimg">
              <img src={logo} alt={logo} />
            </div>
         </div>
  )
}

export default Header1