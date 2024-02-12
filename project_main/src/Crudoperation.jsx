import React from 'react'
import Create from './Component/Pages/Create'
import Read from './Component/Pages/Read'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const crudoperation = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <div className="container">
        <Route eaxact  path='/' element={<Create/>}> </Route>
        <Route eaxact  path='/read' element={<Read/>}> </Route>
      </div>
    </Routes>
    
    </BrowserRouter>
  
    </>
  )
}

export default crudoperation
