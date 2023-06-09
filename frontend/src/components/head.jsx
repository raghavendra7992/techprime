import React from 'react'
import Header from '../assigment-assest/Header-bg.svg'
import Logo from '../assigment-assest/Logo.svg'
export default function Head() {
  return (
    <div id='h1'>
        <img id="h1img" src={Header} alt={Header} />
        <p id='h1p'>Dashboard</p>
        <div id='lg1'>
            <img src={Logo} alt={Logo}/>
        </div>
    </div>
  )
}
// header_container
// header_img
// header_p
// logo_img