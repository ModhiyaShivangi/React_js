import React, { Component } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import HooksMenu from './HooksMenu'
import UseRefHook from './UseRefHook'
import UseRefHooks from './UseRefHooks'
import UseContext from './UseContext/UseContext'
import UseReducer from './UseReducer'
import UseCallback from './Use callback/UseCallback'
import UseCallbacktwo from './Use callback/UseCallbacktwo'
import UseCallbackthree from './Use callback/UseCallbackthree'
import UseMemo from './UseMemo'
import ForwardRef from './Forward Ref/ForwardRef'
import Palindrom from './Palindrom/Palindrom'


 class HooksRoute extends Component {
  render() {
    return (
      <>
       
        <Routes>
            <Route path="/" element = {<HooksMenu/>}>
              <Route path ="UseRefHook" element = {<UseRefHook/>}/>
              <Route path ="UseRefHooks" element = {<UseRefHooks/>}/>
              <Route path ="UseContext" element = {<UseContext/>}/>
              <Route path ="UseReducer" element = {<UseReducer/>}/>
              <Route path ="ForwardRef" element = {<ForwardRef/>}/>
              <Route path ="UseCallback" element = {<UseCallback/>}/>
              <Route path ="UseCallbacktwo" element = {<UseCallbacktwo/>}/>
              <Route path ="UseCallbackthree" element = {<UseCallbackthree/>}/>
              <Route path ="UseMemo" element = {<UseMemo/>}/>
              <Route path ="Palindrom" element = {<Palindrom/>}/>
              </Route>
        </Routes>
       <Outlet/>
      </>
    )
  }
}

export default HooksRoute
