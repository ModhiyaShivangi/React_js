import React, { Component } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import CrudMenu from './CrudMenu'
import Create from './Create'
import Read from './Read'

 class CrudRoute extends Component {
  render() {
    return (
      <>
       
        <Routes>
            <Route path="/" element = {<CrudMenu/>}>
              <Route path ="/create" element = {<Create/>}/>
              <Route path ="/read" element = {<Read/>}/>
              </Route>
        </Routes>
       <Outlet/>
      </>
    )
  }
}

export default CrudRoute
