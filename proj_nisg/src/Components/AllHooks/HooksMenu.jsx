import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

class HooksMenu extends Component {
  render() {
    return (
      <>
        <ol className="mx-5">
            <li><Link to="UseRefHook">UseRef</Link></li>
            <li><Link to="UseRefHooks">UseRef</Link></li>
            <li><Link to="UseContext">UseContext</Link></li>
            <li><Link to="UseReducer">UseReducer</Link></li>
            <li><Link to="ForwardRef">Forward Ref</Link></li>
            <li><Link to="UseCallback">UseCallback</Link></li>
            <li><Link to="UseCallbacktwo">Use Callback two</Link></li>
            <li><Link to="UseCallbackthree">Use Callback three</Link></li>
            <li><Link to="UseMemo">UseMemo</Link></li>
        </ol>
        <Outlet/>
      </>
    )
  }
}
export default HooksMenu
