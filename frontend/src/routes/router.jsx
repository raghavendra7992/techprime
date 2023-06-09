import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={}/>
            <Route path="/dashboard" element={}/>
            <Route path="/list" element={}/>
            <Route path='/create' element={}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router