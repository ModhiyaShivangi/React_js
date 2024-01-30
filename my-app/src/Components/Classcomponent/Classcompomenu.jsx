import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Classcompomenu extends Component {
  render() {
    return (
      <>
        <ol className="mx-5">
            <li><Link to="Whatiscompo">What is Component</Link></li>
            <li><Link to="Whatisclasscompo">What is Class Component </Link></li>
            <li><Link to="Stateclasscompo">State in Class Component </Link></li>
            <li><Link to="PropsClassComponentInReact">Props in Class Component</Link></li>
            <li><Link to="PropsClassCompo">Props class compo</Link></li>
            <li><Link to="ConditionalRenderingClassComponentInReact">Conditional Rendering Class Component In React</Link></li>
            <li><Link to="Lifecycleclasscompo">Life cycle class compo</Link></li>
        </ol>
        <Outlet/>
      </>
    )
  }
}
export default Classcompomenu
