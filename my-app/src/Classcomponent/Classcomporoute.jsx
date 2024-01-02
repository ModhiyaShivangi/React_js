import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

 class Classcomporoute extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <routes>
            <route path="Classcompomenu" element = {<Classcompomenu/>}>


            </route>
        </routes>
        </BrowserRouter>
      </>
    )
  }
}

export default Classcomporoute
