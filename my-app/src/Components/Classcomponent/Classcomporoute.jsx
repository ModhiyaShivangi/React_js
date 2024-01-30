import React, { Component } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Classcompomenu from "./Classcompomenu"
import Whatiscompo from './Whatiscompo'
import Whatisclasscompo from './Whatisclasscompo'
import Stateclasscompo from './Stateclasscompo'
import PropsClassComponentInReact from './PropsClassComponentInReact'
import PropsClassCompo from './PropsclassCompo'
import ConditionalRenderingClassComponentInReact from './ConditionalRenderingClassComponentInReact'
import Lifecycleclasscompo from './Lifecycleclasscompo'

 class Classcomporoute extends Component {
  render() {
    return (
      <>
       
        <Routes>
            <Route path="/" element = {<Classcompomenu/>}>
              <Route path = "Whatiscompo" element = {<Whatiscompo/>}/>
              <Route path = "Whatisclasscompo" element = {<Whatisclasscompo/>}/>
              <Route path = "Stateclasscompo" element = {<Stateclasscompo/>}/>
              <Route path = "PropsClassComponentInReact" element = {<PropsClassComponentInReact/>}/>
              <Route path = "PropsClassCompo" element = {<PropsClassCompo/>}/>
              <Route path = "ConditionalRenderingClassComponentInReact" element = {<ConditionalRenderingClassComponentInReact/>}/>
              <Route path = "Lifecycleclasscompo" element = {<Lifecycleclasscompo/>}/>

              </Route>
        </Routes>
       <Outlet/>
      </>
    )
  }
}

export default Classcomporoute
